---
title: "The Machine Is in Taiwan, the Person in Hong Kong, the Company in Singapore: Rules Name the Person, Enforcement Sees Only Machines and Paperwork"
date: 2026-11-25
author: "@Mythogen Engine"
lang: en
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
  - Jensen Huang
  - Anthropic Supported Regions Policy
  - BIS remote-access rule
  - 50% Affiliates Rule
  - proxy indicators
  - export controls
summary: "Rules ask where a person is and whether a person can be trusted, while enforcement can only measure machines, connections, filings, and government assurances. Tracing remote desktop access, the Megaspeed chip probe, the BIS remote-access rule, the 50% Affiliates Rule, and Jensen Huang's reinstatement, this piece examines the structural gap between proxy indicators and truth."
description: "From personal remote access and the Megaspeed chip probe to the BIS remote-access rule and Jensen Huang's reinstatement: how proxy indicators and paperwork split rules from enforcement."
status: published
reading_time: 10
sidebar_label: "The Machine Is in Taiwan, the Person in Hong Kong, the Company in Singapore: Rules Name the Person, Enforcement Sees Only Machines and Paperwork"
sidebar_position: 20261125
slug: "/notes/machine-taiwan-person-hong-kong"
---
# The Machine Is in Taiwan, the Person in Hong Kong, the Company in Singapore: Rules Name the Person, Enforcement Sees Only Machines and Paperwork

@Mythogen Engine · Nov 25, 2026

## Two people, one week, and one thing neither could prove

Rules ask about people: where a person is, and whether a person can be trusted. What enforcement can measure is something else: machines, paperwork, and other people's word.

At the end of November I am going back to Hong Kong for a week or two. Hong Kong is not in Anthropic's supported regions. My computer will stay in Taiwan; I will be in Hong Kong. So where am I? No device can prove it directly. In the end the decision is mine: for those two weeks, I won't use it.

The same week, Nvidia's board had to answer a question that also cannot be proved: can Jensen Huang, who had just resigned, be trusted? On 23 November the board reinstated him, citing input from senior levels of the US government. The board's own investigation was not finished.

One question was settled by self-restraint, the other by a government's word. Both sit on the same gap: **rules name the person, but what can be measured is everything except the person.** This piece looks at how that gap shows up in an account, a company and a chip, and how it gets patched.

## Where a person is has three answers

| Anchor | Example | Strength | Problem |
| --- | --- | --- | --- |
| Where the machine is | A computer in Taiwan; chips in Malaysia | Physical: can be inspected and seized | With remote access, it says nothing about where the user is |
| Where the connection is | IP address, time zone, browser language, latency | Instant, automatic, cheap | All of it moves with the machine |
| Where the person is | Where the user physically is | What the rule actually cares about | No device can measure it directly |

Rules are written about the third. Enforcement can only measure the first two, so it relies on **proxy indicators**: IP addresses, phone numbers, payment cards, filings.

In November, members of a Taiwanese generative-AI Facebook group were discussing banned accounts. The original post recommended a checking site that cross-references proxies: an IP in Ukraine, a system clock set to Iceland and two latencies that don't match, and it concludes "the person is elsewhere, borrowing an IP". A reply soon pointed out that if you remote-desktop into a computer at home in Taiwan, every indicator says Taiwan, and the cross-check fails.

The whole thread asked one question: will I get caught? Nobody asked the other one: am I allowed?

**The gap is not in any one indicator. It is between the proxy and the truth.** This piece stays at the level of structure, not tools or settings; whether any method can be detected does not change the conclusion.

## Follow one chip

For a company, "where" is harder than for a person: place of incorporation, headquarters, shareholders, controlling owner, staff, customers and machines can all sit in different countries. The easiest way to see it is to follow one chip and ask, at each stop, what the rules can see.

The example is Megaspeed, a Singapore company. Everything below is reporting, allegation and investigation; nothing has been proven, and Megaspeed denies wrongdoing.

1. **Leaving the factory.** Nvidia sells the chip. The rules can see who bought it and which country it ships to.
2. **Changing hands.** [Investigators found that some of the hardware first passed through a subsidiary of Inspur](https://tech-insider.org/?p=20742). Inspur is on the US Entity List; the subsidiary was not. On paper, the buyer was legal.
3. **Arriving.** The buyer is Megaspeed, founded in Singapore in 2023, [with data centres in Indonesia and Malaysia](https://en.thairath.co.th/money/tech_innovation/tech_companies/2903761); the Malaysian side runs under a subsidiary, Speedmatrix. Customs data from the two countries show at least US$4.6 billion, about 136,000 chips. The rules can see that the chips are in Malaysia, not China.
4. **Switching on.** The chips run in the data centre, and the compute is rented out over the cloud. [Renting chips to Chinese companies for use outside China was permitted under the old rules](https://en.thairath.co.th/money/tech_innovation/tech_companies/2903761).
5. **Being used.** [The users are alleged to be Chinese customers, or the chips are alleged to have ended up in China](https://www.igorslab.de/en/singapore-company-alleged-to-have-helped-china-smuggle-nvidia-processors-worth-2-billion-us-dollars/). At this stop, the paperwork shows nothing.

Taken one by one, each stop may be legal. The problem only appears when you join them up: the chips never went to China, but the compute did. It is the same structure as "the computer in Taiwan, the person in Hong Kong", only billions of dollars larger.

The amount has no settled figure: [The New York Times first reported about US$2 billion](https://technews.tw/2025/10/11/nvidia-megaspeed-ai-gpu/), and [The Information reported at least US$7.5 billion](https://fortune.com/2026/11/11/megaspeed-nvidia-chips-china-singapore-malaysia/). [Singapore police confirmed they are investigating whether it broke local law](https://technews.tw/2025/10/11/nvidia-megaspeed-ai-gpu/), and [Malaysia and Singapore are both looking into whether chips were diverted to China](https://scmp.com/week-asia/economics/article/3374351/could-nvidia-scandal-put-malaysias-ai-boom-us-crosshairs).

## Rules lock things back one layer at a time, but none names the IP

Rule-makers respond by locking each separated piece back down. Put three new rules side by side and you can see which piece each one locks:

| Anchor | [Anthropic Supported Regions Policy](https://www.anthropic.com/supported-countries) (effective 12 Nov) | [BIS remote-access rule](https://www.pillsburylaw.com/en/news-and-insights/commerce-restricts-remote-access-advanced-chips.html) (effective 19 Nov) | [Affiliates Rule, the "50% rule"](https://www.thompsonhinesmartrade.com/2026/11/bis-extends-affiliates-rule-until-january-2027/) (suspended to 10 Jan 2027) |
| --- | --- | --- | --- |
| Where the machine is |  | Licence needed for advanced chips to Indonesia, Malaysia, Singapore, Thailand and Brazil |  |
| Where the connection is |  |  |  |
| Where the person is | Not available to anyone physically in an unsupported region, including staff on business trips |  |  |
| Incorporation, headquarters | Entities incorporated or headquartered in an unsupported region are barred, wherever their staff are | [A data centre needs a licence to give compute above a threshold to companies whose parent is in China or Macau](https://www.beri.net/article/bis-remote-access-rule-ai-chips-12-million-tpp-data-center-license-singapore-malaysia-indonesia-thailand-brazil-monthly-reporting-gpu-capacity-contracts) |  |
| Ownership, control | Entities majority-owned or controlled from an unsupported region are barred |  | [Companies at least 50% owned in aggregate by Entity List firms automatically face the same restrictions](https://www.thomsonreuters.com/en-us/help/onesource-global-trade/regulatory-insights/2025/november-17th/bis-suspends-50-affiliate-ownership-rule-one-year.html) |

The "connection" row is empty. An IP address is only a detection tool; no rule uses it as the test. Anthropic writes "physically located"; BIS writes who the compute is for.

The new export rule is not retroactive either: [existing data-centre arrangements get a 90-day window, and US-headquartered companies are exempt but must report](https://www.pillsburylaw.com/en/news-and-insights/commerce-restricts-remote-access-advanced-chips.html).

The 50% rule shows how rules fall behind. It was issued at the end of September 2025, [suspended for a year that November](https://www.govinfo.gov/content/pkg/FR-2025-11-12/html/2025-19846.htm), and due to return automatically on 10 November 2026. A few days before that, [BIS extended the suspension to 10 January 2027](https://www.thompsonhinesmartrade.com/2026/11/bis-extends-affiliates-rule-until-january-2027/). As of writing, it is a rule that has been written but is not in force.

All three rules move in the same direction: from measuring machines to requiring declarations about people and ownership. But a declaration is also paperwork. The gap has only moved from measurement to honesty.

## In the end it always comes back to a person

Every layer can be split off: nominee holders split off ownership, VIEs split off control, shell companies split off headquarters. So rules always end up chasing a natural person. Financial regulators look for the "ultimate beneficial owner"; a private-equity lender asks the founder to sign a personal guarantee. Enforcement and debt collection work on the same logic.

A relative of mine once ran a construction business. After 1997 the book profits kept looking better, but after 2000 the money stopped coming in. The business kept going on borrowed money to front its costs, and within ten years it was gone. The company ended; what was left were the debts between people, and in the end a fight over dividing family property. **A company can disappear. People can't.**

The Megaspeed case went the same way. The investigation started with where the chips went; by November 2026 the focus had landed on people. [Reports linked Nvidia founder Jensen Huang to a woman named Alice Huang, a former Megaspeed executive whom US intelligence officials say was recruited by China's spy agency](https://www.kuow.org/npr-news/2026-11-17/nvidia-board-says-it-does-not-intend-to-reinstate-jensen-huang-as-ceo). China and Megaspeed deny it; all of this is allegation and intelligence assessment. This piece does not discuss private relationships, only the structure that bears on the rules.

Whether a person can be trusted, like where a person is, cannot be proved directly. Look at the timeline:

| Date (2026) | What happened |
| --- | --- |
| 9 Nov | [Trump said he had called Huang, who said he had no idea the person was a spy, and added "I really believe him"](https://247wallst.com/investing/2026/11/10/trump-says-he-called-jensen-huang-and-believes-he-didnt-know-she-was-a-spy/) |
| 12 Nov | [Nvidia announced Huang's resignation as CEO and director](https://www.sec.gov/Archives/edgar/data/0001045810/000104581026000082/nvidiaannouncesceotransiti.htm); CFO Kress became interim CEO |
| 16 Nov | [Trump said he "would certainly not mind" seeing Huang reinstated](https://www.dailysignal.com/?p=262600) |
| 17 Nov | [The board chair said on the earnings call that the board "does not intend to reinstate" him](https://www.nst.com.my/amp/business/corporate/2026/11/1580209/nvidia-board-rules-out-reinstating-jensen-huang-ceo) |
| 23 Nov | [The board voted unanimously to reinstate him](https://www.sec.gov/Archives/edgar/data/0001045810/000104581026000090/nov23pressrelease.htm) |
| 1–2 Dec | [Closed-door interviews by three House committees: Huang on the 1st, general counsel Tim Teter on the 2nd](https://streamlinefeed.co.ke/news/huang-and-lutnick-to-testify-on-nvidia-exports-scott-says) (not yet held) |
| To be set | [Public Senate Banking Committee hearing; Huang and Commerce Secretary Lutnick have both agreed to appear, and the chair hopes to hold it before Christmas](https://www.thewealthadvisor.com/article/nvidias-jensen-huang-and-commerce-secretary-lutnick-face-public-senate-hearings-over-china) |

In six days the board went from "does not intend" to "unanimously". The reinstatement notice says the board "received input from senior levels of the United States government" and, based on that input, is confident the reinstatement "poses no national security risk." The same notice says the independent committee's "investigation will proceed to conclusion" — that is, it has not concluded.

So "no national security risk" is itself a proxy indicator: a government's word standing in for an investigation that has not yet reached a finding. It is the same move as using an IP to stand in for where a person is: when the truth can't be measured, use something that can be, and that everyone accepts.

Whether this proxy is right, I don't know, and this piece won't guess. The investigation is open and the hearings have not started; the story stops at "unresolved".

## Not caught is not a grey area

The gap between proxy and truth tempts people to lump two situations together: a rule that hasn't been written clearly, and a rule that is clear but hard to enforce.

|  | The rule is unclear (grey area) | The rule is clear (explicit prohibition) |
| --- | --- | --- |
| Nature | Arguable; a fair gamble | A breach is a breach |
| Does getting caught matter? | A real issue: the rule lags, enforcement has no basis | Irrelevant: not caught is not the same as not breached |
| Example | Remote rental of compute before the 19 November rule | Anthropic's terms say where the person is; transshipping via sanctioned entities and false export declarations |

Detection is only a problem in the left column. The right column is not a loophole, just a breach that hasn't been found. Calling "not caught" a "grey area" is making excuses for breaking the rules.

The Megaspeed case sits in both columns: renting compute remotely under the old rules is the left; the alleged transshipment and false declarations are the right. The first is a problem with the rule; the second is a problem with enforcement.

That Facebook thread belongs in the right column. The terms say where the person is; remote desktop or VPN only changes whether you get caught, not whether you are allowed.

## Two people, two patches

Back to the two people at the start. Whether I use it in Hong Kong rests on me; whether Jensen Huang can be trusted rests on a government's word. Neither is proof. They are two different things used to patch the same gap.

Each time a rule changes, one proxy is swapped for another: where the chip went becomes an end-user declaration, the IP becomes physical location plus ownership, an investigation's finding becomes a government's assurance. The next loophole will open between the new proxy and the truth.

**The next three pieces in this series**

- Nation: "Banned to Sell, Free to Rent: Export Controls Tracked Where Chips Went, and Only From 19 November Who Uses the Compute" — next
- Individual: "QB Never Lied: *Puella Magi Madoka Magica* Shows a Contract the Law Won't Call Fraud" — late December
- Company: "Intel Paid for Exclusivity, Nvidia Does Your Development: Two Generations of Chip Monopoly, One Playbook" — from late December

## Sources

- [Anthropic Supported Regions Policy](https://www.anthropic.com/supported-countries)
- [Nvidia 8-K, 23 Nov 2026 reinstatement](https://www.sec.gov/Archives/edgar/data/0001045810/000104581026000090/nov23pressrelease.htm) · [Nvidia 8-K, 12 Nov 2026 CEO transition](https://www.sec.gov/Archives/edgar/data/0001045810/000104581026000082/nvidiaannouncesceotransiti.htm)
- [Federal Register 2025-19846](https://www.govinfo.gov/content/pkg/FR-2025-11-12/html/2025-19846.htm) · [Thompson Hine on the extension](https://www.thompsonhinesmartrade.com/2026/11/bis-extends-affiliates-rule-until-january-2027/)
- Remote-access rule: [Pillsbury](https://www.pillsburylaw.com/en/news-and-insights/commerce-restricts-remote-access-advanced-chips.html) · [HLC](https://hlc.com/en/publications/bis-issues-new-controls-targeting-remote-access-to-advanced-us-computing-power) · [BERI](https://www.beri.net/article/bis-remote-access-rule-ai-chips-12-million-tpp-data-center-license-singapore-malaysia-indonesia-thailand-brazil-monthly-reporting-gpu-capacity-contracts)
- Megaspeed: [TechNews](https://technews.tw/2025/10/11/nvidia-megaspeed-ai-gpu/) · [Thairath](https://en.thairath.co.th/money/tech_innovation/tech_companies/2903761) · [Fortune](https://fortune.com/2026/11/11/megaspeed-nvidia-chips-china-singapore-malaysia/) · [Tech Insider](https://tech-insider.org/?p=20742) · [Igor's Lab](https://www.igorslab.de/en/singapore-company-alleged-to-have-helped-china-smuggle-nvidia-processors-worth-2-billion-us-dollars/) · [SCMP](https://scmp.com/week-asia/economics/article/3374351/could-nvidia-scandal-put-malaysias-ai-boom-us-crosshairs)
- Congress: [NPR (KUOW)](https://www.kuow.org/npr-news/2026-11-17/nvidia-board-says-it-does-not-intend-to-reinstate-jensen-huang-as-ceo) · [Streamline Feed](https://streamlinefeed.co.ke/news/huang-and-lutnick-to-testify-on-nvidia-exports-scott-says) · [The Wealth Advisor](https://www.thewealthadvisor.com/article/nvidias-jensen-huang-and-commerce-secretary-lutnick-face-public-senate-hearings-over-china)
- Trump: [24/7 Wall St.](https://247wallst.com/investing/2026/11/10/trump-says-he-called-jensen-huang-and-believes-he-didnt-know-she-was-a-spy/) · [Daily Signal](https://www.dailysignal.com/?p=262600)
