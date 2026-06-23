import re

def extract_paths():
    with open("public/images/human1.svg", "r") as f:
        content = f.read()
        
    stomach_matches = re.findall(r'<path[^>]*fill="#F4AAA3"[^>]*>', content)
    print("Stomach paths count:", len(stomach_matches))
    for i, m in enumerate(stomach_matches):
        print(f"Stomach path {i} length:", len(m))
        print("Starts with:", m[:150])
        print("Ends with:", m[-150:])

extract_paths()
