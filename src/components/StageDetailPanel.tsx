import { useState } from 'react';
import { X, ChevronDown, ChevronUp, AlertTriangle, CheckCircle, Clock, Users, FileText, Target, ArrowRight, Flag } from 'lucide-react';
import { Stage } from '../types/stage';
import CopyButton from './CopyButton';
import { PHASE_GOALS, PHASE_MILESTONES } from '../data/stages';

interface StageDetailPanelProps {
  stage: Stage;
  onClose: () => void;
}

interface CollapsibleSectionProps {
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

function CollapsibleSection({ title, icon, children, defaultOpen = false }: CollapsibleSectionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
      >
        <div className="flex items-center gap-2">
          {icon}
          <h3 className="font-semibold text-gray-900">{title}</h3>
        </div>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-gray-500" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-500" />
        )}
      </button>
      {isOpen && <div className="p-4 pt-0">{children}</div>}
    </div>
  );
}

export default function StageDetailPanel({ stage, onClose }: StageDetailPanelProps) {
  const phaseColors = {
    1: { bg: 'bg-blue-50', border: 'border-blue-600', text: 'text-blue-900', badge: 'bg-blue-600' },
    2: { bg: 'bg-orange-50', border: 'border-orange-600', text: 'text-orange-900', badge: 'bg-orange-600' },
    3: { bg: 'bg-green-50', border: 'border-green-600', text: 'text-green-900', badge: 'bg-green-600' },
  };

  const colors = phaseColors[stage.phase];

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/50 z-40 transition-opacity"
        onClick={onClose}
      />

      {/* Panel */}
      <div className="fixed right-0 top-0 h-full w-full max-w-2xl bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out overflow-y-auto">
        {/* Header */}
        <div className={`sticky top-0 ${colors.bg} ${colors.border} border-b-2 p-6 z-10`}>
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <span className={`${colors.badge} text-white px-3 py-1 rounded-md font-semibold text-sm`}>
                  Stage {stage.id}
                </span>
                <span className={`text-sm font-medium ${colors.text}`}>
                  Phase {stage.phase}
                </span>
                {stage.phaseMilestone && (
                  <span className="flex items-center gap-1 text-xs text-gray-600 bg-white px-2 py-1 rounded">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    {stage.phaseMilestone}
                  </span>
                )}
              </div>
              <h2 className={`text-2xl font-bold ${colors.text}`}>{stage.name}</h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/50 rounded-md transition-colors"
              aria-label="Close panel"
            >
              <X className="w-6 h-6 text-gray-700" />
            </button>
          </div>
          {stage.phaseGoal && (
            <p className={`text-sm ${colors.text} opacity-75`}>
              <strong>Phase Goal:</strong> {stage.phaseGoal}
            </p>
          )}
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          {/* Objective */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
              <Target className="w-5 h-5 text-gray-600" />
              Objective
            </h3>
            <p className="text-gray-700">{stage.objective}</p>
          </div>

          {/* Critical Context/Principles */}
          {stage.criticalContext && (
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
              <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-yellow-600" />
                Critical Context
              </h3>
              <p className="text-gray-700">{stage.criticalContext}</p>
            </div>
          )}

          {stage.criticalPrinciples && stage.criticalPrinciples.length > 0 && (
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
              <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-yellow-600" />
                Critical Principles
              </h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                {stage.criticalPrinciples.map((principle, idx) => (
                  <li key={idx}>{principle}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Prerequisites/Foundation */}
          {(stage.prerequisites || stage.foundation) && (
            <CollapsibleSection
              title="Prerequisites & Foundation"
              icon={<FileText className="w-5 h-5 text-gray-600" />}
              defaultOpen={true}
            >
              {stage.foundation && stage.foundation.length > 0 && (
                <div className="mb-4">
                  <h4 className="font-medium text-gray-900 mb-2">Foundation at this stage:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    {stage.foundation.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
              {stage.prerequisites && stage.prerequisites.length > 0 && (
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Prerequisites:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    {stage.prerequisites.map((prereq, idx) => (
                      <li key={idx}>{prereq}</li>
                    ))}
                  </ul>
                </div>
              )}
            </CollapsibleSection>
          )}

          {/* Role & Hours */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium text-gray-900 mb-1 flex items-center gap-2">
                  <Users className="w-4 h-4 text-gray-600" />
                  Role Ownership
                </h4>
                <p className="text-gray-700">{stage.roleOwnership}</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-1 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-gray-600" />
                  Total Hours
                </h4>
                <p className="text-gray-700">
                  {stage.totalHours}h
                  {stage.waitTime && <span className="text-gray-500"> + {stage.waitTime} wait</span>}
                </p>
              </div>
            </div>
          </div>

          {/* Activities */}
          {stage.activities && stage.activities.length > 0 && (
            <CollapsibleSection
              title={`Activities (${stage.activities.length})`}
              icon={<FileText className="w-5 h-5 text-gray-600" />}
              defaultOpen={true}
            >
              <div className="space-y-3">
                {stage.activities.map((activity, idx) => (
                  <div key={idx} className="border-l-2 border-gray-300 pl-4">
                    <div className="flex items-start justify-between mb-1">
                      <h4 className="font-medium text-gray-900">{activity.title}</h4>
                      <span className="text-sm text-gray-600 whitespace-nowrap ml-2">
                        {activity.hours}h - {activity.role}
                      </span>
                    </div>
                    {activity.description && (
                      <p className="text-sm text-gray-600">{activity.description}</p>
                    )}
                  </div>
                ))}
              </div>
            </CollapsibleSection>
          )}

          {/* Outputs */}
          {stage.outputs && stage.outputs.length > 0 && (
            <CollapsibleSection
              title={`Outputs (${stage.outputs.length})`}
              icon={<CheckCircle className="w-5 h-5 text-gray-600" />}
            >
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {stage.outputs.map((output, idx) => (
                  <li key={idx}>{output}</li>
                ))}
              </ul>
            </CollapsibleSection>
          )}

          {/* Quality Checks */}
          {stage.qualityChecks && stage.qualityChecks.length > 0 && (
            <CollapsibleSection
              title={`Quality Checks (${stage.qualityChecks.length})`}
              icon={<CheckCircle className="w-5 h-5 text-gray-600" />}
            >
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {stage.qualityChecks.map((check, idx) => (
                  <li key={idx}>{check}</li>
                ))}
              </ul>
            </CollapsibleSection>
          )}

          {/* Quality Metrics */}
          {stage.qualityMetrics && stage.qualityMetrics.length > 0 && (
            <CollapsibleSection
              title="Quality Metrics"
              icon={<Target className="w-5 h-5 text-gray-600" />}
            >
              <div className="space-y-2">
                {stage.qualityMetrics.map((metric, idx) => (
                  <div key={idx} className="flex justify-between items-start">
                    <span className="text-gray-700">{metric.metric}</span>
                    {metric.target && (
                      <span className="text-gray-600 font-medium ml-4">{metric.target}</span>
                    )}
                  </div>
                ))}
              </div>
            </CollapsibleSection>
          )}

          {/* Success Criteria */}
          {stage.successCriteria && stage.successCriteria.length > 0 && (
            <CollapsibleSection
              title="Success Criteria"
              icon={<CheckCircle className="w-5 h-5 text-gray-600" />}
            >
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {stage.successCriteria.map((criterion, idx) => (
                  <li key={idx}>{criterion}</li>
                ))}
              </ul>
            </CollapsibleSection>
          )}

          {/* Handoff to Next */}
          {stage.handoffToNext && stage.handoffToNext.length > 0 && (
            <CollapsibleSection
              title="Handoff to Next Stage"
              icon={<ArrowRight className="w-5 h-5 text-gray-600" />}
            >
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {stage.handoffToNext.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </CollapsibleSection>
          )}

          {/* Workshop Details */}
          {stage.workshop && (
            <CollapsibleSection
              title="Workshop/Session Details"
              icon={<Users className="w-5 h-5 text-gray-600" />}
            >
              {stage.workshop.duration && (
                <div className="mb-4">
                  <h4 className="font-medium text-gray-900 mb-1">Duration</h4>
                  <p className="text-gray-700">{stage.workshop.duration}</p>
                </div>
              )}
              {stage.workshop.attendees && stage.workshop.attendees.length > 0 && (
                <div className="mb-4">
                  <h4 className="font-medium text-gray-900 mb-2">Attendees</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    {stage.workshop.attendees.map((attendee, idx) => (
                      <li key={idx}>{attendee}</li>
                    ))}
                  </ul>
                </div>
              )}
              {stage.workshop.segments && stage.workshop.segments.length > 0 && (
                <div className="mb-4">
                  <h4 className="font-medium text-gray-900 mb-2">Session Segments</h4>
                  <div className="space-y-2">
                    {stage.workshop.segments.map((segment, idx) => (
                      <div key={idx} className="border-l-2 border-gray-300 pl-3">
                        <div className="flex items-center justify-between mb-1">
                          <h5 className="font-medium text-gray-900">{segment.title}</h5>
                          {segment.duration && (
                            <span className="text-sm text-gray-600">{segment.duration}</span>
                          )}
                        </div>
                        {segment.description && (
                          <p className="text-sm text-gray-600">{segment.description}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {stage.workshop.facilitationSetup && stage.workshop.facilitationSetup.length > 0 && (
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Facilitation Setup</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    {stage.workshop.facilitationSetup.map((setup, idx) => (
                      <li key={idx}>{setup}</li>
                    ))}
                  </ul>
                </div>
              )}
            </CollapsibleSection>
          )}

          {/* Change Classification */}
          {stage.changeClassification && (
            <CollapsibleSection
              title="Change Classification"
              icon={<Flag className="w-5 h-5 text-gray-600" />}
            >
              {stage.changeClassification.minor && (
                <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded">
                  <h4 className="font-medium text-green-900 mb-1">Minor Tweaks</h4>
                  <p className="text-sm text-green-800 mb-2">{stage.changeClassification.minor.description}</p>
                  <p className="text-xs text-green-700"><strong>Impact:</strong> {stage.changeClassification.minor.impact}</p>
                </div>
              )}
              {stage.changeClassification.major && (
                <div className="p-3 bg-red-50 border border-red-200 rounded">
                  <h4 className="font-medium text-red-900 mb-1">Major Redesign</h4>
                  <p className="text-sm text-red-800 mb-2">{stage.changeClassification.major.description}</p>
                  <p className="text-xs text-red-700"><strong>Impact:</strong> {stage.changeClassification.major.impact}</p>
                </div>
              )}
            </CollapsibleSection>
          )}

          {/* Red Flags */}
          {stage.redFlags && stage.redFlags.length > 0 && (
            <CollapsibleSection
              title="Red Flags (Escalation Points)"
              icon={<AlertTriangle className="w-5 h-5 text-red-600" />}
              defaultOpen={true}
            >
              <div className="space-y-2">
                {stage.redFlags.map((flag, idx) => (
                  <div key={idx} className="flex items-start gap-2 p-2 bg-red-50 border-l-4 border-red-500 rounded">
                    <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">{flag}</p>
                  </div>
                ))}
              </div>
            </CollapsibleSection>
          )}

          {/* Common Issues */}
          {stage.commonIssues && stage.commonIssues.length > 0 && (
            <CollapsibleSection
              title="Common Issues"
              icon={<AlertTriangle className="w-5 h-5 text-yellow-600" />}
            >
              <div className="space-y-4">
                {stage.commonIssues.map((issue, idx) => (
                  <div key={idx} className="border-l-4 border-yellow-400 pl-4">
                    <h4 className="font-medium text-gray-900 mb-1">{issue.issue}</h4>
                    {issue.example && (
                      <div className="mb-2 p-2 bg-red-50 rounded">
                        <p className="text-xs font-medium text-red-800 mb-1">❌ BAD Example:</p>
                        <p className="text-sm text-red-700">{issue.example}</p>
                      </div>
                    )}
                    {issue.solution && (
                      <div className="p-2 bg-green-50 rounded">
                        <p className="text-xs font-medium text-green-800 mb-1">✅ GOOD Solution:</p>
                        <p className="text-sm text-green-700">{issue.solution}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </CollapsibleSection>
          )}

          {/* Manager Actions */}
          {stage.managerActions && stage.managerActions.length > 0 && (
            <CollapsibleSection
              title="Manager Actions"
              icon={<Users className="w-5 h-5 text-gray-600" />}
            >
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {stage.managerActions.map((action, idx) => (
                  <li key={idx}>{action}</li>
                ))}
              </ul>
            </CollapsibleSection>
          )}

          {/* Manager Checklist */}
          {stage.managerChecklist && stage.managerChecklist.length > 0 && (
            <CollapsibleSection
              title="Manager Review Checklist"
              icon={<CheckCircle className="w-5 h-5 text-gray-600" />}
            >
              <div className="space-y-4">
                {stage.managerChecklist.map((category, idx) => (
                  <div key={idx}>
                    <h4 className="font-medium text-gray-900 mb-2">{category.category}:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                      {category.items.map((item, itemIdx) => (
                        <li key={itemIdx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </CollapsibleSection>
          )}

          {/* AI Prompts */}
          {stage.aiPrompts && stage.aiPrompts.length > 0 && (
            <CollapsibleSection
              title={`AI Prompts (${stage.aiPrompts.length})`}
              icon={<FileText className="w-5 h-5 text-gray-600" />}
              defaultOpen={true}
            >
              <div className="space-y-4">
                {stage.aiPrompts.map((prompt, idx) => (
                  <div key={idx} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h4 className="font-medium text-gray-900">{prompt.title}</h4>
                        {prompt.activity && (
                          <p className="text-sm text-gray-600 mt-1">
                            Used in: <span className="font-medium">{prompt.activity}</span>
                          </p>
                        )}
                      </div>
                      <CopyButton text={prompt.prompt} label="Copy Prompt" />
                    </div>
                    <div className="mt-3">
                      <details className="group">
                        <summary className="cursor-pointer text-sm font-medium text-gray-700 hover:text-gray-900">
                          View Prompt
                        </summary>
                        <pre className="mt-2 p-3 bg-gray-50 rounded text-xs text-gray-800 overflow-x-auto whitespace-pre-wrap">
                          {prompt.prompt}
                        </pre>
                      </details>
                    </div>
                  </div>
                ))}
              </div>
            </CollapsibleSection>
          )}
        </div>
      </div>
    </>
  );
}

