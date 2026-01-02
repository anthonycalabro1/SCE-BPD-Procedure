# BRD Factory-Line Work Procedure
## Streamlined Approach for 69 L3 Process BRDs (Feb 2 – Jul 31, 2026)

---

## Executive Summary

**Objective:** Deliver 69 completed and approved BRDs within 26 weeks using a factory-line approach that maximizes throughput, minimizes analyst downtime, and leverages AI automation.

**Key Metrics:**
- Total effort available: 4,894 hours
- Total effort required: 4,278 hours (69 BRDs × 62 hours)
- Buffer: 616 hours (~14% contingency)
- Team ramp: 1 analyst (weeks 1-9) → 5 analysts (weeks 10-26)
- Client review cycles: 5 business days per BRD
- Expected throughput: ~4 BRDs/week at full capacity

---

## I. CORE PRINCIPLES

### 1. Pipeline Philosophy
Treat BRD development as a **multi-stage pipeline** where multiple BRDs flow through stages simultaneously. While BRD #1 is in client review (5 days), the team works on BRDs #2-6.

### 2. Zero Downtime Rule
No analyst should ever be "waiting" for client input. Use wait periods productively:
- **During workshops (awaiting schedule):** Work on other BRDs in drafting/prep stages
- **During client review (5 days):** Progress 3-5 other BRDs through earlier stages
- **During rework cycles:** Junior analysts draft new BRDs while senior analysts incorporate feedback

### 3. AI-Assisted Drafting (Not AI-First Invention)
All first drafts use AI to synthesize and structure information **from validated sources**: SCE interviews, workshop outputs, repository materials, and ConOps documentation. Human effort focuses on:
- Gathering primary information from SCE stakeholders
- SCE-specific contextualization and validation
- Quality control and accuracy checking
- Client-facing activities (workshops, reviews)
- Complex adaptation requiring domain expertise and judgment

### 4. Batch Processing
Group related processes to maximize efficiency:
- **Workshop batching:** Combine 2-3 related L3 processes in single 3.5-hour sessions
- **Review batching:** Submit 3-5 BRDs simultaneously for client review
- **Sign-off batching:** Request approval for multiple BRDs from same sponsor

---

## II. ROLE DEFINITIONS & DIVISION OF LABOR

### BPD Manager (1,014 hours total)
**Primary Responsibilities:**
- Internal quality reviews (Step 4 checkpoint)
- Workshop facilitation and client relationship management
- Weekly prioritization and resource allocation
- Escalation handling and complex stakeholder management
- Final sign-off preparation

**Time Allocation:**
- 30% Internal quality reviews (all 69 BRDs)
- 30% Workshop preparation and facilitation
- 20% Client relationship and governance
- 20% Team coordination and sprint planning

### Onshore Analysts (3 total: 1 full-time, 2 starting Apr 6)
**Primary Responsibilities:**
- As-Is process mapping from client interviews
- Workshop preparation (materials, discussion guides)
- Workshop note capture and post-workshop synthesis
- Complex To-Be flow design requiring deep AMI domain knowledge
- Client-facing rework and comment disposition
- Final formatting and handoff coordination

**AI Tools Usage:** Moderate (assist with synthesis, formatting, quality checks)

### Offshore Analysts (2 starting Apr 6)
**Primary Responsibilities:**
- AI-assisted first draft generation (all BRD sections)
- Initial To-Be flow drafting from repository patterns
- Bulk requirements extraction and population
- Post-workshop content updates (directed by onshore lead)
- Formatting, consistency checks, and repository management
- Knowledge base maintenance and tagging

**AI Tools Usage:** Heavy (primary drafting tool for all content generation)

---

## III. SEQUENCING STRATEGY

### Phase 1: High-Priority Foundation (Weeks 1-9)
**Focus:** Meter Asset Management & Mass Deployment L1 groups
**Rationale:** These processes occur chronologically first and have highest dependency downstream

**Target BRDs (15 total):**
1. Plan and Procure Metering Assets
2. Receive and inspect delivered assets
3. Register devices in asset and head-end systems
4. Track warehouse inventory and movements
5. Reconcile field inventory and system counts
6. Manage Vendor Warranty Claims and Returns
7. Manage Meter Refurbishment and Testing Cycles
8. Perform New Meter Lot Acceptance Testing
9. Manage MIV Data Synchronization & Exception Handling
10. Reconcile installation records between systems
11. Notify customers of installation schedules
12. Assign and execute MIV meter deployment work orders
13. Assign and execute utility-owned deployment work orders
14. Close MIV work orders and update dashboards
15. Communicate completion and follow-up

**Resource Plan:**
- Week 1-9: BPD Manager + 1 Onshore Analyst
- Throughput: ~1.7 BRDs/week (15 BRDs ÷ 9 weeks)

### Phase 2: Core Operations (Weeks 10-18)
**Focus:** Field Operations & Meter Data Operations L1 groups
**Rationale:** Enable steady-state operations and data flow

**Target BRDs (25 total):**
All processes from:
- Field Operations (10 processes)
- Meter Data Operations (8 processes)  
- Remaining Mass Meter Deployment (7 processes)

**Resource Plan:**
- Full team active (5 analysts + manager)
- Throughput: ~2.8 BRDs/week (25 BRDs ÷ 9 weeks)

### Phase 3: Revenue & Customer Experience (Weeks 19-26)
**Focus:** Customer Engagement & Billing + Grid Operations
**Rationale:** Build on data operations foundation; highest business visibility

**Target BRDs (29 total):**
All processes from:
- Customer Engagement & Billing (20 processes)
- Grid & Outage Management (5 processes)
- Data & Analytics Platform (4 processes)

**Resource Plan:**
- Full team (5 analysts + manager)
- Throughput: ~3.6 BRDs/week (29 BRDs ÷ 8 weeks)

---

## IV. THE 13-STAGE FACTORY LINE (THREE-PHASE APPROACH)

---

## **PHASE 1: PROCESS DESIGN & VALIDATION**
**Goal:** Lock down the validated To-Be process flow  
**Stages:** 1-7  
**Milestone:** ✅ VALIDATED TO-BE PROCESS

---

### STAGE 1: Current State Process Mapping (10 hours → Onshore Lead)

**Objective:** Document As-Is flow that serves as foundation for To-Be design

**CRITICAL PRINCIPLE:** We cannot draft an accurate As-Is without first gathering information from SCE. AI assists with synthesis and formatting of information we collect, NOT with creating information we don't have.

**Activities:**

1. **Research & Preparation (2 hours - Onshore):**
   - Review repository for similar processes from other utilities (for context/comparison only)
   - Pull relevant AMI 1.0 documentation from SCE archives
   - Review process connections table to understand upstream/downstream dependencies
   - Identify 2-3 SCE stakeholders/SMEs who currently execute this L3 process
   - Prepare interview guide with targeted questions:
     - What triggers this process today?
     - What are the main steps you follow?
     - Which systems do you use at each step?
     - Where do things go wrong or take longer than expected?
     - What manual workarounds exist?
     - Who do you hand off to, and what do you give them?

2. **Stakeholder Interviews (3 hours - Onshore):**
   - Conduct 1-2 interviews with SCE SMEs who execute this process
   - Use structured interview guide but allow for natural conversation
   - Capture detailed notes on:
     - Current process triggers and initiating events
     - Step-by-step activities (in the order they actually happen)
     - Decision points and branching logic
     - Systems used (CIS, MDMS, HES, EAM, etc.)
     - Cross-team handoffs and dependencies
     - Pain points, delays, and error-prone areas
     - Manual workarounds and "shadow processes"
     - Exception handling approaches
   - **AI Note-Taking Assist:** Enable Copilot transcription in Teams meeting for automatic capture
   - Screenshot any system demos or workflow examples shared

3. **AI-Assisted Synthesis (3 hours - Onshore with AI support):**
   
   **Process:**
   - Use interview notes as primary source
   - Reference SCE AMI 1.0 documentation as supporting material
   - Use similar process from another utility for structure reference only
   - Run AI prompt (see **Appendix A.1.3: As-Is Process Narrative Synthesis**)
   - Review AI output for accuracy against interview notes
   - Fill in any gaps or clarify ambiguities
   - Ensure pain points are prominently captured (these drive To-Be improvements)
   
   **Output:** As-Is process narrative (1-2 pages) with pain points flagged

4. **Visio Flow Creation (2 hours - Offshore):**
   - Translate synthesized narrative into Visio swimlane diagram
   - Use standard notation (BPMN or SCE standard)
   - Label all systems, roles, and handoffs clearly
   - Add visual callouts for pain points (use red text boxes or icons)
   - Include decision diamonds for branching logic
   - Show both "happy path" and key exception flows
   - Save to repository with naming convention: `ASIS_[L3-ID]_[ProcessName]_v1.0.vsdx`

5. **Validation with SMEs (Optional - can be async via email):**
   - Send draft As-Is narrative and Visio flow back to interviewed SMEs
   - Ask: "Does this accurately reflect how you execute this process today?"
   - Request corrections within 2 business days
   - Incorporate any clarifications
   - **Note:** This validation step can happen asynchronously while other BRDs progress, minimizing analyst downtime

**Outputs:**
- As-Is Visio flow diagram (validated by SCE SMEs)
- As-Is narrative (1-2 pages, based on actual SCE interviews)
- Interview notes/transcription (raw source material)
- Pain points summary (foundation for To-Be improvements)

**Quality Check:** Manager reviews for:
- Completeness (all interview insights captured)
- Accuracy (reflects SCE's actual process, not idealized version)
- Clarity (understandable to someone not in the interviews)
- Pain points clearly documented (these become To-Be improvement drivers)

---

### STAGE 2: Repository Mining & Solution Requirements Filtering (5 hours - Offshore)

**Objective:** Create structured first draft with clear flags for SCE validation, and identify relevant solution requirements from SCE's ~3000 requirement library

**Activities:**

1. **Draft Section 1.1 - Project Background (1 hour):**
   - Pull AMI 2.0 program overview from ConOps
   - Summarize business drivers (aging infrastructure, regulatory requirements, customer experience)
   - Describe how this L3 process fits into overall AMI 2.0 program
   - **Source:** ConOps, AMI 1.0 lessons learned, program charter
   - **Mostly reusable across all BRDs** with minor L3-specific tweaks

2. **Extract Capabilities from Repository (1.5 hours with AI):**
   
   Run AI prompt (see **Appendix A.2.2: Capabilities Extraction from Repository**)
   
   **Process:**
   - Input: Requirements from 3 similar AMI processes from other utilities
   - AI extracts and synthesizes 10-15 capabilities
   - Format: "Ability to [verb] [object]"
   - Flag uncertain items with "[VALIDATE WITH SCE]"
   - Review AI output for relevance and alignment with process objective

3. **Solution Requirements Mapping (2 hours - Offshore with AI):**

**CRITICAL NEW ACTIVITY:** Identify which of SCE's ~3000 solution requirements are relevant to this L3 process

**Context:** SCE has developed comprehensive solution requirements organized by:
- System-based (~2000): MDMS, HES, DI Hub, Analytics Application
  - Within each system: Organized by capability area (e.g., MDMS meter reading requirements)
- Functional (~1000): Software Baseline, Managed Cloud, Service Requirements, Cyber

**Objective:** Filter the ~3000 to identify the ~20-50 solution requirements that directly or indirectly support this specific L3 process

**Step 3.1: Identify Relevant Systems & Capability Areas (30 min - Onshore quick review)**
- Based on As-Is flow from Stage 1, identify which systems are involved
  - Example: "Off-Cycle Billing" process involves CSS, MDMS, HES
- Identify which capability areas are relevant
  - Example: MDMS meter reading, MDMS VEE, HES on-demand reads
- Pull the relevant sections from SCE's solution requirements Excel files
  - Example: Extract MDMS meter reading requirements section, HES on-demand reads section

**Step 3.2: AI-Assisted Filtering (1.5 hours - Offshore)**

Run AI filtering prompt (see **Appendix A.2.1: Solution Requirements Filtering**)

**Process:**
- Input: L3 process details, systems involved, key process steps
- Input: Relevant Excel sections from SCE's solution requirements library
- AI classifies each requirement: Directly Relevant, Indirectly Relevant, or Not Relevant
- Output: Excel table with classification and rationale

**Step 3.3: Human Review & Validation (30 min - Onshore)**
- Review AI's classification
- Validate DIRECTLY RELEVANT selections (these will be traced to business requirements)
- Spot-check NOT RELEVANT exclusions (ensure we didn't miss anything)
- Create initial groupings by process step or capability theme
- **Output:** Filtered list of 20-50 relevant solution requirements ready for Stage 3

**Why This Matters:**
- Ensures business requirements in Stage 3 align with approved solution requirements
- Identifies which solution requirements the SI will use to build this process
- Enables traceability (business requirement → solution requirement)
- Highlights any gaps where business needs exist but solution requirements don't

4. **Draft Success Criteria from Industry Benchmarks (1 hour with AI):**
   
   Run AI prompt (see **Appendix A.2.2: Capabilities Extraction from Repository**)
   
   **Process:**
   - Input: Capabilities from step 2, industry best practices
   - AI generates 8-12 success criteria with measurable thresholds
   - Flags criteria requiring SCE-specific KPIs with [SCE TO DEFINE TARGET]
   - Review for completeness and ensure criteria would prove process is working

5. **Create Section Templates with Placeholders (0.5 hours):**
   
   **Section 1.3.1 - Sponsorship & Stakeholders:**
   - Create table structure:
     | Role | Name | Title | Department |
   - Add placeholder rows with generic roles:
     - Business Sponsor: [SCE TO PROVIDE]
     - Process Owner: [SCE TO PROVIDE]
     - Key SMEs: [SCE TO PROVIDE]
   
   **Section 1.3.4 - Scope:**
   - Draft initial In/Out of Scope based on:
     - L3 process definition
     - Process connections table (dependencies)
     - Repository examples
   - **Flag boundary uncertainties:** [SCE TO CONFIRM]
   
   **Section 1.3.5 - Users and Devices:**
   - Create empty tables:
   
   | User Type/Persona | Key User Characteristics |
   |-------------------|--------------------------|
   | [SCE JOB TITLE - TBD] | [TO BE COMPLETED IN SCE SESSION] |
   
   | Device Type | Key Device Characteristics |
   |-------------|---------------------------|
   | [SCE DEVICE NAME - TBD] | [TO BE COMPLETED IN SCE SESSION] |
   
   - **From As-Is flow (Stage 1):** Identify which roles/actors appear
   - Create placeholder for each, flagged for SCE to provide actual titles

**Outputs from Stage 2:**
- Partial Section 1 draft (~6 pages)
- Capabilities list (10-15 items, some flagged for validation)
- Success criteria list (8-12 items, many with "[SCE TO DEFINE]" targets)
- **Filtered solution requirements list (20-50 requirements from SCE's 3000)**
- **Initial solution requirements mapping** (which process steps they support)
- Structured templates for stakeholders, scope, users, devices
- **Running list of questions for SCE session**

**Quality Check:** Onshore analyst reviews for:
- Logical flow and professional writing
- Appropriate use of "[VALIDATE WITH SCE]" flags
- Solution requirements filtering is accurate (spot-check 10-15 requirements)
- Questions list is clear and answerable
- Templates are ready for SCE input

---

### STAGE 3: SCE Validation Session (4.4 hours - Onshore)

**Objective:** Gather SCE-specific information to complete Section 1 accurately

**Critical Items Requiring SCE Input:**
- ✅ Actual job titles and role names (not generic "Billing Specialist")
- ✅ Specific device types, models, and work environments
- ✅ Actual KPIs, targets, and measurement thresholds
- ✅ Named stakeholders, sponsors, and org structure
- ✅ Scope boundary confirmation and clarifications
- ✅ Validation of capabilities list (add/delete/modify)

**Pre-Session Preparation (1.5 hours - Onshore):**

1. **Package Pre-Read Materials (0.5 hours):**
   - As-Is flow from Stage 1
   - Draft capabilities list with validation flags
   - Draft success criteria with "[SCE TO DEFINE]" placeholders
   - Questions list
   - Empty templates for users/devices/stakeholders
   
2. **Create Session Discussion Guide (0.5 hours):**
   - Agenda with time allocations
   - Specific questions organized by topic
   - Space for note capture
   - **Show example BRD (the one you uploaded)** - especially user/device tables
   
3. **Send Pre-Read & Schedule (0.5 hours):**
   - Email package to SCE process owner + 1-2 SMEs (2 days before session)
   - Request they bring:
     - Org chart for this process area
     - List of systems/devices their teams use
     - Any existing KPIs or performance metrics
   - Confirm 90-minute session on calendar

**SCE Validation Session (1.5 hours - Onshore + SCE Stakeholders):**

**Attendees:**
- Onshore BPD Analyst (facilitator)
- SCE Process Owner or Manager
- 1-2 SCE SMEs who execute this process
- (Optional) BPD Manager for high-priority processes

**Session Structure:**

**Segment 1: Capabilities & Success Criteria Validation (30 min)**

*Facilitator:* "We've drafted 12 capabilities based on similar AMI processes at other utilities. Let's walk through each one and you tell us: keep it, modify it, or remove it. Then we'll capture any missing capabilities."

- Display draft capabilities list on screen
- For each capability:
  - SCE confirms: "Yes, this is in scope" / "No, not for us" / "Modify to say..."
  - Capture exact wording changes
  - Ask: "Why is this important? What's the business driver?" (validates rationale)
- Capture any NEW capabilities SCE identifies
- **Note-taking:** Use Copilot transcription + manual notes

*Facilitator:* "Now let's talk metrics. How will you know this process is successful? What are the actual targets or KPIs you'll track?"

- Walk through draft success criteria
- For each "[SCE TO DEFINE TARGET]" placeholder:
  - Ask: "What's the actual threshold?" (e.g., "95% read success rate" or "< 2-minute response time")
  - Capture measurement approach: "How will you measure this?"
- Identify any regulatory or compliance-driven success criteria
- Flag any that are aspirational vs. contractual requirements

**Segment 2: Stakeholders & Organizational Structure (15 min)**

*Facilitator:* "Who are the key people involved in governing, executing, or supporting this process?"

- Review SCE org chart (if provided)
- Populate stakeholder table:
  - Business Sponsor (executive accountable for process success)
  - Process Owner (manager responsible for day-to-day operations)
  - Key SME roles (people who execute the work)
- Capture:
  - Full names (if available, otherwise titles)
  - Job titles (exact SCE terminology)
  - Department/organization
  - Role in this L3 process

**Segment 3: Users & Devices - THE CRITICAL SECTION (30 min)**

*Facilitator:* "In the As-Is flow we documented, we identified [X] different roles/actors. Let's get the details on each one."

**For each User Type identified in Stage 1 As-Is:**

*Show example from uploaded BRD:*
```
User Type: AMO Billing Specialist
Characteristics: Performs daily billing operations in CSS; initiates off-cycle 
billing requests; experienced with register-read workflows, OCR troubleshooting, 
and manual read entry; works in office or hybrid environment using standard SCE 
workstation and CSS/MDMS portals.
```

*Then ask SCE:*

1. **"What's the actual job title at SCE for this role?"**
   - Not "Billing Specialist" — is it "Revenue Operations Analyst II"? "Billing Services Representative"?
   - Capture exact title from HR system if possible

2. **"What systems do they use day-to-day?"**
   - List all applications: CIS, MDMS, CSS, EAM, Salesforce, Excel, etc.
   - Capture version/instance names if relevant (e.g., "SAP ISU" vs. "Oracle CC&B")

3. **"What devices/equipment do they work with?"**
   - Desktop, laptop (specific model/requirements)?
   - VPN requirements?
   - Mobile devices (tablets, smartphones, ruggedized handhelds)?
   - Dual monitors, specialized peripherals?

4. **"What's their work environment?"**
   - Office-based (which location/facility)?
   - Field-based (territory coverage)?
   - Hybrid/remote?
   - Shift coverage (8-5, 24/7, on-call)?

5. **"What's their proficiency level with technology and these processes?"**
   - Expert users who know workarounds?
   - Novice users who need step-by-step guidance?
   - Mix of experience levels?

**Repeat for each user type in the As-Is process.**

**For Device Types (if applicable to this L3 process):**

Examples: Smart meters, network relays, field diagnostic tools, vehicles

1. **"What's the specific device type/model?"**
   - Not "smart meter" — is it "Landis+Gyr E350" or "Itron OpenWay Riva"?

2. **"What are the key technical or environmental characteristics?"**
   - Deployment location (pole-mounted, pad-mounted, inside buildings)?
   - Environmental exposure (weather, temperature, physical security)?
   - Power source, communication method, expected lifespan?

**Capture in the user/device tables in real-time during the discussion.**

**Segment 4: Scope Boundary Clarification (15 min)**

*Facilitator:* "We've drafted what we think is in scope and out of scope for this process. Let's validate the boundaries."

- Display draft In/Out of Scope section
- Ask for each boundary item:
  - "Is this accurate?"
  - "Are there edge cases we need to call out?"
  - "Any dependencies on other L3 processes we should document?"
- **Capture clarifications and add detail**
- Flag any scope items that might need change control discussion

**Wrap-Up (5 min)**
- Recap key decisions and inputs captured
- Confirm any follow-up items (e.g., "I'll send you the org chart with names")
- Thank participants
- Set expectation: "We'll update the BRD and share Section 1 draft within 2 days for quick validation"

**Post-Session Documentation & Updates (1.4 hours - Offshore with Onshore QA):**

1. **Transcription Review & Note Synthesis (0.5 hours - Onshore):**
   - Review Copilot transcription
   - Clean up notes, ensure all inputs captured
   - Create decision log (what changed from draft)
   - Flag any follow-up questions

2. **BRD Section 1 Updates (0.7 hours - Offshore):**
   - **Section 1.2.1:** Update capabilities based on SCE validation (add/delete/modify)
   - **Section 1.2.2:** Replace all "[SCE TO DEFINE]" with actual KPIs and targets
   - **Section 1.3.1:** Populate stakeholder table with names, titles, orgs
   - **Section 1.3.4:** Update scope boundaries with clarifications
   - **Section 1.3.5:** Populate user and device tables with all SCE-specific details
   - **Remove all "[VALIDATE WITH SCE]" flags**

3. **Quick Validation Loop (0.2 hours - Onshore via email):**
   - Send updated Section 1 to session participants
   - "Quick check: did we capture everything correctly?"
   - Request confirmation within 24 hours
   - Make any final corrections

**Outputs from Stage 3:**
- Completed Section 1 of BRD (8-10 pages) with accurate SCE-specific content
- Final capabilities list (validated, 10-15 items)
- Final success criteria with actual KPIs and targets (8-12 items)
- Populated stakeholder table with names and titles
- Validated scope boundaries
- **Accurately populated user and device tables with SCE job titles, systems, and characteristics**
- Decision log documenting what changed from draft

**Quality Check:** Onshore analyst validates:
- All "[VALIDATE WITH SCE]" and "[SCE TO DEFINE]" flags removed
- User/device tables use exact SCE terminology (not generic placeholders)
- Success criteria include actual measurable targets
- Stakeholder names and titles are accurate
- Content ready for use in Stage 3 (To-Be design and requirements)

---

### STAGE 4: To-Be Process Design (7 hours - Onshore with AI)

**Objective:** Create and validate the To-Be process flow BEFORE generating requirements

**CRITICAL DESIGN PRINCIPLE:** The To-Be flow is the foundation for user journeys and business requirements. Generating requirements from an unvalidated To-Be flow leads to massive rework when the flow changes after workshop. This stage validates the To-Be flow first, creating a stable foundation for requirements generation in Stage 8.

**Why This Two-Phase Approach:**
- User journeys map to specific process steps → if steps change, journeys must be rewritten
- Business requirements support specific workflows → if workflow changes, requirements must be rewritten
- Validating flow early prevents cascading rework downstream
- Focused workshop on process only is more productive than trying to validate process AND requirements simultaneously

---

**Activity 1: To-Be Flow Design (4 hours - Onshore with AI assist)**

**Objective:** Redesign As-Is process to leverage AMI 2.0 capabilities and address pain points

**Foundation:** At this point we have:
- Validated As-Is flow from Stage 1
- Filtered solution requirements from Stage 2 (showing what systems can do)
- Validated capabilities and success criteria from Stage 3

```
AI PROMPT TEMPLATE:
"I have the As-Is process flow [attach narrative and Visio screenshot] that needs to be 
redesigned for an AMI 2.0 environment.

AS-IS PROCESS: [attach or describe]

CURRENT PAIN POINTS (from Stage 1 interviews):
[List 5-8 pain points identified by SCE SMEs]
Example:
- Manual MDMS lookups take 30-45 minutes per request
- No visibility into read quality without separate MDMS login
- Frequent timeouts when requesting on-demand reads
- Manual re-entry of reads into CSS causes transcription errors

AMI 2.0 SYSTEM CAPABILITIES (from SCE's solution requirements):
Based on filtered solution requirements from Stage 2, these capabilities are available:

MDMS Capabilities:
- MDMS-REQ-047: Return reads within 2 minutes
- MDMS-REQ-052: Provide read quality codes (actual/estimated/edited)
- MDMS-REQ-089: Detect and log failed read requests

HES Capabilities:
- HES-REQ-019: Execute on-demand reads upon request
- HES-REQ-034: Support priority queuing for urgent requests

CSS Capabilities:
- CSS-REQ-103: Auto-ingest MDMS responses
- CSS-REQ-107: Display read quality in billing interface

[List other relevant solution requirements]

PROGRAM OBJECTIVES:
- Reduce manual processing by 60%
- Improve data accuracy to >99.5%
- Enable real-time/near-real-time operations
- Scalable for 5M+ meter estate
- Reduce cycle time for this process by [X]% (per success criteria)

TASK:
Redesign this process as a To-Be flow that:
1. Eliminates manual steps where automation is feasible (based on solution requirements above)
2. Leverages AMI 2.0 real-time data (interval reads, events, alarms)
3. Incorporates automated validation rules to prevent errors
4. Reduces cycle time and improves accuracy
5. Addresses ALL identified pain points
6. ONLY uses capabilities that exist in SCE's solution requirements (don't invent features)

OUTPUT:
1. Updated process narrative (numbered steps, same format as As-Is)
   - Include trigger/initiating event
   - 6-10 main process steps
   - Decision points (if/then logic)
   - System interactions [in brackets]
   - Handoffs between teams/roles
   - Final output/deliverable

2. Summary of key changes vs. As-Is:
   - What's NEW (automation, integration, real-time capabilities)
   - What's REMOVED (eliminated manual steps)
   - What's AUTOMATED (formerly manual steps now automated)
   - Expected benefits (time saved, errors reduced, pain points addressed)

3. List of new system touchpoints with relevant solution requirement IDs:
   Example: 'CSS automatically requests read from MDMS (CSS-REQ-103, MDMS-REQ-047)'

4. Identification of manual steps that remain:
   - Which steps still require human intervention and why
   - Exception handling procedures
   - Override capabilities for edge cases

CONSTRAINTS:
- Maintain manual override capability for exceptions (users must be able to intervene)
- Comply with regulatory accuracy requirements
- Support 24x7 operations (or document business hours limitations)
- Only leverage capabilities confirmed in SCE's solution requirements
- If solution requirement doesn't exist for a desired automation, flag it with [GAP]

GUIDANCE ON AUTOMATION:
- Automate data retrieval, validation, and routing where solution requirements support it
- Keep humans in the loop for judgment calls, approvals, and exceptions
- Provide visibility into automated processes (users can see what system did)
- Always include fallback for system failures

Generate the To-Be process narrative now."
```

**Process:**
1. Run AI prompt to generate initial To-Be narrative (1.5 hrs)
2. Validate against AMI 2.0 technical architecture and solution requirements (1 hr)
3. Ensure every automation claim is backed by a solution requirement (0.5 hrs)
4. Create updated Visio swimlane diagram (1 hr - use offshore if available, otherwise onshore)
   - Standard BPMN notation
   - Label all systems, roles, and handoffs clearly
   - Show both "happy path" and key exception flows
   - Add callouts showing improvements vs. As-Is (e.g., "Was 45 min → Now 2 min")
   - Use green highlighting for automated steps, yellow for manual steps
5. Document improvement rationale and expected benefits

**Output:**
- To-Be Visio flow diagram (draft)
- To-Be narrative (6-10 steps)
- Summary of changes vs. As-Is
- List of automation improvements with supporting solution requirements
- Flagged gaps (desired automations without solution requirement support)

---

**Activity 2: Prepare for Process Validation Workshop (3 hours - Onshore)**

**Objective:** Create focused workshop materials for validating To-Be flow (NOT requirements yet)

**Workshop Deck Structure (8-10 slides):**

**Slide 1: Agenda**
- Purpose: Validate To-Be process flow
- Duration: 90 minutes
- Next steps: Requirements workshop in 1 week (after flow is validated)

**Slide 2: As-Is Recap**
- High-level As-Is flow (simplified diagram or 5-6 bullet points)
- Current pain points (top 5)
- Current cycle time and accuracy metrics

**Slides 3-6: To-Be Process Walkthrough (1 slide per 2-3 steps)**
- Step-by-step To-Be process
- Highlight what's automated vs. manual
- Show system interactions
- Callout major changes from As-Is
- Note: Keep visual and easy to follow

**Slide 7: Key Changes Summary**
| What's New | What's Eliminated | What's Automated | Expected Benefit |
|------------|-------------------|------------------|------------------|
| Real-time MDMS integration | Manual MDMS lookups | Read retrieval and validation | 45 min → 2 min |
| Auto-ingestion in CSS | Manual data re-entry | Response handling | Zero transcription errors |
| [etc] | [etc] | [etc] | [etc] |

**Slide 8: Exception Handling**
- What happens when MDMS fails?
- What happens when read is unavailable?
- Manual override capabilities
- Escalation paths

**Slide 9: Comparison Metrics**
| Metric | As-Is | To-Be | Improvement |
|--------|-------|-------|-------------|
| Cycle time | 2 hours | 10 minutes | 92% reduction |
| Manual steps | 8 steps | 2 steps | 75% reduction |
| Error rate | ~5% | <1% | 80% reduction |
| [etc] | [etc] | [etc] | [etc] |

**Slide 10: Open Questions & Discussion**
- List any areas where team is uncertain
- Note any gaps (desired automation without solution requirement)
- Confirm next steps

**Pre-Workshop Actions:**
- Send deck to SCE participants 2 days in advance
- Include: "Please review To-Be flow and come prepared to validate each step"
- Request: "Please bring examples of edge cases or exceptions we should consider"
- Set expectation: "This session validates the PROCESS. Next session will cover detailed REQUIREMENTS."

**Output:**
- Process validation workshop deck (8-10 slides)
- Discussion guide for facilitator
- Pre-read email sent to participants

---

**Outputs from Stage 4:**
- Draft To-Be Visio flow
- To-Be narrative
- Process validation workshop deck
- Foundation ready for Stage 5 Manager QA

**Quality Check (Onshore - included in Activity 1 & 2 time):**
- Every automation has supporting solution requirement
- No invented capabilities not in solution requirements
- Flow addresses all As-Is pain points
- Flow is logical and complete
- Workshop deck tells clear story

---

### STAGE 5: Manager Review - Process Flow (1 hour - Manager Review)

**Objective:** Quality gate for To-Be flow BEFORE workshop

**FOCUS:** This review is ONLY on the To-Be process flow, not the complete BRD. We validate the process design before investing time in requirements generation.

**Manager Review Checklist:**

**Process Flow Quality:**
- [ ] To-Be flow addresses all As-Is pain points identified in Stage 1
- [ ] To-Be flow aligns with AMI 2.0 capabilities from filtered solution requirements
- [ ] To-Be flow is logical and complete (no missing steps, no gaps in handoffs)
- [ ] Process improvements are realistic and implementable
- [ ] Decision points are clear (if/then logic makes sense)
- [ ] Exception handling is defined (what happens when automation fails)
- [ ] Manual steps that remain are justified and necessary

**Automation Validation:**
- [ ] Every automated step is backed by a solution requirement
- [ ] No invented capabilities (all automation claims reference actual solution requirements)
- [ ] Appropriate balance between automation and human oversight
- [ ] Manual override/fallback options exist for critical steps

**Alignment with Program Goals:**
- [ ] Flow supports success criteria from Section 1.2.2
- [ ] Expected benefits are quantified (time saved, errors reduced)
- [ ] Cycle time improvement is realistic based on solution requirements
- [ ] Scalability considerations addressed

**Workshop Readiness:**
- [ ] Workshop deck tells clear story
- [ ] Visio flow is professional and easy to understand
- [ ] Changes vs. As-Is are clearly articulated
- [ ] Open questions/gaps are identified for discussion

**Risk Identification:**
- [ ] Flag any high-risk areas for workshop discussion
- [ ] Identify dependencies on other L3 processes
- [ ] Note any gaps where desired automation lacks solution requirement
- [ ] Highlight assumptions that need SCE validation

**Manager Actions:**
- Provide feedback to analyst within 4 hours (this is quick turnaround to keep flow moving)
- Identify 2-3 critical areas for workshop focus
- Approve for Process Validation Workshop OR send back for revision
- If sent back: Specific, actionable feedback on what needs to change

**Common Issues to Flag:**

**❌ BAD - Invented automation without solution requirement:**
> To-Be Step 4: "MDMS automatically validates meter health and schedules preventive maintenance"
> Problem: No solution requirement supports automated preventive maintenance scheduling

**✅ GOOD - Automation backed by solution requirement:**
> To-Be Step 4: "MDMS returns read with quality flag (actual/estimated/edited) per MDMS-REQ-052, 
> triggering CSS validation rules per CSS-REQ-107"

**❌ BAD - Missing exception handling:**
> To-Be Step 5: "CSS requests on-demand read from MDMS"
> Problem: What happens if MDMS times out or meter is offline?

**✅ GOOD - Clear exception handling:**
> To-Be Step 5: "CSS requests on-demand read from MDMS (HES-REQ-019). If no response within 
> 5 minutes, route to BPEM queue for field investigation with notification to billing user."

**❌ BAD - Vague improvement claim:**
> "Process will be much faster and more accurate"

**✅ GOOD - Quantified improvement:**
> "Cycle time reduced from 2 hours (As-Is manual lookups) to 10 minutes (To-Be automated 
> retrieval per MDMS-REQ-047), 92% reduction. Transcription errors eliminated via 
> auto-ingestion (CSS-REQ-103)."

**Output:** 
- Approved for Stage 6 (Process Validation Workshop)
- OR Feedback for revision with specific action items
- Workshop focus areas identified

---

### STAGE 6: Process Validation Workshop (1.5 hours - Onshore Analyst + Manager)

**Objective:** Validate To-Be process flow with SCE stakeholders BEFORE generating requirements

**CRITICAL FOCUS:** This workshop is ONLY about validating the process flow. We are NOT discussing detailed requirements yet. That comes in Session 2 (Stage 10) after the flow is validated.

**Why Split into Two Sessions:**
- Validating process AND requirements in one session is overwhelming
- Process changes invalidate requirements → better to validate process first
- Shorter, focused session is easier to schedule
- Team can generate higher-quality requirements from validated flow
- Session 2 will be more productive with stable foundation

---

**Pre-Workshop (2 hours - included in Stage 4, Activity 2):**

Completed in Stage 4:
- Process validation deck created (8-10 slides)
- Deck sent to SCE participants 2 days in advance
- Expectations set: "This session validates the TO-BE PROCESS FLOW only"

---

**Workshop Session 1 (1.5 hours):**

**Attendees:**
- BPD Manager (facilitator)
- Onshore Analyst (note-taker and scribe)
- SCE Process Owner
- SCE Business Sponsor (optional but recommended)
- SCE SMEs who execute this process (2-4 people)
- SI representative (optional, observer only)

**Facilitation Setup:**
- Use Teams meeting with Copilot transcription enabled
- Share screen with process validation deck
- Have Visio flow open for reference
- Note-taker captures all feedback in real-time

---

**Segment 1: To-Be Process Validation (60 minutes)**

**Opening (5 min):**
- Recap purpose: "We're here to validate the To-Be process flow design"
- Set expectation: "Next session we'll dive into detailed requirements"
- Review agenda: Process walkthrough → Key changes → Exception handling → Next steps

**As-Is Recap (5 min):**
- Quick reminder of current state (show Slide 2)
- Confirm pain points: "Are these still the main issues you face?"

**To-Be Walkthrough (40 min):**

*Walk through To-Be flow step-by-step (Slides 3-6):*

For each process step:
1. **Present the step:** "In the To-Be process, when [trigger occurs], the system will..."
2. **Highlight what's different:** "This eliminates the current manual lookup that takes 45 minutes"
3. **Pause for validation:** "Does this workflow make sense? Is anything missing?"
4. **Capture feedback:** Note-taker records all comments, questions, concerns

**AI Scribe Assist:**
```
Use Copilot to transcribe Teams meeting and generate:
- Action items with owners
- Decisions made (e.g., "Confirmed: CSS will auto-request reads without user clicking 'Submit'")
- Process changes requested (e.g., "Add validation step before routing to billing")
- Open questions flagged for follow-up
- Concerns raised (e.g., "What if MDMS is down during month-end?")
```

**Key Validation Questions to Ask:**
- "Does this sequence of steps make sense for how you work?"
- "Are we missing any steps that need to happen?"
- "What edge cases or exceptions should we account for?"
- "Who needs to be involved in [specific step]?"
- "What happens if [system X] is unavailable?"
- "Are there regulatory or policy requirements we need to consider?"

**Changes Summary Review (10 min):**
- Show Slide 7 (Key Changes Summary)
- Walk through what's new, what's eliminated, what's automated
- Confirm expected benefits are realistic
- Question: "Are these improvements achievable and valuable?"

---

**Segment 2: Exception Handling & Edge Cases (20 minutes)**

**Exception Handling Review:**
- Show Slide 8 (Exception Handling)
- Walk through: "What happens when MDMS fails? When meter is offline? When data is invalid?"
- Validate manual override capabilities
- Confirm escalation paths

**Edge Cases Discussion:**
- Ask: "What scenarios might break this process?"
- Examples: System outages, data quality issues, unusual customer situations
- Capture: How should process handle each edge case?

**Manual Steps Validation:**
- Confirm which steps still require human intervention
- Validate why manual steps are necessary
- Ensure manual steps are realistic (staff have time, tools, training)

---

**Segment 3: Confirm Changes & Next Steps (10 minutes)**

**Changes Recap:**
- Summarize all requested changes to To-Be flow
- Classify: Minor tweaks vs. major redesign

**Change Classification:**

**MINOR TWEAKS (can incorporate quickly):**
- Add a validation step
- Change sequence of 2 steps
- Add an additional notification
- Clarify a decision point
- **Impact:** Session 2 can proceed in 1 week

**MAJOR REDESIGN (need significant rework):**
- Fundamental workflow changes
- Different system integration approach
- New process steps that change overall flow
- Removal of core automation
- **Impact:** Session 2 rescheduled for 2 weeks to allow rework

**Decision Point:**
- If changes are MINOR → "We'll incorporate these and schedule Session 2 for next week"
- If changes are MAJOR → "We need to redesign and will reschedule Session 2 for 2 weeks"

**Set Expectations for Session 2:**
- "Next session will cover detailed business requirements"
- "Requirements will be based on this validated To-Be flow"
- "We'll discuss functional requirements, user acceptance expectations, and traceability"
- "Duration: 2 hours"
- "We'll send materials 2 days in advance"

**Action Items:**
- Confirm who will attend Session 2
- Identify any additional stakeholders needed for requirements discussion
- Set tentative date for Session 2
- Any follow-up research needed before Session 2

---

**Post-Workshop (2 hours - Onshore):**

**Immediate Actions (30 min):**
- Review Copilot transcription
- Clean and organize workshop notes
- Create change log with all requested process modifications
- Classify each change: Add step, Modify step, Remove step, Clarify logic, Add exception handling

**Change Log Format:**
| Change # | Type | Current To-Be | Requested Change | Rationale | Impact |
|----------|------|---------------|------------------|-----------|--------|
| 1 | Add Step | [none] | Add validation of account status before requesting read | Prevent reads on closed accounts | Minor - add one step |
| 2 | Modify Step | Step 4: CSS requests read | Add priority flag for urgent requests | Support same-day final bills | Minor - enhance existing step |

**Communication (30 min):**
- Send workshop summary to all participants within 24 hours
- Include: Decisions made, changes requested, next steps
- Confirm Session 2 date and time
- Thank participants for their input

**Begin Stage 7 (Process Flow Refinement) (1 hour):**
- Start incorporating changes immediately
- Goal: Have updated flow ready for async validation within 2 days

---

**Outputs from Stage 6:**
- Workshop notes with validated To-Be flow feedback
- Change log (all requested process modifications)
- Classification: Minor tweaks vs. major redesign
- Session 2 scheduled
- Foundation for Stage 7 (Process Flow Refinement)

**Success Metrics:**
- All workshop participants agree on To-Be flow direction
- Changes are clearly documented and understood
- Team knows exactly what to fix before Session 2
- Session 2 date is confirmed

**Red Flags (escalate to Manager):**
- Fundamental disagreement on process approach
- Major gaps in solution requirements (can't automate as planned)
- Stakeholders request capabilities that don't exist in solution requirements
- Scope creep (trying to solve problems outside this L3 process)

---

### STAGE 7: Process Flow Refinement (3 hours - Offshore with Onshore QA)

**Objective:** Incorporate workshop feedback to create VALIDATED To-Be flow

**CRITICAL MILESTONE:** At the end of this stage, we have a VALIDATED To-Be flow that will serve as the stable foundation for requirements generation in Stage 8. No more process changes after this point (unless major issues discovered later).

---

**Activity 1: Update To-Be Flow Based on Workshop Feedback (2 hours - Offshore)**

**Input:** Change log from Stage 6 with all requested modifications

**Process Flow Updates:**

**Step 1: Incorporate Changes in Visio (1 hour)**
- Add new process steps as requested
- Modify existing steps based on feedback
- Update decision points and branching logic
- Revise exception handling flows
- Add clarifying annotations or callouts
- Ensure swimlanes correctly show role ownership
- Update visual indicators (green for automated, yellow for manual)

**Step 2: Update Process Narrative (1 hour - with AI assist)**

Run AI prompt (see **Appendix A.7.1: Update To-Be Narrative After Workshop**)

**Process:**
- Input: Current To-Be narrative, change log from Stage 6 workshop
- AI updates narrative to incorporate all workshop changes
- Maintains numbered step format and professional language
- Review AI output for accuracy and logical flow

---

**Activity 2: Validate Changes with Onshore (1 hour - Onshore QA)**

**Onshore Analyst Review:**

**Completeness Check:**
- [ ] All changes from change log incorporated in Visio
- [ ] All changes from change log incorporated in narrative
- [ ] Visio and narrative are consistent (same steps, same sequence)
- [ ] No workshop feedback missed or overlooked

**Quality Check:**
- [ ] Updated flow still addresses all As-Is pain points
- [ ] Updated flow still aligns with solution requirements
- [ ] Automation claims still backed by solution requirements
- [ ] Flow is logical and complete (no new gaps introduced)
- [ ] Exception handling is comprehensive

**Documentation Check:**
- [ ] Changes are tracked (can explain what changed and why)
- [ ] Improvement rationale updated if changes affect benefits
- [ ] Any new gaps flagged (if workshop requests require solution requirements we don't have)

**Prepare for Async Validation (30 min):**

Create validation email to workshop participants:

**Subject:** Updated To-Be Flow for [L3 Process Name] - Please Validate

**Body:**
```
Hi [Participants],

Thank you for your input in yesterday's process validation workshop. We've incorporated 
all the changes you requested into the updated To-Be flow.

CHANGES INCORPORATED:
1. [Change #1 description]
2. [Change #2 description]
3. [Change #3 description]
[etc.]

ATTACHED:
- Updated To-Be Visio flow
- Updated To-Be process narrative

PLEASE REVIEW:
Please review the attached materials and confirm:
✓ All your feedback has been incorporated correctly
✓ The updated flow accurately reflects our discussion
✓ No additional changes are needed

NEXT STEPS:
If the flow looks good, we'll proceed with generating detailed business requirements 
based on this validated flow. We'll reconvene in [1 week / 2 weeks] for Session 2 to 
review the requirements.

Please respond by [DATE - 24 hours from now] with any concerns or confirmation that 
the flow is approved.

Thank you!
[Name]
```

**Send Validation Email:**
- Attach updated Visio flow
- Attach updated narrative (PDF)
- Set 24-hour response deadline
- CC Manager for visibility

---

**Activity 3: Async Validation Period (24 hours wait - no analyst time)**

**Possible Outcomes:**

**✅ APPROVED (Best Case - 80% of time):**
- Participants confirm flow is correct
- Minor clarifications may be requested (address immediately)
- **Action:** Proceed to Stage 8 (Requirements Generation)
- **Milestone:** VALIDATED TO-BE FLOW ✓

**⚠️ MINOR ADJUSTMENTS (Acceptable Case - 15% of time):**
- Small tweaks requested (e.g., clarify wording, adjust one decision point)
- Can be addressed in <1 hour
- **Action:** Make adjustments, send updated version, get quick confirmation
- **Milestone:** VALIDATED TO-BE FLOW ✓ (slight delay)

**🔴 MAJOR ISSUES (Escalation Case - 5% of time):**
- Significant misunderstanding revealed
- Need to rework substantial portions of flow
- **Action:** Escalate to Manager, assess:
  - Can we address quickly? (1-2 days rework)
  - Do we need another workshop session?
  - Is there a fundamental scope or approach issue?
- **Impact:** Delay Stage 8 until flow is truly validated

---

**Outputs from Stage 7:**
- **VALIDATED To-Be Visio flow** (approved by SCE stakeholders)
- **VALIDATED To-Be process narrative** (approved by SCE stakeholders)
- Updated improvement summary (if changes affected expected benefits)
- Any new gaps flagged (if workshop requests require missing solution requirements)
- **CRITICAL MILESTONE ACHIEVED:** Stable foundation for requirements generation

**Quality Metrics:**
- % of BRDs where To-Be is approved on first async validation (target: >80%)
- Average time from workshop to validated flow (target: <2 days)
- % of flows requiring major rework after validation (target: <5%)

**Handoff to Stage 8:**
- Validated To-Be flow is now locked as foundation
- Any future process changes require formal change control
- Team can confidently generate requirements knowing flow won't change
- User journeys and requirements will map to actual confirmed process

**Success Criteria:**
- All workshop participants have confirmed approval
- Visio and narrative are consistent
- Flow addresses pain points and aligns with solution requirements
- No outstanding questions or concerns
- Ready to generate requirements in Stage 8

---

## **PHASE 2: REQUIREMENTS DEVELOPMENT**
**Goal:** Build complete BRD with requirements, traceability, and gap analysis  
**Stages:** 8-11  
**Milestone:** ✅ COMPLETE BRD DRAFT READY FOR CLIENT REVIEW

---

### STAGE 8: Requirements Generation (9.4 hours - Offshore with Onshore QA)

**Objective:** Generate complete BRD content based on the VALIDATED To-Be flow from Stage 7

**CRITICAL CONTEXT:** We now have a validated To-Be flow that SCE stakeholders have approved (Stage 7). This is the stable foundation for all requirements, user journeys, and remaining BRD content. The risk of rework is dramatically reduced because the process design is locked.

**Foundation at this stage:**
- ✅ Validated As-Is flow (Stage 1)
- ✅ Completed Section 1 with SCE-specific details (Stage 3)
- ✅ Filtered solution requirements (Stage 2)
- ✅ **VALIDATED To-Be flow (Stage 7)** ← Critical difference from old approach!

**CRITICAL CONTEXT: Two-Layer Requirements Architecture**

This stage produces **BUSINESS REQUIREMENTS** (Layer 1) that trace to **SCE'S SOLUTION REQUIREMENTS** (Layer 2):

**LAYER 1: Business Requirements (what we create in BRDs)**
- Process-focused, business outcome-oriented
- Written from user/stakeholder perspective
- Include fit criteria (measurable acceptance tests)
- ~15-25 requirements per L3 process
- Answer: "What must this process accomplish?"

**LAYER 2: Solution Requirements (SCE's existing ~3000)**
- System-focused, technical specifications
- Vendor-facing, detailed, testable
- Already vetted through RFP process
- Answer: "What must the systems do?"

**TRACEABILITY:**
- Each business requirement → traces to → 1 or more solution requirements
- Shows how business needs map to system capabilities
- SI uses both layers: BRDs for business context + solution requirements for implementation

---

**Activities:**

**Activity 1: User Journey Mapping (2 hours - Offshore with AI)**

**Objective:** Create user journey maps based on VALIDATED To-Be flow

**Prerequisites:** 
- Use actual SCE user types from Section 1.3.5 (captured in Stage 3)
- Use VALIDATED To-Be flow from Stage 7 (workshop-approved)
- Reference workshop notes from Stage 6 for user concerns

**AI Prompt:** See **Appendix A.8. User Journey Mapping"

**Process:**
1. Run AI prompt with validated To-Be flow as input (1.5 hrs)
2. Review AI output for accuracy (0.5 hrs)
   - Verify journeys map to actual validated To-Be steps
   - Ensure user types match Section 1.3.5 (actual SCE roles)
   - Confirm scenarios are realistic for this validated process
   - Check that "What to Change" reflects validated To-Be improvements

**Output:**
- 3-5 user journey scenarios mapping to validated To-Be flow
- Journeys are stable (won't need rework because To-Be is validated)

---

**Activity 2: Business Requirements Generation with Traceability (3.5 hours - Offshore with AI, Onshore QA)**

**CRITICAL DESIGN PRINCIPLE:** Business requirements gathering is an **exploratory process** that starts with business needs, not a translation exercise from solution requirements.

**Step 2.1: Generate Business Requirements from Process Needs (3 hours - Offshore with AI)**

**Objective:** Create 15-25 business requirements based on what the VALIDATED process needs to accomplish - WITHOUT referencing solution requirements yet.

**AI Prompt:** See **Appendix A.8. Business Requirements Generation - Step 2.1A"

**Process:**
1. Run AI prompt with validated To-Be flow as input (2.5 hrs)
2. Review AI output for completeness (0.5 hrs)
   - Requirements cover all major validated To-Be steps
   - Mix of system capabilities, process procedures, data quality, integration, exceptions
   - Include manual procedures and organizational requirements
   - 15-25 requirements generated

**Output:**
- 15-25 business requirements in table format
- Requirements based on business needs (NOT yet traced to solution requirements)

---

**Step 2.2: Trace to Solution Requirements (30 minutes - Offshore with AI)**

**Objective:** Map each business requirement to supporting solution requirements

**AI Prompt:** See **Appendix A.8. Business Requirements Generation - Step 2.1B"

**Process:**
1. Run AI prompt to trace requirements (20 min)
2. Onshore QA reviews traceability (10 min)
   - Spot-check 10 traceability mappings for accuracy
   - Validate gap classifications make sense
   - Verify no false positives

**Output:**
- Business requirements with "Traces To" column completed
- Classification: Fully Covered, Partially Covered, Process Req, Organizational Req, or Gap

---

**Activity 3: User Acceptance Expectations (1 hour - Offshore with AI)**

**Objective:** Generate 8-12 UAEs describing what users expect from their experience

**AI Prompt:** See **Appendix A.8. User Acceptance Expectations"

**Process:**
1. Run AI prompt (45 min)
2. Quality check (15 min)
   - UAEs are in user voice ("Users expect...")
   - UAEs describe experience, not technical requirements
   - Appropriate level of need assigned (High/Med/Low)

**Output:**
- 8-12 User Acceptance Expectations
- Mix of High/Medium/Low level of need
- Ready to populate Section 4.3

---

**Activity 4: Performance Requirements (1 hour - Offshore with AI)**

**Objective:** Generate 5-10 performance business requirements based on validated end-to-end process flow

**AI Prompt:** See **Appendix A.8. Performance Requirements"

**Process:**
1. Run AI prompt (45 min)
2. Quality check (15 min)
   - Performance requirements cover timing, throughput, availability
   - Baseline on solution requirements where available
   - End-to-end process timing (not just individual system calls)

**Output:**
- 5-10 performance business requirements
- Traced to solution requirements where applicable

---

**Activity 5: Gap Analysis and Categorization (0.5 hours - Onshore)**

**Objective:** Review traceability and categorize gaps

**Detailed Approach:** See **Appendix A.8. Gap Analysis"

**Process:**
1. Review traceability from Activity 2, Step 2.2
2. Categorize gaps into 5 types:
   - ✅ Fully Covered (60-70%)
   - ⚠️ Partially Covered (10-15%)
   - 🔵 Process Requirements (10-15%)
   - 🔵 Organizational Requirements (5-10%)
   - 🔴 True System Gaps (5-10%)
3. Prepare gap summary for Master Requirements Workbook Sheet 7

**Output:**
- Gap analysis with categorized gaps
- Action plan for each gap type
- Foundation for workshop discussion in Stage 10

---

**Activity 6: Master Requirements Workbook Creation (1 hour - Offshore)**

**Objective:** Create single consolidated Excel workbook with auto-calculated traceability

**Detailed Structure:** See **Appendix A.8. Master Requirements Workbook"

**Create: Master_Requirements_[L3-ID]_[ProcessName].xlsx**

**8 Sheets:**
- Sheet 1: Business Requirements (MASTER - editable)
- Sheet 2: Performance Requirements (MASTER - editable)
- Sheet 3: User Acceptance Expectations (MASTER - editable)
- Sheet 4: Solution Requirements (REFERENCE)
- Sheet 5: Traceability Forward (AUTO-CALCULATED)
- Sheet 6: Traceability Reverse (AUTO-CALCULATED)
- Sheet 7: Gap Analysis Summary (AUTO-CALCULATED)
- Sheet 8: Instructions

**Process:**
1. Create workbook structure (30 min)
2. Populate Sheets 1-4 with content from Activities 2-4 (20 min)
3. Configure formulas for Sheets 5-7 (auto-calculated views) (10 min)

**Output:**
- Single Master Requirements Workbook
- All requirements and traceability in one maintainable file
- Auto-calculated views eliminate synchronization issues

---

**Activity 7: Populate Remaining BRD Sections (0.4 hours - Offshore)**

**Sections to Populate:**
- **Section 2.1:** Insert VALIDATED To-Be flow (Visio + narrative from Stage 7)
- **Section 2.2:** User journeys (from Activity 1)
- **Section 2.3:** User characteristics matrix (using validated To-Be steps)
- **Section 2.4:** Business constraints
- **Section 2.5:** User environment (from Section 1.3.5)
- **Section 2.6:** Assumptions and dependencies
- **Section 4.1:** Functional requirements (from Master Workbook Sheet 1)
- **Section 4.2:** Performance requirements (from Master Workbook Sheet 2)
- **Section 4.3:** UAEs (from Master Workbook Sheet 3)
- **Section 5.1:** Definitions/acronyms
- **Section 5.2:** Business policies and rules

---

**Outputs from Stage 8:**
- Complete BRD draft (~35-45 pages) based on VALIDATED To-Be flow
- **Master Requirements Workbook (Excel)** with 8 sheets
- All sections populated with content based on validated process flow
- Foundation ready for Stage 9 (Full BRD Review)

**Quality Check (Onshore - 1 hour included in activities above):**
- 25% of requirements spot-checked for quality
- Requirements map to validated To-Be steps (minimal rework risk)
- UAEs distinct from business requirements
- Master Requirements Workbook formulas working correctly
- Traceability accurate
- Gap analysis reasonable
- No contradictions with solution requirements

**Key Benefit of This Approach:**
Since requirements are generated from a VALIDATED To-Be flow (Stage 7), there is minimal risk of rework. In the old approach, process changes during the workshop often invalidated requirements and user journeys, requiring significant rework. Now, the process is locked before requirements are generated.

---
### STAGE 9: Manager Review - Full BRD (1 hour - Manager Review)

**Objective:** Quality gate for complete BRD before Requirements Workshop (Session 2)

**CONTEXT:** This is the full BRD review. The To-Be flow was already validated in Stage 7, so this review focuses on requirements quality, traceability, and content completeness.

**Manager Review Checklist:**

**Content Completeness:**
- [ ] All template sections populated (no "[TBD]" placeholders)
- [ ] Validated To-Be flow from Stage 7 is embedded (Visio image + narrative)
- [ ] Minimum 15 functional business requirements
- [ ] Minimum 5 performance business requirements
- [ ] Minimum 8 User Acceptance Expectations
- [ ] All requirements have fit criteria and rationale
- [ ] All UAEs have level of need (High/Med/Low)
- [ ] Master Requirements Workbook created with all 8 sheets
- [ ] Gap analysis in Sheet 7 is complete

**Requirement Quality (sample 10 requirements):**
- [ ] Each requirement is single, testable statement
- [ ] No ambiguous terms ("user-friendly," "efficient," "as needed")
- [ ] Fit criteria are objective and measurable
- [ ] Requirements describe "what" (outcome), not "how" (design/implementation)
- [ ] Proper traceability to capabilities AND solution requirements
- [ ] Business requirements are distinct from solution requirements (not just rephrasing)
- [ ] Requirements map to validated To-Be process steps

**User Acceptance Expectations Quality (sample 5 UAEs):**
- [ ] UAEs written in user voice ("Users expect that...")
- [ ] UAEs describe experience/expectations, not technical specifications
- [ ] UAEs are distinct from business requirements (complementary, not redundant)
- [ ] Level of need (High/Med/Low) appropriately assigned
- [ ] Coverage across key categories (reliability, usability, transparency, automation, exceptions, performance)

**Traceability Quality (Master Requirements Workbook):**
- [ ] Sheet 1: All BRs have entries in "Traces To" column (or flagged as gap)
- [ ] Sheet 5: Traceability Forward formulas working, auto-populates from Sheets 1-4
- [ ] Sheet 6: Traceability Reverse shows which BRs use each solution req
- [ ] Sheet 7: Gap Analysis auto-calculated counts match expectations
- [ ] Test formula integrity: Change a BR's traceability in Sheet 1 → verify Sheets 5-7 update
- [ ] Spot-check 10 traceability mappings for accuracy
- [ ] No business requirement contradicts solution requirement
- [ ] Gap analysis is reasonable (process/org requirements vs. true system gaps correctly classified)

**SCE Alignment:**
- [ ] Terminology consistent with ConOps and solution requirements
- [ ] Success criteria match program KPIs
- [ ] Dependencies on other L3 processes documented
- [ ] Release assignments align with IT roadmap
- [ ] Requirements support validated To-Be flow (no misalignment)

**Formatting:**
- [ ] Professional appearance
- [ ] Consistent heading styles
- [ ] Tables properly formatted (especially Master Requirements Workbook)
- [ ] Diagrams legible and labeled
- [ ] Validated To-Be flow clearly shows improvements vs. As-Is

**Workshop Readiness (Session 2):**
- [ ] Requirements are ready for detailed review
- [ ] Traceability can be presented clearly
- [ ] Gap analysis ready for discussion
- [ ] Open questions identified for workshop

**Manager Actions:**
- Provide feedback within 4 hours (quick turnaround to keep momentum)
- Identify 2-3 critical requirements areas for Session 2 focus
- Approve for Requirements Workshop (Session 2) OR send back for revision
- If sent back: Specific, actionable feedback

**Output:**
- Approved for Stage 10 (Requirements Workshop - Session 2)
- OR Feedback for revision with specific action items
- Workshop focus areas identified

---

### STAGE 10: Requirements Validation Workshop (2 hours - Onshore Analyst + Manager)

**Objective:** Validate business requirements, UAEs, and traceability with SCE stakeholders

**CONTEXT:** This is Session 2 of the two-part workshop approach. Session 1 (Stage 6) validated the To-Be process flow. Now we validate the requirements that were generated from that validated flow.

**Why This Approach Works:**
- To-Be flow is stable (validated in Session 1)
- Requirements map to confirmed process steps
- Workshop can focus entirely on requirements without process changes
- Much more productive than trying to validate process AND requirements simultaneously

---

**Pre-Workshop (2 hours - Onshore):**

**Create Requirements Workshop Deck (15-20 slides) - Key Slides:**
- Slide 1: Agenda (Requirements validation, 2 hours)
- Slide 2: To-Be Flow Recap (validated in Session 1)
- Slides 3-6: Top Business Requirements
- Slide 7: User Acceptance Expectations
- Slide 8: Performance Requirements
- Slides 9-10: Traceability Overview
- Slide 11: Gap Analysis Summary
- Slide 12: Open Questions

**Pre-Workshop Actions:**
- Send deck to SCE participants 2 days in advance
- Attach: Full BRD, Master Requirements Workbook
- Set expectation: "This session validates REQUIREMENTS. Process flow already validated."

---

**Workshop Session 2 (2 hours):**

**Attendees:**
- BPD Manager (facilitator), Onshore Analyst (note-taker)
- SCE Process Owner, Business Sponsor, SMEs (2-4 people)
- SI representative (optional, observer)

**Segment 1: Quick Process Recap (10 minutes)**
- Recap Session 1 validated flow
- Confirm no major process issues
- Focus on requirements today

**Segment 2: Business Requirements Deep Dive (75 minutes)**
- Part A: Functional Requirements (45 min) - Walk through top 10-12 requirements
- Part B: User Acceptance Expectations (15 min) - Validate UAEs
- Part C: Performance Requirements (15 min) - Confirm thresholds

**Segment 3: Traceability & Gap Review (25 minutes)**
- Explain two-layer requirements model
- Show traceability examples in Master Requirements Workbook
- Discuss partially covered requirements and true system gaps
- Classify gaps and resolution approach

**Segment 4: Wrap-Up & Next Steps (10 minutes)**
- Summarize requested changes
- Confirm gap resolution plan
- Next steps: Refinement (Stage 11) → 5-day review (Stage 12) → Final approval (Stage 13)

---

**Post-Workshop (2 hours - Onshore):**
- Review Copilot transcription
- Create requirements change log
- Send workshop summary within 24 hours
- Confirm 5-day review cycle start date

---

**Outputs from Stage 10:**
- Workshop notes with requirements feedback
- Requirements change log (with requested modifications)
- Gap resolution decisions
- Foundation for Stage 11 (Requirements Refinement)

---

### STAGE 11: Requirements Refinement (5.8 hours - Offshore with Onshore QA)

**Objective:** Incorporate workshop feedback into requirements

**CRITICAL NOTE:** The To-Be process flow is stable (validated in Stage 7). This stage ONLY refines requirements, UAEs, and performance requirements. No process flow changes unless a critical issue was discovered.

---

**Activity 1: Requirements Updates (4 hours - Offshore with AI)**

**Step 1: Update Business Requirements (2 hours)**
- Modify existing requirements per feedback
- Add new requirements requested in workshop
- Remove requirements deemed out of scope
- Update fit criteria if thresholds changed
- Adjust priorities based on workshop discussion

**Step 2: Update User Acceptance Expectations (0.5 hours)**
- Add new UAEs suggested in workshop
- Modify level of need if feedback indicated different priority
- Remove UAEs if deemed redundant

**Step 3: Update Performance Requirements (0.5 hours)**
- Adjust timing thresholds based on workshop discussion
- Modify throughput or availability targets if needed
- Add new performance requirements if identified

**Step 4: Update Master Requirements Workbook (1 hour)**
- Update Sheets 1-3 with all changes
- Sheets 5-7 auto-recalculate (traceability and gap analysis)
- Verify formulas still working correctly
- Update gap analysis if any gaps were resolved or new ones identified

---

**Activity 2: Capabilities & Success Criteria Tuning (1.8 hours - Onshore)**

**Validate Alignment:**
- [ ] All updated requirements still trace to capabilities (Section 1.2.1)
- [ ] Success criteria still achievable given final requirements
- [ ] No capability is orphaned (every capability has supporting requirements)
- [ ] No requirement contradicts success criteria

**Adjust if Needed:**
- If workshop changed requirements significantly, may need to adjust success criteria
- Update expected benefits if cycle time or accuracy targets changed
- Ensure consistency across BRD sections

---

**Outputs from Stage 11:**
- Updated BRD with all workshop feedback incorporated
- Updated Master Requirements Workbook (all sheets current)
- Requirements change log with disposition (accepted/modified/rejected)
- Any outstanding issues flagged for client review cycle

**Quality Check (Onshore - included in Activity 2 time):**
- All workshop changes incorporated correctly
- Master Requirements Workbook formulas still working
- No contradictions introduced
- Traceability still accurate
- Gap analysis reflects workshop decisions

**Ready for Stage 12:** Client Review & Rework (5-day cycle)

---

## **PHASE 3: APPROVAL & DELIVERY**
**Goal:** Secure client approval and deliver final BRD package  
**Stages:** 12-13  
**Milestone:** ✅ APPROVED BRD DELIVERED TO SI

---

### STAGE 12: Client Review & Rework (4.4 hours + 5 days wait → Offshore)

**Objective:** Formal client review cycle and comment disposition

**Client Review Period (5 business days):**
- Submit BRD via SharePoint/agreed repository
- Client reviews offline
- Client provides consolidated comments via comment log or track changes

**During Wait Time:**
- **DO NOT IDLE:** Progress other BRDs through earlier stages
- Typical pattern: While BRDs 1-3 are in client review, work on drafting BRDs 4-9

**Comment Incorporation (4.4 hours - Offshore with AI):**

1. **Comment Triage (1 hour - Onshore):**
   - Review all client comments
   - Categorize: Accept / Discuss / Reject
   - Flag any comments requiring manager escalation
   - Create disposition plan

2. **AI-Assisted Rework (3 hours - Offshore):**
   ```
   AI PROMPT:
   "I have client review comments on a BRD. Help me address them:
   
   Current requirement: [paste requirement]
   
   Client comment: 'This requirement is too vague. We need specific SLA for response time.'
   
   Proposed revision: [your draft]
   
   Please:
   1. Validate the revision addresses the comment
   2. Ensure fit criterion is now measurable
   3. Maintain professional requirement language
   4. Check for any unintended side effects"
   ```

3. **Comment Log Update (0.4 hours - Offshore):**
   - Document disposition for each comment
   - Track "Accept," "Revised," or "Discuss" status
   - Prepare responses for "Discuss" items

**Outputs:**
- Revised BRD with all accepted changes
- Comment disposition log
- List of items for discussion (if any)

**Quality Check:** Onshore validates all substantive changes

---

### STAGE 13: Finalization & Handoff (4 hours → Onshore)

**Objective:** Prepare BRD for formal approval and downstream use

**Activities:**

1. **Final Formatting (1.5 hours):**
   - Apply SCE document template styles
   - Generate table of contents
   - Number all requirements sequentially
   - Insert page numbers and headers/footers
   - Embed all Visio diagrams as high-resolution images
   - Run spell check and grammar review

   **AI Quality Check:**
   ```
   AI PROMPT:
   "Review this BRD for common quality issues:
   
   [Paste sections 4.1 and 4.2]
   
   Check for:
   - Duplicate requirement IDs
   - Missing fit criteria
   - Inconsistent terminology
   - Vague language (flag any 'should,' 'user-friendly,' 'efficient')
   - Requirements that describe design vs. business need
   
   Provide a checklist of issues found."
   ```

2. **Approval Package Creation (1.5 hours):**
   - Add approval signature page (Section 6)
   - Create 1-page executive summary
   - Prepare presentation deck (10 slides) for approval meeting:
     - Slide 1: Process overview
     - Slide 2: Key capabilities
     - Slide 3: To-Be process (high-level)
     - Slide 4-5: Top 10 requirements
     - Slide 6: Success metrics
     - Slide 7: Dependencies and risks
     - Slide 8: Implementation assumptions
     - Slide 9: Next steps (SI handoff)
     - Slide 10: Approval request

3. **Repository Storage (0.5 hours):**
   - Save to SharePoint with naming: `BRD_[L3-ID]_[ProcessName]_Final_v1.0.docx`
   - Upload To-Be Visio flow: `TOBE_[L3-ID]_[ProcessName]_v1.0.vsdx`
   - Upload As-Is Visio flow: `ASIS_[L3-ID]_[ProcessName]_v1.0.vsdx`
   - Upload approval deck
   - **Upload Master Requirements Workbook:** `Master_Requirements_[L3-ID]_[ProcessName]_v1.0.xlsx`
   - Update BRD tracker with "Ready for Approval" status

4. **Handoff Preparation (0.5 hours):**
   - Create SI handoff package:
     - **BRD (Word)** - Business requirements with fit criteria, rationale, and narrative sections (complete process documentation)
     - **As-Is flow (Visio)** - Current state process diagram
     - **To-Be flow (Visio)** - Future state process diagram
     - **Master Requirements Workbook (Excel)** - SINGLE consolidated file containing:
       - Sheet 1: Business Requirements (editable master)
       - Sheet 2: Performance Requirements (editable master)
       - Sheet 3: User Acceptance Expectations (editable master)
       - Sheet 4: Solution Requirements (filtered subset of SCE's 3000)
       - Sheet 5: Traceability Forward (auto-calculated: BR → Solution Reqs)
       - Sheet 6: Traceability Reverse (auto-calculated: Solution Req → BRs)
       - Sheet 7: Gap Analysis Summary (auto-calculated)
       - Sheet 8: Instructions for maintaining the workbook
   - Draft handoff email template:
     - Explain two-layer requirements model
     - Point to Master Requirements Workbook as single source of truth
     - Highlight auto-calculated traceability (Sheets 5-7)
     - Explain how to maintain: "Edit Sheets 1-3, Sheets 5-7 auto-update"
     - Highlight any gaps in Sheet 7 requiring change control discussion
   - Tag for OCM/Business Readiness team

**Outputs:**
- Final BRD ready for approval
- Approval presentation
- **Streamlined SI handoff package (4 artifacts instead of 6):**
  1. BRD (Word) - Business requirements and process documentation
  2. As-Is flow (Visio)
  3. To-Be flow (Visio)
  4. **Master Requirements Workbook (Excel)** - Replaces 3 separate files:
     - ✅ Replaces: Requirements table export
     - ✅ Replaces: Traceability matrix
     - ✅ Replaces: Filtered solution requirements
     - ✅ Benefit: Single source of truth, auto-calculated views, no synchronization issues
- Updated tracker

**SI Handoff Package Structure:**

```
/08_SI_Handoff_Packages/BRD-[ID]_[ProcessName]/
├── BRD_[L3-ID]_[ProcessName]_Final_v1.0.docx
├── ASIS_[L3-ID]_[ProcessName]_v1.0.vsdx
├── TOBE_[L3-ID]_[ProcessName]_v1.0.vsdx
└── Master_Requirements_[L3-ID]_[ProcessName]_v1.0.xlsx
    ├── Sheet 1: Business Requirements (EDIT HERE - 15-25 functional reqs)
    ├── Sheet 2: Performance Requirements (EDIT HERE - 5-10 performance reqs)
    ├── Sheet 3: User Acceptance Expectations (EDIT HERE - 8-12 UAEs)
    ├── Sheet 4: Solution Requirements (REFERENCE - 20-50 filtered from SCE's 3000)
    ├── Sheet 5: Traceability - Forward (AUTO-CALCULATED from Sheets 1-4)
    ├── Sheet 6: Traceability - Reverse (AUTO-CALCULATED from Sheets 1-4)
    ├── Sheet 7: Gap Analysis Summary (AUTO-CALCULATED from Sheets 1-4)
    └── Sheet 8: Instructions (how to maintain this workbook)
```

**Benefits for SI:**
- **BRD** provides business context and "why this matters"
- **Master Requirements Workbook** provides:
  - Business requirements (what process must accomplish)
  - Performance requirements (how fast, how many)
  - User acceptance expectations (what users expect)
  - Solution requirements (what systems must do)
  - Automatic traceability (business needs → system capabilities)
  - Automatic gap analysis (what's not covered)
  - Impact analysis (if solution req changes, what's affected)
- **Single source of truth** eliminates synchronization issues
- **Auto-calculated views** reduce maintenance burden
- **Clear instructions** enable SI to maintain as design evolves

**Approval Process:**
- Schedule approval meeting with business sponsors (30-60 min)
- Present highlights using deck
- Obtain signatures on Section 6
- If approved → handoff to SI and OCM
- If not approved → return to Stage 11 (requirements refinement cycle)

---

## APPENDIX A: AI AUTOMATION PROMPTS

This appendix contains all AI prompts used throughout the 13-stage BRD factory-line procedure. Each prompt is referenced in the main procedure by its appendix number (e.g., "See **Appendix A.8.2A**").

### CRITICAL PRINCIPLE: AI Assists, Doesn't Replace Human Judgment

**AI is a force multiplier for synthesis, formatting, and consistency - NOT a replacement for gathering actual information from SCE stakeholders.**

**The Pattern:**
1. **Humans gather information** (interviews, workshops, client feedback)
2. **AI synthesizes and formats** (turns notes into structured content)
3. **Humans validate and refine** (ensure accuracy and quality)

**Never use AI to:**
- Invent SCE-specific process details we haven't verified
- Create requirements without tracing to actual business needs
- Make up stakeholder positions or decisions
- Generate content that contradicts what SCE told us

**Always use AI to:**
- Structure and synthesize interview notes into coherent narratives
- Generate first-draft requirements from validated capabilities
- Incorporate workshop feedback into BRD sections
- Check consistency and flag quality issues
- Format and polish professional deliverables
---

## APPENDIX A: AI AUTOMATION PROMPTS

This appendix contains all AI prompts used throughout the 13-stage BRD factory-line procedure. Each prompt is referenced in the main procedure by its appendix number (e.g., "See **Appendix A.1.3**").

### CRITICAL PRINCIPLE: AI Assists, Doesn't Replace Human Judgment

**AI is a force multiplier for synthesis, formatting, and consistency - NOT a replacement for gathering actual information from SCE stakeholders.**

**The Pattern:**
1. **Humans gather information** (interviews, workshops, client feedback)
2. **AI synthesizes and formats** (turns notes into structured content)
3. **Humans validate and refine** (ensure accuracy and quality)

**Never use AI to:**
- Invent SCE-specific process details we haven't verified
- Create requirements without tracing to actual business needs
- Make up stakeholder positions or decisions
- Generate content that contradicts what SCE told us

**Always use AI to:**
- Structure and synthesize interview notes into coherent narratives
- Generate first-draft requirements from validated capabilities
- Incorporate workshop feedback into BRD sections
- Check consistency and flag quality issues
- Format and polish professional deliverables

---

### AI Tool Configuration

**Primary Tool:** Microsoft Copilot (ChatGPT 5.2+) via M365 tenant

**Setup Requirements:**
1. Create dedicated SharePoint site: "AMI 2.0 Knowledge Repository"
2. Upload all reference materials:
   - Previous AMI BRDs and requirements (PDFs, Excel)
   - Visio process flow library (100+ flows)
   - SCE ConOps and AMI 1.0 documentation
   - Industry standards and best practices
3. Tag all documents with metadata: L1 category, L2 category, utility name, year
4. Grant Copilot access permissions to repository

**Copilot Custom Instructions (apply to all team members):**
```
You are a business requirements analyst specializing in Advanced Metering Infrastructure (AMI) 
for electric utilities. When drafting requirements or process documentation:

1. Use SHALL/SHOULD/MAY convention (RFC 2119)
2. Write requirements as single, testable statements
3. Avoid solution/design language; focus on business needs
4. Include fit criterion for every requirement (how to verify)
5. Use utility industry terminology (MDMS, HES, CIS, VEE, etc.)
6. Follow this format for requirements:

   BR-XXX | Description | Fit Criterion | Rationale | Release

7. Keep language professional, concise, and unambiguous
8. Flag any subjective terms for human review ('efficient,' 'user-friendly,' etc.)
```

---

## STAGE 1 PROMPTS

### A.1.3: As-Is Process Narrative Synthesis

**Activity:** AI-Assisted Synthesis (Stage 1, Activity 3)  
**When to Use:** After conducting stakeholder interviews  
**Duration:** Part of 3-hour synthesis activity

**Prerequisites:**
- Raw interview notes or Copilot transcription from SCE SME interviews
- SCE AMI 1.0 documentation (if available)
- Similar process from another utility (for structure reference only)

**Prompt:**
```
I conducted stakeholder interviews about SCE's current [L3 Process Name]. 

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
true to how SCE actually does this today - don't make it sound better than it is.
```

**Expected Output:**
- As-Is process narrative (1-2 pages)
- Numbered steps in professional language
- Pain points clearly flagged with 'PAIN POINT:' prefix
- Based on actual SCE interview content

**Quality Check:**
- Verify narrative matches interview notes
- Ensure all pain points from interviews are captured
- Confirm SCE-specific details (not generic utility language)
- Validate system names match SCE's actual systems

---

## STAGE 2 PROMPTS

### A.2.1: Solution Requirements Filtering

**Activity:** Filter SCE's Solution Requirements (Stage 2, Activity 1)  
**When to Use:** After identifying systems involved from As-Is flow  
**Duration:** Part of 2-hour filtering activity

**Prerequisites:**
- As-Is flow from Stage 1 showing which systems are involved
- Access to SCE's full solution requirements library (~3,000 requirements)
- L3 process details from inventory

**Prompt:**
```
I need to identify which of SCE's solution requirements are relevant to [L3 Process Name].

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

CLASSIFICATION EXAMPLES:

DIRECTLY RELEVANT:
'MDMS shall return register reads within 2 minutes of request'
→ Directly supports process step 'Retrieve read from MDMS for off-cycle billing'
→ Enables business outcome 'Complete off-cycle bill within 10 minutes'

INDIRECTLY RELEVANT:
'MDMS shall maintain 40 months of interval data retention'
→ Indirectly supports off-cycle billing (data must exist to be retrieved)
→ But retention duration isn't core to the off-cycle billing workflow

NOT RELEVANT:
'MDMS shall aggregate transformer loading data'
→ Not relevant to off-cycle billing (this is a grid operations function)
→ Belongs to 'Monitor Feeder and Transformer Loading' L3 process

Focus on precision - when uncertain, mark INDIRECTLY and explain.
```

**Expected Output:**
- Excel table with ~20-50 filtered solution requirements
- Classification for each (Directly/Indirectly/Not Relevant)
- Clear mapping to process steps

**Quality Check:**
- Verify all systems from As-Is flow are represented
- Ensure directly relevant requirements genuinely support specific process steps
- Confirm not relevant requirements truly don't apply

---

### A.2.2: Capabilities Extraction from Repository

**Activity:** Extract Capabilities (Stage 2, Activity 2)  
**When to Use:** After filtering solution requirements  
**Duration:** Part of 3-hour capabilities drafting

**Prompt:**
```
I need to define business capabilities for [L3 Process Name].

CONTEXT:
Similar L3 processes from repository: [attach 2-3 similar BRDs for reference]
As-Is flow: [describe or attach]
Filtered solution requirements: [list 20-50 requirements]

TASK:
Generate 5-8 business capabilities that this process must deliver.

CAPABILITY DEFINITION:
A capability is a high-level business outcome or function, NOT a system feature.
Format: "Ability to [verb] [object] [outcome/benefit]"

EXAMPLES OF GOOD CAPABILITIES:
✅ "Ability to retrieve accurate meter reads on-demand to support same-day billing"
✅ "Ability to detect and route failed read requests to field investigation within 2 hours"
✅ "Ability to manually override automated reads when necessary with supervisor approval"

EXAMPLES OF BAD CAPABILITIES:
❌ "MDMS integration" (too technical, not outcome-focused)
❌ "Fast processing" (vague, not measurable)
❌ "API calls return within 2 minutes" (system requirement, not business capability)

REQUIREMENTS:
- Each capability must be achievable given the filtered solution requirements
- Capabilities should cover the full process lifecycle (trigger → completion)
- Focus on business value, not technical implementation
- Use SCE-specific terminology from As-Is flow
- Ensure capabilities address As-Is pain points

Generate 5-8 capabilities now.
```

**Expected Output:**
- 5-8 business capabilities
- "Ability to..." format
- Outcome-focused language
- Backed by solution requirements

**Quality Check:**
- Each capability is outcome-focused (not technical)
- Capabilities cover full process lifecycle
- All capabilities achievable with filtered solution requirements
- Addresses key As-Is pain points

---

## STAGE 4 PROMPTS

### A.4.1: To-Be Process Flow Design

**Activity:** To-Be Flow Design (Stage 4, Activity 1)  
**When to Use:** After completing Section 1 in Stage 3  
**Duration:** Part of 4-hour To-Be design activity

**Prerequisites:**
- As-Is flow from Stage 1
- Filtered solution requirements from Stage 2
- Validated capabilities and success criteria from Stage 3
- As-Is pain points documented

**Prompt:**
```
Design a To-Be process flow for [L3 Process Name] that leverages AMI 2.0 capabilities.

CURRENT STATE (PAIN POINTS):
[Paste As-Is pain points from Stage 1 interviews]

AVAILABLE CAPABILITIES:
Based on filtered solution requirements from Stage 2, these capabilities are available:
[Paste solution requirement IDs and descriptions - e.g., MDMS-REQ-047: 2-min read retrieval]

BUSINESS GOALS:
[Paste success criteria from Section 1.2.2]

TASK:
Design the To-Be process flow that:
1. Eliminates or minimizes each As-Is pain point
2. Leverages automation where solution requirements support it
3. Achieves the success criteria targets
4. Maintains realistic manual steps where automation isn't possible

OUTPUT FORMAT:
Provide numbered process steps:

STEP [#]: [Brief title]
- WHO: [Role/system performing this step]
- WHAT: [Detailed description of the activity]
- HOW: [Automated via X system | Manual process]
- SOLUTION REQ: [ID of requirement that enables this - if automated]
- IMPROVEMENT: [How this addresses As-Is pain point]

GUIDELINES:
✅ DO automate steps where solution requirements clearly support it
✅ DO keep manual steps that require human judgment
✅ DO include exception handling (what if automation fails?)
✅ DO quantify improvements (time saved, errors reduced)

❌ DON'T invent automation without solution requirement support
❌ DON'T eliminate necessary manual oversight
❌ DON'T skip exception scenarios

Generate the To-Be process flow now.
```

**Expected Output:**
- 8-12 numbered To-Be process steps
- Clear identification of automated vs. manual steps
- Solution requirement IDs for each automated step
- Quantified improvements vs. As-Is

**Quality Check:**
- Every automated step references a solution requirement
- All As-Is pain points addressed
- Exception handling included
- Realistic (not over-automated)

---

## STAGE 7 PROMPTS

### A.7.1: Update To-Be Narrative After Workshop

**Activity:** Process Flow Updates (Stage 7, Activity 1, Step 2)  
**When to Use:** After Stage 6 workshop, to incorporate feedback  
**Duration:** Part of 1-hour narrative update

**Prerequisites:**
- Current To-Be narrative from Stage 4
- Change log from Stage 6 workshop with all requested modifications

**Prompt:**
```
I have a To-Be process narrative that needs to be updated based on workshop feedback.

CURRENT TO-BE NARRATIVE:
[Paste current narrative]

WORKSHOP CHANGES REQUESTED:
[Paste change log from Stage 6]
Example changes:
- Change #1: Add validation of account status before requesting read
- Change #2: Add priority flag for urgent requests in Step 4
- Change #3: Clarify exception handling when MDMS times out
- Change #4: Add notification to Field Ops when read fails

TASK:
Update the To-Be process narrative to incorporate all workshop changes.

REQUIREMENTS:
- Maintain numbered step format
- Keep professional utility operations language
- Show which steps are automated vs. manual
- Include all decision points (if/then logic)
- Document exception handling clearly
- Reference systems in [brackets]
- Maintain same level of detail as before
- Ensure changes are integrated smoothly (narrative flows logically)

For each change, ensure:
- New steps are inserted in the right sequence
- Modified steps retain their context
- Exception paths are clearly documented
- Handoffs between roles are explicit

OUTPUT:
Updated To-Be process narrative with all workshop changes incorporated.
```

**Expected Output:**
- Updated To-Be narrative
- All changes from change log incorporated
- Logical flow maintained
- Professional language

**Quality Check:**
- Verify all changes from change log are incorporated
- Check that narrative still flows logically
- Ensure consistency between Visio and narrative
- Confirm no contradictions or gaps introduced

---

## STAGE 8 PROMPTS

### A.8.1: User Journey Mapping

**Activity:** User Journey Mapping (Stage 8, Activity 1)  
**When to Use:** After To-Be flow validated in Stage 7  
**Duration:** Part of 2-hour journey mapping activity

**Prerequisites:**
- VALIDATED To-Be flow from Stage 7
- Actual SCE user types from Section 1.3.5
- Workshop notes from Stage 6 for user concerns

**Prompt:**
```
Create user journey map for the following SCE user type executing [L3 Process - VALIDATED To-Be].

USER TYPE (from Section 1.3.5):
[Paste actual SCE job title and characteristics]
Example: 'Revenue Operations Analyst II - Performs daily billing operations in CSS; 
works in hybrid environment using standard SCE workstation with dual monitors over VPN; 
proficient with CSS, MDMS, SAP ISU, and Microsoft Office.'

VALIDATED TO-BE PROCESS (from Stage 7):
[Attach or describe the validated To-Be flow - include workshop-approved steps]

WORKSHOP INSIGHTS (from Stage 6):
[Note any user concerns or experience issues raised in workshop]
Example: 'Users mentioned current frustration with MDMS timeout errors - To-Be addresses 
this with 5-minute timeout and automatic BPEM routing'

Create journey map with this table format:
| Scenario | User Type | Thinking/Feeling | User Action | What to Change | Why |

Consider these scenarios:
- Happy path (everything works as designed in validated To-Be)
- Exception path (system timeout or communication failure)
- Error path (data validation failure, missing information)

REQUIREMENTS:
- Use the actual SCE job title (not generic 'Billing Specialist')
- Reference actual systems from Section 1.3.5
- Base actions on the VALIDATED To-Be process steps (these are now confirmed by SCE)
- Make 'Thinking/Feeling' realistic and specific to SCE user's environment
- 'What to Change' should reflect improvements vs. As-Is (already incorporated in validated To-Be)
- Reference specific validated To-Be steps by number (e.g., 'In Step 3, when CSS auto-requests read...')
- Use realistic utility operations language

Generate 3-5 journey scenarios covering different user types involved in this VALIDATED process.
```

**Expected Output:**
- 3-5 user journey scenarios
- Table format with all columns filled
- Based on validated To-Be flow
- Realistic SCE user perspectives

**Quality Check:**
- Journeys map to actual validated To-Be steps
- User types match Section 1.3.5
- Scenarios are realistic for validated process
- "What to Change" reflects validated To-Be improvements

---

### A.8.2A: Business Requirements Generation (Exploratory)

**Activity:** Business Requirements Generation - Step 2.1A (Stage 8, Activity 2)  
**When to Use:** After validated To-Be flow from Stage 7  
**Duration:** Part of 3-hour requirements generation

**Prerequisites:**
- VALIDATED To-Be flow from Stage 7
- Capabilities from Section 1.2.1
- Success criteria from Section 1.2.2
- User journeys from Activity 1

**Prompt:**
```
Generate business requirements for [L3 Process Name] based on the VALIDATED To-Be process flow.

VALIDATED TO-BE PROCESS (from Stage 7):
[Paste validated To-Be flow - include all steps]

CAPABILITIES (from Section 1.2.1):
[Paste 5-8 capabilities]

SUCCESS CRITERIA (from Section 1.2.2):
[Paste success criteria with KPIs]

USER JOURNEYS (from Activity 1):
[Paste 3-5 user journey scenarios]

TASK:
Generate 15-25 functional business requirements that describe WHAT the process must accomplish.

IMPORTANT: This is an EXPLORATORY process. Generate requirements based on business needs, 
process steps, and user expectations. DO NOT reference solution requirements yet - that comes 
in the next step (Step 2.1B). Focus on capturing complete business needs.

REQUIREMENT CATEGORIES (cover all):

1. SYSTEM CAPABILITIES (what systems must enable)
   Example: 'The off-cycle billing process SHALL retrieve meter reads from MDMS within 
   5 minutes, including read value, quality flag, and estimation method when applicable.'
   
2. PROCESS PROCEDURES (what people/teams must do)
   Example: 'AMI Operations team SHALL investigate and resolve failed read requests 
   within 2 hours during business hours (6am-6pm).'
   
3. DATA QUALITY & VALIDATION (what data must be available/accurate)
   Example: 'All off-cycle meter reads SHALL include read quality indicator (actual, 
   estimated, edited) and estimation method when read is estimated.'
   
4. SYSTEM INTEGRATION (how systems work together)
   Example: 'CSS SHALL automatically ingest MDMS read responses without requiring manual 
   intervention or data re-entry by billing users.'
   
5. EXCEPTION HANDLING (what happens when things fail)
   Example: 'When MDMS cannot provide a read (timeout, meter offline, communication failure), 
   the system SHALL route exception to BPEM queue for field investigation and SHALL allow 
   billing user to manually enter read with supervisor approval.'
   
6. USER INTERFACE & EXPERIENCE (what users need to see/do)
   Example: 'Billing users SHALL view MDMS read quality and estimation method in CSS 
   without navigating to separate MDMS portal or running separate queries.'
   
7. PERFORMANCE & AVAILABILITY (timing, throughput, uptime)
   Example: 'The end-to-end off-cycle billing process SHALL complete within 10 minutes 
   for 95% of requests during normal business hours.'
   
8. MANUAL FALLBACK & OVERRIDES (what happens when automation fails)
   Example: 'Billing users SHALL have capability to manually enter meter reads when 
   MDMS is unavailable, with validation rules preventing out-of-range values (0-99999 kWh).'

IMPORTANT GUIDELINES:
✅ Focus on BUSINESS NEEDS, not technical implementation details
✅ Include requirements for manual procedures, not just automated system features
✅ Include organizational/process requirements (staffing, SLAs, training needs)
✅ Include cross-system workflows that may span multiple systems
✅ Don't limit yourself to what you think current systems can do
✅ If a capability implies a requirement, write it even if you're unsure how it's implemented
✅ It's OKAY to write requirements that may not have system support (gaps are valuable)

❌ Don't describe HOW systems implement (no 'use API call' or 'store in database')
❌ Don't assume requirements MUST map to solution requirements
❌ Don't skip organizational/process requirements because they're not 'system requirements'

FORMAT:
| BR-XXX | Description | Fit Criterion | Rationale | Release |

DESCRIPTION RULES:
- Start with 'The [process name] SHALL...' or '[User type] SHALL be able to...' or 
  '[Team name] SHALL...'
- State ONE clear requirement per row (no compound 'and' statements)
- Be specific about WHO (user/team), WHAT (action/outcome), WHEN (timing/trigger)
- Focus on WHAT outcome is needed, not HOW it's technically achieved
- Avoid subjective terms ('user-friendly,' 'efficient,' 'flexible')

FIT CRITERION RULES:
- Must be testable and measurable
- Specify success threshold (e.g., 'within 5 minutes,' '>95% of requests,' '<2% error rate')
- Use format: 'When [scenario], then [observable outcome] within [constraint]'
- Should be unambiguous enough for QA to test without interpretation

RATIONALE RULES:
- Explain the business value or driver
- Quantify benefit where possible (time saved, errors reduced, cost avoided, pain point addressed)
- Link to a capability from Section 1.2.1 or As-Is pain point
- Keep to 1-2 sentences

RELEASE ASSIGNMENT:
- R1: Critical for go-live (supports core capability)
- R2: Important but can be deferred if needed
- R3: Nice-to-have or future enhancement

COVERAGE GUIDANCE:
Generate requirements covering:
- Data input/capture: 5-7 requirements
- Process automation: 3-5 requirements
- System integration: 3-5 requirements
- Exception handling: 2-4 requirements
- Manual procedures/fallbacks: 2-3 requirements
- User interface/visibility: 2-3 requirements
- Performance/availability: 2-3 requirements

Ensure all major steps in the To-Be process have supporting business requirements.

Generate 15-25 functional business requirements now. Remember: we'll trace them to 
solution requirements in the next step - focus on capturing complete business needs first.
```

**Expected Output:**
- 15-25 business requirements in table format
- All columns filled except "Traces To" (that's Step 2.1B)
- Mix of system, process, data, integration, exception, UI, performance requirements
- Based on business needs (not just translating solution requirements)

**Quality Check:**
- Requirements cover all major To-Be steps
- Mix of system capabilities, process procedures, data quality, integration, exceptions
- Include manual procedures and organizational requirements
- Each requirement is single, testable statement
- Fit criteria are measurable

---

### A.8.2B: Requirements Traceability Mapping

**Activity:** Business Requirements Generation - Step 2.1B (Stage 8, Activity 2)  
**When to Use:** After generating business requirements in Step 2.1A  
**Duration:** 30 minutes

**Prerequisites:**
- 15-25 business requirements from Step 2.1A (without traceability)
- Filtered solution requirements from Stage 2

**Prompt:**
```
I have generated business requirements based on business needs. Now I need to trace 
them to SCE's solution requirements to understand coverage.

INPUTS:
1. Business Requirements (from Step 2.1A): [paste 15-25 business requirements]
2. Filtered Solution Requirements (from Stage 2): [paste 20-50 solution requirements]

TASK:
For each business requirement, identify which solution requirements support it.

TRACING METHODOLOGY:

STEP 1: Read the business requirement carefully
STEP 2: Review the filtered solution requirements
STEP 3: Ask: 'Which solution requirements enable or contribute to this business need?'
STEP 4: List the solution requirement IDs that support this business requirement
STEP 5: If NO solution requirements support this need, determine the gap type

OUTPUT FORMAT:
Add a 'Traces To (Solution Req IDs)' column to the business requirements table:
| BR-XXX | Description | Fit Criterion | Rationale | Traces To (Solution Req IDs) | Release |

TRACEABILITY CLASSIFICATION:

✅ FULLY COVERED: Business requirement traces to 1+ solution requirements that fully enable it
Example: BR-015 'Retrieve reads within 5 minutes' → MDMS-REQ-047 (2 min response), 
MDMS-REQ-052 (quality codes), HES-REQ-019 (on-demand), CSS-REQ-103 (auto-ingest)
→ ACTION: List all supporting solution req IDs

⚠️ PARTIALLY COVERED: Some solution requirements support it, but gaps exist
Example: BR-022 'Automated BPEM routing for failed MDMS responses'
→ MDMS-REQ-089 covers failure detection
→ But no solution requirement covers BPEM routing logic
→ ACTION: List partial solution reqs + flag with [PARTIAL - MISSING BPEM ROUTING]

🔴 GAP - PROCESS REQUIREMENT: This is a manual workflow or organizational requirement
Example: BR-028 'Billing & Systems team SHALL repair broken CSS accounts within 4 hours'
→ This is a process SLA and manual procedure, not a system capability
→ No solution requirement needed or expected
→ ACTION: Flag with [PROCESS REQUIREMENT - NO SYSTEM SUPPORT NEEDED]

🔴 GAP - ORGANIZATIONAL REQUIREMENT: Staffing, training, governance, change management
Example: BR-035 'AMO SHALL maintain sufficient staffing to handle 500 requests/day'
→ This is an organizational/resourcing requirement
→ No solution requirement needed or expected
→ ACTION: Flag with [ORGANIZATIONAL REQUIREMENT]

🔴 GAP - MISSING SOLUTION REQUIREMENT: Business need exists but no solution requirement
Example: BR-031 'Real-time sync between CSS and MDMS after account repair'
→ Account repair capability exists in CSS
→ But no solution requirement describes sync mechanism to MDMS
→ This is a TRUE GAP that may need solution requirement added via change control
→ ACTION: Flag with [GAP - NO SOLUTION REQ - NEEDS REVIEW]

TRACING RULES:

1. ONE business requirement can trace to MULTIPLE solution requirements
   - Example: End-to-end process requirement might trace to MDMS, HES, and CSS solution reqs
   - List all relevant solution requirement IDs separated by commas

2. MULTIPLE business requirements can trace to SAME solution requirement
   - Example: MDMS-REQ-047 (2-minute read response) might support BR-015, BR-016, BR-019
   - This is fine - solution requirements can be reused across business requirements

3. It's OKAY for business requirements to have NO solution requirement traces
   - Process requirements, organizational requirements, and true gaps are all valid
   - Don't force a trace if one doesn't genuinely exist
   - Be honest about coverage

4. Don't confuse 'no trace' with 'gap'
   - Process/org requirements are expected to have no solution requirement support
   - True gaps are system-level needs without solution requirement coverage

Now trace all 15-25 business requirements to solution requirements using this methodology.
```

**Expected Output:**
- Business requirements table with "Traces To" column completed
- Clear classification: Fully Covered, Partially Covered, Process Req, Org Req, or Gap
- Flags indicating gap types

**Quality Check:**
- Spot-check 10 traceability mappings for accuracy
- Validate gap classifications make sense
- Verify no false positives (BR flagged as gap when solution req exists)
- Ensure traceability is meaningful (solution reqs genuinely support the business req)

---

### A.8.3: User Acceptance Expectations

**Activity:** User Acceptance Expectations (Stage 8, Activity 3)  
**When to Use:** After business requirements generation  
**Duration:** 1 hour

**Prerequisites:**
- Business requirements from Activity 2
- User journeys from Activity 1
- User types from Section 1.3.5
- To-Be process flow

**Prompt:**
```
Generate User Acceptance Expectations for [L3 Process Name].

INPUTS:
1. Business Requirements (from Activity 2): [paste 15-25 business requirements]
2. User Journeys (from Activity 1): [paste user journey table]
3. User Types (from Section 1.3.5): [paste SCE user roles and characteristics]
4. To-Be Process Flow: [describe key steps]
5. As-Is Pain Points: [list current frustrations]

DEFINITION:
User Acceptance Expectations (UAEs) describe what users expect from their experience 
with this process. They capture the user's mental model of how things should work, 
their anticipated experience, and their expectations for usability, reliability, and 
transparency.

UAEs complement business requirements:
- Business Req: 'System SHALL retrieve reads within 5 minutes' (mandatory, technical)
- UAE: 'Users expect minimal wait time when requesting off-cycle reads' (experiential)

FORMAT:
| UAE-XXX | Description | Level of Need (High/Med/Low) |

DESCRIPTION RULES:
- Write from USER'S perspective using "Users expect that..." format
- Focus on EXPERIENCE, not technical implementation
- Describe what users naturally anticipate or desire
- Keep each UAE to 1-2 sentences
- Use plain language (avoid technical jargon unless it's user-facing)
- Frame positively (what users expect TO happen, not what they expect NOT to happen)

LEVEL OF NEED GUIDANCE:
- HIGH: Critical to user acceptance; users won't accept the solution without this
  Example: "Users expect accurate billing data" (fundamental expectation)
  
- MEDIUM: Important for good user experience; users want this but can work around it
  Example: "Users expect to see read quality without opening multiple screens"
  
- LOW: Nice to have; improves experience but not critical
  Example: "Users expect color-coded status indicators for visual clarity"

CATEGORIES TO COVER (generate 2-3 UAEs per category):

1. RELIABILITY & AVAILABILITY
   - System uptime, consistency, dependability
   - Example: "Users expect that off-cycle billing requests can be initiated in CSS 
     reliably without system timeouts or errors during business hours."

2. USABILITY & EASE OF USE
   - Intuitive workflows, minimal steps, clear interfaces
   - Example: "Users expect that all necessary fields are clearly available when 
     initiating an off-cycle request, minimizing the need for help documentation."

3. TRANSPARENCY & VISIBILITY
   - Clear status, results, and error messages
   - Example: "Users expect that MDMS read responses display clearly in CSS, including 
     read value, read quality, and estimation method without navigating to separate systems."

4. AUTOMATION & EFFICIENCY
   - Reduced manual work, fast processing
   - Example: "Users expect automated off-cycle billing completion when valid reads 
     are returned, without unnecessary manual steps."

5. EXCEPTION HANDLING & SUPPORT
   - Clear notifications, actionable errors, recovery paths
   - Example: "Users expect clear and actionable notifications when MDMS does not 
     return a read, with guidance on next steps."

6. PERFORMANCE & RESPONSIVENESS
   - Fast response times, no unnecessary delays
   - Example: "Users expect minimal delays caused by CSS–MDMS interface performance, 
     with most requests completing within minutes."

7. DATA ACCURACY & TRUST
   - Correct information, validation, confidence in results
   - Example: "Users expect that reads retrieved from MDMS are accurate and validated, 
     with any data quality concerns clearly flagged."

WHAT MAKES A GOOD UAE:
✅ Written in user's voice: "Users expect..."
✅ Describes experience or expectation, not technical spec
✅ Addresses a genuine user concern or desire
✅ Aligned with business requirements but framed differently
✅ Assigned appropriate level of need (High/Med/Low)

WHAT MAKES A BAD UAE:
❌ Too technical: "Users expect API response time <2 seconds" (this is a business req)
❌ Redundant with business req: "System shall retrieve reads" (not user voice)
❌ Vague: "Users expect good performance" (not specific enough)
❌ Negative framing: "Users expect the system won't crash" (frame positively)

Generate 8-12 User Acceptance Expectations covering all categories above.
```

**Expected Output:**
- 8-12 UAEs in table format
- Mix of High/Medium/Low level of need
- User voice ("Users expect...")
- Complementary to business requirements (not redundant)

**Quality Check:**
- UAEs are in user voice ("Users expect...")
- UAEs describe experience, not technical requirements
- No redundancy with business requirements (different framing)
- Appropriate level of need assigned
- Coverage across reliability, usability, transparency, automation, exceptions, performance

---

### A.8.4: Performance Requirements

**Activity:** Performance Requirements (Stage 8, Activity 4)  
**When to Use:** After user acceptance expectations  
**Duration:** 1 hour

**Prerequisites:**
- Validated To-Be flow
- Business requirements
- Filtered solution requirements with performance specs

**Prompt:**
```
Generate PERFORMANCE business requirements for [L3 Process Name].

VALIDATED TO-BE PROCESS:
[Describe end-to-end flow with timing expectations]

SOLUTION REQUIREMENTS WITH PERFORMANCE SPECS:
[Paste any solution requirements that specify timing, throughput, availability]

TASK:
Generate 5-10 performance business requirements covering:

CATEGORIES:
1. RESPONSE TIMES
   - API calls
   - User actions
   - Batch processing
   - End-to-end process timing

2. THROUGHPUT
   - Transactions per hour
   - Concurrent users
   - Peak load handling

3. AVAILABILITY
   - Uptime %
   - Scheduled maintenance windows
   - Recovery time objectives

4. DATA COMPLETENESS
   - % of successful data flows
   - Validation pass rates
   - Error rates

5. SCALABILITY
   - Growth capacity
   - Future volume handling

FORMAT: Same as functional requirements
| PR-XXX | Description | Fit Criterion | Rationale | Traces To (Solution Req IDs) | Release |

GUIDANCE:
- Performance requirements describe HOW FAST, HOW MANY, HOW OFTEN
- Baseline on SCE's solution requirements where they specify performance
- If solution requirement says "MDMS shall return reads in 2 min," the business 
  requirement might say "Process completes in 5 min" (allows for multi-step workflow)
- Performance should reflect end-to-end process timing, not just individual system calls
- Include both normal load and peak load scenarios
- Consider business hours vs. 24/7 requirements

EXAMPLES:

GOOD PERFORMANCE REQUIREMENT:
PR-001 | The off-cycle billing process SHALL complete within 10 minutes for 95% of requests 
during normal business hours (6am-6pm weekdays) | When valid MDMS read is available, 
measured from request initiation to bill finalization, 95th percentile <10 minutes | 
Enables same-day final bill issuance for move-out customers | Traces to: MDMS-REQ-047, 
CSS-REQ-103, HES-REQ-019 | R1

BAD PERFORMANCE REQUIREMENT:
"System should be fast" (not measurable, vague)

Generate 5-10 performance business requirements now.
```

**Expected Output:**
- 5-10 performance requirements
- Cover timing, throughput, availability, data completeness, scalability
- Measurable fit criteria
- Traced to solution requirements where applicable

**Quality Check:**
- All performance requirements are measurable
- Baseline on solution requirements where available
- End-to-end process timing (not just individual system calls)
- Realistic and achievable

---

## APPENDIX B: MASTER REQUIREMENTS WORKBOOK

[Content for Master Requirements Workbook structure, formulas, and instructions would go here]

---

## APPENDIX C: QUALITY CHECKLISTS

[Content for quality checklists would go here]
