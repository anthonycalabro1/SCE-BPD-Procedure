import { brdOutlineFlat } from '../brdOutline';
import type { BrdSectionContent } from '../../types/brdSectionContent';
import brdTemplateGuidance from '../generated/brdTemplateGuidance.json';
import brdProcedureBySection from '../generated/brdProcedureBySection.json';
import { authoredBrdSectionContent } from './authored';

const PLACEHOLDER =
  'This subsection is not yet populated from the SCE BRD Factory-Line Work Procedure. Edit `src/data/brdSectionContent/authored.ts` to add section-first guidance.';

/** Shown when the factory-line procedure extract has no text for this outline id. */
export const PROCEDURE_NOT_YET_WRITTEN = 'Not yet written';

const templateById = brdTemplateGuidance as Record<string, string>;
const procedureById = brdProcedureBySection as Record<string, string>;

/**
 * Former outline ids whose template/procedure content rolls up into a parent BRD section
 * (tables or body text under a heading, not a separate numbered section in the Master template).
 */
const ROLLUP_TEMPLATE_FROM: Record<string, readonly string[]> = {
  '1.1': ['1.1.1'],
  '1.3.5': ['1.3.5.1', '1.3.5.2'],
  '2.2': ['2.2.1'],
  '2.4': ['2.4.1'],
};

const ROLLUP_PROCEDURE_FROM: Record<string, readonly string[]> = {
  '1.1': ['1.1.1'],
  '1.3.5': ['1.3.5.1', '1.3.5.2'],
  '2.2': ['2.2.1'],
  '2.4': ['2.4.1'],
};

const outlineIdSet = new Set(brdOutlineFlat.map((x) => x.id));

function emptyContent(outlineId: string): BrdSectionContent {
  return {
    outlineId,
    relatedStageIds: [],
    blocks: [{ type: 'narrative', text: PLACEHOLDER }],
  };
}

function pickText(id: string, fromJson: Record<string, string>): string | undefined {
  const raw = fromJson[id];
  const t = typeof raw === 'string' ? raw.trim() : '';
  return t.length > 0 ? t : undefined;
}

function mergedFromRollup(
  id: string,
  fromJson: Record<string, string>,
  rollup: Record<string, readonly string[]>
): string | undefined {
  const own = pickText(id, fromJson);
  const extraIds = rollup[id];
  if (!extraIds?.length) return own;
  const parts = [own, ...extraIds.map((e) => pickText(e, fromJson)).filter(Boolean)] as string[];
  const joined = parts.filter(Boolean).join('\n\n---\n\n');
  return joined.length > 0 ? joined : undefined;
}

/**
 * Word template placeholders (angle brackets) and "Respond here…" filler are useful in the .docx
 * but not in the dashboard. Strip them for the "What this section is (BRD template)" panel only.
 */
export function sanitizeTemplateGuidanceForDisplay(raw: string): string {
  let s = raw.replace(/\r\n/g, '\n').replace(/\r/g, '\n');
  s = s.replace(/\bRespond\s+here[.\u2026…]*/gi, '');
  s = s.replace(/[<>]/g, '');
  s = s.replace(/\n{3,}/g, '\n\n');
  return s.trim();
}

/** All outline ids from the Master template (for coverage checks). */
export function allBrdOutlineIds(): string[] {
  return brdOutlineFlat.map((x) => x.id);
}

/** Section-first content: Master template guidance + procedure docx extract + authored blocks (prompts, stages). */
export function getBrdSectionContent(outlineId: string): BrdSectionContent {
  if (!outlineIdSet.has(outlineId)) {
    return emptyContent(outlineId);
  }

  const authored = authoredBrdSectionContent[outlineId];

  let templateGuidance =
    mergedFromRollup(outlineId, templateById, ROLLUP_TEMPLATE_FROM) ?? authored?.templateGuidance;

  if (templateGuidance != null && templateGuidance.trim().length > 0) {
    const cleaned = sanitizeTemplateGuidanceForDisplay(templateGuidance);
    templateGuidance = cleaned.length > 0 ? cleaned : undefined;
  }

  let procedureMarkdown =
    mergedFromRollup(outlineId, procedureById, ROLLUP_PROCEDURE_FROM) ?? authored?.procedureMarkdown;

  if (!procedureMarkdown?.trim()) {
    procedureMarkdown = PROCEDURE_NOT_YET_WRITTEN;
  }

  const blocks = authored?.blocks ?? [];
  const relatedStageIds = authored?.relatedStageIds ?? [];
  const summary = authored?.summary;

  const hasBody =
    Boolean(templateGuidance?.trim()) ||
    Boolean(procedureMarkdown?.trim()) ||
    blocks.length > 0;

  if (!hasBody) {
    return emptyContent(outlineId);
  }

  return {
    outlineId,
    summary,
    relatedStageIds,
    templateGuidance,
    procedureMarkdown,
    blocks,
  };
}

export { PLACEHOLDER };
