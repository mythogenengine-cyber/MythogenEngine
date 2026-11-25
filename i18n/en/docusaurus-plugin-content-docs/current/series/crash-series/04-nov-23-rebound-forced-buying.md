---
title: "The November 23 Rebound Was Mostly Forced Buying"
sidebar_label: "Side article: The Forced-Buying Rebound"
slug: /crash-series/nov-23-rebound-forced-buying
date: 2026-11-25
lang: en
section: sober-record
topic: crash-series
category: 資本與退出機制
article_tags:
  zh:
    - 股災
    - 國安基金
    - 強積金
    - 退休金
    - ETF
    - 循環融資
    - 道德風險
    - 系統性風險
    - 機械式買賣盤
    - 沽空回補
    - 期權 gamma
    - CTA
  en:
    - market-crash
    - national-stabilization-fund
    - mpf
    - pension-funds
    - etf
    - circular-financing
    - moral-hazard
    - systemic-risk
    - mechanical-flows
    - short-covering
    - options-gamma
    - cta
keywords:
  - "mechanical flows"
  - "short covering"
  - "options gamma"
  - "CTA"
  - "Jensen Huang reinstated"
  - "Nvidia"
  - "mechanical bounce"
summary: "Understanding mechanical buying and selling, so you don't buy into the next rebound"
description: "Understanding mechanical buying and selling, so you don't buy into the next rebound"
status: published
reading_time: 12
series:
  order: 4
---
# The November 23 Rebound Was Mostly Forced Buying

@Mythogen Engine · Nov 25, 2026

## Introduction: Three Days, Three Stories

On Friday, November 20, 2026, the market was in panic. The S&P 500 fell 3.7% in a day and entered a technical correction. Nvidia closed near its 52-week low of about $125, down about 23% in the week after Jensen Huang resigned.

On Monday, November 23, Nvidia's board reinstated Huang as CEO. Nvidia rose 31.48% in one day. The S&P 500 gained 4.73% and the Nasdaq 6.51%, the best day since April 2025. Many people said "AI is back."

On Tuesday, November 24, Nvidia fell 5.86%, at one point down 9% intraday, and the Nasdaq-100 fell 1.99%. Those who chased the rally on November 23 were trapped the next day.

Part 1 of *Where Did the Crashes Go?* argued that the same numbers get different labels depending on who is talking. One reason a sharp drop gets called a "correction" is that it rebounds quickly. The days from November 20 to 24 showed the other side of the same thing: a rebound can be mislabelled too. November 23 saw the steepest rise, but most buyers that day were not optimistic. Rules forced them to buy.

Part 3 of the series also argued that big declines rarely happen all at once. Rebounds draw in new buyers, who get hurt in the next wave. This piece makes no new argument. It fills in one part the series left out: how the rebound itself is manufactured. These mechanisms were not discovered after the fact. Nomura named them publicly a week before the rebound.

This piece explains three things in plain terms: how these "mechanical" flows work, how to recognise them, and how to avoid getting caught next time.

Data as of the US market close on November 24, 2026. This is not investment advice.

## What "Mechanical" Means: Rules, Not AI

Mechanical buying and selling means trades triggered automatically by preset rules. Once a condition is met, they buy or sell, regardless of a company's prospects or anyone's outlook. Most of these rules are program trading that has existed for ten or twenty years. They have nothing to do with recent large language models, and there is no evidence so far that AI models drove this episode.

There are four common types:

1. **Short covering.** Shorting means borrowing shares to sell, then buying them back later to return them. When the price surges, losses grow. A stop-loss or a broker's margin call forces an immediate buyback. It is like borrowing your neighbour's umbrella and selling it, planning to buy one back cheaply later. Then a downpour arrives and umbrella prices soar, but you still have to buy.
2. **Options dealer hedging.** Dealers sell put options, which are effectively "downside insurance." To avoid losses, they short futures as a hedge. When fear subsides and volatility (VIX) drops sharply, the insurance loses value, and dealers unwind their hedges, which means buying futures. It gets worse when dealers are "short gamma": the more prices rise, the more they must buy; the more prices fall, the more they must sell. They become an amplifier.
3. **CTA trend-following funds.** Computer models watch only price trends, not news or earnings. They sell when prices break below a line and buy when prices break above it. After a month of falling prices they keep selling, even to the point of turning net short.
4. **Volatility-control funds.** They adjust holdings to market volatility: cutting stocks when volatility is high, adding back when it falls. When VIX drops, they add automatically.

All four share one trait: they act when a condition triggers and stop when they are done. So mechanical buying is often used up all at once, with nothing left the next day.

## The Evidence: How Much of November 23 Was Forced Buying

Data from several institutions show why the November 23 gain was so large: the spring had been compressed as far as it could go, and the news released it all at once.

| Indicator | Figure | Source | What it means |
| --- | --- | --- | --- |
| Nvidia short sellers' one-day paper loss (Nov 23) | About $12.2 billion, the largest since at least 2019 | [ORTEX, via Reuters](https://www.globalbankingandfinance.com/nvidia-bears-face-12-2-billion-hit-huangs-surprise-return/) | Shorts forced to buy back |
| That loss vs. the previous seven days' short profits | Wiped out nearly 90% | [S3 Partners](https://stocktwits.com/news-articles/markets/equity/nvda-shorts-lose-12-b-as-huang-s-return-erases-nearly-90-of-recent-gains-says-s3-partners/cNbp1PYR9jq) | A week's gains lost in a day |
| London-listed 3x inverse Nvidia products | Fell more than 90%, trading briefly halted | [Aggregated reports](https://bivashvlog.com/nvidias-952-billion-rebound) | Leveraged bears wiped out |
| S&P 500 aggregate dealer gamma (week before the rebound) | About −$7.3 billion, the deepest since January 2019 | [Nomura](https://thedarksideoftheboom.substack.com/p/mcelligotts-warning-wall-street-is) | Dealers in amplifier mode |
| CTA selling over the past month | About $57 billion; net short about $19 billion | [Goldman Sachs trading desk](https://ceoeconomy.com/article/goldman-cta-selling-hedge-fund-leverage-nov-2026) | Plenty of shorts left to cover |
| Hedge funds' net tech weighting | About 18%, vs. about 29% in the index | [Goldman Sachs](https://www.techflowpost.com/en-US/article/35543) | Underweight about 11 points; any rally forces them to chase |
| VIX (week before the rebound) | Above 35 at one point; Goldman Panic Index 9.8/10 | [Goldman Sachs](https://www.tickmill.com/blog/institutional-insights-goldman-sachs-flows-positioning-update-231126) | Peak fear; insurance at its most expensive |

In his client report on November 23, Nomura strategist Charlie McElligott laid out the chain clearly. Huang's reinstatement sent short-term VIX sharply lower. Deep out-of-the-money puts lost value fast. Dealers unwound their short-futures hedges, which meant buying. Shorts hit their stop-losses. S&P futures were forced higher, and money chased in ([Cailianshe summary](https://longbridge.com/en/news/306566963)). He called it a "mechanical bounce" and said it guarantees nothing ([Yahoo Finance](https://finance.yahoo.com/markets/live/stock-market-today-monday-november-23-dow-sp-500-nasdaq-surge-after-nvidia-reinstates-jensen-huang-182039397.html)).

Before the rebound, Nomura had estimated CTA buy triggers at +2% and +4%, with a 4% rally triggering about $21.1 billion of global CTA buying ([Nomura](https://thedarksideoftheboom.substack.com/p/mcelligott-when-the-machines-are)). On November 23 the S&P 500 rose 4.73%, with 417 constituents up ([Siebert](https://blog.siebert.com/who-was-really-buying-stocks-yesterday)). Goldman's scenarios were gloomier: even in a rising market, CTAs might sell another $28.6 billion. The two banks' models disagree on whether CTAs actually turned buyers that day.

The good news concerned one company, yet the whole market rose together. What was being bought was index futures, short positions and hedges, not a new view on any particular company.

## How to Recognise a Mechanical Rally: Six Signals

When several of these signals appear on the same day, the gain likely came mostly from forced buying.

1. **Extreme positioning before the news.** Heavy shorting, CTAs net short, fear indicators near their peak. The tighter the spring, the sharper the rebound, but that force has nothing to do with how good the news is.
2. **A gap up at the open and an abnormal one-day gain.** Nvidia jumped more than 30% at the open. Fundamental changes are rarely priced in within a day; only position-closing comes all at once.
3. **The whole market rises together.** News about one company lifted most S&P 500 constituents. What was bought was the index, not individual companies.
4. **Inverse leveraged products collapse and short losses set records.** This is the most direct evidence of forced buying. Such figures are usually reported that night or the next day.
5. **The original problems are not solved.** Huang's return settled who would be CEO. But export-control scrutiny, national-security questions and possible data-center limits were all still unresolved that day ([CNBC](https://www.cnbc.com/2026/11/23/nvidia-stock-jensen-huang-ai-trade.html)). Michael Burry also said that day he would consider shorting Nvidia again at $200. Uncertainty shrank; the problems remained.
6. **No one buys the next day.** This is the last and most reliable test. Forced buying ends when it is used up. What matters next is whether anyone buys without being forced.

November 24 was that test. Nvidia fell 5.86% and semiconductors 7.26%. The same day, the Dow rose 0.85% to 50,018, retail stocks rose 2.33% and health care 2.95% ([Market Digest](https://stockmarketwatch.com/digest/2026-11-24)). In the S&P 500, 346 stocks rose and 154 fell, and the equal-weight index outperformed the cap-weighted index ([Closing Look](https://cappnotes.substack.com/p/closing-look-tuesday-november-24)).

Money did not leave the stock market. It only left the basket of stocks that rose most sharply on November 23. The same day brought reports that the US was preparing higher tariffs on 16 economies, yet retail stocks, the most exposed to tariffs, rose. Tariffs do not appear to have been the main driver that day.

## The Reverse: Mechanical Selling Amplifies Every Wave Down

Run the same machinery in reverse and you get mechanical selling. It pushed down on November 20 and up on November 23: the same machine, pointed in different directions.

Mechanical selling has four features:

- **Sudden acceleration below certain price levels.** CTA sell levels, stop-losses and margin lines tend to cluster at similar prices. Once they break, selling triggers more selling, round after round.
- **Good and bad stocks sold together.** In deleveraging, the first things sold are the easiest to sell: the largest, most liquid heavyweights. These are exactly the biggest holdings of ETFs and pension funds.
- **Thinner buffers around options expiry.** McElligott noted that after November's options expiry, dealers remained short gamma within about 5% of current levels, so their hedging amplifies moves in both directions ([Goldman and Nomura data summary](https://ceoeconomy.com/article/goldman-cta-selling-hedge-fund-leverage-nov-2026)).
- **Selling power usually exceeds buying power.** Goldman estimates CTAs could sell up to about $80.6 billion more in a falling market, about $65.8 billion in a flat one, and about $28.6 billion even in a rising one. Goldman also noted that long-term investors have not yet sold in size, while other investors' equity holdings remain elevated. In other words, a lot of stock has yet to come to market.

This ties directly to the scorecard in Part 3. That table split ten conditions into two groups: accumulating "fuel," and the "transmission" that decides whether the fire spreads. "Forced liquidations and margin cascades" belongs to transmission and had not appeared at the time of writing. Part 3's judgment was: the structure is already dangerous, but transmission has not begun.

These few days added one point: the transmission machinery is always running. Mechanical selling does not create problems; it amplifies and spreads them. If it meets genuinely bad news, such as the scorecard's not-yet-present "earnings deteriorating" or "ETFs turning to net outflows," each of the waves Part 3 describes will be steeper.

Part 1 also gave one reason a sharp drop gets called a "correction": it rebounds quickly. If the rebound itself is mechanical, "it bounced back fast" is not enough to prove the market is healthy.

## Who Got Caught: The Crowded Side, Either Way

Mechanical flows punish the most crowded side, whether it bet on a rise or a fall. Between November 20 and 24, people were caught on both sides:

- **Those who used leverage to bet on a fall in the November 20 panic.** The 3x inverse products fell more than 90% in a day. The longer a decline lasts, the more people bet on it, and the more of them must flee at once when it rebounds.
- **Those who chased the rally on November 23.** They bought with the open up 30%; the next day Nvidia fell nearly 6% and semiconductors more than 7%. They bought at the exact peak of the forced buying.
- **Those who cut losses at the November 20 low.** Selling when fear indicators are near their peak often means selling into the last wave of mechanical selling.

There is no direct data yet on who sold on November 24. A reasonable inference: long-term holders trapped at high prices used the rebound to reduce positions. Before the rebound, Nomura had already said that when every mechanical buy condition is in place and the market still cannot rally, the problem is no longer positioning; someone wants to sell ([MoneySafe summary](https://moneysafe.substack.com/p/sp500-index-daily-report-november-f7f)). This can only be confirmed once Goldman's weekly hedge-fund positioning data comes out.

Part 1 of *Where Did the Crashes Go?* cited Barber, Lee, Liu and Odean (2009): Taiwanese retail investors lose about 3.8 percentage points a year through trading, with wealth flowing to foreign and other institutional investors. These few days were a miniature of the same script: those forced to trade between sharp rises and falls handed money to those who were prepared.

## Avoiding It Next Time: Seven Rules

Next time you see a big one-day rise or fall, ask first: are today's buyers (or sellers) choosing to, or being forced to? These seven rules help answer that.

1. **Don't chase the first move on news day.** Wait two or three trading days and see whether anyone still buys once the forced buying is used up.
2. **Distinguish "less uncertainty" from "problem solved."** List the problems that existed before the news, one by one, and check which ones the news solved. This time it solved one.
3. **Don't bet on news with leveraged or inverse leveraged products.** Such products can fall more than 90% in a day. Part 3 said: don't use leverage to buy dips; you only need to survive being wrong. The same goes for betting on falls.
4. **Be more careful when everyone is waiting for the same rebound.** Before the rebound, Nomura said the mechanical rebound "makes too much sense," and that broad acceptance of this view was its biggest headwind ([Seeking Alpha](https://seekingalpha.com/news/4674851-mechanical-relief-rally-could-be-set-up-for-failure-because-it-makes-too-much-sense-nomura-s)). The more unanimous the consensus, the more crowded the positioning.
5. **Check what your ETFs, pension and regular-investment plans actually hold.** Part 2 noted that the top three foreign holdings of Japan's GPIF are Nvidia, Apple and Microsoft. You may never buy individual stocks, but you are already riding this machine.
6. **Keep cash, so you are never forced to sell at the wrong time.** This is Part 3's last piece of advice. Without pressure to sell, mechanical selling cannot hurt you.
7. **Watch a few public indicators.**
   - VIX and fear levels: at extremes, rebounds tend to be sharp and large, but not necessarily lasting.
   - Short-interest data (S3 Partners, ORTEX): the more shorting, the more force in a squeeze.
   - Banks' weekly hedge-fund positioning data: whether big players are net buyers or net sellers.
   - Options expiry dates: dealer buffers change around expiry.
   - Market breadth: advancers vs. decliners, and divergence between equal-weight and cap-weighted indices. If the index rises while most stocks fall, a few heavyweights are holding it up.

## Conclusion: Crashes Have No Definition, and Neither Do Rebounds

The core of *Where Did the Crashes Go?* is that crashes have not disappeared; they have been renamed, offloaded onto others and delayed. The moves from November 20 to 24 showed that rebounds can be renamed too. A 4.7% one-day gain: the headlines said "AI is back"; the data said short covering and dealers unwinding hedges.

Labels follow the narrative; positions follow the rules. What decides how far a market moves in a day is often positioning structure, not fundamentals.

Like the series, this piece does not predict dates. Who sold on November 24, and whether CTAs have turned, must wait for the next batch of data. This piece goes only as far as the data can prove.

## Sources

**The series**

- [Part 1: Crashes Renamed as Corrections](./01-crashes-renamed-as-corrections.md)
- [Part 2: The Risk Moved into Your Pension](./02-risk-moved-into-your-pension.md)
- [Part 3: The Denser the Backstops, the Bigger the Next Crash](./03-denser-backstops-bigger-crash.md)

**Market moves**

- [Investing.com: Why is NVIDIA stock surging today?](https://www.investing.com/news/stock-market-news/why-is-nvidia-stock-surging-today-93CH-5045184)
- [Yahoo Finance: Nvidia Shares Surge Over 30% as Board Reinstates Jensen Huang as CEO](https://finance.yahoo.com/markets/stocks/articles/nvidia-shares-surge-over-30-183222460.html)
- [Motley Fool: Stock Market Today, Nov. 23](https://www.fool.com/coverage/stock-market-today/2026/11/23/stock-market-today-nov-23-nvidia-surges-31-adding-nearly-usd1-trillion-in-market-value-as-jensen-huang-reclaims-ceo-role/)
- [Siebert: Who Was REALLY Buying Stocks Yesterday?](https://blog.siebert.com/who-was-really-buying-stocks-yesterday)
- [Motley Fool: Stock Market Today, Nov. 24](https://www.fool.com/coverage/stock-market-today/2026/11/24/stock-market-today-nov-24-tech-sell-off-drags-nasdaq-as-dow-gains-on-value-rotation/)
- [Closing Look — Tuesday, November 24, 2026](https://cappnotes.substack.com/p/closing-look-tuesday-november-24)
- [Market Digest — Tuesday, November 24, 2026](https://stockmarketwatch.com/digest/2026-11-24)
- [CNBC: Nvidia surge: What investors should do with the stock and the AI trade now](https://www.cnbc.com/2026/11/23/nvidia-stock-jensen-huang-ai-trade.html)

**Positioning and flows**

- [Reuters (ORTEX): Nvidia bears face $12.2 billion hit on Huang's surprise return](https://www.globalbankingandfinance.com/nvidia-bears-face-12-2-billion-hit-huangs-surprise-return/)
- [S3 Partners: NVDA Shorts Lose $12B](https://stocktwits.com/news-articles/markets/equity/nvda-shorts-lose-12-b-as-huang-s-return-erases-nearly-90-of-recent-gains-says-s3-partners/cNbp1PYR9jq)
- [Nvidia's $952 Billion Rebound (3x inverse products)](https://bivashvlog.com/nvidias-952-billion-rebound)
- [Yahoo Finance: Nov. 23 live coverage (Nomura's "mechanical bounce")](https://finance.yahoo.com/markets/live/stock-market-today-monday-november-23-dow-sp-500-nasdaq-surge-after-nvidia-reinstates-jensen-huang-182039397.html)
- [Cailianshe summary of Nomura's report](https://longbridge.com/en/news/306566963)
- [Nomura's McElligott: dealer gamma at −$7.3 billion](https://thedarksideoftheboom.substack.com/p/mcelligotts-warning-wall-street-is)
- [Nomura's McElligott: CTA triggers and the $21.1 billion estimate](https://thedarksideoftheboom.substack.com/p/mcelligott-when-the-machines-are)
- [Seeking Alpha: Mechanical relief rally could be set up for failure](https://seekingalpha.com/news/4674851-mechanical-relief-rally-could-be-set-up-for-failure-because-it-makes-too-much-sense-nomura-s)
- [MoneySafe: SP500 Daily Report, November 21](https://moneysafe.substack.com/p/sp500-index-daily-report-november-f7f)
- [Goldman CTA estimates (CEO Economy)](https://ceoeconomy.com/article/goldman-cta-selling-hedge-fund-leverage-nov-2026)
- [Goldman positioning and volatility update (Tickmill)](https://www.tickmill.com/blog/institutional-insights-goldman-sachs-flows-positioning-update-231126)
- [Goldman: hedge funds underweight tech (TechFlow)](https://www.techflowpost.com/en-US/article/35543)

**Tariffs**

- [Quartz: U.S. preparing tariff hike on China, E.U. and 14 other nations](https://qz.com/us-prepares-tariffs-china-eu-industrial-subsidies-112426)
