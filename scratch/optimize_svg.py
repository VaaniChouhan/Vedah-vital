import re
import os

def optimize_svg(input_path, output_path):
    print(f"Optimizing {input_path} -> {output_path}...")
    with open(input_path, 'r') as f:
        content = f.read()
        
    original_size = len(content)
    
    # Regular expression to find floating point numbers in the path d attribute
    # Path d coordinates are numbers, possibly with signs, exponents, etc.
    # Let's find all numbers in the file and round them to 2 decimal places.
    # Note: We should only round numbers inside d="..." attributes to be safe,
    # but since almost the entire file is path data, rounding all floats in the file
    # (except viewBox, width, height) might be much easier and safer.
    # Let's target numbers inside path d attributes specifically.
    
    def round_match(m):
        val = float(m.group(0))
        return str(int(round(val)))

    # Regexp for float or integer: e.g. -12.3456, 0.1234, 123.456, etc.
    # We match decimals with optional sign
    num_re = re.compile(r'-?\d+\.\d+')
    
    # Let's find all d="..." attributes
    def replace_d(match):
        d_content = match.group(1)
        # Round all floating numbers inside the d string
        optimized_d = num_re.sub(round_match, d_content)
        # Also clean up consecutive spaces or commas
        optimized_d = re.sub(r'\s+', ' ', optimized_d)
        return f'd="{optimized_d}"'
        
    # Replace all d="..." content
    content_opt = re.sub(r'd="([^"]+)"', replace_d, content)
    
    # Also let's clean up general whitespace
    content_opt = re.sub(r'\s+', ' ', content_opt)
    
    with open(output_path, 'w') as f:
        f.write(content_opt)
        
    opt_size = len(content_opt)
    print(f"Original size: {original_size / 1024:.2f} KB")
    print(f"Optimized size: {opt_size / 1024:.2f} KB")
    print(f"Reduction: {(1 - opt_size/original_size)*100:.1f}%")

if __name__ == "__main__":
    optimize_svg("public/images/human_silhouette.svg", "public/images/human_silhouette_opt.svg")
