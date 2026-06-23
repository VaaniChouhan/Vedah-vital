import re

def inspect_svg(input_path):
    with open(input_path, 'r') as f:
        content = f.read()
        
    # Find all path elements
    paths = re.findall(r'<path[^>]*>', content)
    print(f"Total paths: {len(paths)}")
    
    # Sort paths by length of their d attribute
    path_details = []
    for p in paths:
        d_match = re.search(r'd="([^"]+)"', p)
        d_len = len(d_match.group(1)) if d_match else 0
        fill_match = re.search(r'fill="([^"]+)"', p)
        stroke_match = re.search(r'stroke="([^"]+)"', p)
        opacity_match = re.search(r'opacity="([^"]+)"', p)
        
        fill = fill_match.group(1) if fill_match else "none"
        stroke = stroke_match.group(1) if stroke_match else "none"
        opacity = opacity_match.group(1) if opacity_match else "1"
        
        path_details.append({
            "element": p[:150] + "...",
            "d_len": d_len,
            "fill": fill,
            "stroke": stroke,
            "opacity": opacity
        })
        
    # Sort descending
    path_details.sort(key=lambda x: x["d_len"], reverse=True)
    
    print("\nTop 15 longest paths in SVG:")
    for i, pd in enumerate(path_details[:15], 1):
        print(f"{i}. Length: {pd['d_len']:,} chars | Fill: {pd['fill']} | Stroke: {pd['stroke']} | Opacity: {pd['opacity']}")

if __name__ == "__main__":
    inspect_svg("public/images/human1.svg")
