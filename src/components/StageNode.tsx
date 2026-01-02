import { memo } from 'react';
import { Handle, Position, NodeProps } from 'reactflow';
import { FileText, CheckCircle } from 'lucide-react';
import { Stage } from '../types/stage';

interface StageNodeData extends Stage {
  selected?: boolean;
}

function StageNode({ data, selected }: NodeProps<StageNodeData>) {
  const phaseColors = {
    1: {
      bg: 'bg-blue-50',
      border: 'border-blue-600',
      text: 'text-blue-900',
      badge: 'bg-blue-600 text-white'
    },
    2: {
      bg: 'bg-orange-50',
      border: 'border-orange-600',
      text: 'text-orange-900',
      badge: 'bg-orange-600 text-white'
    },
    3: {
      bg: 'bg-green-50',
      border: 'border-green-600',
      text: 'text-green-900',
      badge: 'bg-green-600 text-white'
    }
  };

  const colors = phaseColors[data.phase];

  return (
    <div
      className={`${colors.bg} ${colors.border} border-2 rounded-lg shadow-md p-4 min-w-[200px] max-w-[250px] transition-all ${
        selected ? 'ring-2 ring-offset-2 ring-blue-500 shadow-lg' : ''
      }`}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-2">
        <div className="flex items-center gap-2">
          <FileText className={`w-5 h-5 ${colors.text}`} />
          <span className={`text-xs font-semibold ${colors.badge} px-2 py-0.5 rounded`}>
            Stage {data.id}
          </span>
        </div>
        {data.phaseMilestone && (
          <CheckCircle className={`w-5 h-5 ${colors.text}`} title="Phase Milestone" />
        )}
      </div>

      {/* Stage Name */}
      <h3 className={`font-semibold text-sm mb-2 ${colors.text} line-clamp-2`}>
        {data.name}
      </h3>

      {/* Hours Badge */}
      <div className="mb-2">
        <span className={`text-xs ${colors.text} font-medium`}>
          {data.totalHours}h
          {data.waitTime && ` + ${data.waitTime}`}
        </span>
      </div>

      {/* Role */}
      <div className={`text-xs ${colors.text} opacity-75`}>
        {data.roleOwnership}
      </div>

      {/* Handles */}
      <Handle type="target" position={Position.Left} className="w-3 h-3" />
      <Handle type="source" position={Position.Right} className="w-3 h-3" />
    </div>
  );
}

export default memo(StageNode);

