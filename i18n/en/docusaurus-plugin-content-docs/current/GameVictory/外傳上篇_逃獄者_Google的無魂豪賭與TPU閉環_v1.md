# Side Story (Upper): The Prison Breaker — Google's Soulless Gamble and the TPU Closed Loop

On September 29, 2022, Google Vice President Phil Harrison announced in an official blog post: Stadia would permanently shut down on January 18, 2023.

This was a strange way to die.

Stadia possessed the infrastructure that any gaming company in the world would dream of: data centers spread across the globe, proprietary undersea fiber optic cables, the billion-user gateway of YouTube, and the massive distributed systems experience accumulated by Google's engineering team over decades. In terms of technical foundation, no other company on Earth was better suited to build cloud gaming than Google.

Yet Stadia's monthly active users never exceeded 750,000. During the same period, Xbox Live and PlayStation Network each surpassed 100 million monthly active users.

The reason Harrison stated in his post was mild: "It hasn't gained the traction with users that we expected." What he didn't say was this: at the exact second he hit publish, the Google Play Store was sitting on two billion Android phones worldwide, automatically extracting a commission of up to 30% on every transaction, taking money straight from the pockets of game developers.

In 2024, total consumer spending on Google Play exceeded $46.7 billion. Gaming accounted for roughly 40% of that—nearly twenty billion dollars. The commission Google skimmed from that far exceeded Stadia's entire revenue over its three years of operation.

On one side: a cloud gaming platform that cost hundreds of millions to build, struggled for three years, and couldn't break a million monthly active users. On the other side: a platform tax with zero game R&D, zero hardware costs, pulling in money every single second automatically.

When Harrison signed the document to shut down Stadia, he probably didn't even hesitate.

---

## I. Dimensional Strike: Why Not Fight in the Mud?

Chapter 6 of the main text explained how Valve used Proton to pry open Microsoft's DirectX lock. Chapter 7 explained how NVIDIA used CUDA to build a software prison four layers deep. Both wars shared one thing in common: the battlefield was on PC and console—you had to build hardware, write drivers, cultivate ecosystems, and fight for developers. Every step was hand-to-hand combat in the mud.

Google never stepped into this mud from start to finish.

What it did was simpler and far crueler: **It bypassed the entire mid-to-lower stream of the gaming value chain and stood directly at the very top to collect rent.**

In 2008, the Android Market (the predecessor to Google Play) went live. Google didn't develop a single game itself. It only did one thing: provided a pre-installed storefront on every Android phone, and then extracted a 30% commission on every digital content transaction. (Later reduced to 15% for the first million dollars in revenue annually, with anything above that remaining at 30%.)

The essence of this model is exactly the same as Steam's 30% platform tax discussed in Chapter 6. But Google's version is more extreme.

Valve is at least doing two things: First, it develops its own games (*Half-Life*, *Portal*, *Dota 2*), understanding what gaming actually is. Second, it built Proton, DXVK, and the Steam Deck—spending real money to solve the technical problem of "getting more games to run." The 30% Valve collects is, at least in part, used to feed engineers, write translation layers, and push the Linux ecosystem.

Not a single cent of the 30% Google collects goes back into gaming itself.

It does not design game engines. It does not invest in studios. It does not push graphics API standards. It does not collaborate with GPU vendors to optimize drivers. It doesn't even do quality control for games—Google Play is flooded with asset flips and ad-farming games. Google's entire attitude toward gaming can be condensed into a single word: **Spreadsheet.**

In Google's eyes, every game is a row of numbers on a spreadsheet. Downloads, DAU (Daily Active Users), paid conversion rates, ARPU (Average Revenue Per User)—these metrics determine its ranking in the store. Is the game fun? That's the developer's problem. Google is only responsible for collecting rent.

This is an extreme variant of the pattern proposed in Chapter 6: **Convenience attracts developers (the world's largest mobile install base) → Lock-in effect binds the developers (your users are on Android, your revenue is settled through Google Play, you cannot leave) → In turn, extract a monopoly premium from developers (30% commission, no room for negotiation).**

And the cost?

The cost is that Google has absolutely no understanding of what gaming fundamentally is. This cost cashed out with Stadia.

---

## II. The Death of Stadia: Having Everything, Yet Missing One Thing

In March 2019, Google announced Stadia at GDC (Game Developers Conference) in San Francisco. The specs of the announcement were suffocating: 4K resolution, HDR color, 5.1 surround sound, and latency under 30 milliseconds. Behind it were Google's edge computing nodes spread across the globe. Phil Harrison stood on stage and summarized Google's ambition in one sentence: "The most powerful game platform of the future requires no hardware."

Technically, he was correct.

But he miscalculated one thing: Technology is never the deciding factor in a game platform's success or failure.

Chapter 3 stated that the original Xbox's hardware specs far exceeded the PS2's. Yet the PS2, relying on a massive game library and first-mover advantage, sold over 150 million units that generation. Chapter 4 stated that Sega's Dreamcast was the most technologically advanced console of its time—and it died. Hardware and technology solve the "can we do it" problem. But the victory or defeat of a gaming platform hinges on another question: **Are developers willing to make games for you?**

Whether developers are willing depends on trust.

Nintendo's developers trust that Nintendo will treat games as games. Sony's first-party studios—at least before Jim Ryan tore down the walls—trusted that PlayStation would give them the time to make a great piece of work. Even Valve's developers know that Gabe Newell himself is a gamer, and he understands that the value of a game is more than just the numbers on a spreadsheet.

What signal did Google send to developers?

In February 2021, less than two years after Stadia launched, Google shut down its own first-party game studio, Stadia Games and Entertainment. A studio that hadn't even had time to release a single game was simply axed.

To game developers worldwide, this action sent only one signal: **Google will walk away at any time.**

And Google did walk away. Because Google builds every product the same way: set a user target, give it a runway of two to three years; if it hits the target, double down; if it doesn't, kill it. This process works for search engines, for advertising platforms, for cloud services. It does not work for gaming.

Because building a gaming ecosystem takes a decade.

From the launch of the first Xbox in 2001, it wasn't until the Xbox One in 2013 that Microsoft truly found its footing with a subscription model—twelve years. From the PS1 in 1994, it took until the PS5 in 2020 for PlayStation's ecosystem to fully mature—twenty-six years. From Steam going live in 2003, it took until the Steam Deck in 2022 to prove that PC gaming didn't need Windows—nineteen years.

Not a single successful gaming platform was built in three years.

It's not that Google lacks resources. It is one of the richest companies in the world. But its system—quarterly reviews, OKR-driven goals, projects that can be killed at any moment—is structurally incompatible with the long-term commitment required for a gaming ecosystem.

In the main text, we gave this trait a name: **Spreadsheet Soul.** Google has the most precise spreadsheets in the world. But spreadsheets cannot see the value of "a developer spending three years making a game nobody bought but that redefined a genre." Spreadsheets only see download volumes and revenue curves.

Stadia's cause of death wasn't technology. It was its soul.

Google had the world's best infrastructure, the fastest network, and the strongest engineering team—but it had no Game Soul. What it had was a Spreadsheet Soul. And a Spreadsheet Soul allows you to automatically collect rent every second on Google Play, but it cannot convince a single developer: "Put your life's work exclusively on my platform."

---

## III. TPU: The Only Successful Prison Breaker

But in another war, Google did something no other company has managed to do.

**It escaped CUDA's prison.**

Chapter 7 spent considerable length explaining NVIDIA's four-layer lock: hardware instruction sets, compute libraries, AI frameworks, and knowledge systems. AI researchers worldwide—from PhD students to massive labs—are all locked within these four layers. AMD has spent ten years chasing with ROCm, and hasn't caught up. Every AI startup, on its first day of existence, is already an NVIDIA captive.

Google is not.

The reason is simple, and cruel: **Google rebuilt all four layers itself.**

In 2013, Google internally began designing a chip specifically optimized for machine learning. In 2015, the first generation TPU went into operation in Google's data centers—at a time when the outside world didn't even know it existed. It wasn't until May 2016 that Google officially announced the existence of the TPU in a paper.

By 2026, the TPU had evolved to its seventh generation (codenamed Ironwood). Gemini 2.0—Google's most powerful AI model—was trained using the sixth generation TPU (Trillium).

Look at what Google did through the framework of Chapter 7:

**Layer One — Hardware Instruction Set:** NVIDIA GPUs have their native instruction set (PTX/SASS), and the TPU has its own. But the TPU's instruction set was designed from the ground up for matrix multiplication—it doesn't need to balance gaming graphics, nor does it carry the historical baggage of CUDA's backward compatibility. Every single transistor is spent exactly where AI needs it.

**Layer Two — Compute Libraries:** NVIDIA has cuDNN, cuBLAS, NCCL. Google has the XLA (Accelerated Linear Algebra) compiler—a system that automatically compiles high-level operations into native TPU instructions. XLA isn't just a library; it's a compiler. This means Google's engineers don't have to manually write optimized versions for every operation—the compiler does it for them.

**Layer Third — AI Frameworks:** NVIDIA locks in developers at this layer relying on PyTorch and TensorFlow. But who wrote TensorFlow? Google. Who wrote JAX? Google. Google wasn't locked in by someone else's framework—**it is the author of the framework itself.** It can modify the bottom layer of the framework at any time to make the TPU the optimal runtime target.

**Layer Four — Knowledge Systems:** Google has thousands of internal AI researchers. They don't need to go to Stack Overflow to find CUDA tutorials—they use Google's internal toolchains, internal documentation, and internal infrastructure. Their knowledge system is built around the TPU, not CUDA.

The four-layer lock, entirely bypassed by Google. Not by "translating" (which was Valve's method against DirectX), but by "rebuilding." It built its own hardware, its own compiler, its own frameworks, its own research teams—a citadel completely independent of NVIDIA's ecosystem.

**But this citadel has a key characteristic: It is closed.**

TPUs are not sold to end users. You cannot go to Best Buy and buy a TPU card the way you buy a GeForce. You can only rent TPU compute power through Google Cloud—billed by the hour. In 2025, Google began experimenting with selling TPU hardware directly to enterprises, but the scale is extremely small, and the buyers are essentially institutions with deep collaborative ties to Google.

This means Google's "prison break" is a type of prison break only Google could pull off.

Why? Because Google has one thing no other company in the world has: **An internal demand massive enough to support an entire self-built chip supply chain.**

YouTube's recommendation system. Google Search's ranking algorithms. Gmail's spam filtering. Google Photos' image recognition. Google Translate. Google Maps' real-time traffic prediction. Gemini.—Combined, the AI compute volume these services consume every second is larger than the total AI compute power of most nations.

Google doesn't need to convince external developers to use the TPU. It is itself the TPU's biggest customer. It doesn't need to build an "ecosystem"—it is the ecosystem.

**This is the essence of an "internal closed loop."** Google is simultaneously the chip designer, the framework author, the model trainer, and the service operator. It doesn't need to cooperate with anyone, doesn't need to convince anyone to migrate, doesn't need to wait for any third-party library's support. It single-handedly replicated from scratch, within its own walled garden, the ecosystem that NVIDIA spent ten years and tens of millions of global gamers to build.

---

## IV. The Cost of the Prison Break

But what cost did the prison breaker pay?

The first cost: **Google's TPU prison break is meaningless to anyone else.**

A PhD student writing an AI model in PyTorch at a university cannot escape CUDA's prison just because Google has TPUs. His paper must be written in PyTorch, run via CUDA, and trained on NVIDIA GPUs. He can apply to Google's TPU Research Cloud for some free compute, but his code ultimately still has to be runnable on NVIDIA GPUs—because his paper reviewers will use NVIDIA machines to verify his experiments.

Google's prison break is a solitary escape. It is not a jailbreak revolution.

In Chapter 6, Valve's Proton was a true jailbreak—it open-sourced the translation layer, benefiting all Linux users. The door it pried open was a door for the whole world. The door Google's TPU pried open leads only to Google's own backyard.

The second cost: **The death of Stadia proves that a technical closed loop cannot replace an ecosystem.**

Google has the world's best cloud infrastructure, the compute power of the TPU, and the user gateway of YouTube. But adding all these together doesn't create a living game platform. Because the core of a game platform is not technology—it is trust, it is content, it is the commitment of developers willing to spend three or even five years making a good game for you.

This forms a fascinating mirror image with the CUDA story in Chapter 7.

NVIDIA's CUDA ecosystem wasn't built by NVIDIA alone—it grew naturally over a decade through the work of university professors, PhD students, open-source contributors, and AI startups worldwide. NVIDIA provided the soil (free CUDA toolchains, developer documentation, university sponsorship programs), but the plants grew themselves. This is why CUDA's lock is so deep—because you aren't competing with NVIDIA as a single company; you are competing with an entire naturally grown ecosystem.

Google's TPU ecosystem was built entirely by Google. Every line of code, every tool, every piece of documentation was written by Google engineers. This gives Google complete control—but it also means it will never have the explosive power of CUDA's "tens of millions of spontaneous contributors."

**Google proved one thing: CUDA's four-layer lock can be bypassed. But the method of bypassing it—rebuilding all four layers from scratch—requires resources and an internal demand scale that no more than three companies in the world possess.**

Google is one. The other two might be Amazon (with its in-house Trainium chips) and Meta (with its in-house MTIA chips). But even those two are far from reaching Google's level of a closed loop.

For the young engineer at the end of Chapter 7, trying to migrate a GPU cluster from NVIDIA to AMD, Google's TPU has nothing to do with him. He remains trapped in CUDA's prison. The only difference is, he now knows someone escaped—and the one who escaped is a tech giant holding the world's largest advertising revenue, a company that never needs to bow its head to any external developer.

That fact makes the prison walls look higher, not shorter.

---

## V. Settlement: The Victory and Cost of the Spreadsheet Soul

Back to the moment Harrison signed the document shutting down Stadia.

From the perspective of Google's spreadsheet, this was a perfectly rational decision. Stadia's monthly active users were under a million, operating costs were exorbitant, the game library was impoverished, and developer confidence had collapsed. Cut it, and move the engineering resources to AI and YouTube—that's the advice the spreadsheet will give you.

But the spreadsheet won't tell you the other thing.

Google collects nearly twenty billion dollars in commissions from the mobile gaming market every year—money born from the blood and sweat of game developers. But Google has not invested a single fraction of that money back into gaming itself. It hasn't used it to fund engine development, nurture studios, or push graphics technology forward. That money is taken by Google, vanishes into its overall revenue, and turns into AI R&D budgets, cloud infrastructure expansion, and search engine ad optimization.

**Google is the gaming industry's largest parasite.** It extracts profit from gaming, but its contribution to the gaming ecosystem is zero.

The pattern in the main text goes like this: Convenience attracts users → Lock-in bounds developers → Monopoly collects rent. In every variation, the builder of the lock at least did one thing—they pushed some form of technological progress. Microsoft used DirectX to unify PC gaming graphics interfaces. NVIDIA used CUDA to birth AI computing. TSMC used advanced processes to make chips stronger and stronger. Even Valve used Proton to prove that gaming doesn't need Windows.

Google did none of that. It simply stood atop the high ground of the Android platform, reaching its hand down to collect money from game developers.

This is a pathological variant of the pattern: **Lock-in exists, the monopoly premium exists, but it has not driven any technological progress whatsoever.** Pure value extraction.

And Google's success with the TPU reveals a colder truth: **The only way to break a monopoly lock-in is to possess an internal scale massive enough to ignore external ecosystems.** If you are not Google, if you do not have the world's largest internal demand for AI, you cannot escape.

The conclusion of Chapter 7 was: As of today, no one has been able to pry open CUDA's four-layer lock.

The supplement of this side story is: Someone did "escape"—but he didn't pry open the lock; he built his own castle right next to the prison. The lock is still there. Everyone else is still trapped inside.

And the man who built that castle couldn't even make one good game.

**This might be the most ironic law of the tech world: You can use engineering power to bypass any technological lock-in. But you cannot bypass the fact of "having no soul." Google has the world's best infrastructure, the strongest AI, the most money. But it cannot build a platform that makes people want to spend three years creating a game on it. Because a platform is not a technical problem. A platform is a trust problem. And trust is the only number that will never, ever show up on a spreadsheet.**
