---
title: 'The People Who Built AI Were Laid Off, the People Who Promoted It Stayed: The Job-Title Game Behind Corporate "AI Talent Expansion"'
date: 2026-11-18
author: "@Mythogen Engine"
lang: en
section: sober-record
topic: ai-title-game
category: 產業與資本競爭
article_tags:
  zh:
    - 職稱
    - AI 轉型
    - 裁員
    - 授權綑綁
    - Microsoft
  en:
    - job titles
    - AI transformation
    - layoffs
    - licence bundling
    - Microsoft
keywords:
  - Microsoft
  - Copilot
  - Bing Chat Enterprise
  - Azure OpenAI
  - Société Générale
  - Google Workspace
  - Gemini Enterprise
  - job-title game
  - licence bundling
  - switching costs
summary: 'When large enterprises adopt AI bundled into office suites like Microsoft 365, the IT staff who built in-house AI tools are streamlined while promoters and vendor liaisons stay under AI titles. On paper AI headcount doubles, while internal AI capability drops to zero and switching costs rise because nobody left knows how to leave.'
status: published
reading_time: 8
sidebar_label: 'The People Who Built AI Were Laid Off, the People Who Promoted It Stayed: The Job-Title Game Behind Corporate "AI Talent Expansion"'
sidebar_position: 20261118
description: 'When large enterprises adopt AI bundled into office suites like Microsoft 365, the IT staff who built in-house AI tools are streamlined while promoters and vendor liaisons stay under AI titles. On paper AI headcount doubles, while internal AI capability drops to zero and switching costs rise because nobody left knows how to leave.'
slug: "/notes/ai-title-game"
also_in:
  series: job-title-trilogy
  order: 3
---

> Part 3 of The Job-Title Trilogy. [Preface](/docs/notes/job-title-trilogy-preface) | [1. A Job Posting Is Not Always a Hire](/docs/notes/a-job-posting-is-not-always-a-hire) | [2. The "Forward Deployed Engineer" Role](/docs/TechNotes/JD%20%E5%BE%88%E8%B1%90%E6%BB%BF%EF%BC%8C%E7%8F%BE%E5%AF%A6%E5%BE%88%E9%AA%A8%E6%84%9F%EF%BC%9A%E5%89%8D%E7%B7%9A%E9%83%A8%E7%BD%B2%E5%B7%A5%E7%A8%8B%E5%B8%AB%E9%80%99%E5%80%8B%E3%80%8C%E6%96%B0%E8%81%B7%E7%BC%BA%E3%80%8D) | 3. The Job-Title Game

## Wang Po-ta asks: how many times have you switched AI?

In [his video on Anthropic's IPO](https://www.facebook.com/potawang/posts/pfbid02g9Fv8MzTakA3KoMsEUdZxDt4TTBwMcBx9ZiuBbSb2WqV7KCt1jP8BXbNBKsTZgiil), Taiwanese economics commentator Wang Po-ta (王伯達) borrows the Red Queen from *Through the Looking-Glass* to describe the model industry. Six months after a new model launches, older models bring in less than a fifth of revenue. Most customers pay by usage and can switch at any time. So model companies have to keep running: finding new markets on one side, and embedding their models in customers' work environments on the other, so that customers can't leave.

At the end of the video, he asks viewers: "How many times have you switched the AI you use at work?"

The question assumes one thing: that the person using the AI decides whether to switch. That may be true at a startup. But in a large company that runs entirely on Microsoft, employees' AI has indeed been switched, just not by them. And the one deciding for the company isn't the company itself.

I watched this happen firsthand at a multinational tech company. The conclusion is simple: **the company announced it was "embracing AI," the number of AI staff on the books went up, and the company's own ability to build AI went to zero.** Let me start with a story.

## How a restaurant completed its "transformation"

On the third floor of a shopping mall, there is a restaurant that has been open for twenty years. It belongs to a franchise chain: headquarters handles the brand, the point-of-sale system and the ingredients; each branch develops its own menu.

The people in the kitchen who actually cook are Ah Ming and four others. Their job title is "kitchen hand," because when the position was created, nobody knew what to call someone who develops sauces, so HR filled in whatever came to mind. The sauces, the stocks, the new dishes: they worked out all of it pot by pot in the back kitchen, using the ingredients headquarters supplied.

Two more people work at the pass and never cook. One calls tickets, sequences dishes and keeps time; the title is "floor coordinator." The other reads the order data and suggests dishes; the title is "menu manager."

The two wearing "head chef" badges handle liaison with headquarters, take photos, write the menu and introduce new dishes on social media. The badges were changed two years ago. That year, the words "head chef" were worth a lot.

One day, headquarters sends a new contract. The franchise fee stays the same, but instead of just supplying ingredients, headquarters will now include ready-made meal kits every month. The sauces and stocks come semi-prepared: open the pack, heat it up, and it's ready to serve.

Finance does the maths. Since the meal kits cost nothing extra, the salaries of the five kitchen hands who cook are now a duplicate expense.

Ah Ming and the others leave in the next round of staffing adjustments. The report says "kitchen-hand headcount streamlined." Nobody notices.

The two "head chefs" stay. Their job becomes ordering meal kits from headquarters, taking photos, and reporting the meal-kit usage rate to management every week. The usage rate rises every month, and the senior of the two gets promoted.

The two at the pass stay too. The one who called tickets now manages the oven schedule, which pack goes in when and which comes out when, and the title becomes "chef." The menu manager now picks which kits to sell next season from headquarters' catalogue. This gets written up as "new dish development," and his title becomes "development chef."

The restaurant posts an announcement: "We have upgraded across the board, partnering with an industry-leading central kitchen to improve service efficiency and quality."

A year later, a reporter writes a short piece: the restaurant has stopped making its own sauces. The piece mentions no one. On the books, kitchen hands went from five to zero, and chefs from zero to two. The people who had never cooked became chefs; the people who actually cooked were laid off as kitchen hands.

Another year passes, and headquarters announces that starting next month, meal kits will be charged separately.

The restaurant considers switching suppliers. Then it opens the back kitchen and finds that no one knows how to make the sauce anymore.

## Back in company terms: what actually happened

The restaurant is a metaphor. The structure is what I saw.

In the first half of 2023, generative AI had just taken off. Legal and security wouldn't let employees use public ChatGPT, so an internal team built an in-house AI tool on Microsoft's Azure OpenAI Service. It looked like ChatGPT, but the data stayed in the company's own cloud environment. Taiwan used it; the US was the main user.

The people who built it had IT titles. When they joined, the company had no "AI engineer" position.

Another group handled internal promotion, training and slide decks, reporting "AI adoption progress" to management. Their work was essentially marketing, but their titles were gradually changed to AI-related names, because those names carried more weight in budget meetings.

Then there were the project and product managers. They didn't write code; they handled schedules and requirements. Over the past two years, "AI" has been added to their titles one after another. Product managers more often simply switch to an R&D title.

In July 2023, Microsoft launched Bing Chat Enterprise and bundled it into the Microsoft 365 licences companies were already paying for, at no extra cost. On the cost sheet, the internal tool instantly became a duplicate expense. It was used for about six months before being shut down. In other words, the same supplier first sold the company ingredients to cook with, then switched to selling it ready-made meals.

The next layoff list included the IT/SW people in Taiwan who had built the AI tool. Those with AI titles who handled liaison with Microsoft stayed. The company's public announcement said it was "embracing AI development."

A simple set of numbers makes this clear. They are illustrative, not actual headcounts. Suppose that before the transformation, five people with IT titles were building AI, two people with AI titles were doing promotion, and there were two project and product managers. Afterwards, the five builders are down to zero; the two promoters stay, and the two managers have "AI" added to their titles.

On the books, AI-titled headcount went from two to four. It doubled. The five laid off were filed under "IT headcount streamlining." But if you ask how many people in the company can still build an AI tool themselves, the answer went from five to zero.

**"Expanding AI talent" and "losing AI capability" can be the same event. The only difference is whether you count job titles or the work people do.**

The same layoff can even give two companies an AI story each. The company doing the layoffs tells shareholders it has used AI to raise efficiency and cut costs. Microsoft tells its shareholders that enterprise AI users have grown again. As for where the money went: from internal salaries into licence fees.

The last two paragraphs of the story, meal kits charged separately and nobody left who can make the sauce, are extrapolation, not something that has already happened. But they illustrate something that is already true: the company no longer holds the bargaining chips.

## Why outsiders can't see it

Public records show "tool decommissioned," and rarely "team laid off." That isn't because no one was laid off. It's because job titles erased it from the data.

Layoff statistics and research on "which jobs AI has replaced" are all categorised by job title. Someone actually building AI tools may be titled IT support, analyst, or some legacy post left over from a restructuring. When they are laid off, it is an ordinary cost cut, not news.

Those who stay carry AI titles, so the company can say its AI team hasn't shrunk, or has even grown. Both sets of numbers are true; they just count the wrong thing.

Public reporting confirms the first half. In January 2026, Bloomberg reported that [Société Générale had scrapped SoGPT, its in-house AI assistant, in favour of Microsoft Copilot](https://www.bloomberg.com/news/articles/2026-01-12/socgen-turns-to-microsoft-s-copilot-after-scrapping-own-ai-tool). [Another report](https://emag.directindustry.com/2026/01/16/societe-generale-generative-ai-make-or-buy-microsoft-copilot/) noted that the bank had set up a dedicated internal team to develop the tool. The coverage reported the tool being shut down. It said nothing about what happened to the team.

I don't know whether SocGen's team was laid off. But given the structure above, even if it was, outsiders would struggle to see it. **"Tool decommissioned" is the half that is publicly visible; "team laid off" is the half that job titles make disappear.**

## This is not a new trick

What Teams did to Slack, Copilot has done again, this time to companies' own internal AI teams.

Microsoft bundled Teams into Office for free, squeezing out the collaboration tools companies had chosen for themselves. Slack complained to the European Commission in 2020, and Microsoft eventually sold Teams separately from Office, first in Europe and then worldwide. The difference this time is that what gets squeezed out isn't another company but a company's own employees. Employees don't file complaints with the EU.

Nor is this unique to Microsoft. In 2025, Google [folded Gemini's AI features directly into Workspace business plans](https://techcrunch.com/2025/10/09/google-ramps-up-its-ai-in-the-workplace-ambitions-with-gemini-enterprise), the same mechanism. For Workspace-centric companies, [bundling makes Gemini the economic default](https://www.reworked.co/digital-workplace/googles-teams-bridge-could-undercut-its-own-microsoft-exit-strategy/). Whoever owns the software employees open every morning decides which model the company uses.

This is the wall that model companies' "embed in the workflow" strategy runs into. In companies like these, a model company gets in mostly as a supplier behind the office suite. The customer relationship and the pricing power stay with the suite vendor.

## Three leads readers can check for themselves

When an argument also explains why there is no evidence for it, readers have reason to suspect it can't be tested. So here are three leads anyone can check:

1. **Timeline**: after an office-software vendor launches bundled AI features, do in-house AI tools get shut down within months? SocGen is a named example; the one I saw is another.
2. **CVs**: on LinkedIn, look for people whose experience says "built an internal GPT tool on Azure OpenAI" but whose title is IT, and check whether they left around the time the tool was shut down.
3. **Job postings**: at the same company, as IT development postings shrink, do roles like "AI adoption," "AI enablement" or "Copilot champion" appear? Open the job descriptions: the work is mostly training, change management and internal communications.

The third is the most direct. It turns "marketing people wearing AI titles" from my personal observation into a public phenomenon anyone can see. There is only one method: read the job description, not the job title.

## Lock-in doesn't need technology; laying off the people who know how to leave will do

Switching costs are usually discussed in technical terms: data you can't move, systems that won't connect, processes that must be rebuilt. This shows another kind.

Those five people with IT titles were the only ones in the company who knew how to connect an API, manage permissions, and one day swap the model. Once they left, the company didn't merely face high switching costs. It had no one left who knew how to switch. **Lay off the people who can build alternatives, and switching costs rise on their own.**

So the next time a large company announces it is "expanding AI talent and embracing AI," ask three questions. What were the titles of the people laid off, and what did they actually do? Does the remaining AI talent build things, or manage the vendor? And whose licence fees did the saved salaries end up in?

Back to Wang Po-ta's Red Queen. Model companies run as fast as they can so that customers can't leave. But in companies like these, customers already can't leave. It's just that what they can't leave isn't the model but the office suite. However fast a model runs, here it is just a replaceable part behind the suite.

Once you've asked those three questions, it becomes clear who is collecting at the door.

## Postscript: designers turned PMs

After this article was published, a designer on Threads shared that the company had shut down its entire design team and moved every designer into a PM role. Unlike the case here, no one was laid off. But design work did not disappear: it was packaged into a design system for AI, and the remaining judgment is now done by the same person on top of a PM job. Once again, the title no longer describes the work. See the [series preface](/docs/notes/job-title-trilogy-preface).

## Sources

- [Wang Po-ta: Anthropic IPO video post — Facebook](https://www.facebook.com/potawang/posts/pfbid02g9Fv8MzTakA3KoMsEUdZxDt4TTBwMcBx9ZiuBbSb2WqV7KCt1jP8BXbNBKsTZgiil)
- [SocGen Turns to Microsoft's Copilot After Scrapping Own AI Tool — Bloomberg](https://www.bloomberg.com/news/articles/2026-01-12/socgen-turns-to-microsoft-s-copilot-after-scrapping-own-ai-tool)
- [Société Générale Puts an End to Its Internal AI and Chooses Copilot — DirectIndustry](https://emag.directindustry.com/2026/01/16/societe-generale-generative-ai-make-or-buy-microsoft-copilot/)
- [Google ramps up its AI in the workplace ambitions with Gemini Enterprise — TechCrunch](https://techcrunch.com/2025/10/09/google-ramps-up-its-ai-in-the-workplace-ambitions-with-gemini-enterprise)
- [Google's Teams bridge could undercut its own Microsoft exit strategy — Reworked](https://www.reworked.co/digital-workplace/googles-teams-bridge-could-undercut-its-own-microsoft-exit-strategy/)
- [Anthropic files for Nasdaq IPO — PPC Land](https://ppc.land/anthropic-files-for-nasdaq-ipo-with-16-3bn-in-first-half-revenue/)
