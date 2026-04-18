import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { buildBrdOutlineTree, brdOutlineIdToItem } from '../../data/brdOutline';
import { getBrdSectionContent } from '../../data/brdSectionContent/getBrdSectionContent';
import BrdSectionTree from './BrdSectionTree';
import BrdSectionDetailPanel from './BrdSectionDetailPanel';

interface BrdSectionLayoutProps {
  selectedSectionId: string;
  onSelectSection: (id: string) => void;
  onOpenStage?: (stageId: number) => void;
}

const outlineTree = buildBrdOutlineTree();
const idToItem = brdOutlineIdToItem();

export default function BrdSectionLayout({
  selectedSectionId,
  onSelectSection,
  onOpenStage,
}: BrdSectionLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const item = idToItem.get(selectedSectionId);
  const title = item?.title ?? selectedSectionId;
  const content = getBrdSectionContent(selectedSectionId);

  return (
    <div className="flex flex-1 min-h-0 flex-col md:flex-row bg-gray-100">
      {/* Mobile sidebar toggle */}
      <div className="md:hidden flex items-center justify-between px-4 py-2 bg-white border-b border-gray-200">
        <span className="text-sm font-medium text-gray-800">BRD outline</span>
        <button
          type="button"
          className="p-2 rounded-md border border-gray-300 bg-white"
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-expanded={sidebarOpen}
        >
          {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      <aside
        className={`
          shrink-0 border-r border-gray-200 bg-white flex-col
          md:w-80 md:flex md:static
          ${sidebarOpen ? 'flex fixed inset-0 z-50 w-full md:relative md:inset-auto' : 'hidden md:flex'}
        `}
      >
        <div className="p-3 border-b border-gray-200 hidden md:block">
          <h2 className="text-sm font-semibold text-gray-800">BRD sections (Master template)</h2>
          <p className="text-xs text-gray-500 mt-1">Instructions and prompts aligned to each section.</p>
        </div>
        <div className="flex-1 min-h-0 overflow-hidden flex flex-col">
          <BrdSectionTree
            root={outlineTree}
            selectedId={selectedSectionId}
            onSelect={(id) => {
              onSelectSection(id);
              setSidebarOpen(false);
            }}
          />
        </div>
      </aside>

      {sidebarOpen && (
        <button
          type="button"
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          aria-label="Close menu"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <div className="flex-1 min-w-0 min-h-0 flex flex-col">
        <BrdSectionDetailPanel
          sectionId={selectedSectionId}
          title={title}
          content={content}
          onOpenStage={(sid) => {
            setSidebarOpen(false);
            onOpenStage?.(sid);
          }}
        />
      </div>
    </div>
  );
}
