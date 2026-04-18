import { useCallback, useEffect, useState } from 'react';
import { CheckCircle, LayoutGrid, BookMarked } from 'lucide-react';
import ProcessFlow from './components/ProcessFlow';
import StageDetailPanel from './components/StageDetailPanel';
import BrdSectionLayout from './components/brd/BrdSectionLayout';
import { stages } from './data/stages';
import { Stage } from './types/stage';
import {
  parseAppUrl,
  writeAppUrl,
  readLastBrdSection,
  saveLastBrdSection,
  type AppViewMode,
} from './utils/appUrl';

const DEFAULT_BRD_SECTION = '1';

function stageById(id: number): Stage | undefined {
  return stages.find((s) => s.id === id);
}

function initialBrdSectionId(): string {
  const { sectionId } = parseAppUrl();
  if (sectionId) return sectionId;
  return readLastBrdSection() ?? DEFAULT_BRD_SECTION;
}

function initialStage(): Stage | null {
  const { stageId } = parseAppUrl();
  if (stageId == null) return null;
  return stageById(stageId) ?? null;
}

function initialView(): AppViewMode {
  return parseAppUrl().view;
}

function App() {
  const [viewMode, setViewMode] = useState<AppViewMode>(initialView);
  const [selectedStage, setSelectedStage] = useState<Stage | null>(initialStage);
  const [selectedBrdSectionId, setSelectedBrdSectionId] = useState<string>(initialBrdSectionId);

  const syncUrl = useCallback((view: AppViewMode, stage: Stage | null, sectionId: string) => {
    if (view === 'brdSections') {
      writeAppUrl({ view: 'brdSections', sectionId });
    } else {
      writeAppUrl({ view: 'factoryLine', stageId: stage?.id ?? null });
    }
  }, []);

  useEffect(() => {
    syncUrl(viewMode, selectedStage, selectedBrdSectionId);
  }, [viewMode, selectedStage, selectedBrdSectionId, syncUrl]);

  useEffect(() => {
    const onPop = () => {
      const parsed = parseAppUrl();
      setViewMode(parsed.view);
      if (parsed.stageId != null) {
        const st = stageById(parsed.stageId);
        setSelectedStage(st ?? null);
      } else {
        setSelectedStage(null);
      }
      if (parsed.sectionId) setSelectedBrdSectionId(parsed.sectionId);
    };
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  const handleStageClick = (stage: Stage) => {
    setSelectedStage(stage);
  };

  const handleClosePanel = () => {
    setSelectedStage(null);
  };

  const goToBrdSection = (sectionId: string) => {
    setSelectedBrdSectionId(sectionId);
    saveLastBrdSection(sectionId);
    setViewMode('brdSections');
  };

  const goToFactoryStage = (stageId: number) => {
    const st = stageById(stageId);
    if (st) setSelectedStage(st);
    setViewMode('factoryLine');
  };

  return (
    <div className="h-screen w-screen flex flex-col bg-gray-100">
      <header className="bg-white shadow-sm border-b border-gray-200 px-6 py-4 z-30 shrink-0">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">BRD Process Dashboard</h1>
              <p className="text-sm text-gray-600 mt-1">
                Factory-line stages and BRD Master template sections with inline procedure and AI prompts
              </p>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-3">
              <div className="inline-flex rounded-lg border border-gray-300 bg-gray-50 p-1">
                <button
                  type="button"
                  onClick={() => setViewMode('factoryLine')}
                  className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                    viewMode === 'factoryLine'
                      ? 'bg-white shadow text-gray-900'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <LayoutGrid className="w-4 h-4" />
                  Factory line
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setViewMode('brdSections');
                    saveLastBrdSection(selectedBrdSectionId);
                  }}
                  className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                    viewMode === 'brdSections'
                      ? 'bg-white shadow text-gray-900'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <BookMarked className="w-4 h-4" />
                  BRD sections
                </button>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-lg border border-gray-200">
                <CheckCircle className="w-5 h-5 text-blue-600 shrink-0" />
                <span className="text-sm text-gray-700">
                  <span className="font-medium">Phase milestone</span> — completion checkpoint
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 relative min-h-0 flex flex-col">
        {viewMode === 'factoryLine' ? (
          <>
            <ProcessFlow
              stages={stages}
              onStageClick={handleStageClick}
              selectedStageId={selectedStage?.id}
            />
            {selectedStage && (
              <StageDetailPanel
                stage={selectedStage}
                onClose={handleClosePanel}
                onOpenBrdSection={goToBrdSection}
              />
            )}
          </>
        ) : (
          <BrdSectionLayout
            selectedSectionId={selectedBrdSectionId}
            onSelectSection={(id) => {
              setSelectedBrdSectionId(id);
              saveLastBrdSection(id);
            }}
            onOpenStage={goToFactoryStage}
          />
        )}
      </main>
    </div>
  );
}

export default App;
