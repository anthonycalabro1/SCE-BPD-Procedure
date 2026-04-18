import ReactMarkdown from 'react-markdown';
import remarkBreaks from 'remark-breaks';
import remarkGfm from 'remark-gfm';
import { Link2, ClipboardList, ListChecks, Package, Sparkles, Target, Users } from 'lucide-react';
import type { BrdContentBlock, BrdSectionContent } from '../../types/brdSectionContent';
import { PROCEDURE_NOT_YET_WRITTEN } from '../../data/brdSectionContent/getBrdSectionContent';
import { formatProcedureMarkdownForDisplay } from '../../utils/procedureMarkdownDisplay';
import CopyButton from '../CopyButton';

interface BrdSectionDetailPanelProps {
  title: string;
  sectionId: string;
  content: BrdSectionContent;
  onOpenStage?: (stageId: number) => void;
}

const MD_WRAP =
  'text-sm text-gray-800 leading-relaxed [&_p]:mb-2 [&_ul]:my-2 [&_ol]:my-2 [&_ul]:list-disc [&_ul]:pl-5 [&_ol]:list-decimal [&_ol]:pl-5 [&_li]:my-0.5 [&_table]:w-full [&_table]:text-xs [&_th]:border [&_td]:border [&_th]:border-gray-200 [&_td]:border-gray-200 [&_th]:bg-gray-50 [&_th]:px-2 [&_td]:px-2 [&_th]:py-1.5 [&_td]:py-1.5 [&_table]:border-collapse [&_strong]:font-semibold';

/** Extra typography + spacing for factory-line procedure (display-only; source text unchanged). */
const MD_PROCEDURE_WRAP = [
  MD_WRAP,
  'text-[15px] leading-7',
  '[&_h2]:text-base [&_h2]:font-bold [&_h2]:text-teal-900 [&_h2]:scroll-mt-4',
  '[&_h2]:mt-5 [&_h2]:mb-2 [&_h2]:pb-1.5 [&_h2]:border-b [&_h2]:border-teal-200/90 [&_h2]:first:mt-0',
  '[&_h3]:text-sm [&_h3]:font-semibold [&_h3]:text-slate-900 [&_h3]:mt-4 [&_h3]:mb-1.5',
  '[&_ul]:my-2 [&_ul]:space-y-1.5 [&_ul]:pl-6',
  '[&_ol]:my-2 [&_ol]:space-y-1.5 [&_ol]:pl-6',
  '[&_li]:marker:text-teal-700',
  '[&_p]:mb-2.5 [&_p]:text-gray-800',
  '[&_table]:shadow-sm [&_table]:rounded-md [&_table]:overflow-hidden',
].join(' ');

function MarkdownRegion({
  title: regionTitle,
  children,
  variant = 'template',
}: {
  title: string;
  children: string;
  variant?: 'template' | 'procedure';
}) {
  const bodyMd =
    variant === 'procedure' ? formatProcedureMarkdownForDisplay(children) : children;
  const long = bodyMd.length > 6000;
  const isProcedurePlaceholder = bodyMd.trim() === PROCEDURE_NOT_YET_WRITTEN;
  const wrapClass =
    variant === 'procedure'
      ? isProcedurePlaceholder
        ? `${MD_PROCEDURE_WRAP} italic text-gray-500`
        : MD_PROCEDURE_WRAP
      : isProcedurePlaceholder
        ? `${MD_WRAP} italic text-gray-500`
        : MD_WRAP;

  const markdown = (
    <ReactMarkdown
      remarkPlugins={variant === 'procedure' ? [remarkGfm, remarkBreaks] : [remarkGfm]}
    >
      {bodyMd}
    </ReactMarkdown>
  );

  const body =
    variant === 'procedure' && !isProcedurePlaceholder ? (
      <div className="rounded-r-lg border-l-4 border-teal-400/85 bg-gradient-to-r from-teal-50/90 to-white pl-4 pr-2 py-2.5 shadow-sm">
        <div className={wrapClass}>{markdown}</div>
      </div>
    ) : (
      <div className={wrapClass}>{markdown}</div>
    );

  return (
    <section className="border border-gray-200 rounded-lg bg-white overflow-hidden">
      <div className="px-4 py-2 bg-slate-50 border-b border-gray-200">
        <h3 className="text-sm font-semibold text-gray-900">{regionTitle}</h3>
      </div>
      <div className="px-4 py-3">
        {long ? (
          <details className="group" open>
            <summary className="cursor-pointer text-sm text-blue-700 hover:underline select-none">
              Collapse / expand full text ({Math.round(bodyMd.length / 1000)}k characters)
            </summary>
            <div className="mt-3 pt-1 border-t border-gray-100">{body}</div>
          </details>
        ) : (
          body
        )}
      </div>
    </section>
  );
}

function BlockView({
  block,
  onOpenStage,
}: {
  block: BrdContentBlock;
  onOpenStage?: (stageId: number) => void;
}) {
  switch (block.type) {
    case 'heading':
      return (
        <h4 className="font-semibold text-gray-900 mt-4 mb-2 text-base border-b border-gray-100 pb-1">
          {block.text}
        </h4>
      );
    case 'narrative':
      return <p className="text-gray-700 whitespace-pre-wrap leading-relaxed">{block.text}</p>;
    case 'activity':
      return (
        <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 my-3">
          <div className="flex items-start gap-2 mb-2">
            <ClipboardList className="w-5 h-5 text-slate-600 shrink-0 mt-0.5" />
            <div>
              <h4 className="font-semibold text-slate-900">{block.title}</h4>
              <div className="text-xs text-slate-600 mt-1">
                {block.hours != null && <span>{block.hours}h</span>}
                {block.hours != null && block.role && <span> · </span>}
                {block.role && <span>{block.role}</span>}
              </div>
            </div>
          </div>
          {block.bullets && block.bullets.length > 0 && (
            <ul className="list-disc list-inside text-sm text-slate-800 space-y-1 ml-1">
              {block.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          )}
        </div>
      );
    case 'checklist':
      return (
        <div className="my-3">
          <div className="flex items-center gap-2 mb-2 text-gray-900 font-medium">
            <ListChecks className="w-4 h-4" />
            Checklist
          </div>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
            {block.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      );
    case 'outputs':
      return (
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 my-3">
          <div className="flex items-center gap-2 text-green-900 font-medium mb-2">
            <Package className="w-4 h-4" />
            Outputs
          </div>
          <ul className="list-disc list-inside text-sm text-green-900 space-y-1">
            {block.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      );
    case 'guidance':
      return (
        <div className="bg-amber-50 border-l-4 border-amber-400 p-3 my-3 rounded-r text-sm text-amber-950">
          <span className="font-medium">Guidance: </span>
          {block.text}
        </div>
      );
    case 'aiPrompt':
      return (
        <div className="my-4 border-2 border-violet-300 rounded-lg overflow-hidden bg-violet-50/80">
          <div className="flex items-center justify-between gap-2 px-3 py-2 bg-violet-100/90 border-b border-violet-200">
            <div className="flex items-center gap-2 min-w-0">
              <Sparkles className="w-4 h-4 text-violet-700 shrink-0" />
              <div className="min-w-0">
                <div className="text-xs font-mono text-violet-800">{block.id}</div>
                <div className="font-semibold text-violet-950 truncate">{block.title}</div>
                {block.usedInActivity && (
                  <div className="text-xs text-violet-700 mt-0.5">After: {block.usedInActivity}</div>
                )}
              </div>
            </div>
            <CopyButton text={block.prompt} label="Copy prompt" />
          </div>
          <pre className="text-xs text-gray-800 whitespace-pre-wrap p-3 max-h-[min(480px,50vh)] overflow-y-auto font-sans leading-relaxed">
            {block.prompt}
          </pre>
        </div>
      );
    case 'crossReference':
      return (
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 my-3">
          <div className="flex items-center gap-2 text-blue-900 font-medium mb-2">
            <Link2 className="w-4 h-4" />
            Factory line
          </div>
          <p className="text-sm text-blue-950 mb-2">{block.text}</p>
          {block.relatedStageIds && block.relatedStageIds.length > 0 && onOpenStage && (
            <div className="flex flex-wrap gap-2">
              {block.relatedStageIds.map((sid) => (
                <button
                  key={sid}
                  type="button"
                  onClick={() => onOpenStage(sid)}
                  className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-white border border-blue-300 text-sm text-blue-800 hover:bg-blue-100"
                >
                  <Users className="w-3.5 h-3.5" />
                  Stage {sid}
                </button>
              ))}
            </div>
          )}
        </div>
      );
    default:
      return null;
  }
}

export default function BrdSectionDetailPanel({
  title,
  sectionId,
  content,
  onOpenStage,
}: BrdSectionDetailPanelProps) {
  const hasAiPrompt = content.blocks.some((b) => b.type === 'aiPrompt');
  const blocksHeading = hasAiPrompt ? 'AI prompts (Appendix A) and notes' : 'Notes';

  return (
    <div className="flex flex-col h-full min-h-0 bg-white">
      <div className="shrink-0 border-b border-gray-200 px-6 py-4 bg-gray-50">
        <div className="text-xs font-mono text-gray-500 mb-1">{sectionId}</div>
        <h2 className="text-xl font-bold text-gray-900 flex items-start gap-2">
          <Target className="w-6 h-6 text-blue-600 shrink-0 mt-0.5" />
          {title}
        </h2>
        {content.summary && <p className="text-sm text-gray-600 mt-2">{content.summary}</p>}
        {content.relatedStageIds && content.relatedStageIds.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2 items-center text-sm text-gray-700">
            <span className="font-medium">Related stages:</span>
            {content.relatedStageIds.map((sid) => (
              <button
                key={sid}
                type="button"
                onClick={() => onOpenStage?.(sid)}
                disabled={!onOpenStage}
                className="px-2 py-0.5 rounded bg-white border border-gray-300 hover:bg-gray-100 disabled:opacity-50"
              >
                {sid}
              </button>
            ))}
          </div>
        )}
      </div>
      <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
        {content.templateGuidance && content.templateGuidance.trim().length > 0 && (
          <MarkdownRegion title="What this section is (BRD template)">{content.templateGuidance}</MarkdownRegion>
        )}
        {content.procedureMarkdown && content.procedureMarkdown.trim().length > 0 && (
          <MarkdownRegion variant="procedure" title="How to populate it (factory-line procedure)">
            {content.procedureMarkdown}
          </MarkdownRegion>
        )}
        {content.blocks.length > 0 && (
          <section className="space-y-2">
            <div className="text-sm font-semibold text-gray-900 border-b border-gray-200 pb-1">
              {blocksHeading}
            </div>
            {content.blocks.map((block, i) => (
              <BlockView key={i} block={block} onOpenStage={onOpenStage} />
            ))}
          </section>
        )}
      </div>
    </div>
  );
}
