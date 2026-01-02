export interface Activity {
  title: string;
  hours: number;
  role: string; // "Onshore", "Offshore", "Manager", etc.
  description?: string;
}

export interface AIPrompt {
  id: string; // e.g., "A.1.3"
  title: string; // e.g., "As-Is Process Narrative Synthesis"
  prompt: string; // Full prompt text from Appendix A
  activity?: string; // Which activity uses this prompt
}

export interface WorkshopSession {
  duration?: string; // e.g., "1.5 hours"
  attendees?: string[]; // List of required/optional attendees
  segments?: Array<{ title: string; duration?: string; description?: string }>;
  facilitationSetup?: string[];
}

export interface Stage {
  id: number;
  name: string;
  phase: 1 | 2 | 3;
  phaseGoal?: string; // Phase-level goal
  phaseMilestone?: string; // Phase milestone (e.g., "VALIDATED TO-BE PROCESS")
  objective: string;
  totalHours: number;
  waitTime?: string; // e.g., "5 days" for Stage 12
  roleOwnership: string; // Primary role from stage header
  activities?: Activity[];
  
  // Critical context and principles
  criticalPrinciples?: string[]; // Important execution notes
  criticalContext?: string; // Key context for understanding the stage
  
  // Prerequisites and dependencies
  prerequisites?: string[]; // What must be completed first
  foundation?: string[]; // Foundation items (e.g., Stage 8's "Foundation at this stage")
  dependencies?: number[]; // Array of stage IDs this stage depends on
  
  // Deliverables and validation
  outputs?: string[]; // Deliverables from this stage
  qualityChecks?: string[]; // Validation criteria
  qualityMetrics?: Array<{ metric: string; target?: string }>; // Measurable targets
  
  // Success and handoff
  successCriteria?: string[]; // How to know stage is complete
  handoffToNext?: string[]; // What gets passed to next stage
  nextStage?: number; // Next stage ID
  
  // Workshop/session details (for stages with workshops)
  workshop?: WorkshopSession;
  
  // Risk and escalation
  redFlags?: string[]; // When to escalate
  commonIssues?: Array<{ issue: string; example?: string; solution?: string }>; // What to watch out for
  
  // Change management (for review/workshop stages)
  changeClassification?: {
    minor?: { description: string; impact: string };
    major?: { description: string; impact: string };
  };
  
  // Manager actions (for review stages)
  managerActions?: string[];
  managerChecklist?: Array<{ category: string; items: string[] }>;
  
  // AI prompts
  aiPrompts?: AIPrompt[];
}

