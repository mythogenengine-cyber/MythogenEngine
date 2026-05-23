# Mythogen Engine 標籤庫 (Tag Library)

所有合法標籤的中英對照。生成 YAML 時，`tags` 欄位必須從本庫中選取。
中文標籤使用港台統一的書面語，避免港台有歧義的用詞。
若文章需要本庫中不存在的標籤，可新增但需在輸出中標記 `# [NEW]` 提醒作者審核。

---

## Topic 主題標籤（每篇文章恰好選 1 個）

| ID | zh | en |
|----|-----|-----|
| `t-ai-industry` | AI 產業結構 | ai-industry-structure |
| `t-labor` | 就業市場 | labor-market |
| `t-education` | 教育批判 | education-critique |
| `t-big-tech` | 科技巨頭 | big-tech |
| `t-media` | 媒體素養 | media-literacy |
| `t-platform` | 平台經濟 | platform-economy |
| `t-ai-writing` | AI 協作寫作 | ai-collaborative-writing |
| `t-game-history` | 遊戲科技史 | game-tech-history |
| `t-fiction` | 科幻創作 | sci-fi-fiction |
| `t-personal` | 個人隨筆 | personal-essay |
| `t-financial` | 財務與企業治理 | corporate-finance |
| `t-open-source` | 開源生態 | open-source-ecosystem |
| `t-hardware` | 硬件與算力 | hardware-compute |

---

## Tags 內容標籤

### AI 與技術類

| zh | en |
|-----|-----|
| AI | artificial-intelligence |
| 大型語言模型 | large-language-model |
| AI Agent | ai-agent |
| 生成式 AI | generative-ai |
| 模型訓練 | model-training |
| 微調 | fine-tuning |
| 提示工程 | prompt-engineering |
| 開源模型 | open-source-model |
| API 定價 | api-pricing |
| 算力競賽 | compute-race |
| 數據標註 | data-labeling |
| 機器學習 | machine-learning |
| 電腦視覺 | computer-vision |
| 自然語言處理 | natural-language-processing |
| AI 影像生成 | ai-image-generation |
| AI 影片生成 | ai-video-generation |
| 多模態 | multimodal |
| 邊緣 AI | edge-ai |

### 公司與產品類

| zh | en |
|-----|-----|
| OpenAI | openai |
| Anthropic | anthropic |
| Google | google |
| Microsoft | microsoft |
| Apple | apple |
| Meta | meta |
| NVIDIA | nvidia |
| 字節跳動 | bytedance |
| 騰訊 | tencent |
| ChatGPT | chatgpt |
| Claude | claude |
| Gemini | gemini |
| Copilot | copilot |
| Claude Code | claude-code |
| Sora | sora |
| Midjourney | midjourney |
| Stable Diffusion | stable-diffusion |

### 產業結構類

| zh | en |
|-----|-----|
| 平台壟斷 | platform-monopoly |
| 生態系戰爭 | ecosystem-war |
| 資金結構 | funding-structure |
| 商業模式 | business-model |
| 訂閱制 | subscription-model |
| 護城河 | moat |
| 房東與租戶 | landlord-tenant |
| 三步平台變現 | three-step-monetization |
| 龍蝦養殖框架 | lobster-farming-framework |
| 側翼突襲 | flanking-attack |
| 垂直整合 | vertical-integration |
| 開發者生態 | developer-ecosystem |

### 就業與教育類

| zh | en |
|-----|-----|
| 就業收縮 | job-market-contraction |
| 結構性失業 | structural-unemployment |
| 技能焦慮 | skill-anxiety |
| 賣課經濟 | course-selling-economy |
| 焦慮套利 | anxiety-arbitrage |
| 轉型敘事 | pivot-narrative |
| 文理分科 | arts-science-divide |
| 人文教育 | humanities-education |
| 教育產業化 | education-industrialization |
| 終身學習 | lifelong-learning |
| 初階淘汰 | junior-role-elimination |

### 媒體與敘事類

| zh | en |
|-----|-----|
| 敘事操控 | narrative-manipulation |
| 標題黨 | clickbait |
| 斷章取義 | out-of-context |
| Buzzword 通脹 | buzzword-inflation |
| 媒體素養 | media-literacy |
| 假問題 | false-dichotomy |
| AI 寫作判定 | ai-writing-detection |
| 資訊不對稱 | information-asymmetry |

### 創作與協作類

| zh | en |
|-----|-----|
| 人機協作 | human-ai-collaboration |
| AI 輔助寫作 | ai-assisted-writing |
| 編輯判斷力 | editorial-judgment |
| 事實查核 | fact-checking |
| 中文書面語 | written-chinese |
| 世界觀設定 | worldbuilding |
| 連載小說 | serial-fiction |

### 遊戲與硬件類

| zh | en |
|-----|-----|
| GPU 演進 | gpu-evolution |
| 主機戰爭 | console-war |
| 圖形引擎 | graphics-engine |
| 遊戲產業 | game-industry |
| 算力霸權 | compute-hegemony |
| 平台生態戰 | platform-ecosystem-war |

### 地區與政策類

| zh | en |
|-----|-----|
| 台灣 | taiwan |
| 中國 | china |
| 香港 | hong-kong |
| 美國 | united-states |
| AI 監管 | ai-regulation |
| 出口管制 | export-control |
| 產業政策 | industrial-policy |

---

## 用詞統一備註

以下記錄港台常見差異用詞，以及本標籤庫採用的統一寫法。這不是給 YAML 用的——是給維護者參考，確保新增標籤時選詞一致。

| 統一用詞（本庫採用） | 台灣慣用 | 香港慣用 | 選擇理由 |
|-------------------|---------|---------|---------|
| AI | 人工智慧 | 人工智能 | 兩地皆用「AI」，無歧義 |
| 數據標註 | 資料標註 | 數據標註 | 「數據」在標註語境下兩地皆可理解 |
| 電腦視覺 | 電腦視覺 | 計算機視覺 | 「電腦」在香港亦通用 |
| 事實查核 | 事實查核 | 事實核查 | 「查核」較接近兩地共通 |
| 硬件與算力 | 硬體與算力 | 硬件與算力 | 「硬件」在台灣技術圈亦可理解 |
| 初階淘汰 | 初階淘汰 | 初級淘汰 | 「初階」兩地皆用 |
| 邊緣 AI | 嵌入式 AI | 邊緣 AI | 「邊緣」對應 edge，語義更精確 |
| 中文書面語 | 港台書面語 | 港台書面語 | 更通用，不限定地區 |

### 選詞原則

新增標籤時，依以下優先順序選詞：

1. **英文原詞或縮寫**（若兩地皆慣用）：AI、GPU、API、LLM
2. **兩地共通詞**：開源、平台、生態系、焦慮
3. **較通用的一方**：優先選兩地讀者都不會誤解的用詞
4. **若無法避免歧義**：選台灣用詞（因網站主版本為台灣正體）

---

## 新增標籤規則

如果文章內容需要的標籤不在本庫中：

1. 可以新增，但在 YAML 輸出中標記 `# [NEW]` 註解
2. 新標籤必須同時提供中英版本
3. 中文用詞依上方「選詞原則」決定
4. 英文版使用業界通用術語，全小寫連字號格式

範例：
```yaml
tags:
  zh:
    - 量子計算  # [NEW]
  en:
    - quantum-computing  # [NEW]
```
