"""Build a lighter menu cut from the bundled OFL Belleza source.

Build-only requirements: fonttools==4.68.0 skia-pathops==0.9.2 brotli==1.2.1.
Run from any directory. The app does not depend on these Python tools.
"""
from pathlib import Path

import pathops
from fontTools.pens.cu2quPen import Cu2QuPen
from fontTools.pens.recordingPen import DecomposingRecordingPen
from fontTools.pens.ttGlyphPen import TTGlyphPen
from fontTools.ttLib import TTFont

ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "public/fonts/belleza-regular.ttf"
OUTPUT = ROOT / "public/fonts/aeria-navigation-light.woff2"


def main():
    font = TTFont(SOURCE, recalcTimestamp=False)
    glyphs = font.getGlyphSet()
    outlines, bearings = {}, {}
    # Elliptical insetting reduces thick stems more than fine horizontal details.
    # Advances, kerning, baselines and layout metrics stay those of the source.
    for name in font.getGlyphOrder():
        recording = DecomposingRecordingPen(glyphs)
        glyphs[name].draw(recording)
        original = pathops.Path()
        recording.replay(original.getPen())
        if not original:
            continue
        scaled = original.transform(scaleY=2.5)
        edge = pathops.Path(scaled)
        edge.stroke(18, pathops.LineCap.BUTT_CAP, pathops.LineJoin.ROUND_JOIN, 4)
        edge.convertConicsToQuads(.1)
        inset = pathops.op(scaled, edge, pathops.PathOp.DIFFERENCE, clockwise=True)
        if not inset:
            raise ValueError(f"Inset erased glyph {name}")
        pen = TTGlyphPen(None)
        inset.transform(scaleY=.4).draw(Cu2QuPen(pen, max_err=.35))
        outline = pen.glyph()
        outline.recalcBounds(font["glyf"])
        source_outline = font["glyf"][name]
        source_outline.recalcBounds(font["glyf"])
        advance, bearing = font["hmtx"][name]
        bearings[name] = (advance, bearing + outline.xMin - source_outline.xMin)
        outlines[name] = outline
    for name, outline in outlines.items():
        font["glyf"][name] = outline
        font["hmtx"][name] = bearings[name]
    # Original grid-fitting instructions no longer describe the new outlines.
    for table in ("fpgm", "prep", "cvt ", "hdmx", "LTSH", "VDMX", "DSIG"):
        if table in font:
            del font[table]
    font["OS/2"].usWeightClass = 300
    font["OS/2"].fsSelection &= ~((1 << 5) | (1 << 6))
    font["head"].macStyle &= ~3
    names = {
        1: "Aeria Navigation", 2: "Light",
        3: "1.000;Aeria;AeriaNavigation-Light",
        4: "Aeria Navigation Light",
        5: "Version 1.000; lighter derivative of Belleza",
        6: "AeriaNavigation-Light", 16: "Aeria Navigation", 17: "Light",
    }
    for record in font["name"].names:
        if record.nameID in names:
            record.string = names[record.nameID].encode(record.getEncoding())
    font.flavor = "woff2"
    font.save(OUTPUT)
    built, source = TTFont(OUTPUT), TTFont(SOURCE)
    assert built.getBestCmap() == source.getBestCmap()
    assert all(built["hmtx"][n][0] == source["hmtx"][n][0] for n in source.getGlyphOrder())
    assert built["OS/2"].usWeightClass == 300
    print(f"Built {OUTPUT.name}: {len(outlines)} outlines, unchanged advances, weight 300")


if __name__ == "__main__":
    main()
