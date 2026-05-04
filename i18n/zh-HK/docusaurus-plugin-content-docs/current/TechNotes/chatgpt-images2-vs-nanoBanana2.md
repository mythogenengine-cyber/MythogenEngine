# 我用 Google 自己的 prompt 測試 ChatGPT Images 2.0——結果，漂亮到你想逐項核實

**所有人都說 ChatGPT Images 2.0 是革命性突破。我花了一天做了一件很無聊的事：逐項 fact-check。**

ChatGPT Summary
![](ChatGPT%20Image%202026年4月29日%20上午11_33_50.png)

Gemini Summary
![](Gemini_Generated_Image_lh2lrclh2lrclh2l.png)

---
上週 OpenAI 發佈 ChatGPT Images 2.0，整個科技圈為之沸騰。Image Arena 排名第一，ELO 分數拋離 Google Nano Banana 2 達 242 分——史上最大差距。KOL 排隊出教學，標題清一色是「碾壓」「革命」「Google 完了」。

但我反覆看那些介紹文，看到的都是 Nano Banana 早就做得到的功能。

所以我做了一個實驗。不是為了替誰站台，而是想釐清一件事：**這 242 分的差距，在真實使用場景裡，究竟代表什麼？**

---

## 實驗方法：用對手最有信心的子彈

方法很簡單，但很少人這樣做——

不替 ChatGPT 量身打造 prompt，而是直接取用 Google 官方 blog、AI Studio 範例頁展示的原始指令，改掉品牌名稱後，一字不改地餵入 ChatGPT。再將同一條 prompt 餵入 Gemini。

邏輯是：用對手自己最有信心的指令作為基準。你說 Nano Banana 做得到的事，同一條 prompt，ChatGPT 又能交出什麼？

我跑了四組測試。以下是結果。

但在看結果之前，有一件事必須先說清楚。

### 一個很少人提到的資訊差

我使用的是 ChatGPT **免費帳號**。測試完成後我才查到：ChatGPT Images 2.0 其實分為兩個模式——**Instant 模式**（免費用戶可用）和 **Thinking 模式**（需要 Plus 帳號，$20/月）。Thinking 模式才有網路搜尋、佈局推理、多圖一致性批次生成、輸出自我驗證等功能。

而 Gemini 的 Nano Banana 2，即時搜尋與推理功能在免費帳號即可使用。

這裡的問題不是我「應該付費再測」——問題是：**絕大多數介紹文和 KOL 展示的驚艷效果，從來沒有標註使用的是哪個帳號層級、哪個模式。** 普通讀者看完覺得「太厲害了」，自己用免費版去試，出來的效果完全不同，卻不知道是因為功能被鎖在付費牆後面。

這本身就是一種資訊不對稱。而這篇文章記錄的，正是一個普通免費用戶的真實體驗。

---

## 測試一：茶餐廳菜單（繁體中文渲染）

Prompt 要求：雙語港式茶餐廳菜單，至少 8 個菜品附 HKD 價格，1970 年代復古風格，所有中文必須是繁體字。

**ChatGPT** 交出了一張視覺上近乎完美的菜單圖。懷舊紅白配色、分欄整齊、14 個菜品雙語對照、底部附有奶茶凍飲插圖。放進真正的餐廳裡也不會讓人起疑。繁體中文全部正確。

**Gemini** 生成了一份 PDF 格式的菜單。8 個菜品，雙語對照，繁體中文正確。但沒有視覺設計、沒有插圖、沒有分欄——純文字排版。功能上做到了，但「直接拿去用」還差一段距離。

第一回合，ChatGPT 以視覺品質壓倒性勝出。沒有懸念。

如果故事到這裡結束，你會覺得那些 KOL 說得沒錯。

但故事不是到這裡結束的。

"Create a bilingual restaurant menu card (Traditional Chinese and English) for a Hong Kong-style cha chaan teng. Include at least 8 items with prices in HKD. The menu should have a retro 1970s aesthetic with cream background and red accents. All Chinese text must be in Traditional Chinese characters."

Fig_01: ChatGPT bilingual restaurant menu card
![](ChatGPT%20Image%202026年4月29日%20上午09_18_13.png)

Fig_02:  Gemini bilingual restaurant menu card
![](gemini_test1.png)

---

## 測試二：時事資訊圖表（真正的分水嶺）

這個測試才是重頭戲。我分別要求兩個模型，針對近期體育賽事生成一張慶祝資訊圖。

**ChatGPT** 交出了一張 2025 年 Dodgers 世界大賽冠軍海報。雜誌級排版，金色標題，球員「寫實風」插圖，七場比數時間線，MVP 區塊，關鍵數據面板。整張圖的設計感強到讓人想立刻轉發。

"Create a celebratory poster-style infographic commemorating [最近一週內的重大體育/新聞事件]. Include the key figures, dates, and statistics. Include one or two additional context details that make the event meaningful."

Fig_03: ChatGPT 最近一週內的重大體育/新聞事件
![](ChatGPT%20Image%202026年4月29日%20上午09_20_23.png)

**Gemini** 交出了一張 2026 年尤伯盃中華女子羽球隊晉級八強的資訊圖。雙版佈局，球員卡通插圖，分組賽數據，個人戰績統計。設計上不如 ChatGPT 驚艷，但資訊脈絡清晰。

Fig_04: Gemini 最近一週內的重大體育/新聞事件
![](Gemini_Generated_Image_ereqdjereqdjereq.png)

然後我做了一件很無聊的事。

我逐項 fact-check。

---

### ChatGPT 的 Dodgers 圖：7 個重大事實錯誤

我拿著這張圖，對照 Baseball Reference、Wikipedia、MLB.com 官網，逐項核實。結果如下：

**MVP 搞錯了人。** 圖中標示「世界大賽 MVP：大谷翔平」。事實上，2025 年世界大賽 MVP 是投手 Yoshinobu Yamamoto——三勝零敗，ERA 1.02。大谷翔平拿的是 NLCS MVP，不是世界大賽 MVP。這是整張圖最核心的事實，完全標錯。

**七場比數大面積標反。** Game 1 的 11-4 是 Blue Jays 大勝，圖中卻標為 Dodgers「勝」。Game 3 是 Dodgers 在 18 局延長賽靠 Freddie Freeman 的 walk-off 全壘打贏下來的，圖中卻標為「負」。七場裡有四場的勝負方向是反的。

**團隊打擊率憑空捏造。** 圖中列出 .283，實際上 Dodgers 該年世界大賽的團隊打擊率只有 .203——是 1966 年以來冠軍隊伍的最低紀錄。這個數字是 AI 自行生成的。

**大谷翔平的 Game 7 描述完全與事實相反。** 圖中寫他「投打雙向主宰戰局」，但事實上大谷在 Game 7 先發投球僅撐三局便遭 Bo Bichette 打出三分全壘打。打出關鍵追平全壘打的是 Miguel Rojas，不是大谷。

一張設計感 A+ 的圖，事實準確度是 F。

---

### Gemini 的尤伯盃圖：大致正確，一個地點錯誤

同樣方法核實。球員名字全部正確：謝沛珊、洪恩慈、林湘緹、黃宥薰。4 月 28 日對印尼的比數 2:3 正確。各場勝負方向正確。分組排名正確。

最大的錯誤：將「賽事地點」標為中國成都，但 2026 年尤伯盃的實際比賽地點在丹麥 Horsens。成都只是抽籤儀式的舉辦地。

一個地點錯誤，對比七個核心事實錯誤。

---

## 測試三：產品規格比較表（號稱最大優勢的項目）

ChatGPT Images 2.0 被吹捧最多的「獨門功夫」是結構化佈局——整齊的表格、精確的文字對齊、不會溢出的排版。所以我直接測這個：要求兩個模型生成三款無線耳機的規格比較圖。

兩張圖都交出了整齊的三欄表格。ChatGPT 那張更加乾淨——白底、品牌 logo、產品渲染圖精緻。Gemini 那張用金色漸變分區，有裝飾元素，稍顯花巧。

單看佈局整齊度，ChatGPT 確實勝出。

然後我又做了同一件無聊的事。

"Create a one-page product comparison chart for 3 wireless earbuds (AirPods Pro 3, Samsung Galaxy Buds 4, Sony WF-1000XM6). Use a clean 3-column layout with rows for: Price, Battery Life, ANC Rating (out of 10), Water Resistance, Weight. Include a small product icon at the top of each column. Add a 'Best For' recommendation at the bottom of each column. All text must be sharp and readable."

Fig_05: ChatGPT product comparison chart for 3 wireless earbuds
![](ChatGPT%20Image%202026年4月29日%20上午10_01_10.png)

Fig_06: Gemini product comparison chart for 3 wireless earbuds
![](Gemini_Generated_Image_c6gdztc6gdztc6gd.png)
---

### 逐項核實規格數據

**AirPods Pro 3 防水等級：兩邊都標 IPX4。實際是 IP57。** 這不是小差異——IP57 意味著可以短暫浸入水中，IPX4 只防潑水，是完全不同的防護等級。兩個模型都套用了舊款 AirPods Pro 2 的規格。

**ChatGPT 的額外錯誤：**
- Samsung Galaxy Buds 4 價格標為 $199.99，實際是 $179
- Galaxy Buds 4 電量標為 30 小時，實際是 24 小時（高估 25%）
- Sony WF-1000XM6 價格標為 $299.99，實際是 $329.99（少報 $30）

12 項規格數據，ChatGPT 錯了 5 項，Gemini 錯了 2 到 3 項。

最諷刺的是：ChatGPT 的「結構化佈局」確實更漂亮——但裡面的數字有接近一半是錯的。這就像一份排版完美的財務報告，但數字是亂填的。

---

## 測試四：結構化文件理解（殺手鐧測試）

最後一個測試，也是我認為最具實戰價值的。

我將自己正在撰寫的書稿第十一章的大綱——一篇關於世嘉與任天堂的遊戲產業分析——分別以 HTML、Markdown、JSON 格式餵入兩個模型，要求生成該章節的總結資訊圖。

**Gemini** 準確讀懂了整份大綱。生成的圖涵蓋：世嘉退出主機市場的時間線、岩田聰退出機能競賽的策略分析、Switch 2 的定價與晶片架構、NVIDIA 從五百萬美元善款到五兆美元市值的敘事弧線。所有論點與我的章節結構一一對應。底部結語「世嘉死於走在時代的前面。任天堂活於走在時代的後面。但時代正在追上來。」——直接引用自原文。

**ChatGPT** 交出了一張雞胸肉絲營養全解析的漫畫風資訊圖。

對，雞胸肉絲。一個龍虎風格的男主角捧著一碟雞胸肉絲，配上六個營養知識區塊。視覺上非常精緻。繁體中文正確。風格統一。

但與我的第十一章完全無關。它根本沒有讀懂我的輸入內容。

https://mythogenengine-cyber.github.io/MythogenEngine/docs/GameVictory/INFO_PAGE

https://mythogenengine-cyber.github.io/MythogenEngine/docs/GameVictory/%E7%AC%AC%E5%8D%81%E4%B8%80%E7%AB%A0_%E7%B5%A6%E9%81%8A%E6%88%B2%E7%8E%A9%E5%AE%B6%E7%9A%84%E6%83%85%E6%9B%B8_v4

Fig_07 由於Gemini 對於多種檔案效果都一致我就只貼md(而且是從Gemini NotebookLM  plug-in 直讀的實際操作方便很多倍！) 
Fig_08-10 html md json，基本只有JSON大概知道主題，但都是牛風馬不搭。

Fig_07: Gemini Chapter Summary (html, json, md)
![](ch11_zh.png)

Fig_08: ChatGPT Chapter Summary (html)
![](ChatGPT%20Image%202026年4月29日%20上午10_16_32.png)

Fig_09: ChatGPT Chapter Summary (md)
![](ChatGPT%20Image%202026年4月29日%20上午10_37_37.png)

Fig_10: ChatGPT Chapter Summary (json)
![](ChatGPT%20Image%202026年4月29日%20上午10_40_34.png)

---

## 所以，「革命性突破」到底在哪裡？

四輪測試跑完，模式非常清楚：

**ChatGPT Images 2.0 是一個視覺包裝天才。** 它產出的每一張圖都像出自設計師之手——排版精準、配色考究、風格統一。如果你需要一張「看起來很專業」的圖，它確實是目前最強的選擇。

**但「看起來專業」與「內容正確」之間，有一道很深的鴻溝。**

242 分的 ELO 差距，衡量的是「人類評審覺得哪張圖更好看」。評審看的是構圖、色彩、風格、第一眼印象。沒有人會在 Arena 投票時去核實圖中的數據。

而我做的正正是這件事。

結果是：**ChatGPT 的圖讓你不想去核實——因為它漂亮到你直接相信了。**

這才是最危險的地方。

---

## 你真正該問的問題

下次看到有人說某個 AI 工具「碾壓」「革命」，問自己四個問題：

**1. 他用的是免費版還是付費版？**
ChatGPT Images 2.0 的 Thinking 模式——網路搜尋、推理、多圖一致性——需要每月 $20 的 Plus 帳號。免費用戶只能用 Instant 模式。但幾乎沒有介紹文會標註這一點。你看到的驚艷效果，很可能建立在你無法免費取得的功能之上。

**2. 他測的是「能出圖」還是「能出正確的圖」？**
絕大多數比較文和排行榜測的是前者。但你實際需要的是後者。

**3. 同一條 prompt，他有沒有用對手的版本跑過？**
如果他只用為 ChatGPT 量身設計的 prompt 來測 ChatGPT，結果當然好看。用 Google 自己的 prompt 反向測試，結論可能截然不同。

**4. 圖中的資訊，他有沒有逐項核實？**
如果你的使用場景是「出一張漂亮的圖發限時動態，三秒就滑過去了」，不需要核實，ChatGPT 完勝。如果你的使用場景是「出一張資訊圖表用在簡報、文章或專業場合」，你最好逐項核實——因為接近一半的數據可能是錯的。

---

## 那到底哪個比較好？

這是一個錯誤的問題。

正確的問題是：**你需要什麼？**

需要視覺衝擊力——ChatGPT Images 2.0 目前無出其右。
需要準確讀懂你的輸入內容——Gemini 的文件理解能力更為可靠。
需要事實準確的資訊圖表——兩者都不完全可信，但 Gemini 的錯誤率明顯較低。

而如果你需要「既漂亮又正確」的圖——好消息和壞消息是同一句話：**目前沒有任何一個模型能同時做到。**

---

## 最後一件事

我寫這篇文章的過程中，Claude 幫我完成了所有檢索與 fact-check——逐項對照 Baseball Reference 的比分記錄、BWF 官方賽事結果、以及 Samsung、Apple、Sony 的官方規格頁面。

一個擅長出漂亮圖的 AI。一個擅長讀懂文件的 AI。一個擅長核實事實的 AI。

三個加在一起，才完成了一件事：**產出一張正確的圖。**

這才是 2026 年 AI 工具的真實狀態。不是某個模型「碾壓」了另一個，而是每一個都有它擅長和不擅長的領域。那些說「革命」的人不是在說謊——他們只是沒有走最後一步。

而那一步，叫做核實。

---

*測試日期：2026 年 4 月 29 日*
*測試模型：ChatGPT Images 2.0（免費帳號，Instant 模式）、Gemini（Nano Banana 2 / Pro，免費帳號）*
*事實核實工具：Claude（Anthropic）配合即時網路搜尋*
*所有測試圖片附於下方，歡迎自行驗證。*
*備註：ChatGPT Images 2.0 的 Thinking 模式（含網路搜尋、推理、多圖一致性）需 Plus 帳號（$20/月）方可使用。本次測試未使用該模式。*
