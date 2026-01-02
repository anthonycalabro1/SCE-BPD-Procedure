# BRD Process Dashboard

An interactive React-based dashboard for visualizing the 13-stage BRD Factory-Line process. This educational tool helps analysts understand and follow the comprehensive BRD development procedure.

## Features

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

The built files will be in the `dist` directory.

## Project Structure

```
src/
├── components/
│   ├── ProcessFlow.tsx      # Main React Flow canvas
│   ├── StageNode.tsx         # Custom node component for stages
│   ├── StageDetailPanel.tsx  # Slide-over detail panel
│   └── CopyButton.tsx        # Copy prompt button component
├── data/
│   └── stages.ts             # Extracted stage metadata
├── types/
│   └── stage.ts              # TypeScript interfaces
├── styles/
│   └── index.css             # Tailwind CSS imports
├── App.tsx                   # Main app component
└── main.tsx                  # Entry point
```

## Usage

1. **View the Process Flow**: The main canvas shows all 13 stages connected in sequence
2. **Click a Stage**: Click any stage node to open the detailed panel
3. **Explore Details**: Use collapsible sections to explore:
   - Activities and time breakdowns
   - Outputs and quality checks
   - Workshop details (for Stages 6 and 10)
   - Red flags and common issues
   - Manager checklists (for Stages 5 and 9)
   - AI prompts with copy functionality
4. **Copy AI Prompts**: Click "Copy Prompt" on any AI prompt to copy it to your clipboard
5. **Close Panel**: Click outside the panel or the X button to close

## Technology Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **React Flow** - Process visualization
- **Tailwind CSS** - Styling
- **Lucide React** - Icons
- **Vite** - Build tool

## Data Source

All stage metadata is extracted from `BRD_Factory_Line_Work_Procedure.md` and structured in `src/data/stages.ts`. The data includes:

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

