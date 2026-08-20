# BRD Process Dashboard

An interactive React-based dashboard for visualizing the 13-stage BRD Factory-Line process. This educational tool helps analysts understand and follow the comprehensive BRD development procedure.

## Features

- **Two views** (toggle in the header):
  - **Factory line**: Interactive process flow (existing 13-stage canvas).
  - **BRD sections**: Outline aligned to the Master BRD Word template. Each section page shows **(1)** template instructional text from the Master BRD, **(2)** the factory-line procedure excerpt from `SCE BRD Factory-Line Work Procedure.docx`, and **(3)** Appendix A **AI prompts** and dashboard notes last.
- **Standalone HTML**: `standalone/BRD_Process_Dashboard.html` — a single file you can share and open locally (see **Standalone HTML** below).
- **Interactive Process Flow**: Visualize all 13 stages in a React Flow canvas with phase color-coding
- **Detailed Stage Information**: Click any stage node to view comprehensive details including:
  - Objectives and critical context
  - Activities with time estimates and role ownership
  - Outputs and deliverables
  - Quality checks and success criteria
  - Workshop details (for applicable stages)
  - Red flags and common issues
  - Manager checklists and actions
  - AI prompts with copy functionality
  - **BRD sections (Master template)**: Quick links to open the BRD-by-section view for template ids this stage touches (`primaryBrdSectionIds`).
- **Phase Organization**: Stages are color-coded by phase:
  - Phase 1 (Blue): Process Design & Validation (Stages 1-7)
  - Phase 2 (Orange): Requirements Development (Stages 8-11)
  - Phase 3 (Green): Approval & Delivery (Stages 12-13)

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser to `http://localhost:5173` (or the port shown in terminal)

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory (GitHub Pages layout).

### Standalone HTML (share and open locally)

To produce a **single HTML file** you can email, copy to a shared drive, or open with a double-click (no Node or web server required):

```bash
npm run build:standalone
```

That writes `standalone/BRD_Process_Dashboard.html`. Open the file in Chrome, Edge, or Firefox. Deep links use the hash when the file is opened from disk, for example:

- Factory line with a stage panel: `BRD_Process_Dashboard.html#stage=8`
- BRD section view: `BRD_Process_Dashboard.html#view=brd&section=1.2.1`

The GitHub Pages URLs below (`?stage=` / `?view=brd`) are unchanged for the hosted app.

### BRD content extraction (Word → app)

The BRD-by-section view reads generated JSON under `src/data/generated/`. **Authoritative procedure text** is the Factory-Line Word document (`SCE BRD Factory-Line Work Procedure.docx`); template guidance comes from the Master BRD template (`.docx`).

1. Install Python dependencies (once):

```bash
pip install -r requirements.txt
```

2. Regenerate JSON whenever either Word source changes:

```bash
npm run content:extract
```

This runs `scripts/extract_master_brd_guidance.py` (Master template → `brdTemplateGuidance.json`) and `scripts/extract_procedure_by_section.py` (Factory-Line procedure + `scripts/procedure_section_rules.yaml` → `brdProcedureBySection.json`). Section mapping rules live in `scripts/procedure_section_rules.yaml`; adjust anchors there if the procedure document is reorganized.

## Project Structure

```
standalone/
└── BRD_Process_Dashboard.html  # shareable local-file build (`npm run build:standalone`)
src/
├── components/
│   ├── ProcessFlow.tsx      # Main React Flow canvas
│   ├── StageNode.tsx         # Custom node component for stages
│   ├── StageDetailPanel.tsx  # Slide-over detail panel
│   ├── brd/                  # BRD-by-section view (tree + detail)
│   └── CopyButton.tsx        # Copy prompt button component
├── data/
│   ├── stages.ts             # Factory-line stage metadata
│   ├── brdOutline.ts         # Master BRD template outline (flat + tree builder)
│   ├── aiPrompts.ts          # Appendix A prompts (shared)
│   ├── brdSectionContent/    # `authored.ts` (stages + prompts) + `getBrdSectionContent.ts` (merge)
│   └── generated/            # `brdTemplateGuidance.json`, `brdProcedureBySection.json` (see `npm run content:extract`)
├── types/
│   ├── stage.ts              # Stage / activity / prompt types
│   └── brdSectionContent.ts  # Block types for BRD view
├── utils/
│   └── appUrl.ts             # URL + session helpers for both views
├── styles/
│   └── index.css             # Tailwind CSS imports
├── App.tsx                   # Main app component
└── main.tsx                  # Entry point
```

## Deep links (URL)

- Factory line with a stage panel: `?stage=8` (optional `stage` query).
- BRD section view: `?view=brd&section=1.2.1` (section id matches `src/data/brdOutline.ts`).

The last selected BRD section is remembered in `sessionStorage` for convenience.

## Usage

1. **Choose a view**: Use **Factory line** or **BRD sections** in the header.
2. **View the Process Flow** (factory line): The main canvas shows all 13 stages connected in sequence.
3. **Click a Stage**: Click any stage node to open the detailed panel.
4. **Explore Details**: Use collapsible sections to explore:
   - Activities and time breakdowns
   - Outputs and quality checks
   - Workshop details (for Stages 6 and 10)
   - Red flags and common issues
   - Manager checklists (for Stages 5 and 9)
   - AI prompts with copy functionality
4. **Copy AI Prompts**: Click "Copy Prompt" on any AI prompt to copy it to your clipboard
5. **Close Panel**: Click outside the panel or the X button to close.
6. **BRD sections view**: Pick a section in the left tree; the right pane shows procedure blocks. Use **Related stages** or inline **Stage N** buttons to jump back to the factory-line view.

## Technology Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **React Flow** - Process visualization
- **Tailwind CSS** - Styling
- **Lucide React** - Icons
- **Vite** - Build tool

## Data Source

- **Factory line**: Stage metadata is extracted from `BRD_Factory_Line_Work_Procedure.md` and structured in `src/data/stages.ts`. Appendix A prompts live in `src/data/aiPrompts.ts` and are referenced from `stages.ts`.
- **BRD outline**: Heading hierarchy is derived from the Master BRD Word template (`(Master) BRD - Business Requirements Document - AMI 2.0 Template  - V03232026.docx`) and captured in `src/data/brdOutline.ts`. To refresh after a template change, run `python scripts/extract_brd_outline.py` and reconcile ids/titles into `brdOutline.ts`, then update `src/data/brdSectionContent/authored.ts` as needed.
- **BRD section content**: Authored in `src/data/brdSectionContent/authored.ts`. Sections without a factory-line procedure excerpt still appear; the procedure panel shows **Not yet written** until mapped in `procedure_section_rules.yaml` and regenerated.

**Per-stage (`stages.ts`) content includes:**

- Stage objectives and context
- Activity breakdowns with hours and roles
- Outputs and deliverables
- Quality checks and metrics
- Prerequisites and dependencies
- Workshop details
- AI prompts from Appendix A
- Manager checklists and actions
- Red flags and common issues

## Development

The project uses:
- **Vite** for fast development and building
- **TypeScript** for type safety
- **Tailwind CSS** for utility-first styling
- **React Flow** for the interactive process visualization

## License

Internal use only.

