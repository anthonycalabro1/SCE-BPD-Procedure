import type { BrdSectionContent } from '../../types/brdSectionContent';
import { AI_PROMPTS } from '../aiPrompts';

function promptBlock(
  key: keyof typeof AI_PROMPTS,
  usedInActivity?: string
): BrdSectionContent['blocks'][number] {
  const p = AI_PROMPTS[key];
  return {
    type: 'aiPrompt',
    id: p.id,
    title: p.title,
    prompt: p.prompt,
    usedInActivity,
  };
}

/**
 * Authored overlays: related stages, Appendix A prompt blocks, and short dashboard notes.
 * Template guidance and factory-line procedure text come from generated JSON (`getBrdSectionContent.ts`).
 */
export const authoredBrdSectionContent: Record<string, BrdSectionContent> = {
  'doc-meta-1': {
    outlineId: 'doc-meta-1',
    summary: 'Template front matter for document control.',
    relatedStageIds: [13],
    blocks: [
      {
        type: 'narrative',
        text: 'Use the Master BRD Word template fields for document metadata (project name, version, authors, dates). The dashboard does not replace controlled Word properties.',
      },
    ],
  },
  'doc-meta-2': {
    outlineId: 'doc-meta-2',
    relatedStageIds: [13],
    blocks: [
      {
        type: 'narrative',
        text: 'Maintain revision history in the Word template as each BRD revision is submitted for review or approval.',
      },
    ],
  },
  'doc-meta-3': {
    outlineId: 'doc-meta-3',
    relatedStageIds: [],
    blocks: [
      {
        type: 'narrative',
        text: 'Template overview and instructions live in the Master BRD file. Use this dashboard for factory-line execution and BRD section–aligned procedure content.',
      },
    ],
  },

  '1.1': {
    outlineId: '1.1',
    summary: 'Program context and how this L3 process fits AMI 2.0.',
    relatedStageIds: [2],
    blocks: [
      {
        type: 'crossReference',
        text: 'Primary drafting occurs in Stage 2 (Repository Mining & Solution Requirements Filtering).',
        relatedStageIds: [2],
      },
    ],
  },

  '1.2.1': {
    outlineId: '1.2.1',
    summary: 'Business capabilities this L3 process must deliver.',
    relatedStageIds: [2, 3, 11],
    blocks: [
      promptBlock('A.2.2', 'Extract capabilities from repository'),
      {
        type: 'guidance',
        text: 'Capabilities are business outcomes ("Ability to…"), not system features. Use SCE terminology from the As-Is narrative when available.',
      },
    ],
  },

  '1.2.2': {
    outlineId: '1.2.2',
    summary: 'Measurable success criteria and KPIs.',
    relatedStageIds: [2, 3, 11],
    blocks: [],
  },

  '1.3.1': {
    outlineId: '1.3.1',
    summary: 'Sponsors, stakeholders, RACI-style ownership.',
    relatedStageIds: [2, 3],
    blocks: [],
  },

  '1.3.2': {
    outlineId: '1.3.2',
    summary: 'Current-state (As-Is) process for this L3.',
    relatedStageIds: [1],
    blocks: [
      {
        type: 'crossReference',
        text: 'Owned by Stage 1 — interviews and SME validation come before AI synthesis.',
        relatedStageIds: [1],
      },
      promptBlock('A.1.3', 'AI-assisted synthesis'),
    ],
  },

  '1.3.3': {
    outlineId: '1.3.3',
    summary: 'High-level future-state view (before detailed To-Be in Section 2).',
    relatedStageIds: [4, 6, 7],
    blocks: [],
  },

  '1.3.4': {
    outlineId: '1.3.4',
    summary: 'In/out of scope boundaries.',
    relatedStageIds: [2, 3],
    blocks: [],
  },

  '1.3.5': {
    outlineId: '1.3.5',
    summary: 'Users and devices involved in the process (including user types and device types in template tables).',
    relatedStageIds: [2, 3, 8],
    blocks: [],
  },

  '2.1': {
    outlineId: '2.1',
    summary: 'Validated To-Be process narrative and diagram.',
    relatedStageIds: [4, 5, 6, 7],
    blocks: [
      {
        type: 'crossReference',
        text: 'Process Validation Workshop (Stage 6) locks direction; Stage 7 produces the VALIDATED To-Be used for requirements.',
        relatedStageIds: [6, 7],
      },
      promptBlock('A.4.1', 'To-Be flow design'),
      promptBlock('A.7.1', 'Update To-Be narrative after workshop'),
    ],
  },

  '2.2': {
    outlineId: '2.2',
    summary: 'User journeys (including journey map table content in the template).',
    relatedStageIds: [8],
    blocks: [promptBlock('A.8.1', 'User journey mapping')],
  },

  '2.3': {
    outlineId: '2.3',
    summary: 'Detailed characteristics by user type for the validated process.',
    relatedStageIds: [8],
    blocks: [promptBlock('A.8.5', 'User type × task matrix (Section 2.3)')],
  },

  '2.4': {
    outlineId: '2.4',
    summary: 'Business-side constraints (regulatory, operational, integration, capacity).',
    relatedStageIds: [8],
    blocks: [promptBlock('A.8.6', 'Business constraints table (Section 2.4)')],
  },

  '2.5': {
    outlineId: '2.5',
    summary: 'Physical and system environment for users and integrations.',
    relatedStageIds: [8],
    blocks: [promptBlock('A.8.7', 'User environment narrative (Section 2.5, optional AI assist)')],
  },

  '2.6': {
    outlineId: '2.6',
    summary: 'Assumptions and external dependencies for the To-Be design.',
    relatedStageIds: [8],
    blocks: [promptBlock('A.8.8', 'Assumptions and dependencies (Section 2.6)')],
  },

  '4.1': {
    outlineId: '4.1',
    summary: 'Functional business requirements and traceability to solution requirements.',
    relatedStageIds: [8, 9, 10, 11],
    blocks: [
      promptBlock('A.8.2A', 'Business requirements generation'),
      promptBlock('A.8.2B', 'Requirements traceability mapping'),
    ],
  },

  '4.2': {
    outlineId: '4.2',
    summary: 'Performance-oriented business requirements.',
    relatedStageIds: [8],
    blocks: [promptBlock('A.8.4', 'Performance requirements')],
  },

  '4.3': {
    outlineId: '4.3',
    summary: 'User acceptance expectations (experience-focused).',
    relatedStageIds: [8],
    blocks: [promptBlock('A.8.3', 'User acceptance expectations')],
  },

  '5.1': {
    outlineId: '5.1',
    summary: 'Glossary for this BRD.',
    relatedStageIds: [13],
    blocks: [],
  },

  '5.2.1': {
    outlineId: '5.2.1',
    relatedStageIds: [8, 11],
    blocks: [],
  },

  '5.2.2': {
    outlineId: '5.2.2',
    relatedStageIds: [8, 11],
    blocks: [],
  },

  '6': {
    outlineId: '6',
    summary: 'Approval signatures and formal sign-off.',
    relatedStageIds: [13],
    blocks: [],
  },
};
