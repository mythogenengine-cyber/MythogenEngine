import os
import glob

dirs_to_check = [
    r'D:\Note\BLOG\docs\Diary',
    r'D:\Note\BLOG\docs\TechNotes',
    r'D:\Note\BLOG\i18n\en\docusaurus-plugin-content-docs\current\Diary',
    r'D:\Note\BLOG\i18n\en\docusaurus-plugin-content-docs\current\TechNotes',
    r'D:\Note\BLOG\i18n\zh-HK\docusaurus-plugin-content-docs\current\Diary',
    r'D:\Note\BLOG\i18n\zh-HK\docusaurus-plugin-content-docs\current\TechNotes',
    r'D:\Note\BLOG\i18n\zh-Hant\docusaurus-plugin-content-docs\current\Diary',
    r'D:\Note\BLOG\i18n\zh-Hant\docusaurus-plugin-content-docs\current\TechNotes'
]

def process_file(f):
    with open(f, 'r', encoding='utf-8') as file:
        content = file.read()
        
    changed = False
    
    if content.startswith('---'):
        end_idx = content.find('\n---', 3)
        if end_idx != -1:
            header = content[:end_idx+4]
            rest = content[end_idx+4:]
            
            if '\ntags:\n' in header:
                new_header = header.replace('\ntags:\n', '\narticle_tags:\n')
                content = new_header + rest
                changed = True

    if changed:
        with open(f, 'w', encoding='utf-8') as file:
            file.write(content)
        print(f"Reverted: {f}")

for d in dirs_to_check:
    if not os.path.exists(d):
        continue
    for f in glob.glob(os.path.join(d, '*.md')):
        process_file(f)

print("Done.")
