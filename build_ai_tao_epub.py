import os
import subprocess

pandoc_path = r"C:\Users\user\AppData\Local\Pandoc\pandoc.exe"

files = [
    "INFO_PAGE.md",
    "prologue.md",
    "ch01.md",
    "ch02.md",
    "ch03.md",
    "ch04.md",
    "ch05.md",
    "ch06.md",
    "ch07.md",
    "ch08.md",
    "ch09.md",
    "ch10.md",
    "ch11.md",
    "ch12.md",
    "ch13.md",
    "ch14.md",
    "ch15.md",
    "ch16.md",
    "ch17.md",
    "ch18.md",
    "epilogue.md",
    "afterword.md",
    "appendix.md"
]

print("Building English EPUB for 'The Invisible Path'...")
os.chdir(r"D:\Note\BLOG\i18n\en\docusaurus-plugin-content-docs\current\AI_TAO")

cmd = [
    pandoc_path,
    "-o", r"D:\Note\BLOG\The_Invisible_Path_EN.epub",
    "--epub-cover-image=" + r"D:\Note\BLOG\static\img\book_cover_invisible_path.png",
    "--resource-path", r".;D:\Note\BLOG",
    "--metadata=title:The Invisible Path",
    "--metadata=author:Nebula Walker",
    "--metadata=language:en-US",
    "--toc",
    "--toc-depth=2"
] + files

print("Running command:", " ".join(cmd))
result = subprocess.run(cmd, capture_output=True, text=True)

if result.returncode == 0:
    print("Success! EPUB built at D:\\Note\\BLOG\\The_Invisible_Path_EN.epub")
else:
    print("Failed to build EPUB!")
    print("Stdout:", result.stdout)
    print("Stderr:", result.stderr)
