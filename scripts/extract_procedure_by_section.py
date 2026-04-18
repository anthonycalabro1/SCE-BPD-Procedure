"""
Extract factory-line procedure excerpts per BRD outline id from SCE BRD Factory-Line Work Procedure.docx.

Uses scripts/procedure_section_rules.yaml (start_contains / end_before per section).

Run: python scripts/extract_procedure_by_section.py
"""
from __future__ import annotations

import json
import re
import zipfile
import xml.etree.ElementTree as ET
from pathlib import Path

try:
    import yaml
except ImportError:
    yaml = None  # type: ignore

NS = {"w": "http://schemas.openxmlformats.org/wordprocessingml/2006/main"}
WORD_MAIN = "{http://schemas.openxmlformats.org/wordprocessingml/2006/main}"


def clean(s: str) -> str:
    """Normalize smart quotes and dashes. procedure_section_rules.yaml must use ASCII '-' so substrings match."""
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


def load_body_paragraphs(docx_path: Path) -> list[str]:
    with zipfile.ZipFile(docx_path, "r") as z:
        root = ET.fromstring(z.read("word/document.xml"))
    body = root.find("w:body", NS)
    if body is None:
        return []
    out: list[str] = []
    for child in body:
        if child.tag != WORD_MAIN + "p":
            continue
        t = para_text(child)
        if t:
            out.append(t)
    return out


def slice_paragraphs(
    paras: list[str],
    start_contains: str | None,
    end_before: str | None,
) -> str:
    if not start_contains:
        return ""
    start_i = None
    for i, p in enumerate(paras):
        if start_contains in p:
            start_i = i
            break
    if start_i is None:
        return ""
    end_i = len(paras)
    if end_before:
        for j in range(start_i + 1, len(paras)):
            if end_before in paras[j]:
                end_i = j
                break
    chunk = paras[start_i:end_i]
    return "\n\n".join(chunk).strip()


def main() -> None:
    if yaml is None:
        raise SystemExit("PyYAML required: pip install pyyaml")

    repo = Path(__file__).resolve().parent.parent
    docx = repo / "SCE BRD Factory-Line Work Procedure.docx"
    rules_path = repo / "scripts" / "procedure_section_rules.yaml"
    out_dir = repo / "src" / "data" / "generated"
    out_dir.mkdir(parents=True, exist_ok=True)
    out_path = out_dir / "brdProcedureBySection.json"

    paras = load_body_paragraphs(docx)
    raw = rules_path.read_text(encoding="utf-8")
    rules: dict = yaml.safe_load(raw)

    result: dict[str, str] = {}
    missing: list[str] = []

    for sec_id, cfg in rules.items():
        if not isinstance(cfg, dict):
            continue
        start = cfg.get("start_contains")
        end = cfg.get("end_before")
        text = slice_paragraphs(paras, start, end)
        result[sec_id] = text
        if not text.strip() and cfg.get("optional") is not True:
            missing.append(sec_id)

    out_path.write_text(json.dumps(result, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
    print(f"Wrote {out_path} ({len(result)} keys)")
    if missing:
        print("WARNING: empty extraction for:", ", ".join(missing))


if __name__ == "__main__":
    main()
