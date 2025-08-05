#!/usr/bin/env python3
"""
Script to validate JSON-LD structured data from Jekyll site
"""
import json
import re
import sys
from pathlib import Path

def extract_and_validate_jsonld(html_file):
    """Extract and validate JSON-LD from HTML file"""
    try:
        with open(html_file, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Find JSON-LD script tags
        pattern = r'<script type="application/ld\+json">\s*(.*?)\s*</script>'
        matches = re.findall(pattern, content, re.DOTALL)
        
        if not matches:
            print(f"No JSON-LD found in {html_file}")
            return False
        
        for i, json_str in enumerate(matches):
            try:
                # Parse JSON to validate
                parsed = json.loads(json_str)
                print(f"✅ JSON-LD #{i+1} in {html_file} is valid!")
                print(f"   Type: {parsed.get('@type', 'Unknown')}")
                if 'name' in parsed:
                    print(f"   Name: {parsed['name']}")
                print()
                
            except json.JSONDecodeError as e:
                print(f"❌ JSON-LD #{i+1} in {html_file} is INVALID!")
                print(f"   Error: {e}")
                print(f"   JSON: {json_str[:200]}...")
                return False
        
        return True
        
    except Exception as e:
        print(f"Error processing {html_file}: {e}")
        return False

def main():
    site_dir = Path("/Users/psurukuc/Applications/psurukuc.github.io/_site")
    
    # Check main pages
    test_files = [
        site_dir / "index.html",
        site_dir / "group" / "index.html",
        site_dir / "research" / "index.html",
        site_dir / "news" / "index.html"
    ]
    
    all_valid = True
    
    for html_file in test_files:
        if html_file.exists():
            if not extract_and_validate_jsonld(html_file):
                all_valid = False
        else:
            print(f"⚠️  File not found: {html_file}")
    
    if all_valid:
        print("🎉 All JSON-LD structured data is valid!")
    else:
        print("💥 Some JSON-LD is invalid!")
        sys.exit(1)

if __name__ == "__main__":
    main()
