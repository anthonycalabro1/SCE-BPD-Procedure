/**
 * BRD outline aligned to the Master BRD Word template (Heading1–3).
 * Subsections that exist only as tables or body content under a parent (not separate headings)
 * are not listed separately — e.g. General Project Information under 1.1, user/device tables under 1.3.5.
 *
 * Section numbering: Specific Requirements are 4.1–4.3; Reference is 5.x; Approvals is 6.
 * Regenerate template JSON via `python scripts/extract_master_brd_guidance.py` when the template changes.
 */

export interface BrdOutlineFlatItem {
  id: string;
  level: number;
  title: string;
}

export interface BrdOutlineNode {
  id: string;
  title: string;
  level: number;
  children: BrdOutlineNode[];
}

/** Ordered flat list matching the Master template. */
export const brdOutlineFlat: BrdOutlineFlatItem[] = [
  { id: 'doc-title', level: 1, title: 'BRD – Business Requirements Document for <Project>' },
  { id: 'doc-meta-1', level: 1, title: 'Document Information' },
  { id: 'doc-meta-2', level: 1, title: 'Document Version History' },
  { id: 'doc-meta-3', level: 1, title: 'Template Overview' },
  { id: '1', level: 1, title: 'Project Overview & High-Level Requirements' },
  { id: '1.1', level: 2, title: 'Project Background' },
  { id: '1.2', level: 2, title: 'Capabilities & Success Criteria' },
  { id: '1.2.1', level: 3, title: 'Capabilities' },
  { id: '1.2.2', level: 3, title: 'Success Criteria' },
  { id: '1.3', level: 2, title: 'Overview' },
  { id: '1.3.1', level: 3, title: 'Sponsorship and Stakeholders' },
  { id: '1.3.2', level: 3, title: '"As Is" Business Process Model' },
  { id: '1.3.3', level: 3, title: 'High-Level "To Be" Business Process Model' },
  { id: '1.3.4', level: 3, title: 'Scope' },
  { id: '1.3.5', level: 3, title: 'Users and Devices' },
  { id: '2', level: 1, title: 'Detailed Project Description' },
  { id: '2.1', level: 2, title: 'To-Be Business Process Model' },
  { id: '2.2', level: 2, title: 'User Journeys' },
  { id: '2.3', level: 2, title: 'Detailed User Type Characteristics' },
  { id: '2.4', level: 2, title: 'Business Constraints' },
  { id: '2.5', level: 2, title: 'Business User Environment' },
  { id: '2.6', level: 2, title: 'Business Assumptions, Decisions and Dependencies' },
  { id: '4', level: 1, title: 'Specific Requirements' },
  { id: '4.1', level: 2, title: 'Functional Requirements' },
  { id: '4.2', level: 2, title: 'Performance Requirements' },
  { id: '4.3', level: 2, title: 'User Acceptance Expectations' },
  { id: '5', level: 1, title: 'Reference' },
  { id: '5.1', level: 2, title: 'Definitions, Abbreviations & Acronyms' },
  { id: '5.2', level: 2, title: 'Business Policies & Rules' },
  { id: '5.2.1', level: 3, title: 'Business Policies' },
  { id: '5.2.2', level: 3, title: 'Business Rules' },
  { id: '5.3', level: 2, title: 'Other References' },
  { id: '6', level: 1, title: 'Approvals' },
];

const ROOT_LEVEL = 0;

/** Build nested tree for sidebar navigation (virtual root at level 0). */
export function buildBrdOutlineTree(): BrdOutlineNode {
  const root: BrdOutlineNode = {
    id: 'root',
    title: 'BRD (Master Template)',
    level: ROOT_LEVEL,
    children: [],
  };
  const stack: BrdOutlineNode[] = [root];

  for (const item of brdOutlineFlat) {
    const node: BrdOutlineNode = {
      id: item.id,
      title: item.title,
      level: item.level,
      children: [],
    };
    while (stack.length > 1 && stack[stack.length - 1].level >= item.level) {
      stack.pop();
    }
    stack[stack.length - 1].children.push(node);
    stack.push(node);
  }

  return root;
}

/** Map section id → flat item (for search / labels). */
export function brdOutlineIdToItem(): Map<string, BrdOutlineFlatItem> {
  return new Map(brdOutlineFlat.map((item) => [item.id, item]));
}
