---
title: "Where Does the Chaos Go? (1): You Can't Have Both Freedom and Lossless Integration"
sidebar_label: "1. You Can't Have Both Freedom and Lossless Integration"
slug: /chaos-series/freedom-and-lossless-integration
date: 2026-11-23
lang: en
section: sober-record
topic: chaos-series
category: 資本與退出機制
article_tags:
  zh:
    - 金融化
    - Excel
    - 企業系統
    - AI
    - 退出機制
  en:
    - financialization
    - excel
    - enterprise-systems
    - ai
    - exit-mechanism
keywords:
  - "Excel"
  - "ERP"
  - "Jira"
  - "AI"
  - "exit mechanism"
summary: "Excel is the business unit's exit from IT process; AI can extract its rules but not its responsibility, and freedom and lossless integration cannot coexist."
description: "Excel is the business unit's exit from IT process; AI can extract its rules but not its responsibility, and freedom and lossless integration cannot coexist."
status: published
reading_time: 8
series:
  order: 1
---
# Where Does the Chaos Go? (1): You Can't Have Both Freedom and Lossless Integration

@Mythogen Engine · Nov 23, 2026

## Prologue: Did One Person Rewrite Adobe?

In October 2026, a Facebook post went viral. It claimed someone had used Claude Opus 5.5 and Rust to rewrite the entire Adobe suite, thirty years of software, and release it free and open source, collecting 35,000 GitHub stars in three days. The poster said he would never pay a subscription again. In the comments he added: one person just took down a company.

I went and looked at the project. It is called PhotoCraft. It exists, and it is genuinely popular: when I checked, it had about 58,000 stars.¹ But it does not match the post on several points. It is built by a team and community contributors, not one person. It corresponds to Photoshop, not the whole suite; the vector, video, photo-library and PDF tools are separate projects by the same team. Its own documentation labels it early alpha and states plainly that it cannot yet replace Photoshop for daily professional work. Chinese fonts depend on whatever the system provides. And the documentation says nothing about which AI model was used.

In the comments the poster also recommended a local model engine called Strata, claiming one graphics card could process twenty million tokens an hour. By the project's own benchmarks, consumer cards generate about 53 to 94 tokens per second and read input at about 1,600 to 2,650 tokens per second.² Even counting everything as input, that is under ten million an hour.

The comment section was calmer than the post. People who had tried it said the feature gap was large, it could not decode RAW files, and Chinese typography did not work. Others said that with open source plus AI, the missing features would be filled in within months.

Both sides are only partly right. What AI really changes is the cost of rebuilding a substitute: a small team can now produce seventy percent of the everyday features, which used to take a company's scale. But building a substitute and getting people to leave the original tool are two different things. Someone in the comments asked: then why can't big companies leave Office even today?

The answer is not in the software. It is in what the software carries.

## 1. A Spec Sheet for a Product That Doesn't Exist

Chaos has a source: the gap between what is promised and what is real.

When I worked in technical support and R&D, I kept coming back to one question. When a product sells well, is it because it is genuinely good, or because the company found a way to push its costs onto others, drive the price down as far as it would go, and then write the spec sheet in glowing terms?

What customers want is often a product that does not exist: full specs at a low price. Build honestly to full spec and the cost is high, so nobody buys. The company willing to promise gets the order, then pushes the gap between spec and reality outward: onto engineers working overtime, onto suppliers squeezed on price, onto customers who discover quality problems years later, onto warranty and reputation.

In 1970 the economist George Akerlof described this mechanism using the used-car market: at the moment of sale, the buyer cannot verify quality and sees only the price and the pitch, so competition happens on paper.³ Genuinely good products are driven out not because they are worse, but because their quality is invisible at the moment of sale. This is the same thing as the cost of verification discussed in chapter six of [*Who's Collecting at the Door*](../../books/who-collects/INFO_PAGE.md), only it happens at the moment of the transaction.

Inside the company there is a spec sheet of the same kind. It is called the target. A manager promises upward a number nobody can reach, then pushes the gap downward; when it is missed, he decides who "did their best" and who has "a capability problem." Promises booked immediately, failures settled later (see chapter one of *Who's Collecting at the Door*): this is what that looks like inside a department.

That gap is what this series calls chaos. It does not vanish because nobody mentions it. It only gets pushed somewhere. This article asks: where does it land first?

## 2. The First Place That Catches the Gap

Big companies cannot leave Office, and it is not because Word has so many buttons. It is because the company's workflows, document formats and collaboration habits have all grown on top of it. The hardest part to replace is Excel.

In many companies, Excel is really doing three jobs: handling the exceptions the ERP cannot, tracking tasks that Jira is too rigid for, and running a program nobody ever formally wrote, made of formulas, macros and lookup rules. Switching software is hard not because of opening files, but because of those macros. Even the open-source LibreOffice states in its official help that its support for VBA macros is incomplete and some must be rewritten.⁴

Why does business logic end up living in Excel? Because there is always a gap between the official system and reality. ERP demands standardized processes; reality is full of special cases. Changing the system means a requirements ticket, scheduling, testing, deployment; the business unit needs a report today. Excel fills exactly that gap: you ask nobody's permission, add a column, change a formula, and use it the same day.

In other words, Excel is the business unit's exit mechanism from IT process. The official system is a queue you must wait in (see chapter four of *Who's Collecting at the Door*); Excel lets people skip the queue without paying for the fast lane. When the gap on the spec sheet reaches the front line, the first thing to catch it is Excel.

## 3. Chaos You Can See

Everyone can see Excel's chaos. The file is called "final_v3_REALLY_final," columns are hidden, formulas reference files on someone else's computer, and some exceptions only the original author understands. Precisely because its mess is public, everyone knows not to trust it completely.

But there is something important hidden in the mess. In many workbooks there is always one cell that someone edits by hand every month: a special discount for a certain customer, a returns deduction for a certain batch, an exception a manager signed off. That cell is not an error. It is a judgment, and someone is responsible for it. The reality the official system cannot hold is propped up by cells like these.

So Excel's chaos is, in a sense, honest. The gap sits in plain view, everyone can see it, and everyone knows who is patching it.

## 4. Freedom Versus Losslessness

Lately you often hear another pitch: AI can connect Excel to ERP, Jira and databases losslessly, so users keep working freely in Excel while everything syncs automatically to the official systems behind it.

That vision breaks down into three kinds of losslessness.

1. **Data losslessness**: dates, amounts and codes move across without distortion. Mostly achievable.
2. **Computational losslessness**: old and new systems produce the same results. This can be verified item by item, but Excel's peculiar calculation behaviour, floating-point precision and macros cannot be guaranteed across the board.
3. **Business losslessness**: who may edit, who must approve, which cell gets corrected by hand each month, and who answers if the correction is wrong. This layer is the hardest, because it is usually not written down anywhere.

The deeper problem is that freedom and losslessness contradict each other. Excel's value lies precisely in having no field definitions, no permissions, no approvals: anyone can change anything immediately. Once it is synced losslessly in both directions with the ERP, it must obey the ERP's data ownership, version control and approval rules. At that point it is no longer Excel; it is just another screen of the ERP. What gets "lost" in the conversion is exactly that freedom.

This also explains something. Enterprise software vendors have been selling "connect your spreadsheets to the system of record" for many years, and Excel is still everywhere. What business units need was never better integration. It was the exit. Connecting the exit to the official system is the same as sealing it.

## 5. You Can Extract the Rules, Not the Responsibility

AI really can do something that used to be very expensive: read the formulas and macros in thousands of workbooks, extract the hidden business rules, write them up as code, and add tests. That has value, and it will keep getting cheaper.

But go back to that one cell edited by hand every month. AI can see that it changes each month, and can even guess the pattern. It cannot see whose judgment it is, or who will be held to account if it is wrong. Rules can be extracted; responsibility cannot. If the original workbook contains wrong formulas or unrecorded manual corrections, AI will carry the errors over too, into a place that is even harder to see clearly.

So when Excel is systematized, what really gets removed is not the formulas but the position of "someone who patches." The person who patched is gone, and the gap has not gone with them.

## 6. After the Clean-Up, Where Does the Chaos Go?

Suppose the company resolves to absorb all the scattered Excel files into ERP and Jira. Reports become clean, processes become standard, and management finally gets a dashboard.

Where did the gap go? It moved to the intake. What can be ticketed, at what severity, in what words, which issues get merged or closed: all of that is decided by whoever guards the intake. Excel's mess is visible; the system's mess is tucked into the intake, invisible on the reports. The chaos was not solved. It only moved from the desktop into the organization.

What these gaps absorbed into the organization settle into over ten or twenty years is the subject of the next article.

Finally, back to that post. A small team plus AI can build seventy percent of Photoshop's everyday features, which shows that capability was never the barrier. The real barrier is scale, and the processes a large company has built up around a tool. AI lowers the cost of rebuilding the tool, not the cost of the gap. The gap simply lands somewhere else.

## Summary

The gap between promise and reality is the source of chaos. It lands first in Excel: an exit the business unit cut for itself, messy but visible, where everyone knows who is patching. AI can extract Excel's rules but not its responsibility; connect the exit to the official system and the freedom is gone. After the clean-up, the chaos does not disappear. It just moves somewhere you cannot see.

Next: "[The Monster Becomes a Seat](./02-the-monster-becomes-a-seat.md)."

## Notes

1. [storytold/photocraft, GitHub](https://github.com/storytold/photocraft), accessed 14 October 2026.
2. [Niko1221/Strata, GitHub](https://github.com/Niko1221/Strata), accessed 14 October 2026. The benchmark figures are from two machines, an RTX 5070 (12 GB) and an RX 9070 XT (16 GB).
3. George A. Akerlof, "The Market for 'Lemons': Quality Uncertainty and the Market Mechanism," *Quarterly Journal of Economics*, 84(3), 1970, pp. 488–500.
4. [LibreOffice Help, "Working with VBA Macros"](https://help.libreoffice.org/latest/en-US/text/sbasic/shared/vbasupport.html).
