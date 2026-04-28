# Final Chapter: Games Are the Future (v5b)

Two in the morning.

The same moment that opened the prologue. The Steam Deck beside me is running a Windows game — Proton's translation layer on Linux, converting every DirectX call into Vulkan. Chapter Six's story. The iPhone notification flashes and fades — its chip from TSMC's 3nm line. Chapter Eight's story. Somewhere beyond the window, in a data center, thousands of NVIDIA H100 cards are computing the next set of weights for a large language model — every CUDA core inside those cards was funded by eighteen years of R&D tax paid by gamers. Chapter Seven's story.

But this time, there's something new.

Under the TV stand sits a Nintendo Switch 2. $450. NVIDIA Ampere architecture. Tensor cores. DLSS. The AI upscaling algorithm running inside this console and the Tensor cores inside the H100 share the same design lineage.

Everything in this room has a causal chain leading back to a chapter in this book. And every causal chain ultimately converges on the same starting point.

Someone wanted to play a better game.

---

## I. Convergence

Looking back from 2026, the last forty years of technology history reveal an awe-inspiring convergence.

In 1993, a young man decided in a Denny's restaurant to build a graphics card that would make PC games look better. In 2026, his company is worth over $5 trillion, and every company in the world that wants to do AI is lining up to buy his chips.

In 1995, a Microsoft engineer was dispatched to convince John Carmack to accept Windows. Thirty years later, Microsoft spends over $100 billion a year building AI data centers — and the operating system running in those data centers is Linux, the system Carmack trusted most.

In 1996, a Japanese executive handed $5 million to a young man who had made a fatal mistake. In 2026, that $5 million has grown into the deepest technology monopoly in human history.

In 1998, TSMC signed its first strategic partnership agreement with NVIDIA. In 2026, every one of the world's most advanced AI chips — H100, B200 — comes off TSMC's production lines in Hsinchu. The yield rates on those lines were forged by large-die orders for gaming GPUs.

In 2006, Jensen Huang quietly embedded general-purpose compute cores inside every GeForce 8800 GTX. In 2012, a Ukrainian-born doctoral student used two gaming graphics cards in his parents' bedroom to ignite the deep learning revolution. In 2022, ChatGPT launched. At every node of this causal chain stands a gamer's dollar bill.

Software, compute, silicon. DirectX, CUDA, TSMC. Three seemingly parallel technology trees, all merging at the summit of the AI era.

But the cost of that merger has been surfacing, link by link, across the final three chapters of this book.

---

## II. Three Interrogations

**First question: Why does every turning point in tech hegemony begin with games?**

This book spent eleven chapters answering that question, but it can be compressed into a single sentence: **Because gamers are the only consumer group in human history willing to spend thousands of dollars every two years just to make the reflections on a virtual water surface look slightly more realistic.**

No other industry has consumers like this. Enterprise users buy servers to save money — they calculate every cent. Research institutions buy supercomputers with government grants — long cycles, fixed budgets. Only gamers pay out of their own pockets, willingly, and with appetites that never plateau.

These people constitute a perfect pressure-testing ground plus R&D funding pool. Their money fed NVIDIA's CUDA for a decade (Chapter Seven). Their GPU orders forced TSMC to push large-die yields to the limit (Chapter Eight). Their obsession with visual fidelity compelled each generation of GPU to breach the silicon limits of the previous one — and those breached limits happened to be precisely the limits that AI computation needed.

**Games are not a byproduct of technological revolution. Games are the pressure-testing ground and the cash register of technological revolution.**

**Second question: In this forty-year fight, why did some companies survive while others fell?**

The answer is not a matter of genius. Every protagonist in this book — Jensen Huang, Bill Gates, Lisa Su, Pat Gelsinger, Gabe Newell, Morris Chang — is among the most brilliant minds in their respective fields. Genius was not in short supply.

The difference is institutional structure.

Chapter Nine's conclusion: Intel's MDF and its vertically integrated service apparatus produced an empire that couldn't move. Gelsinger saw all the problems, but the entrenched interest structures were too deep, and Wall Street wouldn't give him time. Lisa Su won — not because she was smarter, but because AMD had been beaten to the bottom. The bottom meant freedom. Freedom meant being able to place all resources on a single bet.

Chapter Ten's conclusion: Nadella has real authority, and his direction may be correct — but the thing he's dismantling (gaming's function as a pressure-testing ground) won't send its bill for another decade. Ryan had real authority, and his direction has already been proven wrong — the corpses of live-service games are piling up.

**The succession of tech hegemony is not an intelligence contest between geniuses. It is Darwinian evolution among organizational structures, entangled interests, and time horizons.**

**Third question: When giants dismantle their own pressure-testing grounds with their own hands, is this transformation or suicide?**

This is the book's final question, and the only one that still has no answer.

Microsoft's AI capital expenditure in 2026 exceeds $100 billion. It shut down Tango Gameworks, Arkane Austin, The Initiative. It let Turn 10 — the team behind the ForzaTech engine — lay off nearly half its staff. It used the savings to buy NVIDIA GPUs for AI data centers.

Sony spent $200 million making a game that lasted fourteen days. Shut down Japan Studio. Shut down Bluepoint. Shut down Firewalk. Jim Ryan retired with enough wealth for several lifetimes.

Two companies, two different methods, the same action: **treating games as means rather than ends, treating players as chips rather than customers.**

Chapter Three wrote that sentence. Back then it was a forecast. Chapter Ten turned it into a settlement.

But on that settlement's bill, there is one line no one has been able to calculate yet: **When the world's two largest gaming platform holders simultaneously decide that "games are not a core business," the pressure-testing grounds, R&D funding pools, and long-term chip orders they simultaneously tear down — how large a gap will these leave in the semiconductor supply chain over the next decade?**

No CEO asks this question. Because the causal chain is too long — too many layers between Xbox layoffs and TSMC capacity planning. And Wall Street only looks at the next quarter.

---

## III. The Death of Systems Thinking

This book's preface told a personal story. A teenager growing up in Mong Kok's Sino Centre in 1990s Hong Kong, who learned the entire architecture of a CPU by accident — through editing `config.sys`, memorizing IRQ interrupt numbers, pressing 255 into `FF` on a Casio calculator.

That learning path — starting from games, penetrating the operating system, reaching all the way to bare hardware — has almost completely disappeared today.

A young engineer in 2026 doesn't need to know what an IRQ is. Doesn't need to know how to configure VGA registers. Doesn't need to know how memory pages are partitioned. They open PyTorch, call `model.train()`, and everything underneath — cuDNN, cuBLAS, PTX, SASS, every transistor switch on the GPU — is encapsulated as a black box.

This isn't a bad thing. Abstraction layers are the only way to manage complexity. The preface already said it: the problem isn't abstraction layers themselves — the problem is when abstraction layers become black boxes.

Black boxes mean: you can use it, but you can't open it. You can optimize on its surface, but you can't penetrate it to redesign the foundation.

John Carmack is Carmack because he grew up in an era when hardware was naked. He had to write directly to VGA memory, had to understand how every CPU clock cycle was spent. Jensen Huang could see the seam inside the GPU — from graphics rendering to general-purpose compute — because he straddled hardware design and business strategy, seeing through the entire stack. Lisa Su could rescue AMD from rock bottom because her technical foundation ran from semiconductor physics to system architecture, touching every layer.

**These people share one trait: they could see through the entire system — from transistor to API to application layer.** The preface called this ability "systems thinking."

But in the fast-food AI era of 2026, the brightest minds are all learning how to call pre-built tools — how to chain LangChain, how to fine-tune LoRA, how to use Agents for workflow automation. These skills have value. But they all stand on the surface of the black box.

And what's more unsettling is that this problem isn't just about students — it's embedded in the very structure of education.

The way industry demands engineers has changed fundamentally. The proliferation of AI-assisted development tools is compressing software teams to single-digit headcounts. Hiring standards no longer allow "bring them in and train them slowly" — companies want engineers who are battle-ready from day one. But the curriculum still teaches routes from five years ago. The students aren't lacking in intelligence. No one has told them the road has changed.

Here lies an irony.

The things that schools don't teach — game engine internals, real-time rendering pipeline design, how to schedule parallel computation on a GPU — happen to be precisely the bridge to the most advanced frontiers of the AI era. NVIDIA's Isaac Sim — the core simulation platform for physical AI — is built on Omniverse and the PhysX physics engine. PhysX is also the default physics engine in Unreal Engine; Omniverse's scene description format, OpenUSD, is also the data interchange standard for Houdini and Hollywood's visual effects industry. These systems differ in architecture and purpose — game engines pursue real-time interactive performance, Houdini pursues procedural content generation, Isaac Sim pursues high-fidelity robotic training simulation — but the core skills they require overlap heavily: understanding how GPUs schedule parallel computation, understanding how scene graphs organize 3D data, understanding how physics engines solve collisions and mechanics in every frame. An engineer who has ground through the internals of a game engine faces a far lower barrier to pivoting toward physical AI than someone who can only call APIs.

**But no one tells them this. Because the curriculum has no path for it. Students walk the same old road their predecessors walked. At the end of that old road sits a position that AI is already downsizing away. And beside it, the trail that leads to the new world — the trail from game-engine internals through to AI infrastructure — is overgrown with weeds, because no curriculum guides them through it.**

The soil for cultivating engineers with systems thinking is collapsing from both ends simultaneously. One end is industry — pressure-testing grounds being dismantled, studios being shut, games being treated as numbers on a spreadsheet. The other end is education — curricula that can't keep up, students who don't know the road has changed, the most valuable cross-layer learning paths left untaught.

If we stop cultivating the kind of engineer who is willing to dive deep into the machine — the kind who asks "what's underneath this API," "why was this chip designed this way," "what cost is hidden behind this abstraction layer" —

Then, when the next great wave of technological revolution arrives, who will write the first line of code that breaks through?

---

## IV. The Final Arithmetic

This book has recorded eight variations of the pattern.

Chapter Two: DirectX locks in PC game developers. Chapter Three: Xbox uses losses to block Sony. Chapter Four: Sega's act of grace accidentally births NVIDIA. Chapters Five and Six: Linux's counterattack and Steam's new lock-in. Chapter Seven: CUDA's four-layer prison. Chapter Eight: TSMC's trust monopoly. Chapter Nine: Intel's MDF locks in itself. Chapter Ten: Microsoft and Sony dismantle their own pressure-testing grounds.

Eight variations. The locks take different forms, but they share one trait: **every lock spread outward.** DirectX spread from PC gaming to the entire Windows development ecosystem. CUDA spread from gaming GPUs to global AI infrastructure. TSMC's trust monopoly spread from gaming chip fabrication to all fabless clients. These locks penetrated platform boundaries, penetrated generational transitions, penetrated industry walls. Their costs are still being divided today.

In Chapter Eleven, the pattern inverted.

Nintendo is not a company that "didn't build platform lock-in." Quite the opposite — in 1985, it embedded the 10NES lock chip in NES cartridges, establishing the first hardware-level gatekeeping mechanism in the history of the gaming industry. A decade before DirectX. Two decades before CUDA. Its licensing regime — annual quotas, exclusivity periods, exclusive cartridge manufacturing — was unmatched in its era.

But Nintendo's lock has one characteristic that sets it apart from every lock described in the preceding ten chapters: **It never spread outward.**

The NES's 10NES didn't affect PCs. Didn't affect the Mega Drive. Didn't affect PlayStation. Nintendo never attempted to make its own technology an industry standard, never entered the DirectX vs. Vulkan standards wars, never tried to use its lock to grip the world beyond its platform. Its stance has never wavered: enter my garden, play by my rules. Don't want to come in? I don't care.

Sega went to the other extreme. It didn't even build a basic wall. Dreamcast's anti-piracy measures were virtually nonexistent, development barriers were deliberately lowered, the gate stood wide open. Result: when PS2 arrived, Sega died.

**Three types of lock. Three outcomes.**

Expansive lock-in — Microsoft, NVIDIA, TSMC, Valve — became the infrastructure of tech hegemony. Costs borne downstream. Deferred bills arriving two or three decades later.

Walled-garden lock-in — Nintendo — survived for forty years, but remained irrelevant to the mainline of tech hegemony. A garden, not a supply chain. The NVIDIA Ampere chip inside the Switch shares the same design lineage as the H100. But Nintendo has never cared about AI. It only cares whether a game is fun.

No lock — Sega — death. Shoichiro Irimajiri's $5 million act of grace is Sega's last fingerprint on the history of technology.

Eight expansions. One walled garden. One without walls. Eleven chapters of causal chains, all converging on the same starting point: someone wanted to play a better game.

This is the book's final arithmetic.

Games are not an industry. Games are a pressure-testing ground — the most grueling pressure-testing ground on earth. They force GPUs to their limits, force fabrication processes to their limits, force operating systems to their limits, force human engineers to their limits. And in the process of being pushed to those limits, they inadvertently laid the foundational tracks for the AI revolution, smartphones, and the global semiconductor landscape.

Games are also a mirror. They reflect the true face of every tech giant — who treats users as ends, who treats them as means. Microsoft used games to plug a wall, then tore it down when done. Sony used games for the balance sheet, then swapped them out when the format didn't fit. NVIDIA used games to feed CUDA, then pivoted to AI once it was fed. Nintendo built the strictest walls of all, but inside those walls, it treated games as games from beginning to end. Sega didn't build walls at all — it handed its goodwill to a stranger, and then it died.

The preface asked a question: **In the AI era, can we still cultivate the next generation of Carmacks, Lisa Sus, Morris Changs?**

The answer depends on two things.

First: whether anyone is still making the kind of product that forces young people to penetrate the black box — the kind of thing that keeps you up all night trying to fix a bug or squeeze out ten more frames per second.

Second: whether anyone is still protecting that pressure-testing ground — keeping it from being torn down to build AI data centers, keeping it from being converted into a microtransaction harvesting machine, keeping it from being swallowed by Wall Street's recurring-revenue fixation.

If these two things are still happening, the next generation of systems-thinking engineers will have soil. If they vanish — if the last pressure-testing ground is dismantled, if the last company willing to ship a complete game surrenders to Wall Street —

Then this book is an obituary.

If they are still happening —

Then this book is a user's manual. For the next person who, at two in the morning, for the sake of getting a game to run, is willing to open the case and look the silicon in the eye.

(End)

![](ch12_zh%201.png)