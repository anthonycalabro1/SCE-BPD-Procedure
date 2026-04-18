"""
Extract instructional body text under each heading in the Master BRD template .docx.

Outputs src/data/generated/brdTemplateGuidance.json keyed by outline id (same ids as brdOutline.ts).

Run from repo root: python scripts/extract_master_brd_guidance.py
"""
from __future__ import annotations

import json
import re
import zipfile
import xml.etree.ElementTree as ET
from pathlib import Path

# Shared with extract_brd_outline.py
NS = {"w": "http://schemas.openxmlformats.org/wordprocessingml/2006/main"}
WORD_MAIN = "{http://schemas.openxmlformats.org/wordprocessingml/2006/main}"
HEADING_STYLES = frozenset({"Title", "Subtitle", "Heading1", "Heading2", "Heading3", "Heading4"})


def clean(s: str) -> str:
    s = s.replace("\u201c", '"').replace("\u201d", '"').replace("\u2019", "'")
    s = s.replace("\u2013", "-").replace("\u2014", "-")
    s = re.sub(r"[\x00-\x08\x0b\x0c\x0e-\x1f]", "", s)
    return s.strip()


def para_text(p: ET.Element) -> str:
    parts: list[str] = []
    for t in p.findall(".//w:t", NS):
        if t.text:
            parts.append(t.text)
        if t.tail:
            parts.append(t.tail)
    return clean("".join(parts))


def get_para_style(p: ET.Element) -> str | None:
    ppr = p.find("w:pPr", NS)
    if ppr is None:
        return None
    ps = ppr.find("w:pStyle", NS)
    if ps is None:
        return None
    return ps.get(WORD_MAIN + "val")


def extract_heading_entries(root: ET.Element) -> list[dict]:
    """Same heading stream as extract_brd_outline.extract_entries."""
    entries = []
    for p in root.findall(".//w:body/w:p", NS):
        ppr = p.find("w:pPr", NS)
        val = None
        if ppr is not None:
            ps = ppr.find("w:pStyle", NS)
            if ps is not None:
                val = ps.get(WORD_MAIN + "val")
        txt = clean(para_text(p))
        if not txt:
            continue
        if val in HEADING_STYLES:
            entries.append({"style": val, "text": txt})
    return entries


def build_flat_ids(entries: list[dict]) -> list[str]:
    """Same numbering as extract_brd_outline main()."""
    last_heading_level = 1
    seen_h1 = False
    preface_subtitle_index = 0
    numbered = []
    for e in entries:
        st = e["style"]
        preface_idx = None
        if st == "Title":
            lvl = 0
        elif st == "Heading1":
            lvl = 1
            last_heading_level = 1
            seen_h1 = True
        elif st == "Heading2":
            lvl = 2
            last_heading_level = 2
        elif st == "Heading3":
            lvl = 3
            last_heading_level = 3
        elif st == "Heading4":
            lvl = 4
            last_heading_level = 4
        elif st == "Subtitle":
            if not seen_h1:
                lvl = 0
                preface_subtitle_index += 1
                preface_idx = preface_subtitle_index
            else:
                lvl = min(last_heading_level + 1, 5)
        else:
            lvl = 2
        numbered.append({"level": lvl, "title": e["text"], "preface_index": preface_idx})

    numbers: list[int] = []
    flat: list[dict] = []
    for item in numbered:
        lvl = item["level"]
        title = item["title"]
        if item.get("preface_index"):
            idx = item["preface_index"]
            flat.append({"id": f"doc-meta-{idx}", "level": 1, "title": title})
            continue
        if lvl == 0:
            flat.append({"id": "doc-title", "level": 1, "title": title})
            continue

        while len(numbers) > lvl:
            numbers.pop()
        while len(numbers) < lvl:
            numbers.append(0)
        numbers[-1] += 1
        sec_id = ".".join(str(n) for n in numbers)
        flat.append({"id": sec_id, "level": lvl, "title": title})

    return [x["id"] for x in flat]


def table_to_markdown(tbl: ET.Element) -> str:
    rows: list[list[str]] = []
    for tr in tbl.findall(".//w:tr", NS):
        cells: list[str] = []
        for tc in tr.findall("./w:tc", NS):
            texts: list[str] = []
            for p in tc.findall(".//w:p", NS):
                t = para_text(p)
                if t:
                    texts.append(t.replace("|", "\\|"))
            cells.append(" ".join(texts) if texts else " ")
        if cells:
            rows.append(cells)
    if not rows:
        return ""
    width = max(len(r) for r in rows)
    norm = [r + [""] * (width - len(r)) for r in rows]
    lines = []
    header = norm[0]
    lines.append("| " + " | ".join(header) + " |")
    lines.append("| " + " | ".join("---" for _ in header) + " |")
    for r in norm[1:]:
        lines.append("| " + " | ".join(r) + " |")
    return "\n".join(lines)


def main() -> None:
    repo = Path(__file__).resolve().parent.parent
    docx = repo / "(Master) BRD - Business Requirements Document - AMI 2.0 Template  - V03232026.docx"
    out_dir = repo / "src" / "data" / "generated"
    out_dir.mkdir(parents=True, exist_ok=True)
    out_path = out_dir / "brdTemplateGuidance.json"

    with zipfile.ZipFile(docx, "r") as z:
        root = ET.fromstring(z.read("word/document.xml"))

    body = root.find("w:body", NS)
    if body is None:
        raise SystemExit("No w:body in document.xml")

    entries = extract_heading_entries(root)
    id_order = build_flat_ids(entries)

    content: dict[str, list[str]] = {}
    hi = 0
    current_id: str | None = None

    for child in body:
        tag = child.tag
        if tag == WORD_MAIN + "p":
            st = get_para_style(child)
            txt = para_text(child)
            if not txt:
                continue
            if st in HEADING_STYLES:
                if hi < len(id_order):
                    current_id = id_order[hi]
                    hi += 1
                continue
            if current_id:
                content.setdefault(current_id, []).append(txt)
        elif tag == WORD_MAIN + "tbl":
            md = table_to_markdown(child)
            if md and current_id:
                content.setdefault(current_id, []).append(md)

    result = {k: "\n\n".join(v).strip() for k, v in content.items()}
    out_path.write_text(json.dumps(result, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
    print(f"Wrote {out_path} ({len(result)} sections with body text)")


if __name__ == "__main__":
    main()
