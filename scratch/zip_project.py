import os
import zipfile

def zip_project():
    zip_filename = "vedah-vital-vercel-deploy.zip"
    ignored_dirs = {"node_modules", ".git", "dist", "scratch", ".gemini", ".agents"}
    ignored_files = {zip_filename, ".gitignore", "README.md", "eslint.config.js", "tsconfig.json", "tsconfig.node.json", "tsconfig.app.json"}
    
    # We want to delete the old zip first if it exists
    if os.path.exists(zip_filename):
        os.remove(zip_filename)
        print(f"Removed old {zip_filename}")
        
    print(f"Creating new {zip_filename}...")
    with zipfile.ZipFile(zip_filename, 'w', zipfile.ZIP_DEFLATED) as zipf:
        for root, dirs, files in os.walk("."):
            # Modify dirs in-place to skip ignored directories
            dirs[:] = [d for d in dirs if d not in ignored_dirs and not d.startswith('.')]
            
            for file in files:
                if file in ignored_files or file.startswith('.'):
                    continue
                file_path = os.path.join(root, file)
                # Keep archive path relative to the current directory
                archive_path = os.path.relpath(file_path, ".")
                zipf.write(file_path, archive_path)
                
    print(f"Successfully created {zip_filename} with size {os.path.getsize(zip_filename) / (1024*1024):.2f} MB")

if __name__ == "__main__":
    zip_project()
