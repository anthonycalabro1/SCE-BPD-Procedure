import { PROCEDURE_NOT_YET_WRITTEN } from '../data/brdSectionContent/getBrdSectionContent';

/**
 * Display-only enrichment for factory-line procedure excerpts: adds markdown structure
 * (headings, list markers) without editing the source JSON — wording stays the same.
 */
export function formatProcedureMarkdownForDisplay(raw: string): string {
  if (raw.trim() === PROCEDURE_NOT_YET_WRITTEN) return raw;

  const lines = raw.replace(/\r\n/g, '\n').replace(/\r/g, '\n').split('\n');
  const out: string[] = [];

  for (const line of lines) {
    const trimmed = line.trim();

    if (trimmed.startsWith('|')) {
      out.push(line);
      continue;
    }
    if (/^\|[\s\-:|]+\|$/.test(trimmed)) {
      out.push(line);
      continue;
    }

    if (/^STAGE\s+\d+:/i.test(trimmed)) {
      out.push('## ' + trimmed);
      continue;
    }
    if (/^Activity\s+\d+(\.\d+)?:/i.test(trimmed)) {
      out.push('### ' + trimmed);
      continue;
    }
    if (/^Segment\s+\d+:/i.test(trimmed)) {
      out.push('### ' + trimmed);
      continue;
    }
    if (/^Step\s+\d+(\.\d+)?:/i.test(trimmed)) {
      out.push('### ' + trimmed);
      continue;
    }

    if (/^\s*[•‧]\s+/.test(line)) {
      out.push(line.replace(/^\s*[•‧]\s+/, '- '));
      continue;
    }

    if (/^(✅|⚠️|🔵|🔴)\s/.test(trimmed)) {
      out.push('- ' + trimmed);
      continue;
    }

    out.push(line);
  }

  return out.join('\n');
}
