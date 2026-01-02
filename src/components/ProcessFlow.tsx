import { useCallback, useMemo } from 'react';
import ReactFlow, {
  Node,
  Edge,
  Background,
  Controls,
  ReactFlowProvider,
} from 'reactflow';
import 'reactflow/dist/style.css';
import StageNode from './StageNode';
import { Stage } from '../types/stage';

interface ProcessFlowProps {
  stages: Stage[];
  onStageClick: (stage: Stage) => void;
  selectedStageId?: number;
}

const nodeTypes = {
  stageNode: StageNode,
};

function ProcessFlowInner({ stages, onStageClick, selectedStageId }: ProcessFlowProps) {
  const nodes: Node[] = useMemo(() => {
    // Group stages by phase
    const stagesByPhase: { [phase: number]: typeof stages } = {
      1: [],
      2: [],
      3: [],
    };
    
    stages.forEach(stage => {
      stagesByPhase[stage.phase].push(stage);
    });

    const nodesList: Node[] = [];
    let currentY = 100;
    const nodeSpacingX = 280;
    const rowSpacingY = 200;
    const nodesPerRow = 4; // Maximum nodes per row

    // Process each phase
    [1, 2, 3].forEach(phase => {
      const phaseStages = stagesByPhase[phase];
      if (phaseStages.length === 0) return;

      phaseStages.forEach((stage, indexInPhase) => {
        const rowInPhase = Math.floor(indexInPhase / nodesPerRow);
        const colInRow = indexInPhase % nodesPerRow;
        
        // Find the original index in the stages array to maintain order
        const originalIndex = stages.findIndex(s => s.id === stage.id);
        
        const x = colInRow * nodeSpacingX + 100;
        const y = currentY + (rowInPhase * rowSpacingY);
        
        nodesList[originalIndex] = {
          id: `stage-${stage.id}`,
          type: 'stageNode',
          position: { x, y },
          data: {
            ...stage,
            selected: selectedStageId === stage.id,
          },
        };
      });

      // Move to next phase's starting Y position
      const phaseRows = Math.ceil(phaseStages.length / nodesPerRow);
      currentY += phaseRows * rowSpacingY + 50; // Add extra spacing between phases
    });

    return nodesList.filter(Boolean); // Remove any undefined entries
  }, [stages, selectedStageId]);

  const edges: Edge[] = useMemo(() => {
    const edgeList: Edge[] = [];
    for (let i = 0; i < stages.length - 1; i++) {
      const sourceStage = stages[i];
      const targetStage = stages[i + 1];
      
      // Determine edge color based on phase transition
      let edgeColor = '#94a3b8'; // default gray
      if (sourceStage.phase === 1 && targetStage.phase === 2) {
        edgeColor = '#ea580c'; // orange for phase 1->2
      } else if (sourceStage.phase === 2 && targetStage.phase === 3) {
        edgeColor = '#16a34a'; // green for phase 2->3
      } else if (sourceStage.phase === targetStage.phase) {
        if (sourceStage.phase === 1) edgeColor = '#2563eb'; // blue
        else if (sourceStage.phase === 2) edgeColor = '#ea580c'; // orange
        else edgeColor = '#16a34a'; // green
      }
      
      edgeList.push({
        id: `edge-${sourceStage.id}-${targetStage.id}`,
        source: `stage-${sourceStage.id}`,
        target: `stage-${targetStage.id}`,
        type: 'smoothstep',
        animated: false,
        style: { strokeWidth: 2, stroke: edgeColor },
      });
    }
    return edgeList;
  }, [stages]);

  const onNodeClick = useCallback(
    (_event: React.MouseEvent, node: Node) => {
      const stage = stages.find((s) => s.id === parseInt(node.id.split('-')[1]));
      if (stage) {
        onStageClick(stage);
      }
    },
    [stages, onStageClick]
  );

  return (
    <div className="w-full h-full">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        onNodeClick={onNodeClick}
        fitView
        minZoom={0.5}
        maxZoom={2}
        defaultViewport={{ x: 0, y: 0, zoom: 0.8 }}
      >
        <Background color="#e5e7eb" gap={16} />
        <Controls />
      </ReactFlow>
    </div>
  );
}

export default function ProcessFlow(props: ProcessFlowProps) {
  return (
    <ReactFlowProvider>
      <ProcessFlowInner {...props} />
    </ReactFlowProvider>
  );
}
