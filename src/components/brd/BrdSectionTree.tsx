import { useMemo, useState } from 'react';
import { ChevronRight, ChevronDown, FileText } from 'lucide-react';
import type { BrdOutlineNode } from '../../data/brdOutline';

interface BrdSectionTreeProps {
  root: BrdOutlineNode;
  selectedId: string | null;
  onSelect: (id: string) => void;
}

function normalize(s: string) {
  return s.toLowerCase();
}

/** Returns ids that should be visible (match or ancestor of match) given search query. */
function visibleIdSet(root: BrdOutlineNode, query: string): Set<string> | null {
  if (!query.trim()) return null;

  const q = normalize(query.trim());
  const matchOrAncestor = new Set<string>();

  function walk(node: BrdOutlineNode): boolean {
    const selfMatch =
      normalize(node.title).includes(q) || normalize(node.id).includes(q);
    let childMatch = false;
    for (const c of node.children) {
      if (walk(c)) childMatch = true;
    }
    const keep = selfMatch || childMatch;
    if (keep) {
      matchOrAncestor.add(node.id);
    }
    return keep;
  }

  walk(root);
  return matchOrAncestor;
}

interface NodeRowProps {
  node: BrdOutlineNode;
  depth: number;
  selectedId: string | null;
  onSelect: (id: string) => void;
  expanded: Set<string>;
  toggle: (id: string) => void;
  visible: Set<string> | null;
}

function NodeRow({
  node,
  depth,
  selectedId,
  onSelect,
  expanded,
  toggle,
  visible,
}: NodeRowProps) {
  const hasChildren = node.children.length > 0;
  const isOpen = expanded.has(node.id);
  const isSelected = selectedId === node.id;
  const hidden = visible && !visible.has(node.id);
  if (hidden) return null;

  return (
    <div>
      <div
        className={`flex items-center gap-1 py-1 pr-2 rounded cursor-pointer text-sm ${
          isSelected ? 'bg-blue-100 text-blue-900' : 'hover:bg-gray-100 text-gray-800'
        }`}
        style={{ paddingLeft: 8 + depth * 14 }}
        onClick={() => {
          if (node.id === 'root') return;
          onSelect(node.id);
        }}
      >
        {hasChildren ? (
          <button
            type="button"
            className="p-0.5 rounded hover:bg-gray-200 shrink-0"
            aria-expanded={isOpen}
            onClick={(e) => {
              e.stopPropagation();
              toggle(node.id);
            }}
          >
            {isOpen ? (
              <ChevronDown className="w-4 h-4 text-gray-500" />
            ) : (
              <ChevronRight className="w-4 h-4 text-gray-500" />
            )}
          </button>
        ) : (
          <span className="w-5 shrink-0 inline-flex justify-center">
            <FileText className="w-3.5 h-3.5 text-gray-400" />
          </span>
        )}
        <span className="truncate">
          {node.id !== 'root' && <span className="text-gray-400 mr-1 font-mono text-xs">{node.id}</span>}
          {node.title}
        </span>
      </div>
      {hasChildren && isOpen && (
        <div>
          {node.children.map((child) => (
            <NodeRow
              key={child.id}
              node={child}
              depth={depth + 1}
              selectedId={selectedId}
              onSelect={onSelect}
              expanded={expanded}
              toggle={toggle}
              visible={visible}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default function BrdSectionTree({ root, selectedId, onSelect }: BrdSectionTreeProps) {
  const [search, setSearch] = useState('');
  const [expanded, setExpanded] = useState<Set<string>>(() => {
    const s = new Set<string>();
    function expand(n: BrdOutlineNode) {
      s.add(n.id);
      n.children.forEach(expand);
    }
    expand(root);
    return s;
  });

  const visible = useMemo(() => visibleIdSet(root, search), [root, search]);

  const toggle = (id: string) => {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <div className="flex flex-col h-full min-h-0">
      <div className="p-2 border-b border-gray-200">
        <label className="sr-only" htmlFor="brd-section-search">
          Search BRD sections
        </label>
        <input
          id="brd-section-search"
          type="search"
          placeholder="Search by id or title…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-2 py-1.5 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <div className="flex-1 overflow-y-auto p-1">
        {root.children.map((child) => (
          <NodeRow
            key={child.id}
            node={child}
            depth={0}
            selectedId={selectedId}
            onSelect={onSelect}
            expanded={expanded}
            toggle={toggle}
            visible={visible}
          />
        ))}
      </div>
    </div>
  );
}
