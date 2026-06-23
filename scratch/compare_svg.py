import re

def scan_svg(file_path):
    with open(file_path, 'r') as f:
        content = f.read()
    fills = set(re.findall(r'fill="([^"]+)"', content))
    strokes = set(re.findall(r'stroke="([^"]+)"', content))
    print(f"=== {file_path} ===")
    print("Fills:", fills)
    print("Strokes:", strokes)

scan_svg("public/images/human.svg")
scan_svg("public/images/human1.svg")
