# Chapter 1: The DOS Era: A Clash of Gods

In 2025, you buy a game on Steam. You click "Install," the progress bar finishes, and you click "Play." The visuals appear, the audio kicks in, and the controller vibrates. The whole process takes ninety seconds.

You don't know which interrupt line your graphics card is using. You don't know which memory channel the audio goes through. You don't know which cores your CPU allocated to this game, and which ones it left for Discord and Spotify running in the background. You don't need to know. Everything is hidden away—hidden in the drivers, hidden in the operating system's abstraction layers, hidden in the millions of lines of code the game engine manages for you.

You take this for granted.

In 1993, the exact same action—installing a game on a computer and getting it to run—required you to personally answer four questions: What is your sound card? Which IRQ interrupt line does it occupy? What is its DMA channel? What is its I/O address? Answer any of these incorrectly, and the game wouldn't just crash—it simply wouldn't have sound, or the entire computer would freeze, forcing you to hit the power button and start over.

In that era, the very act of "installing a game" was a test. And the existence of that test wasn't an accident; it was a birthmark carried by the entire machine since the day it was born.

**That test was later canceled. The person who canceled it will make his appearance in Chapter 2. But the cost of that cancellation would not manifest until thirty years later.**

In this chapter, we first return to the era when the test was still mandatory.

---

*What supported this test was never a meticulously designed system, but a pile of parts cobbled together over a decade for completely different purposes.*

In August 1981, IBM unveiled the first IBM PC in New York. Rushing to defend the office desktop against the Apple II, IBM unprecedentedly abandoned its traditional vertical integration and used off-the-shelf components—Intel's 8088 chip, an operating system called DOS just delivered by a small company outside Seattle, and various expansion cards that could be plugged into its slots. These parts were never meant to work together; they just happened to be plugged into the same motherboard.

The 20-bit addressing of the 8088 chip meant it could only see 1MB of memory at a time. IBM engineers carved out 384KB of that for the system and display hardware, leaving only 640KB for applications—what became known as "conventional memory." In 1981, this number was a luxury. By 1987, it was no longer enough. By 1993, it had become a stone wall that every serious game had to figure out how to bypass.

The tools to bypass it were called HIMEM.SYS and EMM386.EXE. The former allowed the system to touch RAM beyond 1MB; the latter, operating under the protected mode available from the Intel 386 onwards, disguised high memory into a format DOS could understand, allowing drivers and some game resources to be secretly moved beyond the stone wall. Using these two tools required players to manually edit a plaintext file called CONFIG.SYS—specifying load orders, memory configurations, and device drivers line by line. One wrong line, and the boot failed.

As for the expansion cards, there was no centralized coordination from start to finish. Every sound card, network card, and graphics card was fighting for those 16 IRQ interrupt lines and a few DMA channels. In 1989, the Singaporean company Creative Technology launched the Sound Blaster. It won not on sound quality, but because it was the first to sell the default configuration of IRQ 5 / DMA 1 / I/O 220 to enough users. After that, every new sound card entering the market had to be "Sound Blaster compatible"—silently changing its own defaults to that set, saving players from going crazy.

This kind of "compatibility" based on market convention rather than technical standards trained an entire generation of PC gamers to become half-hardware engineers. Once you internalized those few sets of numbers, installing a game was just "Next, Next, Play." True hell only descended in two scenarios—you were a beginner who had just entered the hobby, or you simultaneously wanted your Chinese system, CD-ROM driver, sound card, and mouse to peacefully coexist within that 640KB. Those nights spent tweaking CONFIG.SYS until 3:00 AM did exist. But they were the exception, not the daily routine.

The daily routine was a five-minute setup, turn off the lights, and start playing.

---

*The other half of the five-minute miracle was shouldered by a group of even more solitary, more paranoid people willing to personally converse with chip registers. The way they shouldered it was counting down to the end of the entire DOS era.*

In 1990, a 19-year-old named John Carmack, who had dropped out of the University of Missouri, joined a small company in Louisiana called Softdisk, writing small games for their monthly disk subscription. Less than a year later, he and a few colleagues quit and founded id Software.

Carmack held a near-theological view of DOS: **DOS is not an operating system; DOS is a bootloader.** Once the program is loaded into memory, DOS should completely get out of the way and hand over the entire machine—every clock cycle, every bit of memory bandwidth, every I/O port—to the game. Anything that tried to stack an additional abstraction layer on top of DOS was, in his eyes, the enemy.

This philosophy first demonstrated its power in 1992 with *Wolfenstein 3D*—the first game to run a smooth, first-person 3D environment on an IBM-compatible machine. The way Carmack achieved this was by repurposing the VGA chip as a blank sheet of paper with no manual. The VGA's default display mode only used 64KB of video memory, but the chip actually came with 256KB—the extra 192KB was not mentioned in IBM's official documentation. Carmack dug out this forgotten space and wrote what was called Mode X: multiple screen buffers, rapid page flipping, and hardware scrolling, all achieved simultaneously. IBM engineers never expected anyone to use that memory this way; Carmack used it as if it had always been intended for this purpose.

A year and a half later, *Doom* pushed this philosophy to its extreme. A 320×200 resolution, 35 frames per second, 256-color textures, and a pseudo-3D maze—all running on a 486 CPU without any hardware acceleration, relying purely on the CPU to calculate the color of every pixel, frame by frame. For this, Carmack designed a rendering algorithm called BSP (Binary Space Partitioning)—pre-slicing an entire level of the maze into a tree structure, so the CPU only needed to process the few rooms within the player's field of vision in each frame. The shadow of this technique can still be seen in all 3D engines today.

But Carmack's magic had a prerequisite he never loudly advertised to outsiders: he had to personally memorize every register of the VGA chip, every pipeline of the 486 CPU, every set of I/O ports for the Sound Blaster—as well as the degree to which dozens of "Sound Blaster compatible" sound cards on the market in the 1990s deviated from the standard. His code bypassed any operating system intermediary, but the price was that he had to manually write every exception case of the entire PC hardware ecosystem into his own code.

id Software could afford this price—it was only a dozen people, each an equally paranoid engineer.

But the entire industry could not.

Every slightly larger game company was paying a tax for hardware fragmentation. Every game shipped had to support dozens of sound cards and over a dozen display modes; each required a corresponding patch written into the game. The time engineers spent on hardware compatibility was often twice the time spent on the game itself. And this tax would not decrease as the game sold better—it would only double, as the customer base became more diverse.

---

*Late at night on December 10, 1993, the bill for this tax arrived. The one who sent the bill was the very game the DOS era was most proud of.*

*Doom* was the moment that multiplied the problem.

Late at night on December 10, 1993, id Software uploaded the shareware version of *Doom* to an FTP server at the University of Wisconsin-Parkside. The moment the file went online, the server was overwhelmed, crashed, rebooted, and crashed again. The university administrator called id in the middle of the night, demanding they move the file. Over the next year, *Doom* was downloaded more than 15 million times.

This was the first time PC gaming truly stepped out of the tech enthusiast circle and reached the general consumer.

But general consumers don't modify CONFIG.SYS themselves, nor do they understand what an IRQ conflict is. Within two weeks of *Doom*'s release, id's tech support inbox received over ten thousand emails—most of them not about game bugs, but about players' memory settings, sound card interrupt lines, and every stone wall they hit when trying to run a game requiring 4MB of RAM on a home PC for the first time. Carmack personally replied to emails late into the night, teaching strangers line by line how to modify their systems. Many of those who wrote in should never have needed to know what HIMEM.SYS was. They just wanted to play a game.

At this point, every slightly larger game company understood the same thing: **Relying on Carmack's method—where every programmer personally converses with every chip—could never support a game market aimed at ordinary people.** Someone had to hide the hardware, automate the settings, and make drivers the responsibility of the operating system, rather than the responsibility of the game programmer.

But that "someone" wasn't going to be id.

It could only be—the operating system itself.

---

*The problem was, the new operating system preparing to take over the PC was exactly the kind of thing Carmack trusted least in his entire career.*

On August 24, 1995, Microsoft held a globally anticipated launch event for Windows 95 at its Redmond headquarters. The new operating system proudly announced: 32-bit, memory protection, unified APIs, and no more editing CONFIG.SYS.

But there was one detail Microsoft didn't mention at the launch event—

Windows 95 couldn't run *Doom*.

Not just *Doom*. It couldn't run any serious PC game on the market at the time. When Microsoft's internal engineers installed *Wolfenstein 3D* on Windows 95 for testing, the visuals turned into a slideshow. Windows 95's abstraction layers ate back more than half of every clock cycle Carmack had painstakingly squeezed out.

It was in that moment Microsoft realized the severity of the problem. If this wasn't solved, the Windows empire would hand over gaming—the largest, stickiest, and youngest consumer application market—back to DOS. And DOS was dying. Gaming couldn't be buried alongside DOS, otherwise the operating system moat Microsoft had just built would be dug open from the side by an embarrassingly simple reason:

Because my son wants to play *Doom*.

---

*Back to you in 2025, clicking "Install."*

The ninety-second experience you enjoy today—no modifying config files, no memorizing interrupt line numbers, no needing to know any hardware details—is the direct product of that 1993 crisis. *Doom* proved that PC gaming had a massive mainstream market; simultaneously, it proved that the bare-metal ecosystem of the DOS era could not serve that market.

**Hidden here is the origin of a pattern that will repeatedly appear in every subsequent chapter of this book.**

The DOS era had no platform lock-in. Hardware was exposed, software was free, and any programmer could converse directly with every register of the machine. There was no middleman taking a cut, no platform owner review, no API entry barrier. This was freedom.

But the price of freedom is chaos—every game having to solve all hardware compatibility issues for itself, every player having to act as a half-system administrator for themselves. When the market was only tech enthusiasts, this price was acceptable. **When *Doom* allowed gaming to reach ordinary people, the price became unbearable.**

And every time "the price of freedom becomes unbearable," someone steps forward, trading convenience for control. On the surface, they are helping you solve a problem; at the core, they are using your gratitude for convenience in exchange for your dependence on the platform.

The one who provides convenience takes away freedom. Once this trade is completed, it is irreversible.

The DOS era of 1993 was exactly the eve of this trade. And the person preparing to step forward to provide convenience had already been assigned a seemingly impossible task in some nondescript office building in Redmond—

To coax and deceive John Carmack, and the entire faction behind him that "distrusted abstraction layers," into Windows.

His name was Alex St. John. The battle he was about to launch wouldn't just rewrite the fate of PC gaming—it would inadvertently drive the first stake into the deepest lock of the entire tech industry for the next thirty years.

![](ch01_en%201.png)