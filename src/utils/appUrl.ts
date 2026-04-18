const STORAGE_BRD_SECTION = 'brd-last-section';

export type AppViewMode = 'factoryLine' | 'brdSections';

export interface ParsedAppUrl {
  view: AppViewMode;
  sectionId: string | null;
  stageId: number | null;
}

export function parseAppUrl(search: string = window.location.search): ParsedAppUrl {
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
  const url = window.location.pathname + (qs ? `?${qs}` : '');
  window.history.replaceState({}, '', url);
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
