# Chapter 6: Gabe Newell's Prison Break

In March 2026, Linux's market share in the Steam Hardware Survey quietly climbed to 5.33%—an all-time high. This number looks insignificant. But standing behind it are over five million Steam Decks—a handheld game console running Arch Linux, yet capable of playing over a hundred thousand Windows games on Steam.

You play *Elden Ring* on it. You press "Start," the visuals appear, and the controller vibrates. You don't know you are using Linux. You don't know that at the exact moment you pressed the button, an invisible translation machine under the hood was running at full speed—translating every DirectX command issued by the game into Linux's Vulkan API in real-time, feeding it into AMD's open-source driver, and finally turning it into pixels on the screen.

The entire pipeline doesn't use a single line of Microsoft's source code. There is no licensing agreement. There is no one's permission.

Chapter 2 explained: DirectX is a lock. It locked the entire PC gaming ecosystem onto Windows for thirty years. Every studio that wrote an engine using Direct3D was a brick in that wall.

The person who opened this lock happened to be one of the people who helped Microsoft install it back in the day.

---

## I. Motive for the Crime

On July 25, 2012, at the Casual Connect gaming conference in Seattle, Gabe Newell walked onto the stage and said a sentence that silenced the room:

"Windows 8 is a catastrophe for everyone in the PC space."

Coming from anyone else, this would be a complaint. Coming from Newell, it was a declaration of war.

Because Newell knew better than anyone in that room what Microsoft was going to do next. He spent thirteen years at Microsoft—he called himself the "producer of the first three releases of Windows." In 1996, he was that young product manager on the Windows 95 team who flew to Texas and pulled id Software into the DirectX camp. Chapter 2 recorded that deal. He personally helped Microsoft win that round.

After leaving Microsoft, he founded Valve, making *Half-Life*, *Counter-Strike*, and *Portal*. But what truly changed the industry wasn't the games—it was Steam.

Launched in 2003, Steam is a digital distribution platform for PC games. Within a decade, it devoured over 70% of PC gaming sales. On every transaction, Valve took a 30% cut. By 2012, Steam had over 2,500 games and tens of millions of active accounts globally. Valve had transformed from a game developer into a rent-collecting platform owner.

But Steam had a fatal weakness—**it ran on Windows**.

Valve's entire commercial empire was built on Microsoft's foundation. Microsoft could change the rules at any time. And in 2012, changing the rules was exactly what Microsoft was preparing to do.

Windows 8 introduced the Windows Store—an app store integrated into the operating system. Its interface mimicked the iPad, its transaction process mimicked the App Store, and its revenue-sharing model similarly mimicked Apple. Microsoft's intention required no guessing: if all Windows software were distributed through the Windows Store, Microsoft could take a cut of every transaction just like Apple, and Steam would be demoted from "the only channel" to "one of many stores."

Newell saw through this move. Not because he was smarter than everyone else, but because he had spent thirteen years at Microsoft and seen firsthand how that organization operated. Microsoft wouldn't ban Steam overnight—that would be too crude and invite antitrust lawsuits. Microsoft would take its time. First, by offering exclusive content in the Windows Store. Then, by giving Store apps priority installation at the system level. Then, by adding a warning pop-up for third-party installers: "Are you sure you want to install software from an unknown source?" Then, by hiding the "Confirm" button on that pop-up deeper and deeper.

Boiling a frog in warm water. Newell had seen Microsoft use this exact playbook against Netscape, against Java, against OpenGL. **He was a guy who came out of that very pot.**

So he followed up on stage with his second sentence: "We are going to bring all 2,500 games on Steam to Linux."

That sentence sounded like empty talk. The Linux desktop market share in 2012 was less than 2%, and its gaming ecosystem was practically zero. But Newell wasn't talking about market share. He was talking about—**an escape hatch**.

He wanted to make Steam independent of Windows. Not tomorrow, not next year. But to open the door before Microsoft tightened the noose.

As the previous chapter detailed, AI researchers had already fled to Linux long before this—the freedom they needed couldn't be provided by Windows' closed architecture. What Newell was going to do was lead the second batch of refugees right behind them: the gamers.

---

## II. Forging the Weapon

To run Windows games on Linux, the orthodox approach is to ask every game studio to release a native Linux version.

That path is a dead end. The reason was explained in Chapter 2: the DirectX lock-in effect. The cost of porting an engine written in Direct3D over five years to Linux is equivalent to writing it from scratch. No studio was willing to spend that money, and no studio could see enough players on Linux to recoup the cost.

Newell chose a completely unorthodox path: **Without modifying a single line of the game's source code, build a translation machine underneath Linux to instantly convert every Windows API call issued by the game—including DirectX—into something Linux understands.**

This idea wasn't invented by Valve. Its origins can be traced back to 1993—an open-source project called Wine. Wine stands for "Wine Is Not an Emulator." Its goal was to implement the behavior of Windows APIs on Linux, making Windows programs believe they were running on Windows, while underneath, the Linux kernel was doing the actual work.

Wine had been in development for twenty years. It could run some Windows office software and simple utility programs. But games—especially 3D games—were nearly impossible. Because 3D games didn't just call Windows APIs; they heavily relied on Direct3D, and Direct3D's behavior was deeply entangled within Windows' proprietary GPU driver architecture. Wine's early approach was to translate Direct3D into OpenGL—but OpenGL's design was too high-level; when translating the low-level, close-to-hardware operations of Direct3D, the overhead was so large it ate up performance. A game running at sixty frames on Windows would drop to less than half after going through Wine's translation.

The breakthrough appeared in 2017. A developer going by the screen name doitsujin, Philip Rebohle, started a project called DXVK. DXVK did one thing: translate DirectX 9, 10, and 11 API calls into **Vulkan**—the new generation, cross-platform graphics API maintained by the Khronos Group. Vulkan was different from the dying OpenGL: it was designed from scratch, had robust Linux driver support, and its performance was near-native.

If DXVK could achieve sufficiently precise translation, theoretically, any DirectX game could run through this pipeline:

**Game issues a DirectX call → DXVK instantly translates it to Vulkan → Linux's open-source GPU driver takes over → Pixels appear on the screen.**

Theoretically.

Practically, DirectX has countless undocumented behaviors. Edge cases in shader compilation, implicit assumptions about memory alignment, timing dependencies in multi-threaded rendering, hacks implemented by certain game engines targeting specific NVIDIA driver versions—every game could step on a different landmine. The developers of DXVK had to reverse-engineer these behaviors and fix them one by one.

Valve saw DXVK and did something decisive: **They sponsored Rebohle to develop it full-time.** Then they packaged DXVK, a modified version of Wine, plus a bunch of performance patches and compatibility fixes into a single bundle, and built it directly into the Steam client.

This bundle was called **Proton**.

On August 21, 2018, Proton was officially released. The initial batch of certified games was only 27—including *Doom* (2016) and *Quake*. But its design philosophy was the key: **Players didn't need to know what Wine was, didn't need to know what DXVK was, and didn't need to configure anything.** Click "Install" on Steam, click "Play." Proton ran silently underneath.

Valve simultaneously hired core developers from Wine and Mesa (Linux's open-source GPU driver stack), turning them from community volunteers into full-time Valve employees. It funded CodeWeavers—a company specializing in commercializing Wine—to accelerate fixing compatibility issues. It also opened ProtonDB, a community-driven compatibility database allowing players worldwide to report which games worked, which had issues, and how to bypass them.

What Valve was doing, to put it another way, was: **Funding an army to reverse-engineer thirty years of every behavior Microsoft had accumulated in DirectX.**

But translation was only the upper half of the pipeline. The lower half—feeding the translated Vulkan commands into the GPU—relied on the driver. And here Valve made a choice that affected the success of the entire prison break: **It chose AMD, not NVIDIA.**

On the surface, this was counter-intuitive. NVIDIA crushed AMD in performance. For a handheld console trying to squeeze the best visual quality out of the lowest power envelope, wouldn't NVIDIA make more sense?

No. Because NVIDIA's Linux GPU drivers were **closed-source**.

Closed-source meant Valve's engineers couldn't touch the driver's source code—couldn't modify it, couldn't fix bugs, and couldn't perform deep optimizations tailored to Proton's translation behaviors. Translating DirectX to Vulkan was already an intricate surgery; if the final segment of the pipeline after that surgery was a black box where you couldn't see inside, any problem would just have to wait for NVIDIA to release an update. The prison break would forever remain a half-finished job.

AMD took the exact opposite path. It actively published its GPU hardware documentation and supported an open-source Vulkan driver within the Mesa project called RADV. RADV wasn't written by AMD itself—it was written by the open-source community, and the most active contributors in that community happened to be Valve employees. Valve's engineers even felt AMD's official shader compiler wasn't fast enough, so they wrote a replacement from scratch called ACO and stuffed it into RADV. Its performance beat AMD's in-house compiler.

In 2025, AMD made a historic decision: officially halting development of its own Linux Vulkan driver and shifting all resources to the community's RADV. In other words—AMD officially admitted that the driver maintained by Valve's engineers was better than the one AMD wrote itself.

**This is the real reason Valve chose AMD.** Proton handles the upper half (translating DirectX → Vulkan), and RADV handles the lower half (Vulkan → GPU commands). Both halves are open-source, and Valve's engineers are deeply involved in both. The entire pipeline is transparent from end to end—there isn't a single black box anywhere.

If an NVIDIA closed-source driver were sandwiched in the middle, end-to-end optimization would be impossible. The "press one button and play" experience of the Steam Deck would forever fall short at the last mile.

This choice has a deeper implication, but it won't be fully settled until Chapter 7. NVIDIA's closed-source strategy caused it to lose Linux gaming hardware—Valve didn't want it. But that exact same closed-source strategy, on a different battlefield—AI—allowed NVIDIA to win completely. Why? **Because the lock on gaming and the lock on AI have completely different depths.**

But that is a story for later.

---

## III. The First Breakout Attempt

But Proton wasn't Valve's first attempt. It was its second.

The first was in 2013. A year after his "catastrophe" speech, Newell announced an ambitious plan: SteamOS—Valve's own Linux operating system; Steam Controller—Valve's own controller; Steam Machines—living room game consoles built by third-party hardware manufacturers running SteamOS.

The logic of this plan was clear: if Windows is a prison cell, then build a game console that doesn't need Windows and put it in consumers' living rooms.

In November 2015, the first batch of Steam Machines launched. Alienware, Zotac, CyberPowerPC—several manufacturers released their own models.

Seven months later, total sales were under 500,000 units.

The reason for the failure, in hindsight, is brutally clear. The 2015 SteamOS did not have Proton—because Proton didn't exist yet. At the time, fewer than a thousand Steam games could run on Linux; all of them were native ports, and most were small indie titles. A consumer spent about the same amount of money as a PlayStation, bringing home a machine that could only play one-tenth of the Steam library—what reason did they have not to return it?

By 2016, almost all hardware manufacturers had ceased production of their Steam Machines. Valve removed the Steam Machine section from its store's front page in 2018. The Steam Controller ceased production and was cleared out in 2019.

By any commercial standard, this was a complete failure.

But one thing didn't stop.

**Valve's investment in Linux never halted.** Steam Machines died, but SteamOS continued development. The sponsorship of Wine continued. Mesa engineers continued drawing Valve salaries. When DXVK emerged in 2017, Valve reached out immediately.

There's a detail here worth pausing for: Valve is a **private company**. No IPO, no shareholders, no Wall Street analysts staring at quarterly earnings asking, "Where's the ROI on your Linux investment?" If Valve were a public company, the Linux project would have been axed at the next board meeting following the failure of the Steam Machines.

It wasn't axed. Because the only person who needed convincing was Gabe Newell himself. And Newell was looking further than a single quarter.

Newell himself said in a 2020 retrospective: "The hardware we pushed back then was extremely incomplete at that time."

He knew 2015 was too early. But he also knew that if he didn't start throwing money down first—nurturing engineers, nurturing the community, nurturing the open-source ecosystem—when the timing was right, he'd have nothing in his hands.

So he waited. Waited for DXVK to appear. Waited for Proton to be able to translate over 60% of Steam games to a playable state. Waited for AMD's APUs to mature enough to be stuffed into a handheld console.

Then, he made his second move.

---

## IV. Prison Break

On February 25, 2022, the Steam Deck launched.

A handheld game console. 7-inch screen, custom AMD APU—Zen 2 CPU plus RDNA 2 GPU, 16GB RAM. Priced starting at $399. Running SteamOS 3.0—based on Arch Linux, no longer the half-finished Debian of 2015.

It could play over 80% of Windows games on Steam. Not native Linux games; Windows games, instantly translated via Proton, running on Linux.

Players didn't know they were using Linux. They only knew they pressed a button and the game appeared—just like the Nintendo Switch.

By mid-2025, cumulative shipments of the Steam Deck exceeded 5.6 million units, capturing nearly half the market share for handheld gaming PCs. The number of Proton-compatible games grew from the 27 available at launch in 2018 to over 100,000—90% of the Steam library.

For the first time in PC gaming history, a commercially successful hardware device proved one thing:

**PC gaming does not need Windows.**

The DirectX wall Microsoft spent thirty years building—whose every brick and post was recorded in Chapter 2—was bypassed by Valve. Not climbed over, but tunneled under. The materials for the tunnel were entirely open-source: Wine, DXVK, Mesa, Vulkan, the Linux kernel. Not a single line of code required Microsoft's permission.

The irony is even deeper: the developers of those DirectX games translated by Proton didn't even know their games were being played on Linux. They didn't release a Linux version, didn't sign any contracts, and didn't do any extra work. Proton bypassed Microsoft, and it bypassed them too.

And Valve isn't the only one running Windows games on Linux. Even NVIDIA's own cloud gaming service, GeForce NOW, runs on Linux servers at its core—only its approach is more direct: firing up a Windows virtual machine on top of Linux, letting the game run inside it, and shutting it down when finished. Windows' role there is no longer that of a landlord, but of a temporary rental room spun up and torn down on demand. The significance of this picture won't be fully settled until the final chapter.

---

## V. Closing Arguments

But we must pause here and ask an uncomfortable question.

Is Valve a hero?

From an antitrust perspective, yes. Valve proved that platform lock-in is not eternal. The thirty-year DirectX wall could be brutally dug through by a group of determined engineers using open-source tools, without spending a cent on licensing fees, and without touching a line of Microsoft source code. This is the **first counterattack** against the pattern identified in Chapter 2 so far in this book.

But what about Valve itself?

Steam takes a 30% cut. On every game sold through Steam, regardless of platform, Valve takes 30%. That number is exactly the same as the Apple App Store—the very "platform tax" despised by indie developers mentioned in Chapter 2. Steam Deck players are indeed no longer locked on Windows—but they are locked on Steam. You bought five hundred games on Steam; are you going to leave Steam? Your save files, your community, your friends list, your game library of the last ten years—all of it is bound to this platform.

Furthermore, legally, you don't own those five hundred games. In 2024, a new law in California forced Steam to add a line to its checkout page: "Purchasing a digital product grants a license for the product on Steam." You are not buying a game; you are buying a license to use it. From cartridges to discs to digital downloads to cloud streaming, every step has traded ownership for convenience—Valve is the landlord, you are the tenant; it's just that this landlord treats you well right now, so you don't feel like you're renting.

Valve tore down Microsoft's wall, only to build its own wall in the exact same spot.

That pattern appears again. Only this time, it's wearing different clothes.

Chapter 2's pattern: **Use DirectX's convenience to attract developers → Developers are locked onto Windows → Consumers are locked in turn.**

Valve's pattern: **Use Steam's convenience to attract consumers (massive game library, deep discounts, one-click install) → Use the massive user base to attract developers (if you're not on Steam, you don't exist) → Use the 30% cut and the stickiness of the user library to lock in the entire ecosystem.**

The direction flipped from the developer side to the consumer side. The result is the same—the wall is still there, just with a new landlord.

**This is the fourth variation of the book's core pattern—and the first time it appears on the side of the "rebel."** The person who breaks a lock often finds, in the process of breaking free, that what they hold in their hand is a tool to build another lock.

But let me throw some cold water here.

Valve was able to pry open the DirectX lock because it was a **shallow lock**—it only locked one layer of API. The API's behaviors are mostly documented, its inputs and outputs are deterministic, and a sufficiently determined person could reverse-engineer it. Philip Rebohle started DXVK alone. Valve threw money at it to scale it up. The lock was opened.

Not all locks are this shallow.

CUDA, which will be discussed in the next chapter, didn't lock a single layer of API. It locked the hardware instruction set, the compute libraries, the AI frameworks, and the GPU computing curriculum at every university worldwide—four locks stacked together, each deeper than DirectX. AMD's ROCm has been chasing it for ten years and still hasn't pried it open. The difference between that lock and this lock is the dividing line between a "successful counterattack" and a "failed counterattack."

---

## VI. The Loot is Still Being Divided

Back to the Steam Deck.

The reason it can exist—a Linux handheld playing 90% of Windows games—is because Proton's engineers did something extremely abnormal: **without the source code**, they reverse-engineered thirty years of every behavior Microsoft accumulated in DirectX. Every edge case in a shader compiler, every undocumented GPU memory behavior, every implicit contract between Windows drivers and game engines—they dug them out one by one, translated them one by one.

What kind of people does this work require?

It requires people who **simultaneously understand DirectX's state machine, Vulkan's pipeline architecture, the Linux kernel's memory management, the Mesa open-source driver's shader compiler, and every hack game engines perform at the limits of hardware**. They span hardware and software. They see through the entire stack. They are not people who "do things with APIs"; they are people who "understand why the API looks the way it does."

To give a concrete example. Valve's engineers felt AMD's official shader compiler was too slow on Linux, so they wrote a replacement from scratch called ACO. To write something like that, you have to simultaneously understand three things: the native instruction set architecture of AMD GPUs, the semantics of every shader operation in the Vulkan spec, and the way the Linux kernel schedules GPU tasks. These three things belong to three different professional domains. In an ordinary company, this is the work of three different departments. Valve's engineers did it all individually. And what they wrote was faster than the compiler maintained by AMD's own team of hundreds.

Proton can exist because these kinds of engineers still exist.

Most of them grew up in the Linux community of the nineties—an era when, to run anything on Linux, you had to compile the kernel yourself, write the driver yourself, and figure out the behavior of every layer of the stack yourself. They belong to the same era and the same training as Carmack.

But that era has ended.

Today's CS graduates can use Cursor to build an entire app, and use Hugging Face to call a pre-trained model—from start to finish without needing to know how the GPU schedules instructions, how memory is aligned, or how the driver communicates with the kernel. It's not that they aren't smart. They've just never been forced to touch those things.

If one day Proton breaks—not on the surface UI, but deep in the seam between the DirectX translation layer and the Vulkan driver of some new GPU—will there still be anyone who can fix it?

This problem isn't just Valve's problem. It's a problem for the entire tech industry. Because Proton isn't the only system that relies on "full-stack spanning" engineers to exist—CUDA's driver stack is one, TSMC's process co-optimization is one, and AMD's semi-custom chip design for three major consoles is another.

The common characteristic of these systems is: **They cannot be built by someone who only understands APIs, and they cannot be fixed by someone who only understands APIs.** Yet our education system is mass-producing people who only understand APIs.

This contradiction is the question this book must answer head-on as it reaches its midpoint.

The main text pauses here. The pages that follow will no longer discuss corporations or business wars. What they will discuss is a kind of person who is disappearing.

![](ch06_en.png)