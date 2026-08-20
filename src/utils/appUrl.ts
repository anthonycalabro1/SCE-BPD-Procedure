const STORAGE_BRD_SECTION = 'brd-last-section';

export type AppViewMode = 'factoryLine' | 'brdSections';

export interface ParsedAppUrl {
  view: AppViewMode;
  sectionId: string | null;
  stageId: number | null;
}

function isFileProtocol(): boolean {
  return typeof window !== 'undefined' && window.location.protocol === 'file:';
}

/** Query string used for http(s); hash is used on file:// so deep links work without a server. */
function locationSearchString(): string {
  if (isFileProtocol()) {
    const hash = window.location.hash.replace(/^#/, '').replace(/^\?/, '');
    return hash ? `?${hash}` : '';
  }
  return window.location.search;
}

export function parseAppUrl(search: string = locationSearchString()): ParsedAppUrl {
  const p = new URLSearchParams(search);
  const viewRaw = p.get('view');
  const view: AppViewMode = viewRaw === 'brd' ? 'brdSections' : 'factoryLine';
  const section = p.get('section');
  const stage = p.get('stage');
  let stageId: number | null = null;
  if (stage) {
    const n = parseInt(stage, 10);
    if (!Number.isNaN(n)) stageId = n;
  }
  return {
    view,
    sectionId: section,
    stageId,
  };
}

export function writeAppUrl(
  state:
    | { view: 'brdSections'; sectionId: string }
    | { view: 'factoryLine'; stageId: number | null }
) {
  const p = new URLSearchParams();
  if (state.view === 'brdSections') {
    p.set('view', 'brd');
    p.set('section', state.sectionId);
  } else {
    if (state.stageId != null) p.set('stage', String(state.stageId));
  }
  const qs = p.toString();

  if (isFileProtocol()) {
    const nextHash = qs ? `#${qs}` : '';
    if (window.location.hash === nextHash) return;
    const nextUrl = `${window.location.pathname}${window.location.search}${nextHash}`;
    try {
      window.history.replaceState({}, '', nextUrl);
    } catch {
      window.location.hash = qs;
    }
    return;
  }

  const url = window.location.pathname + (qs ? `?${qs}` : '');
  try {
    window.history.replaceState({}, '', url);
  } catch {
    /* file:// and some embedded browsers reject History API writes */
  }
}

export function readLastBrdSection(): string | null {
  try {
    return sessionStorage.getItem(STORAGE_BRD_SECTION);
  } catch {
    return null;
  }
}

export function saveLastBrdSection(sectionId: string) {
  try {
    sessionStorage.setItem(STORAGE_BRD_SECTION, sectionId);
  } catch {
    /* ignore */
  }
}
