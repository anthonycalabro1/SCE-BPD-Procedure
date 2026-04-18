"""Utility: list paragraph indices containing key substrings (UTF-8)."""
import zipfile
import xml.etree.ElementTree as ET
from pathlib import Path

NS = {"w": "http://schemas.openxmlformats.org/wordprocessingml/2006/main"}

def pt(p):
    parts = []
    for t in p.findall(".//w:t", NS):
        if t.text:
            parts.append(t.text)
        if t.tail:
            parts.append(t.tail)
    return "".join(parts).strip()

repo = Path(__file__).resolve().parent.parent
with zipfile.ZipFile(repo / "SCE BRD Factory-Line Work Procedure.docx") as z:
    root = ET.fromstring(z.read("word/document.xml"))
body = root.find("w:body", NS)
paras = []
for child in body:
    if child.tag.endswith("p"):
        t = pt(child)
        if t:
            paras.append(t)

keys = [
    "Draft Section 1.1",
    "Extract Capabilities from Repository",
    "Draft Success Criteria",
    "Create Section Templates",
    "STAGE 3:",
    "STAGE 4:",
    "To-Be Process Design",
    "STAGE 8:",
    "User Journey Mapping",
    "Populate Remaining BRD Sections",
    "Definitions",
]
out = repo / "scripts" / "_procedure_anchor_dump.txt"
lines = [f"total_paras={len(paras)}\n"]
for k in keys:
    lines.append(f"\n=== {k} ===\n")
    for i, p in enumerate(paras):
        if k in p:
            lines.append(f"{i}: {p[:200]}\n")
out.write_text("".join(lines), encoding="utf-8")
print(f"Wrote {out}")
