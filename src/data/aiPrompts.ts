/** Appendix A prompts shared by factory-line stages and BRD section view. */

export const AI_PROMPTS: Record<string, { id: string; title: string; prompt: string }> = {
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
true to how SCE actually does this today - don't make it sound better than it is.`,
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

Focus on precision - when uncertain, mark INDIRECTLY and explain.`,
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

Generate 5-8 capabilities now.`,
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
4. Identification of manual steps that remain`,
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
Updated To-Be process narrative with all workshop changes incorporated.`,
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

Generate 3-5 journey scenarios covering different user types involved in this VALIDATED process.`,
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

Generate 15-25 functional business requirements now.`,
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

Now trace all 15-25 business requirements to solution requirements using this methodology.`,
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

Generate 8-12 User Acceptance Expectations covering all categories above.`,
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

Generate 5-10 performance business requirements now.`,
  },
  /** Procedure doc labels these A.S2.2–A.S2.5; full prompt bodies are maintained here for the dashboard. */
  'A.8.5': {
    id: 'A.8.5',
    title: 'User Type Characteristics Matrix',
    prompt: `Generate a User Type Characteristics matrix for Section 2.3 of the BRD for [L3 Process Name].

INPUTS (paste or attach):
1. User types from Section 1.3.5 — actual SCE job titles and characteristics (Stage 3)
2. VALIDATED To-Be process flow from Stage 7 — numbered steps that define discrete tasks
3. User journeys from Section 2.2 — scenarios and actions per user type

TASK:
1. Extract 8-12 discrete, action-oriented tasks from the validated To-Be flow (e.g., "Initiate Read Request," "Validate Read Quality"). These become COLUMN HEADERS.
2. Rows are user types from Section 1.3.5 (exact SCE titles).
3. For each cell, indicate whether that user performs that task (Y/N) and typical frequency where applicable: Multiple Times per Session, Daily, Weekly, Monthly, As Needed.

OUTPUT FORMAT (markdown table):
| User Type / Task | [Task 1] | [Task 2] | ... |
| --- | --- | --- | --- |
| [SCE job title 1] | Y/N + frequency | ... | ... |

RULES:
- Tasks must map to real validated To-Be steps — do not invent steps
- Y/N assignments must be logical for the role (e.g., field tech vs. billing analyst)
- Every task column has at least one "Y" (every task has an owner)
- Each user type should perform at least 2 tasks in this L3 process
- Use professional utility language; keep matrix specific to this process (not generic)

Generate the draft matrix now.`,
  },
  'A.8.6': {
    id: 'A.8.6',
    title: 'Business Constraints Generation',
    prompt: `Generate a Business Constraints table for Section 2.4 of the BRD for [L3 Process Name].

Business constraints are guardrails — not functional requirements. They describe limits under which the To-Be process and systems must operate, and WHY each constraint exists.

INPUTS:
1. VALIDATED To-Be flow (Stage 7)
2. Filtered solution requirements from Stage 2 (performance, capacity, integration limits)
3. SCE interview insights from Stage 1 (operational realities)
4. Success criteria from Section 1.2.2 (targets, thresholds)
5. ConOps / regulatory context where applicable (CPUC, tariff, retention, availability windows)

CONSIDER (evaluate each for relevance):
- Regulatory / compliance
- Operational availability (maintenance windows, billing cycles, month-end)
- System integration (API limits, batch windows, latency)
- Budget / staffing / organizational limits
- Security / data handling

OUTPUT FORMAT:
| Constraint ID | Constraint (business wording) | Category | Why it exists | Evidence / source | Impact if violated |

RULES:
- Each constraint is specific and verifiable (avoid vague "must be secure")
- Tie constraints to this L3 process and validated To-Be where possible
- Do not restate functional requirements as constraints unless framing a true boundary

Generate 8-15 constraints covering the categories that apply to this process.`,
  },
  'A.8.7': {
    id: 'A.8.7',
    title: 'User Environment Synthesis (Optional)',
    prompt: `Synthesize Section 2.5 — Business User Environment — for [L3 Process Name] in 2-4 cohesive paragraphs.

This section is usually written directly from existing artifacts; use this prompt when you want AI assistance drafting narrative.

INPUTS:
1. Section 1.3.5 user and device tables (work location, hardware, systems, proficiency)
2. VALIDATED To-Be flow — systems and handoffs involved
3. ConOps / solution architecture notes (integrations, coexistence)
4. Filtered solution requirements touching interfaces and environments

STRUCTURE (use these paragraph themes):
- Physical user environment: where people work, devices, network, shifts
- System environment: key systems (MDMS, HES, CSS, EAM, DI Hub, etc.), real-time vs batch vs messaging
- AMI 1.0 / 2.0 coexistence: how this process behaves during migration if applicable
- Special considerations: field conditions, DR, geography, security exposure

RULES:
- Ground every claim in the inputs — do not invent systems or policies
- Use SCE naming from Section 1.3.5 for roles and tools
- Keep utility-operations tone; avoid marketing language

Produce the narrative now.`,
  },
  'A.8.8': {
    id: 'A.8.8',
    title: 'Assumptions & Dependencies Generation',
    prompt: `Generate structured Assumptions and Dependencies for Section 2.6 of the BRD for [L3 Process Name].

DEFINITIONS:
- Assumption: Something believed true for design; if false, process or design may need to change
- Dependency: External deliverable or condition required for this process to operate

INPUTS:
1. VALIDATED To-Be flow (Stage 7)
2. Filtered solution requirements (capabilities assumed)
3. ConOps / program timeline (releases, sequencing)
4. Process connections / upstream L3 dependencies
5. Workshop notes from Stage 6 (flagged risks)

OUTPUT — two tables:

TABLE A — Assumptions (minimum 8):
| ID | Assumption | Category (Technology / Org / Data / Partner / Policy) | Consequence if false |

TABLE B — Dependencies (minimum 5):
| ID | Dependency | Source / owner | Which process step needs it | Risk if late |

RULES:
- Assumptions must be testable or verifiable over time
- Dependencies should name upstream processes or releases specifically where possible
- Include explicit AMI 1.0/2.0 coexistence assumptions if relevant
- No assumption should contradict a validated solution requirement

Generate both tables now.`,
  },
};
