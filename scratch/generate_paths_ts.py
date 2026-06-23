import json
import re

def generate_ts():
    with open("scratch/highlights.json", "r") as f:
        highlights = json.load(f)
        
    def extract_d(path_str):
        d_match = re.search(r'd="([^"]+)"', path_str)
        return d_match.group(1) if d_match else ""
        
    stomach_ds = [extract_d(p) for p in highlights["stomach"] if extract_d(p)]
    artery_ds = [extract_d(p) for p in highlights["arteries"] if extract_d(p)]
    vein_ds = [extract_d(p) for p in highlights["veins"] if extract_d(p)]
    
    ts_content = f"""// Semantic anatomical highlight paths extracted from human1.svg
// Used for high-performance interactive overlays.

export const stomachPaths = {json.dumps(stomach_ds, indent=2)};

export const arteryPaths = {json.dumps(artery_ds, indent=2)};

export const veinPaths = {json.dumps(vein_ds, indent=2)};
"""
    
    with open("src/components/sections/AnatomicalPaths.ts", "w") as f:
        f.write(ts_content)
        
    print("Generated src/components/sections/AnatomicalPaths.ts")
    print(f"Stomach ds: {len(stomach_ds)}, Artery ds: {len(artery_ds)}, Vein ds: {len(vein_ds)}")

generate_ts()
