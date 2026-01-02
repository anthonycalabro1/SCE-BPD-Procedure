import { Stage } from '../types/stage';

// Phase metadata
export const PHASE_GOALS = {
  1: "Lock down the validated To-Be process flow",
  2: "Build complete BRD with requirements, traceability, and gap analysis",
  3: "Secure client approval and deliver final BRD package"
};

export const PHASE_MILESTONES = {
  1: "VALIDATED TO-BE PROCESS",
  2: "COMPLETE BRD DRAFT READY FOR CLIENT REVIEW",
  3: "APPROVED BRD DELIVERED TO SI"
};

// AI Prompts extracted from Appendix A
const AI_PROMPTS: Record<string, { id: string; title: string; prompt: string }> = {
  'A.1.3': {
    id: 'A.1.3',
    title: 'As-Is Process Narrative Synthesis',
    prompt: `I conducted stakeholder interviews about SCE's current [L3 Process Name]. 

INTERVIEW NOTES (PRIMARY SOURCE):
[Paste raw interview notes or Copilot transcription]

SCE AMI 1.0 DOCUMENTATION (SUPPORTING):
[Attach or paste relevant sections]

SIMILAR PROCESS FROM ANOTHER UTILITY (STRUCTURE REFERENCE ONLY):
[Attach Visio/PPT for format guidance - NOT for content]

Please synthesize the interview notes into a coherent As-Is process narrative.
Base your narrative PRIMARILY on what SCE told us in the interviews - the other 
utility's process is just to understand how to structure the output.

Include:
1. Trigger/initiating event (exactly as SCE described it)
2. Key activities (5-10 steps in the sequence SCE follows)
3. Decision points (where SCE makes choices/branches)
4. System interactions (use SCE's system names in [brackets])
5. Handoffs to other teams (as SCE described them)
6. Final output/deliverable
7. Pain points and inefficiencies (flagged clearly with 'PAIN POINT:' prefix)
8. Current workarounds or manual processes

Format as numbered steps. Use professional utility operations language but stay 
true to how SCE actually does this today - don't make it sound better than it is.`
  },
  'A.2.1': {
    id: 'A.2.1',
    title: 'Solution Requirements Filtering',
    prompt: `I need to identify which of SCE's solution requirements are relevant to [L3 Process Name].

L3 PROCESS DETAILS:
- Process Name: [e.g., Off-Cycle Billing (Register Billed – Electric)]
- Process Objective: [from inventory]
- Systems Involved: [from As-Is flow - e.g., CSS, MDMS, HES, Salesforce]
- Key Process Steps: [summarize 5-8 main steps from As-Is flow]

SCE SOLUTION REQUIREMENTS TO REVIEW:
[Attach relevant Excel sections - e.g., MDMS meter reading requirements, HES on-demand reads]

TASK:
Review each solution requirement and classify:

1. DIRECTLY RELEVANT: This requirement enables a specific step in this L3 process
   - Which process step does it support?
   - What business outcome does it enable?

2. INDIRECTLY RELEVANT: This requirement supports the process but isn't core to it
   - How does it provide supporting capability?

3. NOT RELEVANT: This requirement belongs to a different L3 process
   - Why isn't it applicable here?

OUTPUT FORMAT:
Excel table:
| Solution Req ID | Requirement Text | Relevance | Supports Process Step | Business Outcome | Notes |

Focus on precision - when uncertain, mark INDIRECTLY and explain.`
  },
  'A.2.2': {
    id: 'A.2.2',
    title: 'Capabilities Extraction from Repository',
    prompt: `I need to define business capabilities for [L3 Process Name].

CONTEXT:
Similar L3 processes from repository: [attach 2-3 similar BRDs for reference]
As-Is flow: [describe or attach]
Filtered solution requirements: [list 20-50 requirements]

TASK:
Generate 5-8 business capabilities that this process must deliver.

CAPABILITY DEFINITION:
A capability is a high-level business outcome or function, NOT a system feature.
Format: "Ability to [verb] [object] [outcome/benefit]"

REQUIREMENTS:
- Each capability must be achievable given the filtered solution requirements
- Capabilities should cover the full process lifecycle (trigger → completion)
- Focus on business value, not technical implementation
- Use SCE-specific terminology from As-Is flow
- Ensure capabilities address As-Is pain points

Generate 5-8 capabilities now.`
  },
  'A.4.1': {
    id: 'A.4.1',
    title: 'To-Be Process Flow Design',
    prompt: `Design a To-Be process flow for [L3 Process Name] that leverages AMI 2.0 capabilities.

CURRENT STATE (PAIN POINTS):
[List 5-8 pain points identified by SCE SMEs]

AMI 2.0 SYSTEM CAPABILITIES (from SCE's solution requirements):
[List relevant solution requirement IDs and descriptions]

PROGRAM OBJECTIVES:
- Reduce manual processing by 60%
- Improve data accuracy to >99.5%
- Enable real-time/near-real-time operations
- Scalable for 5M+ meter estate

TASK:
Redesign this process as a To-Be flow that:
1. Eliminates manual steps where automation is feasible
2. Leverages AMI 2.0 real-time data
3. Incorporates automated validation rules
4. Reduces cycle time and improves accuracy
5. Addresses ALL identified pain points
6. ONLY uses capabilities that exist in SCE's solution requirements

OUTPUT:
1. Updated process narrative (numbered steps)
2. Summary of key changes vs. As-Is
3. List of new system touchpoints with relevant solution requirement IDs
4. Identification of manual steps that remain`
  },
  'A.7.1': {
    id: 'A.7.1',
    title: 'Update To-Be Narrative After Workshop',
    prompt: `I have a To-Be process narrative that needs to be updated based on workshop feedback.

CURRENT TO-BE NARRATIVE:
[Paste current narrative]

WORKSHOP CHANGES REQUESTED:
[Paste change log from Stage 6]

TASK:
Update the To-Be process narrative to incorporate all workshop changes.

REQUIREMENTS:
- Maintain numbered step format
- Keep professional utility operations language
- Show which steps are automated vs. manual
- Include all decision points (if/then logic)
- Document exception handling clearly
- Reference systems in [brackets]
- Ensure changes are integrated smoothly

OUTPUT:
Updated To-Be process narrative with all workshop changes incorporated.`
  },
  'A.8.1': {
    id: 'A.8.1',
    title: 'User Journey Mapping',
    prompt: `Create user journey map for the following SCE user type executing [L3 Process - VALIDATED To-Be].

USER TYPE (from Section 1.3.5):
[Paste actual SCE job title and characteristics]

VALIDATED TO-BE PROCESS (from Stage 7):
[Attach or describe the validated To-Be flow]

WORKSHOP INSIGHTS (from Stage 6):
[Note any user concerns or experience issues raised in workshop]

Create journey map with this table format:
| Scenario | User Type | Thinking/Feeling | User Action | What to Change | Why |

Consider these scenarios:
- Happy path (everything works as designed)
- Exception path (system timeout or communication failure)
- Error path (data validation failure, missing information)

Generate 3-5 journey scenarios covering different user types involved in this VALIDATED process.`
  },
  'A.8.2A': {
    id: 'A.8.2A',
    title: 'Business Requirements Generation (Exploratory)',
    prompt: `Generate business requirements for [L3 Process Name] based on the VALIDATED To-Be process flow.

VALIDATED TO-BE PROCESS (from Stage 7):
[Paste validated To-Be flow - include all steps]

CAPABILITIES (from Section 1.2.1):
[Paste 5-8 capabilities]

SUCCESS CRITERIA (from Section 1.2.2):
[Paste success criteria with KPIs]

TASK:
Generate 15-25 functional business requirements that describe WHAT the process must accomplish.

IMPORTANT: This is an EXPLORATORY process. Generate requirements based on business needs, 
process steps, and user expectations. DO NOT reference solution requirements yet.

REQUIREMENT CATEGORIES (cover all):
1. SYSTEM CAPABILITIES
2. PROCESS PROCEDURES
3. DATA QUALITY & VALIDATION
4. SYSTEM INTEGRATION
5. EXCEPTION HANDLING
6. USER INTERFACE & EXPERIENCE
7. PERFORMANCE & AVAILABILITY
8. MANUAL FALLBACK & OVERRIDES

FORMAT:
| BR-XXX | Description | Fit Criterion | Rationale | Release |

Generate 15-25 functional business requirements now.`
  },
  'A.8.2B': {
    id: 'A.8.2B',
    title: 'Requirements Traceability Mapping',
    prompt: `I have generated business requirements based on business needs. Now I need to trace 
them to SCE's solution requirements to understand coverage.

INPUTS:
1. Business Requirements (from Step 2.1A): [paste 15-25 business requirements]
2. Filtered Solution Requirements (from Stage 2): [paste 20-50 solution requirements]

TASK:
For each business requirement, identify which solution requirements support it.

TRACEABILITY CLASSIFICATION:
✅ FULLY COVERED: Business requirement traces to 1+ solution requirements that fully enable it
⚠️ PARTIALLY COVERED: Some solution requirements support it, but gaps exist
🔴 GAP - PROCESS REQUIREMENT: Manual workflow or organizational requirement
🔴 GAP - ORGANIZATIONAL REQUIREMENT: Staffing, training, governance
🔴 GAP - MISSING SOLUTION REQUIREMENT: Business need exists but no solution requirement

OUTPUT FORMAT:
Add a 'Traces To (Solution Req IDs)' column to the business requirements table.

Now trace all 15-25 business requirements to solution requirements using this methodology.`
  },
  'A.8.3': {
    id: 'A.8.3',
    title: 'User Acceptance Expectations',
    prompt: `Generate User Acceptance Expectations for [L3 Process Name].

INPUTS:
1. Business Requirements (from Activity 2): [paste 15-25 business requirements]
2. User Journeys (from Activity 1): [paste user journey table]
3. User Types (from Section 1.3.5): [paste SCE user roles and characteristics]

DEFINITION:
User Acceptance Expectations (UAEs) describe what users expect from their experience 
with this process. They capture the user's mental model of how things should work.

FORMAT:
| UAE-XXX | Description | Level of Need (High/Med/Low) |

DESCRIPTION RULES:
- Write from USER'S perspective using "Users expect that..." format
- Focus on EXPERIENCE, not technical implementation
- Describe what users naturally anticipate or desire
- Keep each UAE to 1-2 sentences

CATEGORIES TO COVER (generate 2-3 UAEs per category):
1. RELIABILITY & AVAILABILITY
2. USABILITY & EASE OF USE
3. TRANSPARENCY & VISIBILITY
4. AUTOMATION & EFFICIENCY
5. EXCEPTION HANDLING & SUPPORT
6. PERFORMANCE & RESPONSIVENESS
7. DATA ACCURACY & TRUST

Generate 8-12 User Acceptance Expectations covering all categories above.`
  },
  'A.8.4': {
    id: 'A.8.4',
    title: 'Performance Requirements',
    prompt: `Generate PERFORMANCE business requirements for [L3 Process Name].

VALIDATED TO-BE PROCESS:
[Describe end-to-end flow with timing expectations]

SOLUTION REQUIREMENTS WITH PERFORMANCE SPECS:
[Paste any solution requirements that specify timing, throughput, availability]

TASK:
Generate 5-10 performance business requirements covering:

CATEGORIES:
1. RESPONSE TIMES
2. THROUGHPUT
3. AVAILABILITY
4. DATA COMPLETENESS
5. SCALABILITY

FORMAT: Same as functional requirements
| PR-XXX | Description | Fit Criterion | Rationale | Traces To (Solution Req IDs) | Release |

GUIDANCE:
- Performance requirements describe HOW FAST, HOW MANY, HOW OFTEN
- Baseline on SCE's solution requirements where they specify performance
- Performance should reflect end-to-end process timing, not just individual system calls

Generate 5-10 performance business requirements now.`
  }
};

export const stages: Stage[] = [
  {
    id: 1,
    name: 'Current State Process Mapping',
    phase: 1,
    phaseGoal: PHASE_GOALS[1],
    objective: 'Document As-Is flow that serves as foundation for To-Be design',
    totalHours: 10,
    roleOwnership: 'Onshore Lead',
    criticalPrinciples: [
      'We cannot draft an accurate As-Is without first gathering information from SCE. AI assists with synthesis and formatting of information we collect, NOT with creating information we don\'t have.'
    ],
    activities: [
      {
        title: 'Research & Preparation',
        hours: 2,
        role: 'Onshore',
        description: 'Review repository, pull AMI 1.0 documentation, identify stakeholders, prepare interview guide'
      },
      {
        title: 'Stakeholder Interviews',
        hours: 3,
        role: 'Onshore',
        description: 'Conduct 1-2 interviews with SCE SMEs, capture detailed notes on current process, pain points, and workarounds'
      },
      {
        title: 'AI-Assisted Synthesis',
        hours: 3,
        role: 'Onshore with AI support',
        description: 'Use interview notes as primary source, run AI prompt to synthesize narrative, review for accuracy'
      },
      {
        title: 'Visio Flow Creation',
        hours: 2,
        role: 'Offshore',
        description: 'Translate synthesized narrative into Visio swimlane diagram with standard notation'
      }
    ],
    outputs: [
      'As-Is Visio flow diagram (validated by SCE SMEs)',
      'As-Is narrative (1-2 pages, based on actual SCE interviews)',
      'Interview notes/transcription (raw source material)',
      'Pain points summary (foundation for To-Be improvements)'
    ],
    qualityChecks: [
      'Completeness (all interview insights captured)',
      'Accuracy (reflects SCE\'s actual process, not idealized version)',
      'Clarity (understandable to someone not in the interviews)',
      'Pain points clearly documented (these become To-Be improvement drivers)'
    ],
    aiPrompts: [
      {
        id: 'A.1.3',
        title: AI_PROMPTS['A.1.3'].title,
        prompt: AI_PROMPTS['A.1.3'].prompt,
        activity: 'AI-Assisted Synthesis'
      }
    ],
    nextStage: 2
  },
  {
    id: 2,
    name: 'Repository Mining & Solution Requirements Filtering',
    phase: 1,
    phaseGoal: PHASE_GOALS[1],
    objective: 'Create structured first draft with clear flags for SCE validation, and identify relevant solution requirements from SCE\'s ~3000 requirement library',
    totalHours: 5,
    roleOwnership: 'Offshore',
    activities: [
      {
        title: 'Draft Section 1.1 - Project Background',
        hours: 1,
        role: 'Offshore',
        description: 'Pull AMI 2.0 program overview, summarize business drivers, describe how L3 process fits into program'
      },
      {
        title: 'Extract Capabilities from Repository',
        hours: 1.5,
        role: 'Offshore with AI',
        description: 'Run AI prompt to extract and synthesize 10-15 capabilities from similar processes'
      },
      {
        title: 'Solution Requirements Mapping',
        hours: 2,
        role: 'Offshore with AI',
        description: 'Identify relevant systems, run AI filtering prompt, human review and validation'
      },
      {
        title: 'Draft Success Criteria from Industry Benchmarks',
        hours: 1,
        role: 'Offshore with AI',
        description: 'Generate 8-12 success criteria with measurable thresholds, flag SCE-specific KPIs'
      },
      {
        title: 'Create Section Templates with Placeholders',
        hours: 0.5,
        role: 'Offshore',
        description: 'Create templates for stakeholders, scope, users, devices with placeholders'
      }
    ],
    outputs: [
      'Partial Section 1 draft (~6 pages)',
      'Capabilities list (10-15 items, some flagged for validation)',
      'Success criteria list (8-12 items, many with "[SCE TO DEFINE]" targets)',
      'Filtered solution requirements list (20-50 requirements from SCE\'s 3000)',
      'Initial solution requirements mapping (which process steps they support)',
      'Structured templates for stakeholders, scope, users, devices',
      'Running list of questions for SCE session'
    ],
    qualityChecks: [
      'Logical flow and professional writing',
      'Appropriate use of "[VALIDATE WITH SCE]" flags',
      'Solution requirements filtering is accurate (spot-check 10-15 requirements)',
      'Questions list is clear and answerable',
      'Templates are ready for SCE input'
    ],
    aiPrompts: [
      {
        id: 'A.2.1',
        title: AI_PROMPTS['A.2.1'].title,
        prompt: AI_PROMPTS['A.2.1'].prompt,
        activity: 'Solution Requirements Mapping'
      },
      {
        id: 'A.2.2',
        title: AI_PROMPTS['A.2.2'].title,
        prompt: AI_PROMPTS['A.2.2'].prompt,
        activity: 'Extract Capabilities from Repository'
      }
    ],
    dependencies: [1],
    nextStage: 3
  },
  {
    id: 3,
    name: 'SCE Validation Session',
    phase: 1,
    phaseGoal: PHASE_GOALS[1],
    objective: 'Gather SCE-specific information to complete Section 1 accurately',
    totalHours: 4.4,
    roleOwnership: 'Onshore',
    criticalContext: 'Critical Items Requiring SCE Input: Actual job titles and role names, specific device types/models, actual KPIs/targets, named stakeholders/sponsors, scope boundary confirmation, validation of capabilities list',
    activities: [
      {
        title: 'Pre-Session Preparation',
        hours: 1.5,
        role: 'Onshore',
        description: 'Package pre-read materials, create session discussion guide, send pre-read & schedule'
      },
      {
        title: 'SCE Validation Session',
        hours: 1.5,
        role: 'Onshore + SCE Stakeholders',
        description: 'Facilitate 90-minute session covering capabilities, success criteria, stakeholders, users/devices, scope boundaries'
      },
      {
        title: 'Post-Session Documentation & Updates',
        hours: 1.4,
        role: 'Offshore with Onshore QA',
        description: 'Review transcription, update BRD Section 1, quick validation loop via email'
      }
    ],
    outputs: [
      'Completed Section 1 of BRD (8-10 pages) with accurate SCE-specific content',
      'Final capabilities list (validated, 10-15 items)',
      'Final success criteria with actual KPIs and targets (8-12 items)',
      'Populated stakeholder table with names and titles',
      'Validated scope boundaries',
      'Accurately populated user and device tables with SCE job titles, systems, and characteristics',
      'Decision log documenting what changed from draft'
    ],
    qualityChecks: [
      'All "[VALIDATE WITH SCE]" and "[SCE TO DEFINE]" flags removed',
      'User/device tables use exact SCE terminology (not generic placeholders)',
      'Success criteria include actual measurable targets',
      'Stakeholder names and titles are accurate',
      'Content ready for use in Stage 4 (To-Be design and requirements)'
    ],
    dependencies: [1, 2],
    nextStage: 4
  },
  {
    id: 4,
    name: 'To-Be Process Design',
    phase: 1,
    phaseGoal: PHASE_GOALS[1],
    objective: 'Create and validate the To-Be process flow BEFORE generating requirements',
    totalHours: 7,
    roleOwnership: 'Onshore with AI',
    criticalContext: 'The To-Be flow is the foundation for user journeys and business requirements. Generating requirements from an unvalidated To-Be flow leads to massive rework when the flow changes after workshop.',
    criticalPrinciples: [
      'Validating flow early prevents cascading rework downstream',
      'Focused workshop on process only is more productive than trying to validate process AND requirements simultaneously'
    ],
    foundation: [
      'Validated As-Is flow from Stage 1',
      'Filtered solution requirements from Stage 2 (showing what systems can do)',
      'Validated capabilities and success criteria from Stage 3'
    ],
    activities: [
      {
        title: 'To-Be Flow Design',
        hours: 4,
        role: 'Onshore with AI assist',
        description: 'Redesign As-Is process to leverage AMI 2.0 capabilities, address pain points, create Visio diagram'
      },
      {
        title: 'Prepare for Process Validation Workshop',
        hours: 3,
        role: 'Onshore',
        description: 'Create focused workshop materials (8-10 slide deck) for validating To-Be flow'
      }
    ],
    outputs: [
      'Draft To-Be Visio flow',
      'To-Be narrative',
      'Process validation workshop deck',
      'Foundation ready for Stage 5 Manager QA'
    ],
    qualityChecks: [
      'Every automation has supporting solution requirement',
      'No invented capabilities not in solution requirements',
      'Flow addresses all As-Is pain points',
      'Flow is logical and complete',
      'Workshop deck tells clear story'
    ],
    aiPrompts: [
      {
        id: 'A.4.1',
        title: AI_PROMPTS['A.4.1'].title,
        prompt: AI_PROMPTS['A.4.1'].prompt,
        activity: 'To-Be Flow Design'
      }
    ],
    dependencies: [1, 2, 3],
    nextStage: 5
  },
  {
    id: 5,
    name: 'Manager Review - Process Flow',
    phase: 1,
    phaseGoal: PHASE_GOALS[1],
    objective: 'Quality gate for To-Be flow BEFORE workshop',
    totalHours: 1,
    roleOwnership: 'Manager Review',
    criticalContext: 'This review is ONLY on the To-Be process flow, not the complete BRD. We validate the process design before investing time in requirements generation.',
    managerActions: [
      'Provide feedback to analyst within 4 hours (quick turnaround to keep flow moving)',
      'Identify 2-3 critical areas for workshop focus',
      'Approve for Process Validation Workshop OR send back for revision',
      'If sent back: Specific, actionable feedback on what needs to change'
    ],
    managerChecklist: [
      {
        category: 'Process Flow Quality',
        items: [
          'To-Be flow addresses all As-Is pain points identified in Stage 1',
          'To-Be flow aligns with AMI 2.0 capabilities from filtered solution requirements',
          'To-Be flow is logical and complete (no missing steps, no gaps in handoffs)',
          'Process improvements are realistic and implementable',
          'Decision points are clear (if/then logic makes sense)',
          'Exception handling is defined (what happens when automation fails)',
          'Manual steps that remain are justified and necessary'
        ]
      },
      {
        category: 'Automation Validation',
        items: [
          'Every automated step is backed by a solution requirement',
          'No invented capabilities (all automation claims reference actual solution requirements)',
          'Appropriate balance between automation and human oversight',
          'Manual override/fallback options exist for critical steps'
        ]
      },
      {
        category: 'Alignment with Program Goals',
        items: [
          'Flow supports success criteria from Section 1.2.2',
          'Expected benefits are quantified (time saved, errors reduced)',
          'Cycle time improvement is realistic based on solution requirements',
          'Scalability considerations addressed'
        ]
      },
      {
        category: 'Workshop Readiness',
        items: [
          'Workshop deck tells clear story',
          'Visio flow is professional and easy to understand',
          'Changes vs. As-Is are clearly articulated',
          'Open questions/gaps are identified for discussion'
        ]
      },
      {
        category: 'Risk Identification',
        items: [
          'Flag any high-risk areas for workshop discussion',
          'Identify dependencies on other L3 processes',
          'Note any gaps where desired automation lacks solution requirement',
          'Highlight assumptions that need SCE validation'
        ]
      }
    ],
    commonIssues: [
      {
        issue: 'Invented automation without solution requirement',
        example: 'To-Be Step 4: "MDMS automatically validates meter health and schedules preventive maintenance" - Problem: No solution requirement supports automated preventive maintenance scheduling',
        solution: 'Automation backed by solution requirement: "MDMS returns read with quality flag (actual/estimated/edited) per MDMS-REQ-052, triggering CSS validation rules per CSS-REQ-107"'
      },
      {
        issue: 'Missing exception handling',
        example: 'To-Be Step 5: "CSS requests on-demand read from MDMS" - Problem: What happens if MDMS times out or meter is offline?',
        solution: 'Clear exception handling: "CSS requests on-demand read from MDMS (HES-REQ-019). If no response within 5 minutes, route to BPEM queue for field investigation with notification to billing user."'
      },
      {
        issue: 'Vague improvement claim',
        example: '"Process will be much faster and more accurate"',
        solution: 'Quantified improvement: "Cycle time reduced from 2 hours (As-Is manual lookups) to 10 minutes (To-Be automated retrieval per MDMS-REQ-047), 92% reduction. Transcription errors eliminated via auto-ingestion (CSS-REQ-103)."'
      }
    ],
    outputs: [
      'Approved for Stage 6 (Process Validation Workshop)',
      'OR Feedback for revision with specific action items',
      'Workshop focus areas identified'
    ],
    dependencies: [4],
    nextStage: 6
  },
  {
    id: 6,
    name: 'Process Validation Workshop',
    phase: 1,
    phaseGoal: PHASE_GOALS[1],
    objective: 'Validate To-Be process flow with SCE stakeholders BEFORE generating requirements',
    totalHours: 1.5,
    roleOwnership: 'Onshore Analyst + Manager',
    criticalContext: 'This workshop is ONLY about validating the process flow. We are NOT discussing detailed requirements yet. That comes in Session 2 (Stage 10) after the flow is validated.',
    workshop: {
      duration: '1.5 hours',
      attendees: [
        'BPD Manager (facilitator)',
        'Onshore Analyst (note-taker and scribe)',
        'SCE Process Owner',
        'SCE Business Sponsor (optional but recommended)',
        'SCE SMEs who execute this process (2-4 people)',
        'SI representative (optional, observer only)'
      ],
      facilitationSetup: [
        'Use Teams meeting with Copilot transcription enabled',
        'Share screen with process validation deck',
        'Have Visio flow open for reference',
        'Note-taker captures all feedback in real-time'
      ],
      segments: [
        {
          title: 'To-Be Process Validation',
          duration: '60 minutes',
          description: 'Walk through To-Be flow step-by-step, highlight changes, capture feedback'
        },
        {
          title: 'Exception Handling & Edge Cases',
          duration: '20 minutes',
          description: 'Review exception handling, discuss edge cases, validate manual steps'
        },
        {
          title: 'Confirm Changes & Next Steps',
          duration: '10 minutes',
          description: 'Summarize requested changes, classify as minor/major, set expectations for Session 2'
        }
      ]
    },
    changeClassification: {
      minor: {
        description: 'Add a validation step, change sequence of 2 steps, add an additional notification, clarify a decision point',
        impact: 'Session 2 can proceed in 1 week'
      },
      major: {
        description: 'Fundamental workflow changes, different system integration approach, new process steps that change overall flow, removal of core automation',
        impact: 'Session 2 rescheduled for 2 weeks to allow rework'
      }
    },
    outputs: [
      'Workshop notes with validated To-Be flow feedback',
      'Change log (all requested process modifications)',
      'Classification: Minor tweaks vs. major redesign',
      'Session 2 scheduled',
      'Foundation for Stage 7 (Process Flow Refinement)'
    ],
    successCriteria: [
      'All workshop participants agree on To-Be flow direction',
      'Changes are clearly documented and understood',
      'Team knows exactly what to fix before Session 2',
      'Session 2 date is confirmed'
    ],
    redFlags: [
      'Fundamental disagreement on process approach',
      'Major gaps in solution requirements (can\'t automate as planned)',
      'Stakeholders request capabilities that don\'t exist in solution requirements',
      'Scope creep (trying to solve problems outside this L3 process)'
    ],
    dependencies: [5],
    nextStage: 7
  },
  {
    id: 7,
    name: 'Process Flow Refinement',
    phase: 1,
    phaseGoal: PHASE_GOALS[1],
    phaseMilestone: PHASE_MILESTONES[1],
    objective: 'Incorporate workshop feedback to create VALIDATED To-Be flow',
    totalHours: 3,
    roleOwnership: 'Offshore with Onshore QA',
    criticalContext: 'At the end of this stage, we have a VALIDATED To-Be flow that will serve as the stable foundation for requirements generation in Stage 8. No more process changes after this point (unless major issues discovered later).',
    activities: [
      {
        title: 'Update To-Be Flow Based on Workshop Feedback',
        hours: 2,
        role: 'Offshore',
        description: 'Incorporate changes in Visio, update process narrative with AI assist'
      },
      {
        title: 'Validate Changes with Onshore',
        hours: 1,
        role: 'Onshore QA',
        description: 'Review completeness, quality, documentation, prepare for async validation'
      }
    ],
    outputs: [
      'VALIDATED To-Be Visio flow (approved by SCE stakeholders)',
      'VALIDATED To-Be process narrative (approved by SCE stakeholders)',
      'Updated improvement summary (if changes affected expected benefits)',
      'Any new gaps flagged (if workshop requests require missing solution requirements)',
      'CRITICAL MILESTONE ACHIEVED: Stable foundation for requirements generation'
    ],
    qualityMetrics: [
      { metric: '% of BRDs where To-Be is approved on first async validation', target: '>80%' },
      { metric: 'Average time from workshop to validated flow', target: '<2 days' },
      { metric: '% of flows requiring major rework after validation', target: '<5%' }
    ],
    handoffToNext: [
      'Validated To-Be flow is now locked as foundation',
      'Any future process changes require formal change control',
      'Team can confidently generate requirements knowing flow won\'t change',
      'User journeys and requirements will map to actual confirmed process'
    ],
    successCriteria: [
      'All workshop participants have confirmed approval',
      'Visio and narrative are consistent',
      'Flow addresses pain points and aligns with solution requirements',
      'No outstanding questions or concerns',
      'Ready to generate requirements in Stage 8'
    ],
    aiPrompts: [
      {
        id: 'A.7.1',
        title: AI_PROMPTS['A.7.1'].title,
        prompt: AI_PROMPTS['A.7.1'].prompt,
        activity: 'Update Process Narrative'
      }
    ],
    dependencies: [6],
    nextStage: 8
  },
  {
    id: 8,
    name: 'Requirements Generation',
    phase: 2,
    phaseGoal: PHASE_GOALS[2],
    objective: 'Generate complete BRD content based on the VALIDATED To-Be flow from Stage 7',
    totalHours: 9.4,
    roleOwnership: 'Offshore with Onshore QA',
    criticalContext: 'We now have a validated To-Be flow that SCE stakeholders have approved (Stage 7). This is the stable foundation for all requirements, user journeys, and remaining BRD content. The risk of rework is dramatically reduced because the process design is locked.',
    foundation: [
      'Validated As-Is flow (Stage 1)',
      'Completed Section 1 with SCE-specific details (Stage 3)',
      'Filtered solution requirements (Stage 2)',
      'VALIDATED To-Be flow (Stage 7)'
    ],
    activities: [
      {
        title: 'User Journey Mapping',
        hours: 2,
        role: 'Offshore with AI',
        description: 'Create user journey maps based on VALIDATED To-Be flow'
      },
      {
        title: 'Business Requirements Generation with Traceability',
        hours: 3.5,
        role: 'Offshore with AI, Onshore QA',
        description: 'Generate 15-25 business requirements from process needs, then trace to solution requirements'
      },
      {
        title: 'User Acceptance Expectations',
        hours: 1,
        role: 'Offshore with AI',
        description: 'Generate 8-12 UAEs describing what users expect from their experience'
      },
      {
        title: 'Performance Requirements',
        hours: 1,
        role: 'Offshore with AI',
        description: 'Generate 5-10 performance business requirements based on validated end-to-end process flow'
      },
      {
        title: 'Gap Analysis and Categorization',
        hours: 0.5,
        role: 'Onshore',
        description: 'Review traceability and categorize gaps'
      },
      {
        title: 'Master Requirements Workbook Creation',
        hours: 1,
        role: 'Offshore',
        description: 'Create single consolidated Excel workbook with auto-calculated traceability'
      },
      {
        title: 'Populate Remaining BRD Sections',
        hours: 0.4,
        role: 'Offshore',
        description: 'Insert To-Be flow, user journeys, requirements into BRD sections'
      }
    ],
    outputs: [
      'Complete BRD draft (~35-45 pages) based on VALIDATED To-Be flow',
      'Master Requirements Workbook (Excel) with 8 sheets',
      'All sections populated with content based on validated process flow',
      'Foundation ready for Stage 9 (Full BRD Review)'
    ],
    qualityChecks: [
      '25% of requirements spot-checked for quality',
      'Requirements map to validated To-Be steps (minimal rework risk)',
      'UAEs distinct from business requirements',
      'Master Requirements Workbook formulas working correctly',
      'Traceability accurate',
      'Gap analysis reasonable',
      'No contradictions with solution requirements'
    ],
    aiPrompts: [
      {
        id: 'A.8.1',
        title: AI_PROMPTS['A.8.1'].title,
        prompt: AI_PROMPTS['A.8.1'].prompt,
        activity: 'User Journey Mapping'
      },
      {
        id: 'A.8.2A',
        title: AI_PROMPTS['A.8.2A'].title,
        prompt: AI_PROMPTS['A.8.2A'].prompt,
        activity: 'Business Requirements Generation'
      },
      {
        id: 'A.8.2B',
        title: AI_PROMPTS['A.8.2B'].title,
        prompt: AI_PROMPTS['A.8.2B'].prompt,
        activity: 'Requirements Traceability Mapping'
      },
      {
        id: 'A.8.3',
        title: AI_PROMPTS['A.8.3'].title,
        prompt: AI_PROMPTS['A.8.3'].prompt,
        activity: 'User Acceptance Expectations'
      },
      {
        id: 'A.8.4',
        title: AI_PROMPTS['A.8.4'].title,
        prompt: AI_PROMPTS['A.8.4'].prompt,
        activity: 'Performance Requirements'
      }
    ],
    dependencies: [7],
    nextStage: 9
  },
  {
    id: 9,
    name: 'Manager Review - Full BRD',
    phase: 2,
    phaseGoal: PHASE_GOALS[2],
    objective: 'Quality gate for complete BRD before Requirements Workshop (Session 2)',
    totalHours: 1,
    roleOwnership: 'Manager Review',
    criticalContext: 'This is the full BRD review. The To-Be flow was already validated in Stage 7, so this review focuses on requirements quality, traceability, and content completeness.',
    managerActions: [
      'Provide feedback within 4 hours (quick turnaround to keep momentum)',
      'Identify 2-3 critical requirements areas for Session 2 focus',
      'Approve for Requirements Workshop (Session 2) OR send back for revision',
      'If sent back: Specific, actionable feedback'
    ],
    managerChecklist: [
      {
        category: 'Content Completeness',
        items: [
          'All template sections populated (no "[TBD]" placeholders)',
          'Validated To-Be flow from Stage 7 is embedded (Visio image + narrative)',
          'Minimum 15 functional business requirements',
          'Minimum 5 performance business requirements',
          'Minimum 8 User Acceptance Expectations',
          'All requirements have fit criteria and rationale',
          'All UAEs have level of need (High/Med/Low)',
          'Master Requirements Workbook created with all 8 sheets',
          'Gap analysis in Sheet 7 is complete'
        ]
      },
      {
        category: 'Requirement Quality (sample 10 requirements)',
        items: [
          'Each requirement is single, testable statement',
          'No ambiguous terms ("user-friendly," "efficient," "as needed")',
          'Fit criteria are objective and measurable',
          'Requirements describe "what" (outcome), not "how" (design/implementation)',
          'Proper traceability to capabilities AND solution requirements',
          'Business requirements are distinct from solution requirements (not just rephrasing)',
          'Requirements map to validated To-Be process steps'
        ]
      },
      {
        category: 'User Acceptance Expectations Quality (sample 5 UAEs)',
        items: [
          'UAEs written in user voice ("Users expect that...")',
          'UAEs describe experience/expectations, not technical specifications',
          'UAEs are distinct from business requirements (complementary, not redundant)',
          'Level of need (High/Med/Low) appropriately assigned',
          'Coverage across key categories (reliability, usability, transparency, automation, exceptions, performance)'
        ]
      },
      {
        category: 'Traceability Quality (Master Requirements Workbook)',
        items: [
          'Sheet 1: All BRs have entries in "Traces To" column (or flagged as gap)',
          'Sheet 5: Traceability Forward formulas working, auto-populates from Sheets 1-4',
          'Sheet 6: Traceability Reverse shows which BRs use each solution req',
          'Sheet 7: Gap Analysis auto-calculated counts match expectations',
          'Test formula integrity: Change a BR\'s traceability in Sheet 1 → verify Sheets 5-7 update',
          'Spot-check 10 traceability mappings for accuracy',
          'No business requirement contradicts solution requirement',
          'Gap analysis is reasonable (process/org requirements vs. true system gaps correctly classified)'
        ]
      },
      {
        category: 'SCE Alignment',
        items: [
          'Terminology consistent with ConOps and solution requirements',
          'Success criteria match program KPIs',
          'Dependencies on other L3 processes documented',
          'Release assignments align with IT roadmap',
          'Requirements support validated To-Be flow (no misalignment)'
        ]
      },
      {
        category: 'Formatting',
        items: [
          'Professional appearance',
          'Consistent heading styles',
          'Tables properly formatted (especially Master Requirements Workbook)',
          'Diagrams legible and labeled',
          'Validated To-Be flow clearly shows improvements vs. As-Is'
        ]
      },
      {
        category: 'Workshop Readiness (Session 2)',
        items: [
          'Requirements are ready for detailed review',
          'Traceability can be presented clearly',
          'Gap analysis ready for discussion',
          'Open questions identified for workshop'
        ]
      }
    ],
    outputs: [
      'Approved for Stage 10 (Requirements Workshop - Session 2)',
      'OR Feedback for revision with specific action items',
      'Workshop focus areas identified'
    ],
    dependencies: [8],
    nextStage: 10
  },
  {
    id: 10,
    name: 'Requirements Validation Workshop',
    phase: 2,
    phaseGoal: PHASE_GOALS[2],
    objective: 'Validate business requirements, UAEs, and traceability with SCE stakeholders',
    totalHours: 2,
    roleOwnership: 'Onshore Analyst + Manager',
    criticalContext: 'This is Session 2 of the two-part workshop approach. Session 1 (Stage 6) validated the To-Be process flow. Now we validate the requirements that were generated from that validated flow.',
    workshop: {
      duration: '2 hours',
      attendees: [
        'BPD Manager (facilitator)',
        'Onshore Analyst (note-taker)',
        'SCE Process Owner',
        'SCE Business Sponsor',
        'SMEs (2-4 people)',
        'SI representative (optional, observer)'
      ],
      segments: [
        {
          title: 'Quick Process Recap',
          duration: '10 minutes',
          description: 'Recap Session 1 validated flow, confirm no major process issues'
        },
        {
          title: 'Business Requirements Deep Dive',
          duration: '75 minutes',
          description: 'Walk through functional requirements, UAEs, and performance requirements'
        },
        {
          title: 'Traceability & Gap Review',
          duration: '25 minutes',
          description: 'Explain two-layer requirements model, show traceability examples, discuss gaps'
        },
        {
          title: 'Wrap-Up & Next Steps',
          duration: '10 minutes',
          description: 'Summarize requested changes, confirm gap resolution plan'
        }
      ]
    },
    outputs: [
      'Workshop notes with requirements feedback',
      'Requirements change log (with requested modifications)',
      'Gap resolution decisions',
      'Foundation for Stage 11 (Requirements Refinement)'
    ],
    dependencies: [9],
    nextStage: 11
  },
  {
    id: 11,
    name: 'Requirements Refinement',
    phase: 2,
    phaseGoal: PHASE_GOALS[2],
    phaseMilestone: PHASE_MILESTONES[2],
    objective: 'Incorporate workshop feedback into requirements',
    totalHours: 5.8,
    roleOwnership: 'Offshore with Onshore QA',
    criticalContext: 'The To-Be process flow is stable (validated in Stage 7). This stage ONLY refines requirements, UAEs, and performance requirements. No process flow changes unless a critical issue was discovered.',
    activities: [
      {
        title: 'Requirements Updates',
        hours: 4,
        role: 'Offshore with AI',
        description: 'Update business requirements, UAEs, performance requirements, and Master Requirements Workbook'
      },
      {
        title: 'Capabilities & Success Criteria Tuning',
        hours: 1.8,
        role: 'Onshore',
        description: 'Validate alignment, adjust if needed, ensure consistency across BRD sections'
      }
    ],
    outputs: [
      'Updated BRD with all workshop feedback incorporated',
      'Updated Master Requirements Workbook (all sheets current)',
      'Requirements change log with disposition (accepted/modified/rejected)',
      'Any outstanding issues flagged for client review cycle'
    ],
    qualityChecks: [
      'All workshop changes incorporated correctly',
      'Master Requirements Workbook formulas still working',
      'No contradictions introduced',
      'Traceability still accurate',
      'Gap analysis reflects workshop decisions'
    ],
    dependencies: [10],
    nextStage: 12
  },
  {
    id: 12,
    name: 'Client Review & Rework',
    phase: 3,
    phaseGoal: PHASE_GOALS[3],
    objective: 'Formal client review cycle and comment disposition',
    totalHours: 4.4,
    waitTime: '5 business days',
    roleOwnership: 'Offshore',
    activities: [
      {
        title: 'Comment Triage',
        hours: 1,
        role: 'Onshore',
        description: 'Review all client comments, categorize: Accept / Discuss / Reject, flag escalation items'
      },
      {
        title: 'AI-Assisted Rework',
        hours: 3,
        role: 'Offshore',
        description: 'Address client comments with AI assistance, validate revisions'
      },
      {
        title: 'Comment Log Update',
        hours: 0.4,
        role: 'Offshore',
        description: 'Document disposition for each comment, track status, prepare responses'
      }
    ],
    outputs: [
      'Revised BRD with all accepted changes',
      'Comment disposition log',
      'List of items for discussion (if any)'
    ],
    qualityChecks: [
      'Onshore validates all substantive changes'
    ],
    dependencies: [11],
    nextStage: 13
  },
  {
    id: 13,
    name: 'Finalization & Handoff',
    phase: 3,
    phaseGoal: PHASE_GOALS[3],
    phaseMilestone: PHASE_MILESTONES[3],
    objective: 'Prepare BRD for formal approval and downstream use',
    totalHours: 4,
    roleOwnership: 'Onshore',
    activities: [
      {
        title: 'Final Formatting',
        hours: 1.5,
        role: 'Onshore',
        description: 'Apply SCE document template styles, generate TOC, number requirements, embed diagrams, run quality checks'
      },
      {
        title: 'Approval Package Creation',
        hours: 1.5,
        role: 'Onshore',
        description: 'Add approval signature page, create executive summary, prepare presentation deck'
      },
      {
        title: 'Repository Storage',
        hours: 0.5,
        role: 'Onshore',
        description: 'Save to SharePoint with proper naming, upload all artifacts, update tracker'
      },
      {
        title: 'Handoff Preparation',
        hours: 0.5,
        role: 'Onshore',
        description: 'Create SI handoff package (BRD, As-Is flow, To-Be flow, Master Requirements Workbook), draft handoff email'
      }
    ],
    outputs: [
      'Final BRD ready for approval',
      'Approval presentation',
      'Streamlined SI handoff package (4 artifacts: BRD, As-Is flow, To-Be flow, Master Requirements Workbook)',
      'Updated tracker'
    ],
    dependencies: [12]
  }
];

