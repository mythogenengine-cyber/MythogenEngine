作者：星忘塵 Nebula Walker
Date: 03MAY2026
創象引擎 Mythogen Engine

Google 也不再為你而設計：當免費模型變成企業雲端的入口

—

上一篇文章，我用 Anthropic 的 Opus 4.7 做案例，論證了 AI 模型正從「聰明的聊天夥伴」轉向「企業部署的元件」。有讀者問：這只是 Anthropic 一家的策略，還是整個產業的方向？

答案在 2026 年 4 月 22 日的 Las Vegas 揭曉了。

Google Cloud Next 2026，超過 32,000 人到場，三場 Keynote、700 多場分會、490 多家贊助商。Google 在這場大會上發佈的內容，幾乎每一項都在說同一句話：

模型是免費的。基礎設施才是生意。

—

▍Google Cloud Next 2026 發佈了什麼？

根據 Google Cloud 官方博客，這次發佈的核心產品包括：Gemini Enterprise Agent Platform（整合原 Vertex AI）、Agent Development Kit 圖形化框架升級、Agent Studio 低程式碼介面、Agent Registry 統一管理、Agent Memory Bank 跨對話記憶，以及 A2A 協議 1.0 版本。合作夥伴市場已有 Atlassian、Box、Oracle、ServiceNow、Workday 等企業進駐。

把這些發佈的關鍵字拉出來：framework、standardization、protocol、monitoring、deployment、CI/CD、security、cloud infra、governance。

注意看——這裡面沒有出現 creativity、companionship、better conversation、personal intelligence 這類詞彙。

台灣的 Google Developer Expert Yu-Wei Liu 從非公開會議到 Developer Keynote 全程參與，他的觀察總結了同一個方向：Agent 開發架構標準化了、Agent 之間可以溝通了、Agent 可以被監控了、可以部署到任何地方了、安全框架也建好了。他用了一句很有意味的比喻：「聘僱員工就要保護員工。」

這不是一場關於 AI 如何變得更聰明的發佈會。這是一場關於 AI 如何被納入企業軟體工程體系的發佈會。

—

▍表面上的主角是模型，實際上的主角是雲端

Google Cloud Next 2026 反覆強調的核心訊息是：Google 是唯一在整個企業 AI 堆疊中提供第一方解決方案的供應商。Sundar Pichai 在同月的財報電話會議上也用了幾乎相同的表述。

翻譯成更直白的語言：別人賣你零件，我賣你整條生產線。

但生產線的核心不是模型——是雲端。

模型是入口。你用 ADK 建了一個 Agent，然後呢？你需要 Cloud Run 來部署、AlloyDB 做向量搜尋、Dataproc 跑 Spark pipeline、Secret Manager 管 API Key、Cloud Monitoring 做追蹤、IAM 做權限控制。每一個環節都在消耗 Google Cloud 的計算、儲存、網路資源。每一個環節都在產生帳單。

Google 不需要靠模型賺錢。Google 需要你用模型建 Agent，然後 Agent 住在 Google Cloud 上，持續消耗資源。

這個策略有多成功？

2026 年第一季，Google Cloud 營收突破 200 億美元，年增 63%。營業利潤從去年同期翻了三倍，達到 66 億美元。營業利潤率從 9.4% 跳到 32.9%。Google Cloud 現在佔 Alphabet 總營收的 18%——去年同期是 13.6%，前年是 11.8%。

Pichai 在財報電話會議上直接講明：「我們的企業 AI 解決方案已經成為 Google Cloud 的主要成長驅動力。」

—

▍免費模型不是慈善，是漏斗

Google 的定價策略非常值得拆解。

消費端：Gemini 有永久免費版。付費版 Google AI Pro 每月 19.99 美元，跟 ChatGPT Plus 和 Claude Pro 幾乎一樣。

API 端：Gemini 3 Flash 每百萬 input token 只要 0.50 美元，Flash-Lite 更只要 0.25 美元。相比之下，GPT-5.2 要 1.75 美元，Claude Opus 4.6 要 5 美元。Google 的入門價格比競爭對手便宜 3 到 20 倍。

開發工具：Gemini CLI 有慷慨的免費 tier，Google AI Studio 完全免費。ADK 是開源的，不用付錢。

企業端：Gemini Enterprise Agent Platform 的定價是按 vCPU 時數和記憶體計費的——這不是 AI 的定價模式，這是雲端基礎設施的定價模式。

模型越便宜，開發者就越容易上手。開發者越多，部署在 Google Cloud 上的 Agent 就越多。Agent 越多，雲端消耗越大。

免費模型不是慈善。免費模型是企業雲端收入的獲客漏斗。

—

▍A2A 協議：單一模型不再是答案

大會上另一個重要發佈是 Agent-to-Agent（A2A）協議 1.0 版——讓不同的 Agent 互相溝通、互相調用。Google 將 A2A 作為開放標準發佈，不是私有生態，而是整個產業可以共用的通訊協議。

以前的世界觀是：找到最強的單一模型，把所有任務都交給它。

A2A 代表的世界觀是：沒有萬能的單一模型，未來是多個專門化的 Agent 協作完成任務——Research Agent、Coding Agent、Reviewer Agent、Sales Agent、Finance Agent，各司其職。

這跟 Anthropic 的 Opus 4.7 是同一個趨勢的不同面向。Opus 4.7 把模型行為變得更字面、更嚴格、更適合被編排——它在變成一個更好的「元件」。Google 的 A2A 在建構讓這些元件互相溝通的「通訊協議」。

兩家公司從不同角度做同一件事：把 AI 從「獨立的聰明助手」重新定義為「可編排系統中的一個節點」。

—

▍被拆走的隱藏層：模型沒有變笨，但免費午餐結束了

這裡有一個需要釐清的常見誤解。

Agent 管理 Agent 這件事本身並不新鮮——LangChain、AutoGen、CrewAI 等開源框架在 2023 到 2024 年間就已經在做 multi-agent orchestration。Google 的 A2A 1.0 真正的貢獻是將 Agent 之間的通訊標準化，而不是發明多 Agent 協作這個概念。

真正值得深究的問題是：模型是不是變笨了？還是以前幫你做的事被拆走了？

從 benchmark 數據看，模型的核心推理能力沒有下降——企業場景的分數全面上升。但用戶體感確實變差了，原因不是「智力降低」，而是智力的分配改變了。更多的算力資源被分配到工具調用、安全檢查、指令遵從、上下文壓縮這些企業部署需要的基礎能力上，留給裸對話場景的資源相對減少。

以 Opus 4.7 為例，Anthropic 將 thinking budget 的手動控制權拿走，改為模型自行決定——這是控制權的轉移，不等於推理能力本身被削弱。但模型不再主動推測用戶未明確表達的意圖、不再自動補全你沒有要求的內容。這些以前內建的行為等同於一個隱藏的輔助層（harness）。這個 harness 以前是免費附送的，現在被拆走了。

對企業來說，拆走是好事——他們本來就有自己的 pipeline、自己的 system prompt、自己的錯誤處理流程，模型自作主張反而是風險。

對個人用戶來說，拆走是災難——你以前享受的「聰明的補全」其實是平台替你做的工作。現在這些工作被退回到你身上：你要自己寫清楚意圖，自己建 multi-agent 的審查流程，自己設計 system prompt 來重建那個被拆走的輔助層。

大廠將這些框架標準化的同時，也將搭建框架的成本和責任轉嫁給了用戶。這才是「模型變難用」的結構性原因——不是智力下降，是免費午餐被收回。

—

▍監控需求的弦外之音：AI 不可靠是產業共識

Google Cloud Next 的 Developer Keynote 專門展示了一個完整的 Agent 除錯場景：Agent 在執行過程中出錯，工程師用 OpenTelemetry 追蹤每一步推理和工具調用，用 Cloud Monitoring 設定警報，用 Gemini Cloud Assist 分析日誌找出問題根源，最後在 Antigravity IDE 裡定位到具體的程式碼錯誤。

如果 AI 真的成熟到像人類專家一樣可靠，你不需要 tracing、logs、approval flow、rollback、guardrails 這些東西。

企業投入大量資源建構 AI 的可觀測性基礎設施，這本身就是一個承認：Agent 強大，但本質上不穩定。

模型會幻覺、會虛報完成、會對自己過度樂觀——這不是某一家的問題，是整個產業的現實。差別只在於：企業有預算建監控系統來攔截這些問題。個人用戶沒有。

—

▍從「助手」到「員工」

Google Cloud Next 2026 的整體敘事裡，AI 不再被描述為聊天工具或個人助手。它被描述為企業的數位勞動力。大會上反覆出現的語言——部署、治理、合規、安全環境、權限控制——全部是人力資源和企業管理的詞彙。

以前 AI 是：chatbot、Q&A 助手、玩具。

現在 AI 是：digital worker、組織資源、流程執行者。

企業開始用人力資源的語言來描述 AI。這不是修辭手法，這是產品定位的根本轉向。

當 AI 被定位為「員工」，它需要的就不再是「更有靈性」或「更會聊天」，而是：可管理、可審計、可控制、可追責。這些需求跟個人用戶想要的「聰明的思考夥伴」幾乎完全相反。

—

▍對個人用戶意味著什麼？

把 Google 的動作跟 Anthropic 的放在一起看，pattern 就更清楚了。

→ Anthropic：Opus 4.7 變得更嚴格、更字面、更適合企業部署。80% 營收來自企業。

→ Google：免費提供模型吸引開發者，真正的生意是雲端基礎設施。Q1 雲端營收 200 億美元，年增 63%。

→ OpenAI：GPT-5.5 的定價策略同樣在向企業傾斜，API 定價結構越來越複雜，消費端反而簡化。

三大 AI 公司同時往同一個方向走，這不是巧合，是市場力量。

消費者月費 20 美元有天花板。企業合約可以是 10 萬、100 萬、1,000 萬美元。當你的投資人期待你證明商業模式、當你的估值需要營收來支撐——產品方向會往哪裡走，答案不言自明。

Google 的策略其實比 Anthropic 更友善一些——至少模型是免費或很便宜的。但代價是：你得到的是一個越來越像「企業元件」的工具，而不是一個越來越像「聰明朋友」的助手。

—

▍下一個十年的工作模式

Google Cloud Next 2026 的多位講者都指向同一個方向：Agent 原生世代即將進入職場，工作模式將徹底改變。

舊世代——自己做事，用工具輔助。

新世代——管理 Agent，分配任務，review 產出，設計 workflow，控制品質。

人類的職位正在向「管理者」方向移動。不是管理人，是管理 AI。

而管理 AI 的能力，跟使用 AI 聊天的能力，是完全不同的技能組合。

—

Google Cloud Next 2026 不是在宣佈 AI 更聰明了。

它是在宣佈：AI 已經被納入企業軟體工程體系，從消費產品變成基礎設施。

Google、Microsoft、OpenAI、Anthropic 正在爭奪的，不是 chatbot 市場。是誰能成為 AI 時代的 Windows + AWS + SAP 綜合體。

在這場競賽裡，個人用戶的體感從來不是決勝點。企業的雲端帳單才是。

這不是抱怨。這是現實。

而認清現實，永遠是適應現實的第一步。

—

數據來源：Google Cloud 官方部落格（Cloud Next 2026 Wrap Up）、TechCrunch（2026/4/29 Q1 財報報導）、Fortune（2026/4/29）、Constellation Research、The Next Web、Oplexa、Google 官方定價頁面、IntuitionLabs API 定價比較。台灣觀察引用自 GDE Yu-Wei Liu 於「台灣人工智慧同好交流區」貼文。

[#GoogleCloud](https://www.facebook.com/hashtag/googlecloud?__cft__[0]=AZZIxIeCPzCDsfyu7ZSCE-J75IuMVeXMHW4rvRSPXA0GPkJgjvlyLc_OC3h60ArNBiEal3N9w3OdWSjz5zhksyclqkDfTXPnAHTSWTsiKD1hVii_YzmCO3wHo-988RlHENr0h5K0ayVBw1KeEfY-yX1qhAC7OMV_M-8SV4ldpPHg2FEPHBh4e0XGro2HlNialSRoWXwUkdHI0y4Td71GwBMb&__tn__=*NK-R) [#AI模型](https://www.facebook.com/hashtag/ai%E6%A8%A1%E5%9E%8B?__cft__[0]=AZZIxIeCPzCDsfyu7ZSCE-J75IuMVeXMHW4rvRSPXA0GPkJgjvlyLc_OC3h60ArNBiEal3N9w3OdWSjz5zhksyclqkDfTXPnAHTSWTsiKD1hVii_YzmCO3wHo-988RlHENr0h5K0ayVBw1KeEfY-yX1qhAC7OMV_M-8SV4ldpPHg2FEPHBh4e0XGro2HlNialSRoWXwUkdHI0y4Td71GwBMb&__tn__=*NK-R) [#企業AI](https://www.facebook.com/hashtag/%E4%BC%81%E6%A5%ADai?__cft__[0]=AZZIxIeCPzCDsfyu7ZSCE-J75IuMVeXMHW4rvRSPXA0GPkJgjvlyLc_OC3h60ArNBiEal3N9w3OdWSjz5zhksyclqkDfTXPnAHTSWTsiKD1hVii_YzmCO3wHo-988RlHENr0h5K0ayVBw1KeEfY-yX1qhAC7OMV_M-8SV4ldpPHg2FEPHBh4e0XGro2HlNialSRoWXwUkdHI0y4Td71GwBMb&__tn__=*NK-R) [#消費者vs企業](https://www.facebook.com/hashtag/%E6%B6%88%E8%B2%BB%E8%80%85vs%E4%BC%81%E6%A5%AD?__cft__[0]=AZZIxIeCPzCDsfyu7ZSCE-J75IuMVeXMHW4rvRSPXA0GPkJgjvlyLc_OC3h60ArNBiEal3N9w3OdWSjz5zhksyclqkDfTXPnAHTSWTsiKD1hVii_YzmCO3wHo-988RlHENr0h5K0ayVBw1KeEfY-yX1qhAC7OMV_M-8SV4ldpPHg2FEPHBh4e0XGro2HlNialSRoWXwUkdHI0y4Td71GwBMb&__tn__=*NK-R) [#深度分析](https://www.facebook.com/hashtag/%E6%B7%B1%E5%BA%A6%E5%88%86%E6%9E%90?__cft__[0]=AZZIxIeCPzCDsfyu7ZSCE-J75IuMVeXMHW4rvRSPXA0GPkJgjvlyLc_OC3h60ArNBiEal3N9w3OdWSjz5zhksyclqkDfTXPnAHTSWTsiKD1hVii_YzmCO3wHo-988RlHENr0h5K0ayVBw1KeEfY-yX1qhAC7OMV_M-8SV4ldpPHg2FEPHBh4e0XGro2HlNialSRoWXwUkdHI0y4Td71GwBMb&__tn__=*NK-R) [#cloudnext2026](https://www.facebook.com/hashtag/cloudnext2026?__cft__[0]=AZZIxIeCPzCDsfyu7ZSCE-J75IuMVeXMHW4rvRSPXA0GPkJgjvlyLc_OC3h60ArNBiEal3N9w3OdWSjz5zhksyclqkDfTXPnAHTSWTsiKD1hVii_YzmCO3wHo-988RlHENr0h5K0ayVBw1KeEfY-yX1qhAC7OMV_M-8SV4ldpPHg2FEPHBh4e0XGro2HlNialSRoWXwUkdHI0y4Td71GwBMb&__tn__=*NK-R)

上篇 Claude 更傾向企業

你最近有沒有覺得 AI 變笨了？

不是你的錯覺。但也不是事實。

同一個 Opus 4.7：

→ 軟體工程 benchmark 升了 11 分

→ 網頁搜尋能力跌了 4 分

→ 企業客戶說「最強」

→ 個人用戶說「難用又貴」

升的全是企業場景。跌的全是你每天在用的功能。

這不是技術失誤，是商業決策。

[https://www.facebook.com/share/p/1FtLscgR8G/](https://www.facebook.com/MythogenEngine/posts/pfbid0uVLZjbPutyjed19vxD56ystXgennnmmELNxH64syrCJ2kJq1cfWTfS3jsVWYAL5Gl?__cft__[0]=AZZIxIeCPzCDsfyu7ZSCE-J75IuMVeXMHW4rvRSPXA0GPkJgjvlyLc_OC3h60ArNBiEal3N9w3OdWSjz5zhksyclqkDfTXPnAHTSWTsiKD1hVii_YzmCO3wHo-988RlHENr0h5K0ayVBw1KeEfY-yX1qhAC7OMV_M-8SV4ldpPHg2FEPHBh4e0XGro2HlNialSRoWXwUkdHI0y4Td71GwBMb&__tn__=-UK-R)


![](Gemini_Generated_Image_ygytq4ygytq4ygyt.png)