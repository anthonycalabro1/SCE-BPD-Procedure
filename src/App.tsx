import { useState } from 'react';
import { CheckCircle } from 'lucide-react';
import ProcessFlow from './components/ProcessFlow';
import StageDetailPanel from './components/StageDetailPanel';
import { stages } from './data/stages';
import { Stage } from './types/stage';

function App() {
  const [selectedStage, setSelectedStage] = useState<Stage | null>(null);

  const handleStageClick = (stage: Stage) => {
    setSelectedStage(stage);
  };

  const handleClosePanel = () => {
    setSelectedStage(null);
  };

  return (
    <div className="h-screen w-screen flex flex-col bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200 px-6 py-4 z-30">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">BRD Process Dashboard</h1>
              <p className="text-sm text-gray-600 mt-1">
                Interactive visualization of the 13-stage BRD Factory-Line process
              </p>
            </div>
            {/* Legend */}
            <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-lg border border-gray-200">
              <CheckCircle className="w-5 h-5 text-blue-600" />
              <span className="text-sm text-gray-700">
                <span className="font-medium">Phase Milestone</span> - Marks completion of a phase
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 relative">
        <ProcessFlow
          stages={stages}
          onStageClick={handleStageClick}
          selectedStageId={selectedStage?.id}
        />
        
        {selectedStage && (
          <StageDetailPanel
            stage={selectedStage}
            onClose={handleClosePanel}
          />
        )}
      </main>
    </div>
  );
}

export default App;

