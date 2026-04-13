import os

dirs = ['docs/mirror-realm', 'i18n/en/docusaurus-plugin-content-docs/current/mirror-realm', 'i18n/zh-HK/docusaurus-plugin-content-docs/current/mirror-realm']
chapters = ['ch11', 'ch12', 'ch12b', 'ch13', 'ch14', 'ch15', 'ch16', 'ch17', 'ch18', 'ch19', 'epilogue']

def clean_file(path):
    if not os.path.exists(path):
        return
        
    with open(path, 'r', encoding='utf-8') as f:
        lines = f.readlines()
        
    # We want to drop ALL trailing lines that are tracking blocks.
    # A block starting with `---` that contains only `*` text (including `*由第`, `*版本`, `*LOG-`, `*接`) or nothing.
    # Because there might be multiple such `---` blocks at the end, we can scan backwards and find the FIRST `---` 
    # such that everything after it is just tracking info or empty.
    
    cut_idx = len(lines)
    for i in range(len(lines)):
        line = lines[i].strip()
        if line == '---':
            # Check if EVERYTHING from i+1 to end is empty, `---`, or tracking line (starts with `*` or `> *` BUT wait! `**精采看點：**` is different.)
            is_trail = True
            for j in range(i+1, len(lines)):
                l = lines[j].strip()
                if not l: continue
                if l == '---': continue
                # Allow tracking tags that start with `*` but exclude `**精采看點：**` which is legitimate markdown bold.
                if l.startswith('*') and not l.startswith('**'): continue
                if l.startswith('> *'): continue
                if l.startswith('版本：'): continue
                if l.startswith('建立：'): continue
                is_trail = False
                break
            
            if is_trail:
                cut_idx = i
                break
                
    # Also trim empty lines before cut_idx
    while cut_idx > 0 and not lines[cut_idx-1].strip():
        cut_idx -= 1
        
    if cut_idx < len(lines):
        print(f"Cleaned {len(lines) - cut_idx} lines from {path}")
        with open(path, 'w', encoding='utf-8') as f:
            f.writelines(lines[:cut_idx] + ["\n"])

for d in dirs:
    for c in chapters:
        p = os.path.join(d, c + '.md')
        clean_file(p)
