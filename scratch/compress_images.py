import os
from PIL import Image

dirs = [
    r"D:\Note\BLOG\docs\GameVictory",
    r"D:\Note\BLOG\i18n\en\docusaurus-plugin-content-docs\current\GameVictory",
    r"D:\Note\BLOG\i18n\zh-HK\docusaurus-plugin-content-docs\current\GameVictory"
]

for d in dirs:
    for f in os.listdir(d):
        if f.lower().endswith(".png"):
            path = os.path.join(d, f)
            size = os.path.getsize(path)
            if size > 1024 * 1024:  # Only compress images larger than 1MB
                print(f"Compressing {path} (Original: {size/1024/1024:.2f} MB)")
                try:
                    img = Image.open(path)
                    img.thumbnail((1200, 1200), Image.Resampling.LANCZOS)
                    # Use adaptive palette to reduce colors and save space
                    if img.mode != "P":
                        if img.mode == "RGBA":
                            # Convert to RGB first, then to P with transparency support, 
                            # but simple ADAPTIVE P mode on RGBA might lose transparency.
                            # Usually these are book illustrations so RGB is fine.
                            background = Image.new("RGB", img.size, (255, 255, 255))
                            background.paste(img, mask=img.split()[3]) # 3 is alpha channel
                            img = background
                        img = img.convert('P', palette=Image.ADAPTIVE, colors=256)
                    img.save(path, optimize=True)
                    new_size = os.path.getsize(path)
                    print(f"  -> Compressed to {new_size/1024:.2f} KB")
                except Exception as e:
                    print(f"  -> Failed: {e}")
print("Done!")
