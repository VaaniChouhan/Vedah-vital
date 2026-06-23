import re
import json

def extract_highlights():
    with open("public/images/human1.svg", "r") as f:
        content = f.read()
        
    stomach_colors = {'#F4AAA3'}
    artery_colors = {'#E12349', '#951F32', '#B82740', '#A54C4B', '#6F1110', '#B05052'}
    vein_colors = {'#00A5DA', '#00457B', '#00367D', '#0099D3'}
    
    # We find all path elements
    # Using regex to extract elements cleanly
    path_re = re.compile(r'<path[^>]*>')
    all_paths = path_re.findall(content)
    
    stomach_paths = []
    artery_paths = []
    vein_paths = []
    silhouette_paths = []
    
    for p in all_paths:
        fill_match = re.search(r'fill="([^"]+)"', p)
        fill = fill_match.group(1) if fill_match else "none"
        
        # Check if it has stroke
        stroke_match = re.search(r'stroke="([^"]+)"', p)
        stroke = stroke_match.group(1) if stroke_match else "none"
        
        if fill in stomach_colors:
            stomach_paths.append(p)
        elif fill in artery_colors:
            artery_paths.append(p)
        elif fill in vein_colors:
            vein_paths.append(p)
        else:
            silhouette_paths.append(p)
            
    print(f"Stomach paths: {len(stomach_paths)}")
    print(f"Artery paths: {len(artery_paths)}")
    print(f"Vein paths: {len(vein_paths)}")
    print(f"Silhouette paths: {len(silhouette_paths)}")
    
    # Let's save the highlights to a JS/JSON file for easy copying or loading
    highlights = {
        "stomach": stomach_paths,
        "arteries": artery_paths,
        "veins": vein_paths
    }
    
    with open("scratch/highlights.json", "w") as f:
        json.dump(highlights, f, indent=2)
        
    # Also let's save the silhouette SVG (excluding stomach, arteries, veins) to public/images/human_silhouette.svg
    # We rebuild the SVG content using only silhouette paths
    # Keep the original SVG header and footer
    svg_header_match = re.match(r'(<svg[^>]*>).*', content, re.DOTALL)
    svg_header = svg_header_match.group(1) if svg_header_match else '<svg width="136" height="359" viewBox="0 0 136 359" fill="none" xmlns="http://www.w3.org/2000/svg">'
    
    # Let's write the silhouette SVG
    with open("public/images/human_silhouette.svg", "w") as f:
        f.write(svg_header + "\n")
        for p in silhouette_paths:
            f.write(p + "\n")
        f.write("</svg>\n")
        
    print("Saved public/images/human_silhouette.svg")
    print("Size of silhouette SVG:", os.path.getsize("public/images/human_silhouette.svg") / 1024, "KB")

import os
extract_highlights()
