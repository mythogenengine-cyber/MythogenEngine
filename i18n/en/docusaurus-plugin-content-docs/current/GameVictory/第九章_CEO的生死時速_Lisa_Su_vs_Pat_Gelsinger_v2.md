# Chapter 9: A Tale of Two CEOs — Lisa Su vs. Pat Gelsinger

On December 1, 2024, Pat Gelsinger "retired" from his position as CEO of Intel.

"Retired" is the official wording. Everyone in the industry knew the truth: the board of directors gave him two options—walk out yourself, or be pushed out. He chose the former.

Three years prior, Gelsinger returned to Intel with the halo of a savior. He was the youngest vice president in Intel's history, the chief architect of the 80486 processor, and the company's first Chief Technology Officer—a man who had worked at Intel since he was eighteen, whose technical roots went straight to the bone. He had been CEO of VMware for nine years, multiplying the company's market value several times over, and then returned to Intel in February 2021, announcing he would use the IDM 2.0 strategy to rebuild Intel's manufacturing hegemony.

He did everything the textbooks say you should do: poured tens of billions of dollars into building new fabs, established Intel Foundry Services to take on external clients, and released an aggressive process roadmap to catch up to TSMC. The direction was absolutely correct.

The result: in August 2024, Intel announced the layoff of 15,000 people—15% of its total workforce. In December of the same year, Gelsinger was asked to leave. During his tenure, Intel's stock price plummeted from around $55 to just over $20.

On the exact same timeline, someone else was doing the exact opposite.

On October 8, 2014, Lisa Su took over as CEO of AMD. At the time, AMD's stock price was under $3. The company was saddled with $2.2 billion in debt. Its net loss for the entire year of 2015 was $660 million. Wall Street analysts weren't discussing whether AMD could turn around—they were discussing when AMD would file for bankruptcy.

Ten years later, in 2024, AMD's market capitalization briefly surpassed Intel's.

Two CEOs. Evenly matched technical backgrounds. One brought a dying company back to life. The other sent a former empire to the intensive care unit.

The difference was not in IQ. Not in effort. Not in vision.

The difference was in the system.

---

## I. The Sleeping Pill

The previous chapter discussed TSMC's moat—trust, neutrality, and non-competition with clients. It mentioned how Intel used exclusive rebates in the early 2000s to lock in OEM manufacturers—the brands like Dell, HP, and Lenovo that buy chips, assemble them into branded computers, and sell them to consumers—indirectly accelerating its own decline in manufacturing.

But the rebate case was only the first half of the story.

In 2009, the European Union handed down a €1.06 billion fine, and Intel paid AMD a $1.25 billion settlement. Exclusive rebates—"If you dare buy AMD's chips, I'll slash your subsidies"—this naked channel bullying, on the surface, stopped.

But Intel didn't stop. It just changed the game.

The new game was called **MDF—Market Development Funds**. The industry knows it better as the upgraded version of the "Intel Inside" sticker program.

The operation was simple. Intel no longer said, "You are not allowed to buy AMD's chips." It said: "If 80% of the laptops you ship this year use Intel CPUs, and you put my sticker on your ads, I will 'sponsor' you with tens of millions of dollars in advertising fees and R&D subsidies."

What was the difference? The difference was that lawyers couldn't find a flaw. Exclusive rebates are illegal—you are restricting your client's choices. MDF is legal—you are merely "rewarding" your client's loyalty. The result was exactly the same: OEMs were locked into Intel's ecosystem. But the method had evolved from mafia protection rackets to legal commercial bundling.

Why would OEMs buy into it?

Because their gross margins were too thin.

Lenovo, HP, Dell, Acer—the hardware gross margins for the world's top PC brands are usually between 3% and 5%. The MDF subsidies Intel disbursed annually sometimes equaled an OEM's entire net profit for a quarter. Under that kind of financial pressure, what CEO would dare to switch to AMD on a large scale? If they switched, the products might be a bit cheaper, but the moment Intel's MDF was cut, the next quarter's P&L statement would bleed red.

**MDF wasn't a rebate. MDF was a safety net spread beneath the OEM's profit structure—as long as you obediently used Intel, this net would catch you. The moment you jumped, the net disappeared.**

But MDF was only the first layer. Intel had a second, deeper layer of bundling, and almost no one talks about this layer in public.

---

## II. The One-Stop Shop

When an OEM wants to develop a new Intel laptop, Intel doesn't just sell them a CPU.

Intel sends out a team of engineers—sometimes dozens of them—to station themselves within the OEM's R&D department. This team helps the OEM write most of the BIOS reference code. They help sort out the trickiest power management issues—switching those sleep states in ACPI, fine-tuning the processor's dynamic frequency scaling, the wake-up sequencing of different peripherals. They help tune the thermals—fan curves, power distribution between the CPU and GPU, every detail of keeping temperatures down inside a thin chassis. They even help verify WiFi stability and test Thunderbolt compatibility.

This suite of services has an industry name: **Intel Reference Validation Platform**. A more colloquial term is the "One-Stop Shop Solution."

If you are a product manager at Lenovo and you want to release an Intel laptop: Intel sends people to help you write the BIOS, tune the thermals, test the peripherals, and get you the Intel Evo certification—which means Intel will help advertise for you—and then they give you an MDF subsidy on top of that. From R&D to marketing, Intel has essentially paved the entire road for you. Your engineers only need to do the mechanical design and final assembly. The R&D cycle is short, bugs are few, and time-to-market is fast.

Now, suppose you want to release an AMD laptop.

AMD will give you AGESA—its base firmware initialization code. What AGESA does is allow the CPU cores, memory controller, and basic peripherals to boot. But everything above AGESA—the full implementation of the BIOS, the fine-tuning of power management, the validation of the thermal design—your engineers have to do it themselves.

AMD did not have a customer support team on Intel's scale. It didn't have the resources to station dozens of people in your R&D department to help you clean up edge cases in the BIOS. Nor did it have a marketing certification program equivalent to Intel Evo—at least not in the early Ryzen era.

**Releasing an Intel machine meant low R&D costs, a short cycle, few bugs, and subsidies. Releasing an AMD machine meant using double the R&D resources, with no subsidies.**

Business is business. Naturally, the OEM's BIOS and thermal teams would lean entirely toward Intel. Not because Intel threatened them. It was because Intel made their lives too easy.

This was Intel's true moat in the PC era. It wasn't having the best technology—as Chapter 8 noted, Intel's process was overtaken by TSMC starting in 2018. **It was having the most attentive service.** MDF bound the OEM's financial reports; the one-stop shop bound the OEM's engineering teams. With two ropes tied together, even if Intel's CPU performance fell behind, OEMs wouldn't dare jump ship on a massive scale.

But this moat had a fatal side effect.

It was a sleeping pill.

When Intel realized that as long as it disbursed tens of millions in MDF to Lenovo and HP every year and sent a team of engineers to help them sort out the low-level firmware, the OEMs would obediently release Intel laptops—the high of "locking down the channel" was too easy. It was too comfortable. It created a fatal illusion among Intel's upper management: **"Even if our process falls behind a little, we can still win by relying on the channel and subsidies."**

In 2014, Intel's 14nm process entered mass production. According to the original plan, 10nm was supposed to follow in 2016.

It didn't.

10nm ran into severe difficulties. Delayed in 2016. Delayed in 2017. Delayed in 2018. Intel's desktop processors stayed stuck on 14nm for five years—mockingly referred to by the industry as "14nm+++". During those five years, TSMC went from 16nm to 7nm and then to 5nm. Intel's process advantage—the core moat the company had maintained for over twenty years—officially flipped in 2018.

But Intel's financials didn't collapse.

Because OEMs were bound by MDF and the one-stop shop. Even with Intel's 10nm struggling, OEMs didn't dare switch massively to AMD—switching meant losing Intel's engineering support and marketing subsidies. Intel's market share declined at a pace far slower than its technological decline.

**This is the most dangerous state to be in.** A company's technology is already declining, but channel control makes its financials look fine—like a heart attack patient who just finished a half-marathon because adrenaline and painkillers kept him from feeling the pain. He thinks he can still run. The audience thinks he's still in the lead.

But the heart is already broken.

---

## III. Freedom at the Bottom

In October 2014, when Lisa Su sat in the CEO chair at AMD, she wasn't facing a sleeping pill. She was facing a critical condition notice.

Stock price under $3. Debt of $2.2 billion. Annual losses exceeding $600 million. The fabs had already been spun off in 2009 (GlobalFoundries)—forced out because Intel's rebate war made them unaffordable to keep. The CPU business was crushed by Intel—AMD's Bulldozer architecture was an acknowledged technical disaster, its IPC performance trailing far behind Intel's Haswell. The GPU business was suppressed by NVIDIA. Wall Street was counting down.

But Lisa Su had one thing Pat Gelsinger would never have.

**She had a fully empowered board of directors that delegated absolute authority.**

AMD had reached rock bottom. There was nothing left to lose. The board had no interest groups to protect—because there were no interests left to protect. No Wall Street analysts cared about AMD's gross margin for the next quarter—because everyone had already given up on them.

Rock bottom meant freedom.

Lisa Su used this freedom to do three things.

**First: All-in on Zen.**

In 2012, before Lisa Su took over as CEO, AMD poached legendary processor architect Jim Keller from Apple. Keller had designed the A4 and A5 chips at Apple—the hearts of the iPhone 4 and iPad 2. Even earlier, he had designed the K8 architecture at AMD—the core of the Athlon 64 that crushed the Intel Pentium 4 in 2003.

Keller returned to AMD, bringing with him a completely ground-up architecture concept—codenamed Zen.

After taking over, Lisa Su pushed all of the company's R&D resources onto Zen. Not just "increasing investment"—she went all-in. She axed distracting product lines and concentrated her limited engineers on a single bet.

On March 2, 2017, the first generation of Ryzen processors launched. The IPC performance of the Zen architecture was a 52% improvement over the previous Bulldozer architecture. Overnight, AMD became a serious contender in the desktop CPU market once again.

**Second: Bypassing the OEM Quagmire and Going Straight for the Console Market.**

This is where Lisa Su's strategic vision was sharpest.

She knew one thing very clearly: fighting Intel head-on in the PC laptop market was suicide. AMD didn't have the money to distribute MDF, nor did it have a massive engineering team to help OEMs write BIOS. Intel's one-stop service plus marketing subsidies had the PC OEM's underlying architecture tightly bound. Even if AMD made a better CPU, OEMs wouldn't dare adopt it on a massive scale—the switching costs were too high.

So she went to a place Intel's MDF and one-stop shop couldn't reach.

Sony. Microsoft. Later, Valve.

Console manufacturers are not OEMs. They do not live on Intel's MDF. They have their own BIOS teams—Sony and Microsoft's hardware engineering capabilities are world-class in their own right. They don't need Intel to send people to help write firmware. What they want is something very pure: **high-performance silicon**. Not one-stop services, not marketing subsidies—just a custom SoC with enough performance, low enough power consumption, and a reasonable price.

And AMD had a unique advantage that neither Intel nor NVIDIA possessed: **It possessed the design capabilities for both high-performance CPUs (x86) and high-performance GPUs (Radeon).** It could integrate the CPU and GPU onto the same chip to create a complete SoC. Console manufacturers only had to deal with one supplier.

The PS5 used AMD Zen 2 + RDNA 2. The Xbox Series X used AMD Zen 2 + RDNA 2. The Steam Deck used AMD Zen 2 + RDNA 2. The hearts of all three major gaming platforms came from the exact same company.

These semi-custom orders did two things.

First, they kept AMD alive. Between 2014 and 2016, when the Zen architecture was not yet on the market, AMD's PC business was bleeding out. It was the console contracts that provided stable, predictable revenue—keeping AMD's engineers fed and allowing R&D for the Zen architecture to continue burning money.

Second, they perfectly bypassed the OEM quagmire laid by Intel. Sony and Microsoft didn't care how much MDF Intel gave Lenovo. They only cared whether the chip could run *God of War* and *Halo*.

**Lisa Su didn't try to pry open Intel's lock. She bypassed the entire wall.**

**Third: Fully Embracing TSMC.**

The end of the previous chapter mentioned this decision. After AMD was forced to spin off its fabs in 2009, it became a fabless company. Lisa Su made a critical choice: hand over all of AMD's most advanced chips to TSMC.

This decision didn't look particularly remarkable in 2014. But its long-term effects were devastating—for Intel.

Because AMD's chips could henceforth use TSMC's most advanced process nodes. While Intel stagnated on 14nm for five years, AMD's Zen 2 was already using TSMC's 7nm. By Zen 4, AMD was using TSMC's 5nm. Intel's lag in manufacturing process was translated by AMD, leveraging TSMC's power, into product leadership.

Freedom at the bottom allowed Lisa Su to do three things that would have been impossible during prosperous times: put all resources on a single bet (Zen), move the battlefield to a place the opponent couldn't reach (consoles), and hand manufacturing over to the best foundry in the world (TSMC).

**AMD's resurrection wasn't because Lisa Su was smarter than Pat Gelsinger. It was because rock bottom gave her a system of total delegated authority—while wealth gave Gelsinger an immovable empire.**

---

## IV. The Immovable Empire

On February 15, 2021, Pat Gelsinger returned to Intel.

He saw all the problems. The manufacturing process was trailing TSMC by at least two generations. PC market share was being eaten by AMD. The data center market—Intel's most profitable business—was being squeezed by AMD EPYC and NVIDIA's AI GPUs. The IDM model had turned from a moat into a drag.

His prescription—IDM 2.0—was completely correct in its logic: rebuild manufacturing capabilities, open up foundry business to external clients, and use an aggressive process roadmap to catch up to TSMC.

The problem was, prescribing the medicine is easy. Making the patient swallow it is hard.

**The first wall Gelsinger faced: Wall Street.**

Building a fab for advanced processes requires capital expenditures in the tens of billions of dollars. The return cycle is at least five to seven years. But Wall Street's time scale is one quarter. At every Intel earnings call, the first question analysts asked was: "You've spent so much money building fabs, when will we see a return?" Gelsinger's answer was "In a few years." Wall Street's reaction was to sell off.

Lisa Su also faced pressure from Wall Street in 2014. But the difference was: AMD's stock had already fallen to $2, Wall Street had already given up, and no one cared about its gross margin for the next quarter. Gelsinger inherited a company with a $55 stock price—Wall Street had expectations, and with expectations comes the room for disappointment.

**The second wall Gelsinger faced: Internal Interest Groups.**

Intel has over 100,000 employees. The one-stop OEM service team—the massive squad that helped clients write BIOS, tune thermals, and get certifications—was the cornerstone of Intel's channel control. The MDF department managed billions of dollars in marketing budgets annually. The fabs had tens of thousands of manufacturing engineers. Every department had its own budget, its own KPIs, its own political power.

When Gelsinger needed to lay off 15,000 people to save money, he discovered a cruel reality: **The people who should be cut couldn't be cut, and the people who could be cut shouldn't be cut.**

That one-stop service team catering to OEMs—could they be cut? Cut them, and OEMs would complain about declining service quality and accelerate their shift to AMD. The MDF department—could it be axed? Axe it, and OEMs lose their subsidies, giving them even more reason to jump on AMD's boat.

But Gelsinger had to save money. Wall Street was watching.

As a result, the blade swung toward the path of least resistance—engineers without political shelter. Those core engineers quietly researching the next generation architecture, those research teams toiling away on advanced packaging technologies—they didn't have OEM clients speaking up for them, they didn't have marketing budgets to lobby the board. They were laid off.

**Intel laid off the people it needed most. It kept the people who made it feel the safest but were losing their relevance.**

This was not Gelsinger's personal failure. This was a structural dilemma of the system. The one-stop service teams and MDF systems Intel had nurtured for decades—that very mechanism that made OEMs obediently use Intel—had become an immovable institution. It was too big, the interests involved were too deep, and cutting any piece of it would trigger a chain reaction.

Lisa Su didn't have to face this problem. AMD in 2014 simply didn't have a one-stop service team—because it was too poor to afford one. It had no MDF budget—because it had no money. It had no interest groups to protect—because everyone was on the same boat, and the boat was sinking.

**AMD's weakness became its advantage. Only without baggage can you run.**

Intel's advantage became its shackles. The baggage was too heavy; it couldn't even move.

---

## V. Closing Arguments

That pattern appears again. For the seventh time.

But this time, the variation is different from the previous ones.

Every previous variation—DirectX, Steam, CUDA, TSMC—locked in external people. Microsoft locked in game developers. NVIDIA locked in AI researchers. TSMC locked in global fabless chip companies.

This time, the lock was on themselves.

Intel used MDF and one-stop services to lock in OEM manufacturers—on the surface, it was locking others, but in reality, it locked itself into a system that it had to continuously supply. OEMs relied on Intel's subsidies and engineering support, and Intel relied on the OEMs' loyalty to maintain market share and financial reports. Both sides were bound to each other, and neither could walk away.

When Intel's process began to fall behind, this mutually binding system didn't sound the alarm—instead, it muted it. **OEMs didn't jump ship, so the financials were fine. The financials were fine, so management thought the process lag wasn't fatal. Management thought it wasn't fatal, so the urgency to fix the process was lowered. By the time the problem was too big to ignore, it was five years too late.**

Convenience attracts OEMs → OEMs are bound by MDF and the one-stop shop → Intel itself is also bound → The bundling masks the process decline → The decline accumulates into a collapse.

**The one who locked others in back then, ultimately locked themselves in.**

Pat Gelsinger was not an incompetent CEO. He was an engineer in the wrong system, holding insufficient real power, trying to pry open an immovable empire. His tragedy wasn't that he couldn't see the problems—he saw all of them. His tragedy was that by the time he returned, MDF and the one-stop shop had been running for twenty years. The interest structures had solidified. To change it, swapping the CEO wasn't enough—it required tearing the whole machine down and rebuilding it. And Wall Street would not give him the time to tear it down and rebuild.

Lisa Su's victory wasn't because she was personally superior to Gelsinger either. It was because history gave her a blank chessboard in 2014—Intel's rebate war pushed AMD to the brink of bankruptcy, forced out the fabs, scattered the old system, and stripped away all the baggage. She rebuilt from the ruins, without needing to wrestle with any interest groups.

**The victors of tech history are not the smartest people. They are the ones in the right system, holding enough real power, who dare to bet everything.**

Gelsinger's IQ and technical vision were on par with Lisa Su's. But the company he returned to—an Intel fed by MDF for twenty years—was no longer a company that could be saved by one person.

---

## VI. The Loot is Still Being Divided

In 2025, AMD's Zen architecture simultaneously supplies the three major gaming platforms—PS5, Xbox Series X, and Steam Deck. The hearts of all three major platforms all stem from the chess pieces Lisa Su laid down during AMD's darkest era.

If Intel's rebate war hadn't pushed AMD to a dead end, AMD wouldn't have spun off its fabs. If it hadn't spun off its fabs, AMD wouldn't have embraced TSMC. If it hadn't embraced TSMC, AMD's Zen chips wouldn't have used the industry's most advanced processes. If the Zen chips were using GlobalFoundries' trailing-edge processes, they wouldn't have had the performance to crush Intel—and Sony and Microsoft wouldn't have handed the hearts of their major consoles entirely to them.

Intel's rebate war → AMD is pushed to the brink of bankruptcy → AMD ditches its fabs → AMD embraces TSMC → AMD uses TSMC's process to make better chips → AMD wins the three major console contracts → The long-term orders from the three major consoles in turn feed TSMC's virtuous cycle.

**Intel did one thing twenty years ago with billions of dollars in rebates: it forged AMD into a much more dangerous company.**

But the bill doesn't just belong to Intel. There's another side to the bill.

When Microsoft and Sony handed the hearts of their gaming consoles entirely to AMD, they simultaneously handed something else to AMD—leverage. Leverage at the negotiating table. The hardware lifelines of the two major console giants are held in the hands of the same company.

What does this situation turn into when the two giants decide they "no longer want to make games seriously"?

That is the story of the next chapter.

![](ch09_en.png)