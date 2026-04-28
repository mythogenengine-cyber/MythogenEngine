import os
import subprocess

pandoc_path = r"C:\Users\user\AppData\Local\Pandoc\pandoc.exe"

files = [
    "INFO_PAGE.md",
    "自序_玩住學_v17.md",
    "序章_看不見的代價_v1.md",
    "第一章_神仙打架的DOS時代_v4.md",
    "第二章_特洛伊木馬_v3.md",
    "第三章_微軟的恐懼與 Xbox 的誕生.md",
    "第四章_世嘉的五百萬美元善款_v1.md",
    "第五章_AI的野蠻生長與Wintel的盲區_v2.md",
    "第六章_Gabe Newell 的越獄行動_v5.md",
    "第七章_CUDA豪賭與遊戲玩家的RD稅_v3.md",
    "第八章_唯一的軍工廠_台積電的終極壟斷_v2.md",
    "第九章_CEO的生死時速_Lisa_Su_vs_Pat_Gelsinger_v2.md",
    "第十章_最後一根救命稻草_v2.md",
    "第十一章_給遊戲玩家的情書_v4.md",
    "終章_遊戲即未來_v5b.md",
    "外傳上篇_逃獄者_Google的無魂豪賭與TPU閉環_v1.md",
    "外傳下篇_缺課者_中國的應用狂歡與底層斷裂_v1.md",
    "back_cover.md"
]

print("Building Chinese EPUB...")
os.chdir(r"D:\Note\BLOG\docs\GameVictory")
subprocess.run([pandoc_path, "-o", r"D:\Note\BLOG\GameVictory_TC.epub", "--epub-cover-image=gamevictory_cover_lock_front.png", "--resource-path", r".;D:\Note\BLOG", "--metadata=title:遊戲至勝 GameVictory", "--metadata=author:星忘塵 Nebula Walker", "--metadata=language:zh-TW", "--toc", "--toc-depth=2"] + files, check=True)

print("Building English EPUB...")
os.chdir(r"D:\Note\BLOG\i18n\en\docusaurus-plugin-content-docs\current\GameVictory")
subprocess.run([pandoc_path, "-o", r"D:\Note\BLOG\GameVictory_EN.epub", "--epub-cover-image=gamevictory_cover_lock_front.png", "--resource-path", r".;D:\Note\BLOG", "--metadata=title:GameVictory", "--metadata=author:Nebula Walker", "--metadata=language:en-US", "--toc", "--toc-depth=2"] + files, check=True)

print("Done!")
