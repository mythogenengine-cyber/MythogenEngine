---
title: "機器在台灣，人在香港，公司在新加坡：規則寫的是人，執法只看得到機器和文件"
date: 2026-11-25
author: "@Mythogen Engine"
lang: zh-Hant
section: sober-record
topic: export-controls
category: 產業與資本競爭
article_tags:
  zh:
    - 出口管制
    - 算力規則
    - 代理指標
    - 輝達
    - 新加坡
    - 遠端存取
  en:
    - export-controls
    - compute-rules
    - proxy-indicators
    - nvidia
    - singapore
    - remote-access
keywords:
  - Megaspeed
  - Speedmatrix
  - 黃仁勳
  - Anthropic 支援地區政策
  - BIS 遠端存取新規
  - 50% 規則
  - 代理指標
  - 出口管制
summary: "規則寫的是「人在哪裡」和「人可不可信」，但執法只能量度機器、連線、申報文件與政府背書。從個人遠端桌面連回台灣、Megaspeed 晶片流向調查，到 BIS 遠端存取新規、50% 規則與黃仁勳復職風波，拆解代理指標與真相之間的結構落差。"
description: "從個人遠端連線、Megaspeed 晶片流向到 BIS 遠端存取新規與黃仁勳復職風波，看規則與執法如何被代理指標和文件拆開。"
status: published
reading_time: 9
sidebar_label: "機器在台灣，人在香港，公司在新加坡：規則寫的是人，執法只看得到機器和文件"
sidebar_position: 20261125
slug: "/notes/machine-taiwan-person-hong-kong"
---
# 機器在台灣，人在香港，公司在新加坡：規則寫的是人，執法只看得到機器和文件

@Mythogen Engine · Nov 25, 2026

## 同一個星期，兩個人都證明不了一件事

規則問的是人：人在哪裡，人可不可信。執法量得到的，卻只有機器、文件和別人的擔保。

十一月底，我要回香港一兩個星期。香港不在 Anthropic 的支援地區內。我的電腦會留在台灣，我人會在香港。那麼我在哪裡？沒有一部設備能直接證明，最後只能由我自己決定：在香港的兩個星期，不用。

同一個星期，Nvidia 董事會要回答另一條同樣證明不了的問題：剛辭職的黃仁勳，可不可信？11 月 23 日，董事會讓他復職，理由之一是美國政府高層的意見。董事會自己的調查，還沒有做完。

一個問題靠當事人自律，一個靠政府背書。兩個都是同一道縫：**規則寫的是人，量得到的卻是人以外的東西。** 這篇文章講這道縫在一個帳號、一間公司、一顆晶片上怎樣出現，又怎樣被補上。

## 一個人在哪裡，有三個答案

| 錨點 | 例子 | 好處 | 問題 |
| --- | --- | --- | --- |
| 機器在哪裡 | 電腦在台灣、晶片裝在馬來西亞 | 實物，查得到、封得到 | 遙距操作之後，不代表用的人在哪裡 |
| 連線在哪裡 | IP、時區、瀏覽器語言、延遲 | 即時、自動、便宜 | 全部可以隨機器搬走 |
| 人在哪裡 | 使用者本人身處的地方 | 規則真正關心的是這個 | 沒有任何設備能直接量度 |

規則寫的是第三樣，執法只量得到頭兩樣，所以只能靠**代理指標**：IP、電話號碼、付款卡、申報文件。

十一月，一個台灣的生成式 AI 臉書社團有人討論帳號被封。原帖推介一個檢測網站，它把代理指標拿來互相對照：IP 在烏克蘭、系統時區在冰島、兩個延遲對不上，就判斷「人在別處，借某地的 IP 上網」。留言很快有人回應：用遠端桌面連回台灣家裡的電腦，所有指標都會是台灣，對照就失效。

整串討論問的都是同一件事：會不會被發現。沒有人問另一件事：准不准。

**漏洞不在任何一個指標裡，而在代理和真相之間。** 這裡只講結構，不講工具和設定；哪一種做法檢測得到，不影響結論。

## 跟一顆晶片走一趟

公司的「在哪裡」比個人複雜：註冊地、總部、股東、實際控制人、員工、客戶、機器，七樣可以分開放在不同國家。最易明白的方法，是跟一顆晶片走一趟，每到一站，問規則看得到什麼。

例子是新加坡公司 Megaspeed。以下全部是報道、指控和調查，未有定罪，Megaspeed 否認不當行為。

1. **出廠。** Nvidia 把晶片賣出。規則看得到買家是誰、運去哪個國家。
2. **轉手。** [調查人員發現，部分硬件先經浪潮旗下子公司轉手](https://tech-insider.org/?p=20742)。浪潮本身在美國實體清單上，子公司則不在；文件上的買家是合法的。
3. **入境。** 買家是 2023 年在新加坡成立的 Megaspeed，[數據中心設在印尼和馬來西亞](https://en.thairath.co.th/money/tech_innovation/tech_companies/2903761)，馬來西亞那邊以子公司 Speedmatrix 的名義營運。兩國海關數據顯示至少 46 億美元、約 13.6 萬顆。規則看得到：晶片在馬來西亞，沒有去中國。
4. **開機。** 晶片在數據中心開機，算力經雲端出租。[把晶片租給中國公司在中國境外使用，舊規則下是允許的](https://en.thairath.co.th/money/tech_innovation/tech_companies/2903761)。
5. **使用。** [被指用家是中國客戶，或者晶片最後被運入中國](https://www.igorslab.de/en/singapore-company-alleged-to-have-helped-china-smuggle-nvidia-processors-worth-2-billion-us-dollars/)。這一站，文件上看不到。

分開來看，每一站都可能合法。問題只在連起來看的時候出現：晶片沒有去中國，但算力去了。這和「電腦在台灣、人在香港」是同一個結構，只是規模大了幾十億美元。

金額沒有一個定數：[《紐約時報》最早報道約 20 億美元](https://technews.tw/2025/10/11/nvidia-megaspeed-ai-gpu/)，[The Information 報道至少 75 億美元](https://fortune.com/2026/11/11/megaspeed-nvidia-chips-china-singapore-malaysia/)。[新加坡警方證實正調查它有沒有違反當地法律](https://technews.tw/2025/10/11/nvidia-megaspeed-ai-gpu/)，[馬來西亞和新加坡都在查晶片有沒有轉到中國](https://scmp.com/week-asia/economics/article/3374351/could-nvidia-scandal-put-malaysias-ai-boom-us-crosshairs)。

## 規則一層一層鎖回去，但沒有一條寫 IP

規則制定者的回應，是把被拆開的每一樣逐一鎖回去。把三條新規則放在一起，可以看到它們各自鎖哪一樣：

| 錨點 | [Anthropic 支援地區政策](https://www.anthropic.com/supported-countries)（11 月 12 日生效） | [BIS 遠端存取新規](https://www.pillsburylaw.com/en/news-and-insights/commerce-restricts-remote-access-advanced-chips.html)（11 月 19 日生效） | [50% 規則](https://www.thompsonhinesmartrade.com/2026/11/bis-extends-affiliates-rule-until-january-2027/)（暫緩至 2027 年 1 月 10 日） |
| --- | --- | --- | --- |
| 機器在哪裡 |  | 印尼、馬來西亞、新加坡、泰國、巴西的先進晶片要許可證 |  |
| 連線在哪裡 |  |  |  |
| 人在哪裡 | 身處不支援地區就不能用，包括公干出差 |  |  |
| 註冊地、總部 | 在不支援地區註冊或設總部，員工身在哪裡都不能用 | [向母公司在中國或澳門的公司提供超過門檻的算力，數據中心要許可證](https://www.beri.net/article/bis-remote-access-rule-ai-chips-12-million-tpp-data-center-license-singapore-malaysia-indonesia-thailand-brazil-monthly-reporting-gpu-capacity-contracts) |  |
| 股權、控制 | 被不支援地區的人或實體大多數持有或控制也不能用 |  | [被實體清單上的公司合共持有至少 50%，自動受同樣限制](https://www.thomsonreuters.com/en-us/help/onesource-global-trade/regulatory-insights/2025/november-17th/bis-suspends-50-affiliate-ownership-rule-one-year.html) |

「連線在哪裡」那一行是空的。IP 只是拿來偵測的工具，沒有一條規則以它為標準。Anthropic 寫的是「身處」，BIS 寫的是算力給誰用。

新規也不追溯：[現有的數據中心安排有 90 日過渡期，美國總部的公司可以豁免但要申報](https://www.pillsburylaw.com/en/news-and-insights/commerce-restricts-remote-access-advanced-chips.html)。

50% 規則本身就示範了規則怎樣追不上。它 2025 年 9 月底推出，[同年 11 月暫緩一年](https://www.govinfo.gov/content/pkg/FR-2025-11-12/html/2025-19846.htm)，原定 2026 年 11 月 10 日自動恢復。到期前幾日，[BIS 又把暫緩延長到 2027 年 1 月 10 日](https://www.thompsonhinesmartrade.com/2026/11/bis-extends-affiliates-rule-until-january-2027/)。寫這篇文章的時候，它仍然是一條寫好了、但未生效的規則。

三條規則的方向一樣：由量機器，轉為要求申報人和股權。但申報本身也是一份文件，這道縫只是由「量度」搬到了「誠實」。

## 最後一定追回到人

每一層都可以拆開：代持人拆開股權，VIE 拆開控制權，空殼拆開總部。所以規則最後一定追回到自然人身上：金融監管追「最終受益人」，私募基金借錢給公司，要創辦人簽個人擔保。執法和收數用的是同一個邏輯。

我有親戚做過工程生意。九七之後，帳面利潤越來越好看，千禧後錢卻收不回來，生意靠借錢墊支撐下去，十年內倒了。公司結束了，留下來的是人和人之間的帳，最後變成分家產的爭拗。**公司可以消失，人不會。**

Megaspeed 案也是這樣。調查由晶片去向開始，到了 2026 年 11 月，焦點落到了人身上。[報道把 Nvidia 創辦人黃仁勳和一位名叫 Alice Huang 的女士連在一起——她曾是 Megaspeed 的高層，美國情報官員指她被中國情報機構吸收](https://www.kuow.org/npr-news/2026-11-17/nvidia-board-says-it-does-not-intend-to-reinstate-jensen-huang-as-ceo)。中方和 Megaspeed 都否認，以上全是指控和情報判斷。這裡不談私人關係，只看跟規則有關的結構。

「人可不可信」和「人在哪裡」一樣，無法直接證明。看這個時序：

| 日期（2026） | 發生了什麼 |
| --- | --- |
| 11 月 9 日 | [特朗普說自己致電黃仁勳，對方說完全不知道對方是間諜，而他「真的相信他」](https://247wallst.com/investing/2026/11/10/trump-says-he-called-jensen-huang-and-believes-he-didnt-know-she-was-a-spy/) |
| 11 月 12 日 | [Nvidia 公佈黃仁勳辭任行政總裁及董事](https://www.sec.gov/Archives/edgar/data/0001045810/000104581026000082/nvidiaannouncesceotransiti.htm)，財務長 Kress 署理 |
| 11 月 16 日 | [特朗普說「一點也不介意」黃仁勳復職](https://www.dailysignal.com/?p=262600) |
| 11 月 17 日 | [董事會主席在業績會上說「無意」讓他復職](https://www.nst.com.my/amp/business/corporate/2026/11/1580209/nvidia-board-rules-out-reinstating-jensen-huang-ceo) |
| 11 月 23 日 | [董事會一致投票讓他復職](https://www.sec.gov/Archives/edgar/data/0001045810/000104581026000090/nov23pressrelease.htm) |
| 12 月 1–2 日 | [眾議院三個委員會閉門訪談：1 日黃仁勳，2 日總法律顧問 Tim Teter](https://streamlinefeed.co.ke/news/huang-and-lutnick-to-testify-on-nvidia-exports-scott-says)（未開） |
| 未定 | [參議院銀行委員會公開聆訊，黃仁勳和商務部長 Lutnick 都已答應出席，主席希望聖誕前舉行](https://www.thewealthadvisor.com/article/nvidias-jensen-huang-and-commerce-secretary-lutnick-face-public-senate-hearings-over-china) |

六日之內，董事會由「無意」變成「一致通過」。復職公告的理由是：董事會聽取了美國政府高層的意見，並「根據這些意見」確信復職不構成國家安全風險。同一份公告也寫明，獨立董事委員會的調查「會繼續到完成」——即是未完成。

所以「沒有國安風險」這句話，本身就是一個代理指標：用政府的背書，代替未有的調查結論。這和用 IP 代替「人在哪裡」是同一件事：量不到真相的時候，就拿一個量得到、大家又接受的東西來代替。

這個代理對不對，我不知道，這篇文章也不猜。調查未完成，聆訊未開始，這件事寫到「未結」為止。

## 捉不到，不等於灰色地帶

代理和真相之間的縫，會令人把兩種情況混在一起講：規則未寫清楚，和規則寫清楚了但捉不到。

|  | 規則沒有講清楚（灰色地帶） | 規則講明了（明文禁止） |
| --- | --- | --- |
| 性質 | 可以爭辯，可以博 | 犯規就是犯規 |
| 捉不捉得到 | 真問題：規則跟不上，執法沒有依據 | 不相干：捉不到不等於沒有犯 |
| 例子 | 11 月 19 日新規生效之前，遙距出租算力 | Anthropic 條款寫明看人身處哪裡；經受制裁實體轉運、虛報出口 |

檢測問題只屬於左邊一格。右邊那格不是漏洞，只是未被發現的犯規。把「捉不到」說成「灰色地帶」，等於替犯規開脱。

Megaspeed 一案兩格都有：舊規則下遙距出租算力，屬左格；被指經中間人轉運、虛報申報，屬右格。前者是規則的問題，後者是執法的問題。

那串臉書討論屬於右格。條款寫明了看人在哪裡，用遠端桌面還是 VPN，分別只在於會不會被發現，不在於准不准。

## 兩個人，兩種補法

回到開頭的兩個人。我在香港用不用，靠我自己；黃仁勳可不可信，靠政府背書。兩種都不是證明，只是用不同的東西去補同一道縫。

規則每改一次，就是把一個代理換成另一個：晶片去向換成最終用戶申報，IP 換成身處地加股權，調查結論換成政府背書。下一個漏洞，會出現在新的代理和真相之間。

**這個系列接下來的三篇**

- 國家：〈禁賣不禁租：出口管制管晶片去哪，到 11 月 19 日才開始管算力給誰用〉——下一篇
- 個人：〈QB 沒有說謊：《魔法少女小圓》示範了法律上不算騙的契約〉——十二月下旬
- 公司：〈Intel 付錢買排他，Nvidia 幫你做開發：兩代晶片壟斷的同一套手法〉——十二月下旬起

## 資料來源

- [Anthropic 支援地區政策](https://www.anthropic.com/supported-countries)：生效日 2026-11-12
- [Nvidia 8-K，2026-11-23 復職公告](https://www.sec.gov/Archives/edgar/data/0001045810/000104581026000090/nov23pressrelease.htm)
- [Nvidia 8-K，2026-11-12 CEO 交接公告](https://www.sec.gov/Archives/edgar/data/0001045810/000104581026000082/nvidiaannouncesceotransiti.htm)
- [Federal Register 2025-19846：50% 規則暫緩一年](https://www.govinfo.gov/content/pkg/FR-2025-11-12/html/2025-19846.htm)、[Thompson Hine：延長至 2027-01-10](https://www.thompsonhinesmartrade.com/2026/11/bis-extends-affiliates-rule-until-january-2027/)
- 遠端存取新規：[Pillsbury](https://www.pillsburylaw.com/en/news-and-insights/commerce-restricts-remote-access-advanced-chips.html)、[HLC](https://hlc.com/en/publications/bis-issues-new-controls-targeting-remote-access-to-advanced-us-computing-power)、[BERI](https://www.beri.net/article/bis-remote-access-rule-ai-chips-12-million-tpp-data-center-license-singapore-malaysia-indonesia-thailand-brazil-monthly-reporting-gpu-capacity-contracts)
- Megaspeed：[TechNews](https://technews.tw/2025/10/11/nvidia-megaspeed-ai-gpu/)、[Thairath](https://en.thairath.co.th/money/tech_innovation/tech_companies/2903761)、[Fortune](https://fortune.com/2026/11/11/megaspeed-nvidia-chips-china-singapore-malaysia/)、[Tech Insider](https://tech-insider.org/?p=20742)、[Igor's Lab](https://www.igorslab.de/en/singapore-company-alleged-to-have-helped-china-smuggle-nvidia-processors-worth-2-billion-us-dollars/)、[SCMP](https://scmp.com/week-asia/economics/article/3374351/could-nvidia-scandal-put-malaysias-ai-boom-us-crosshairs)
- 國會：[NPR（KUOW）](https://www.kuow.org/npr-news/2026-11-17/nvidia-board-says-it-does-not-intend-to-reinstate-jensen-huang-as-ceo)、[Streamline Feed](https://streamlinefeed.co.ke/news/huang-and-lutnick-to-testify-on-nvidia-exports-scott-says)、[The Wealth Advisor](https://www.thewealthadvisor.com/article/nvidias-jensen-huang-and-commerce-secretary-lutnick-face-public-senate-hearings-over-china)
- 特朗普：[24/7 Wall St.](https://247wallst.com/investing/2026/11/10/trump-says-he-called-jensen-huang-and-believes-he-didnt-know-she-was-a-spy/)、[Daily Signal](https://www.dailysignal.com/?p=262600)
