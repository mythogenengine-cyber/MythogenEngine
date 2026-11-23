---
title: "Where Does the Chaos Go? (2): The Monster Becomes a Seat"
sidebar_label: "2. The Monster Becomes a Seat"
slug: /chaos-series/the-monster-becomes-a-seat
date: 2026-11-23
lang: en
section: sober-record
topic: chaos-series
category: 資本與退出機制
article_tags:
  zh:
    - 金融化
    - legacy
    - 組織
    - 舉證責任
    - 職場政治
  en:
    - financialization
    - legacy
    - organization
    - burden-of-proof
    - workplace-politics
keywords:
  - "legacy"
  - "reference design"
  - "burden of proof"
  - "Gresham's Law"
  - "AI PC"
summary: "How a legacy system becomes a monster nobody understands over two decades, and then a seat nobody can take in a shrinking company."
description: "How a legacy system becomes a monster nobody understands over two decades, and then a seat nobody can take in a shrinking company."
status: published
reading_time: 19
series:
  order: 2
---
# Where Does the Chaos Go? (2): The Monster Becomes a Seat

## A dream, a legacy system, and whether staying counts as winning

@Mythogen Engine · Nov 23, 2026

*The previous article, "[You Can't Have Both Freedom and Lossless Integration](./01-freedom-and-lossless-integration.md)," argued that the gap between promise and reality lands first in Excel, and that once a company cleans up, the gap moves into the organization, where no one can see it. This article asks what it becomes after settling there for ten or twenty years.*

## Prologue: A Sleeper Carriage

When I woke that day, I remembered only fragments of the dream.

The first was rushing for a train. Instead of going through the mall, I took a path through the grass outside it. It was not a real road, just a shortcut worn by feet. The path led to a station called "Hong Kong Station," but in the dream that was not really its name; it was originally called "Sister Station." The station was actually two stations: one entered from the mall, one from outside, joined together, with two lines running side by side.

I boarded a sleeper train. The bed was large but not a private compartment; its edges were blurred. In the next bed was an old woman, perhaps twenty years older than me. I ignored her and went back to sleep. Halfway through the night she came over and tried to seduce me. When that failed, she changed, into a blonde Russian woman with a striking figure.

In that moment I was completely lucid. I realized that what was in front of me was not human, or rather, was something wrong that I could not name. So even though the train was moving, I left.

Between the train and home there was another part of the dream, which I forgot on waking and only recalled later. The scene shifted to a company in the middle of mass layoffs, keeping only the people who obeyed and were willing to cook the numbers. Problems kept multiplying and the legacy piled higher and higher, impossible to handle, yet we had to carry it on top of everything else. And the people best at vague bluster, the ones who had left behind the most legacy, became the most valuable. In the dream I even tried to find an explanation for all of it.

In the last scene I got home, opened the fridge, took out the few leftover slices of pork jerky and a carton of boxed tea, and sat down to eat.

What stayed with me after waking was not the plot but a question: in a company like that, even if you hold your position and stay, does that really count as winning?

To answer that, we have to start with the monster.

## 1. The Monster Was Not Always a Monster

The most easily misunderstood point is this: systems like these are rarely wrong at the start.

Take the battery management firmware I know well. The original design fit the needs, hardware limits and synchronization methods of its era, and it made sense. The problem is the evolution over the following ten or twenty years: nobody dares touch the old, so the new keeps getting piled on top. Like large enterprise software, all sorts of other things get grafted on along the way. Each layer has a reason when it is added, but features come to depend on one another, and those dependencies form rules that were never written down. Past a certain point, the difficulty is no longer any particular piece of code; it is that you cannot be sure which seemingly unrelated places a single change will affect.

The classic case is "waiting." Old firmware is full of flows like this: send a command, wait five seconds, or some number of milliseconds, assume the other side has finished, and carry on. In the old environment, with stable load and predictable speeds, this could run without trouble for years.

But waiting is not synchronization. It is just an assumption that enough time has passed. Today's chips, architectures and communication methods are different, and synchronizing this way simply no longer works. Worse, other features have long since come to depend on the execution order this waiting creates: shorten it, remove it, or replace it with a real event acknowledgement, and you may expose a string of race conditions that had been hidden.

Meanwhile, the organization chases innovation every year, and new features keep getting stacked on. New features are visible and can go into KPIs; cleaning up old dependencies is invisible and nobody rewards it. Every generation delivered, yet nobody was responsible for the overall complexity. Nothing was ever fully cleared, and after enough years it became a monster.

It became a monster not because it has many features, but because the features, the outdated assumptions and the hidden dependencies are now tangled together, so any local change can have unpredictable consequences.

## 2. Why Outsiders Don't Believe You

The hardest part is explaining it to outsiders. The layperson's first reaction is usually "you're the one who doesn't understand": these people have done this for years, how could they have the basic concepts wrong?

Behind that reaction is an unproven assumption: that if a system keeps running, the people who designed it must have had the right concepts.

In fact, a system can be kept alive by many things: staff filling gaps with manual procedures and exception handling, maintainers knowing what not to touch, new features deliberately routed around the deepest flaws, and a company that has invested so much that rewriting looks riskier than carrying on. To an outsider, as long as the results still come in and salaries still get paid, "it works." Nothing has blown up yet, and that gets mistaken for being right.

Seniority has the same problem. Twenty years can mean real experience, or it can mean only the memory of "where not to touch." Real experience makes a system easier and easier to understand and hand over; the other kind of seniority gains bargaining power as the system becomes harder to understand. Both people have twenty years in, and seniority by itself does not correct the way a person first understood the system.

So a proposition that ought to be tested by technical analysis is quietly turned into a proposition about personal ability: "Is it that you can't do it?" That substitution is much easier for the listener, because he does not need to understand the system. But for the person speaking, the real question has vanished.

## 3. The Monster Writes the Exam

Much of this does not need to be so complicated. The reference designs that chip makers offer today are quite mature and widely accepted by the market. A system so complex that nobody understands it, if it is not tied to real requirements and verifiable benefits, is just complexity, and complexity is cost.

The Samsung Note7 fires of ten years ago are often cited to show the risks of battery management. But the investigation Samsung published in early 2017 traced the root cause to separate design and manufacturing defects in two batches of batteries, not to the management software.¹ Battery management technology is quite mature today; where things actually go wrong is usually production and quality control. Piling ever more software on top does not buy safety.

Yet when a reference design tries to replace the old system, it runs into a trap with almost no way out: write the legacy system's timing and architecture into the requirements, and the reference design is guaranteed to fail immediately, one hundred percent. That failure is then used to "prove" the reference design is flawed.

This is circular reasoning. A failed test does not show the reference design is defective; it only shows the exam was tailored to the old system. A five-second workaround, once written into the requirements, is laundered into a specification. More importantly, the people writing the requirements are often the very people whose value depends on the legacy system. The examiner, the candidate and the grader are the same people.

To be fair, legacy systems sometimes stay for real reasons. For example, functional-safety certification has already been done, and switching means recertifying at high cost. But that is certification lock-in, not evidence that the old architecture is technically better. The two must be discussed separately, or the first will be used to cover for the second.

The evidence on each side is not equal either. The reference design is backed by field data from many customers and large shipment volumes; the legacy system has only "nothing has happened at our company yet." The first is external validation; the second is survivorship bias.

Even so, it is very hard to prove who is right. The next section explains why.

## 4. Evidence Has to Be Bought With Time

Many battery management problems cannot be found in a lab. State-of-charge estimates only start to drift after hundreds of charge cycles; once cells age, balancing behaviour changes; combinations like low temperature, heavy load and half charge take a long time to hit. Users use devices differently, so problems appear at different times and in different forms. Pre-launch testing can only show "no problems in the short term," which is why most tests cannot really compare anything.

That makes the situation clearer: if the real evidence takes years to emerge, then at the moment of decision there is no evidence at all. What decides the outcome is where the burden of proof is placed.

Organizations usually require the new option to prove it will not fail, while the old system never has to prove it has no problems. So the legacy system does not win the comparison; it never has to enter it, and wins by default.

This is also why the reference design's market data matters more than any test: the market is itself a long-running field test across many kinds of use, just conducted at other customers. It is not perfect, and other people's usage cycles may differ from yours, but at least it was accumulated in real time. The legacy system's "years without incident" is much murkier: people have been patching it all along, so you cannot tell whether the architecture is sound or whether it has been held together by people cleaning up after it.

The harder part is the other side. Some of those five-second waits and millisecond delays may really be scars from long-term use, experience paid for with real failures. The problem is that nobody ever recorded which delay was added for which incident. Experience and junk are mixed together, and even the people maintaining it cannot separate them. It is not that nobody wants to clean up; it is that the precondition for cleaning up, knowing why a thing is there, no longer exists.

## 5. The Documents Don't Match Reality

The most startling, most unbelievable problem in all of this is that the documents and data do not match the reality of what is actually running.

This is the bottom layer. If the map itself is wrong, everything above was built on a wrong map: comparing legacy with the reference design, designing tests, citing market data, all of it compares documents, while what is actually running is a third thing that nobody has described.

The most absurd part is that requirement, "must match legacy behaviour." Match which legacy? The one in the documents, or the one actually running? If the two differ, nobody can answer that requirement, yet it can still be used to sentence the reference design to death. You cannot even say clearly what the old system is, yet you demand the new one reproduce it one hundred percent.

Documents and reality usually part ways for more than one reason:

- Parameters were changed and patches applied in the field, and nobody wrote them back into the documents.
- Different batches and different customers run different versions, and the records describe only one.
- The documents were written for certification and audits, to get through them, not to describe the system. After passing, nobody has any incentive to keep them in sync.
- Calibration values are tuned by hand batch by batch; the real numbers exist only on the machines and in a few people's heads.

The third point connects directly to financialization: documents become proof of delivery rather than engineering knowledge. When the truth exists only in running machines and a few heads, those few people's bargaining power comes from exactly that. The less consistent the system, the more irreplaceable they are.

This also explains why such problems always seem to erupt "suddenly." People make decisions from the documents and everything is fine, until some failure is opened up and it turns out the system everyone has understood for years is not the system that actually exists. What collapses at that moment is not one feature but the basis of everyone's past judgment.

## 6. Evidence Requires Power

There is one more layer: inside a company, without C-level backing, it is simply impossible to look for proof.

Finding evidence takes not only technical skill but access: pulling field data, returns and failure records, checking which firmware version each batch actually runs, borrowing test resources, getting other departments to cooperate, and having someone approve your time. Without senior backing, every one of these means asking someone. And the moment you ask, "looking for evidence" itself becomes a political act: in others' eyes, you are not investigating the system, you are investigating them.

And the C-level usually has reasons not to back you:

- **The timelines don't match.** Evidence takes years of long-term use to emerge, while executives' tenures and reviews run by quarters and a few years. Funding an investigation that takes a long time and will most likely produce bad news does them no good.
- **Knowing means being responsible.** If it turns out the documents do not match what is actually running, that is an admission that past reports, certifications and even shipments rested on wrong data, which can mean recalls and legal liability. "Not knowing" is a form of protection.

The result: evidence can only be found with power, and the power is held by the people who least want the evidence to appear. It is not that nobody sees the problem; it is that the structure of the organization prevents "seeing" from becoming "proving."

Someone without authorization has only one route left: go outside the company for corroboration. I tried this myself. When I was sent to oversee regions, the numbers looked wrong to me but I had no authority to dig in, so I could only research online and ask customers directly to check the figures. The problem is that outside corroboration is exactly the kind of evidence an organization can most easily dismiss with "you don't understand the internal situation."

In a structure like this, the only evidence nobody can stop from appearing is the incident itself. It needs no one's authorization, but it always arrives at the worst possible time.

## 7. Bad Money Drives Out Good Only Under Certain Conditions

At this point it is natural to ask: is this just how the world works? There are so many companies like this, and so many people manage to work in them. If bad money driving out good is still society's survival rule, should we simply accept it as rational?

Common is not the same as justified. Being able to explain why something happens and conceding that it is right are two different things.

Gresham's law originally held because the law forced two kinds of money to circulate at the same face value: when the market is not allowed to distinguish quality, people hoard the good money and spend the bad. Without that compulsion, people can price freely by quality, and the result reverses: good money drives out bad, which economists call Thiers' law.³

Inside a company it is the same. For the bad to beat the good, the organization must be unable to tell them apart: evidence cannot be found, documents do not match reality, acceptance criteria are written by those with a stake, and nobody is authorized to check. The previous sections describe exactly how this "ban on telling apart" is built, step by step. So it is not a universal law of society, but a local rule within a certain kind of structure.

One misunderstanding needs care here: intense competition does not mean the ability to tell apart. Competition in the laptop market is fierce, but it is over a shrinking pie. When the pie shrinks, selling a few more machines is no longer enough, so competition shifts from "is the product good to use" to "how is the label defined."

The AI PC is the classic example. Many people hear "AI PC" and think of a computer that can run, or even train, large language models locally. In 2024, Microsoft led in defining it as the Copilot+ PC: the threshold was an NPU of at least 40 TOPS, the first machines all used ARM-based Snapdragon X chips, and qualifying chips from the x86 camp came later.² An NPU at that level mainly runs small-model inference and features like Copilot; running large models locally still depends on the GPU and video memory, to say nothing of training. The platform holds the power of definition, manufacturers fight inside that definition, and users pay a premium for a label whose value they cannot verify, at a high price.

The label works like the legal face value in Gresham's law: however much the machine actually helps you, with the label it sells at the same premium. The fiercer the competition, the more everyone competes on labels and spec sheets rather than on the difference you feel in real use.

So the condition for the bad beating the good should be stated as: competition happens along dimensions the user cannot verify. It is the same structure as the battery firmware, moved into the consumer market. The spec sheet and certification are the "documents"; what the user experiences every day is the "running reality"; and the gap between the two is the source of the premium.

## 8. Whether People Fight Depends on Room

I spent most of my career in companies that were expanding, yet blatant infighting was concentrated in just one of them. That does not mean that company was uniquely bad. Whether people fight depends on whether there is room not to.

In an expansion phase, the pie is growing, and there are always new markets, new product lines and new positions. Someone who wants to move up can open new territory of their own without grabbing what is in someone else's hands. External pressure also means everyone has to fight outward together to eat, so infighting costs too much. People do not refrain from fighting because they are especially good; they refrain because not fighting is a real option.

Of course, expansion only provides the conditions for not fighting; it does not guarantee there will be no infighting. I once saw a mainland supplier deliberately set up internal rivals even while it was expanding, believing that "competition breeds progress." The conditions may exist, but it still depends on how people use them.

When the pie shrinks, that option disappears. There are no new positions; for you to go up, someone has to come down, and everyone is pushed into a zero-sum game. At that point, fighting is no longer a matter of personality but the only way to stay.

This is also when legacy changes meaning. In a shrinking organization, controlling a system nobody understands is the same as occupying a position nobody can take from you. The monster itself has become a seat.

The same logic holds at the industry level: the laptop pie is shrinking, so manufacturers no longer compete to grow the market but to fit labels the platform defines, just as people inside companies compete for positions. The same group of people can cooperate in an expansion phase and tear each other down in a contraction. When people see infighting, they usually blame human nature or a particular bad actor, but what really decides the outcome is room.

## 9. It Can Be Cut; the Question Is When

But "nobody can take it from you" is only temporary. The seat is not safe; it is only deferred. Legacy can in fact be cut. The only questions are when a company is willing to cut it, and whether it avoids cutting for the sake of cutting.

Many companies drag it out until they have no choice, then force it, and the result is a mess. Every year of delay raises the cost: the people who understood why those delays exist leave one by one, the gap between documents and running reality widens, new features keep getting stacked on, and the dependencies tangle tighter. When it finally must be cut, perhaps after an incident, a new boss, or a financial crunch, nobody knows what they are cutting anymore. One cut, and every connected dependency snaps.

The other mistake is cutting for the sake of cutting: starting from cost, deciding what to cut from the financial statements, and ignoring the dependencies inside.

Both mistakes lack the same thing: in both, the cut is made without understanding what is being cut. One is too late, the other too crude.

The most ironic part is the timing. The best time to cut legacy is when people still understand the system and there are still resources to migrate slowly, which is to say, during expansion. But during expansion everyone is busy adding things; adding has KPIs, cleaning up has no reward, and nobody wants to cut. In contraction it must be cut, but by then there is no room, no knowledge, and nobody willing to approve the time to do it carefully.

When the conditions for cutting are best, nobody wants to cut; when it truly must be cut, the conditions are gone. Many companies do know they need to clean up; it is just that the window for cleaning up closed long ago, when they felt it least necessary.

## Coda: Home for Pork Jerky

Looking back at the dream, many of its images fall into place.

The station called "Hong Kong Station" but originally named "Sister Station" has a single name, yet inside it is two stations joined, with two lines running in parallel, like the old and new layers of an architecture bolted together. The thing that changed from an old woman into a blonde is the same old thing in a new skin, coming back again, just like the new features stacked on every year under the banner of "innovation," with the same five-second synchronization underneath. And that line in the dream, "that is not human," is the judgment of someone who has seen through the skin.

As for whether staying counts as winning, I want to look at three kinds of winning and losing separately:

- **Winning inside the organization:** Did you keep your position, pay, power and resources?
- **Winning professionally:** Did you make the system more correct, more reliable, easier to maintain?
- **Winning personally:** Were the time you gave and the risks you took matched by what you got back?

These three can come out completely opposite. A person can keep their position while the system keeps deteriorating; can be professionally right and still leave because they could not persuade the organization; or can choose to leave, keeping their own time while paying the price in income, career and others' opinions.

Many people who stay inside do not agree with it. There is a mortgage to pay and children to raise, and the job market outside is just as cut-throat, so staying can be a rational choice. Understanding why they stay and defending the structure are two different things. A person can keep working inside it without handing over their own standards of judgment, and without treating the structure as their own defect. The real danger is that after enough years you lose even the sense that "this place is not normal," and mistake a way of surviving for the truth.

At the end of the dream I did not linger over that bed. I went home, opened the fridge, ate the last few slices of pork jerky and drank a carton of boxed tea. It was no feast; there was not much of it and it tasted plain. But it was real, and it was mine.

However huge the monster outside, however secure that seat, neither is mine. Those few slices of pork jerky in the fridge are.

The next article is about the people who guard that seat: where they come from, and why the worse the problem gets, the higher they rise.

Next: "[Each Time the Problem Gets Worse, Someone Gets Promoted](./03-problem-worse-person-promoted.md)."

## Notes

1. ["Samsung Galaxy Note 7 investigation results are now public," Notebookcheck](https://www.notebookcheck.net/Samsung-Galaxy-Note-7-investigation-results-are-now-public.193102.0.html), 23 January 2017. Samsung and three independent organizations examined the hardware, software and related processes and concluded that batteries from two suppliers each had defects: one batch was a new design mass-produced without adequate testing, the other was rushed and missing insulation tape. Both led to short circuits between the electrodes.
2. ["Copilot+ PCs: All we know," Tom's Hardware](https://www.tomshardware.com/software/windows/microsoft-copilot-pcs-all-we-know), May 2024. The requirements were an NPU of at least 40 TOPS, 16GB of memory and 256GB of storage; the first machines all used Snapdragon X Elite / X Plus, and AMD and Intel chips at the time fell short.
3. On Gresham's law depending on a legally fixed ratio, see ["When good drives out bad," Moneyness](https://moneyness.ca/2014/06/when-good-drives-out-bad.html); Thiers' law was named by Peter Bernholz, see Peter Bernholz, *Monetary Regimes and Inflation*, Edward Elgar, 2003.
