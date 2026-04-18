"""Extract heading outline from Master BRD .docx.

Output JSON is for reconciling `src/data/brdOutline.ts` when the Word template changes.
Run from repo root: `python scripts/extract_brd_outline.py`
"""
import json
import re
import sys
import zipfile
import xml.etree.ElementTree as ET
from pathlib import Path

NS = {"w": "http://schemas.openxmlformats.org/wordprocessingml/2006/main"}


def para_text(p):
    parts = []
    for t in p.findall(".//w:t", NS):
        if t.text:
            parts.append(t.text)
        if t.tail:
            parts.append(t.tail)
    return "".join(parts).strip()


def clean(s):
    s = s.replace("\u201c", '"').replace("\u201d", '"').replace("\u2019", "'")
    s = re.sub(r"[\x00-\x08\x0b\x0c\x0e-\x1f]", "", s)
    return s.strip()


def load_document_xml(docx_path: Path) -> ET.Element:
    with zipfile.ZipFile(docx_path, "r") as z:
        return ET.fromstring(z.read("word/document.xml"))


def extract_entries(root: ET.Element):
    entries = []
    for p in root.findall(".//w:body/w:p", NS):
        ppr = p.find("w:pPr", NS)
        val = None
        if ppr is not None:
            ps = ppr.find("w:pStyle", NS)
            if ps is not None:
                val = ps.get("{http://schemas.openxmlformats.org/wordprocessingml/2006/main}val")
        txt = clean(para_text(p))
        if not txt:
            continue
        if val in ("Title", "Subtitle", "Heading1", "Heading2", "Heading3", "Heading4"):
            entries.append({"style": val, "text": txt})
    return entries


def main():
    repo = Path(__file__).resolve().parent.parent
    docx = repo / "(Master) BRD - Business Requirements Document - AMI 2.0 Template  - V03232026.docx"
    root = load_document_xml(docx)
    raw = extract_entries(root)

    last_heading_level = 1
    seen_h1 = False
    preface_subtitle_index = 0
    numbered = []
    for e in raw:
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
                lvl = 0  # front matter; synthetic id
                preface_subtitle_index += 1
                preface_idx = preface_subtitle_index
            else:
                lvl = min(last_heading_level + 1, 5)
        else:
            lvl = 2
        numbered.append({"level": lvl, "title": e["text"], "preface_index": preface_idx})

    # Build hierarchical ids (1, 1.1, 1.1.1, 2, 2.1, ...)
    numbers: list[int] = []
    flat = []

    for item in numbered:
        lvl = item["level"]
        title = item["title"]
        if item.get("preface_index"):
            idx = item["preface_index"]
            flat.append({"id": f"doc-meta-{idx}", "level": 1, "title": title})
            continue
        if lvl == 0:
            # Level 1 so tree builder places cover + front matter as siblings of Section 1
            flat.append({"id": "doc-title", "level": 1, "title": title})
            continue

        while len(numbers) > lvl:
            numbers.pop()
        while len(numbers) < lvl:
            numbers.append(0)
        numbers[-1] += 1
        sec_id = ".".join(str(n) for n in numbers)
        flat.append({"id": sec_id, "level": lvl, "title": title})

    print(json.dumps(flat, indent=2))


if __name__ == "__main__":
    main()
