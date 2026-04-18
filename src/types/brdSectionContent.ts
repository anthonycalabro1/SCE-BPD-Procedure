/**
 * Section-first content for the BRD view.
 * Prefer `templateGuidance` + `procedureMarkdown` from generated JSON;
 * `blocks` holds AI prompts, cross-references, and optional extras.
 */

export type BrdContentBlock =
  | { type: 'heading'; text: string }
  | { type: 'narrative'; text: string }
  | {
      type: 'activity';
      title: string;
      hours?: number;
      role?: string;
      bullets?: string[];
    }
  | { type: 'checklist'; items: string[] }
  | { type: 'outputs'; items: string[] }
  | { type: 'guidance'; text: string }
  | {
      type: 'aiPrompt';
      id: string;
      title: string;
      prompt: string;
      usedInActivity?: string;
    }
  | { type: 'crossReference'; text: string; relatedStageIds?: number[] };

export interface BrdSectionContent {
  /** Must match `BrdOutlineFlatItem.id` */
  outlineId: string;
  /** Short subtitle under the section title (optional) */
  summary?: string;
  /**
   * Master BRD Word template instructional text for this section
   * (from generated `brdTemplateGuidance.json`).
   */
  templateGuidance?: string;
  /**
   * Factory-line procedure excerpt for this section (markdown;
   * from generated `brdProcedureBySection.json`).
   */
  procedureMarkdown?: string;
  /** Factory-line stages that primarily touch this BRD section */
  relatedStageIds?: number[];
  /** AI prompts and optional cross-refs — rendered after template + procedure */
  blocks: BrdContentBlock[];
}
