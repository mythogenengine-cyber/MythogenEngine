# Chapter 5: The Wild Growth of AI and Wintel's Blind Spot

In 2025, a Stanford PhD student sits in her lab, preparing to train her language model.

She opens her laptop—a MacBook running macOS. She connects to a remote GPU cluster—eight servers, each slotted with eight NVIDIA H100s, running Ubuntu Linux. Her code is written in Python, the framework is PyTorch, the underlying layer uses CUDA, and the compilers, schedulers, drivers, and OS kernels—from the moment she hits Enter to when the first gradient starts returning, not a single line of the software stack she touches belongs to Microsoft.

She doesn't find this strange at all. From her first day in grad school, all tutorials, all code attached to papers, and all lab machines have been entirely Linux. Windows? That's the thing she occasionally opens to run PowerPoint.

But if she were to look up and think for a moment—she would bump into a very uncomfortable question.

The H100 graphics card she uses was made by NVIDIA. What nourished NVIDIA as it grew? PC gamers on Windows—who for twenty years bought graphics cards generation after generation for prettier visuals, sharing the R&D costs of parallel computing for NVIDIA. The GPU cluster she connects to is rented from Microsoft Azure's cloud service—and over 60% of the virtual machines on Azure run Linux.

**The money that raised NVIDIA came from Windows. The infrastructure for training AI models is built on Microsoft's cloud. But AI itself—its frameworks, its toolchains, its entire software ecosystem—has absolutely nothing to do with Windows.**

This is not an accident. It is the direct consequence of two empires making separate decisions twenty years ago—one deciding not to act, and the other deciding to forbid.

The one that decided not to act was Intel. The one that decided to forbid was Microsoft.

---

## I. Motive for the Crime: Two Walls

To understand why AI grew on Linux, you first have to understand one thing: it's not that Linux was overwhelmingly attractive, but that Windows drove people away.

The method of driving them away was elegant—so elegant that the people being driven away couldn't necessarily articulate what was happening.

In 1993, Windows NT was released. Its core design borrowed from DEC's VMS and Carnegie Mellon University's Mach microkernel—refined, rigorous, and enterprise-grade. The most crucial design decision was the x86 processor's privilege ring architecture: kernel code ran in Ring 0, possessing complete hardware access rights; applications ran in Ring 3, isolated behind an invisible wall.

This was the cornerstone of security. A program running in Ring 3 could not directly touch memory mapping, could not independently operate I/O ports, and could not bypass the scheduler to seize hardware resources. If a game crashed, it wouldn't bring down the whole computer—it would only die within its own fenced-off space.

For ordinary users, this was a godsend. The nightmare of the DOS era, where "one game crashes, the whole machine dies," disappeared forever. The exam mentioned in Chapter 1 of fighting with CONFIG.SYS every night, along with its admission ticket, was revoked.

But on the other side of the wall stood a completely different group of people.

From the late nineties to the early two-thousands, inside the physics departments, math departments, and computational linguistics labs of universities worldwide, a group of researchers was doing something that seemed to have zero commercial future—feeding massive amounts of data into mathematical models to make machines learn to recognize images, translate sentences, and predict protein folding. What they needed was the most direct, lowest-level, most undisturbed access to hardware. They wanted to write kernel modules themselves, modify drivers themselves, and decide for themselves how memory was arranged and how every compute unit of the GPU was scheduled.

**To them, Windows' separation of Ring 0 and Ring 3 wasn't protection; it was an obstacle.**

And Linux—which also used the x86 privilege rings, and also had the Ring 0 / Ring 3 distinction—did something Windows would never do: it completely opened up its kernel source code.

You want to write a kernel module to directly access the GPU's registers? Write it, compile it, load it, and it takes effect immediately. You want to modify the memory manager so your training data is arranged in a specific way in physical memory? Change it, recompile the kernel, reboot, and it's done. You want NVIDIA's drivers to bypass the OS's display manager and write compute results directly back to main memory? NVIDIA's engineers could do it themselves, because they could see every line of the Linux kernel.

On Windows, doing the same thing required Microsoft's cooperation—modifying WDDM (Windows Display Driver Model), tweaking GPU scheduling policies, opening new kernel interfaces. But Microsoft had no motive to cooperate. In 2005, GPU computing was a sci-fi concept to Microsoft; its engineering priorities were Vista's Aero effects, DirectX 10's new shader model, and making games look prettier on Windows.

The "naked hardware access" those researchers wanted didn't even have a checkbox on Microsoft's product roadmap.

So they left.

Not leaving in anger, not publishing manifestos, not organizing collective boycotts. Just quietly, lab by lab, swapping their workstations from Windows to Linux. In the mid-2000s, among the top 500 supercomputers in the world, Linux's share surged from 50% to 90%. By 2010, on the Top 500 list, Windows had fewer than ten spots left.

What was running inside those supercomputers wasn't just climate modeling and gene sequencing. A small group of people was using them to do something no one thought much of at the time—using GPUs for matrix multiplication.

But let's be honest here—this wasn't a clean-cut revolution.

In the university labs of 2005, Windows didn't disappear. Professors still used it to open PowerPoint for progress reports, PhD students still used it to run MATLAB for matrix math and plotting, instrument control software like LabVIEW only had Windows versions, and the statistics department couldn't live without SPSS. Windows remained the daily driver desktop in academia, booted up for eight hours a day.

What really changed was a very quiet detail. If you walked up to those PhD students' computers and pressed the power button, you would see a menu with white text on a black background—**GRUB**. With two lines on it: Windows, Linux.

Dual boot. This was the real scene in academia in the 2000s.

Windows handled the mundane: writing reports, running MATLAB for a few graphs, replying to emails, making slides. But as soon as the work entered a phase that required squeezing the hardware—compiling custom kernel modules, connecting to FPGA dev boards, SSHing into the lab's GPU cluster—the grad students would reboot, switching into that black terminal with no desktop effects, no start menu, just a blinking cursor.

Windows wasn't abandoned. **It was demoted.** Downgraded from "omnipotent operating system" to "word processor and presentation machine." And the computations that truly determined the future—the work that required naked access to hardware—all happened in the world after the reboot.

Microsoft probably didn't notice this demotion. Because from the perspective of their licensing fees, that computer still had a copy of Windows installed. The numbers hadn't decreased. But power had shifted—**the computations deciding the technological direction of the next decade were no longer happening inside Windows.**

---

## II. The First Blind Spot: Ballmer's Cancer Theory

While the researchers were quietly exiting, what did Microsoft do?

In June 2001, Microsoft CEO Steve Ballmer was interviewed by the Chicago Sun-Times. The reporter asked what he thought of Linux. His answer left the most expensive quote in tech history:

**"Linux is a cancer."**

Ballmer's exact words were more precise than that—he was saying the GPL licensing terms were like a cancer that would "infect" all intellectual property it touched. This was a legal argument, and in corporate legal circles at the time, it wasn't outrageous. But the problem wasn't the law; it was the signal.

When that sentence came out of the mouth of Microsoft's CEO, it broadcast only one signal: **Microsoft views Linux as an enemy.**

The signal was received by everyone.

Enterprise CIOs received it—some companies evaluating Linux server solutions were scared off. Ballmer probably thought this was a good thing. But the signal was also received by another group: researchers writing open-source software in universities, startup teams running servers on Linux in Silicon Valley garages, and engineers writing toolchains for GPU computing. The signal they received was: **Microsoft will never cooperate with us.**

So they stopped waiting.

Between 2003 and 2007, almost all the early projects that later defined AI infrastructure chose Linux as their sole target platform. Not because the Linux desktop experience was good—the Linux desktop in 2005 often couldn't even connect to Wi-Fi. But because **it was the only place where you wouldn't wake up one morning to find the platform owner had suddenly changed the rules, charged rent, or called you a "cancer."**

In the same year—2001—another team at Microsoft was handing out the first Xbox in New York's Times Square. As discussed in Chapter 3, the Xbox was a wall used to block Sony. Ballmer's "cancer theory" was another wall—used to block Linux.

Both walls successfully blocked the opponents right in front of them. But together, those two walls also locked out a continent that was just beginning to take shape.

---

## III. The Second Blind Spot: Intel Kills Its Own GPU

If Microsoft's mistake was treating Linux as an enemy, Intel's mistake was even more fatal—**it killed its own child.**

In 2006, NVIDIA released CUDA—a set of tools allowing programmers to use C to do general-purpose computing directly on the GPU. Chapter 7 will fully detail the history and consequences of this decision. All you need to know here is one thing: at the time, nobody in the world took CUDA seriously. GPUs were for drawing triangles, not calculating matrices. Carmack didn't care, game studios didn't care, Wall Street didn't care.

But Intel cared—only, entirely in the wrong direction.

In 2008, Intel announced a project called **Larrabee**. The concept was extremely bold: a GPU based entirely on the x86 instruction set. Not an architecture requiring a proprietary language (CUDA) like NVIDIA's, not a traditional graphics pipeline design like AMD's—Larrabee aimed to let programmers use the C++ they already knew, on a chip covered in dozens of small x86 cores, doing both graphics and general-purpose compute simultaneously.

If Larrabee had succeeded, history would have been completely rewritten.

An x86 GPU meant Intel's entire software ecosystem—compilers, debuggers, performance profilers, decades of accumulated x86 optimization experience—could all be ported directly over. Developers wouldn't need to learn CUDA; they wouldn't need to rewrite their code into GPU-friendly formats. They would just write C++, and Intel's compiler would handle the rest.

More crucially: Intel was the overlord of the CPU. If it possessed a GPU at the same time, it could do something NVIDIA couldn't—**have the CPU and GPU share the same memory, use the same bus, and run the same instruction set.** Today, one of the biggest bottlenecks in AI training is the data transfer between CPU and GPU. If Larrabee had succeeded, this bottleneck wouldn't exist architecturally.

NVIDIA's CUDA monopoly might never have happened.

But Larrabee didn't succeed.

In May 2010, Intel announced the cancellation of Larrabee as a consumer graphics card project. The official narrative was a "shift toward high-performance computing." The wreckage was renamed Xeon Phi, stuffed into the server market to linger for a few years, and then completely axed around 2017.

**Why was it killed?**

The answer hides in Intel's financial statements. In 2010, the gross margin of Intel's CPU business exceeded 60%. The company's entire revenue structure, bonus system, and promotion paths revolved around this number. The GPU was a brand new market—gross margins were uncertain, development cycles were long, it required building driver teams and ecosystems from scratch, and it would consume massive engineering resources in the short term with no visible return.

In a company with 60% gross margins, asking the board to approve a short-term-loss, long-term-uncertain GPU project—this wasn't a technical problem; it was a systemic problem.

The killer of Larrabee inside Intel was not a villain with a recognizable name. It was the incentive structure of the entire system: every division head was protecting their own gross margin; every quarterly earnings call promised profit growth to Wall Street; every vice president knew that shifting resources from the CPU to a GPU with an uncertain future would impact their annual performance review.

**Nobody made a "wrong decision." Everyone made the most rational decision for their own position. But all the rational decisions added up to a suicidal outcome.**

This structural suicide will appear again in Chapter 9—the tragedy of Pat Gelsinger. Gelsinger returned to Intel in 2021 trying to turn the tide, but what he faced was the very karma planted when Larrabee was killed: Intel missed the GPU, missed AI, and missed an entire era. And that era was monopolized solely by NVIDIA.

---

## IV. The Great Escape

When the two blind spots stacked together, the effect was this—

Microsoft treating Linux as a cancer meant Windows would not actively serve the scientific toolchains running on Linux. Intel killing Larrabee meant the only hardware on the market capable of general-purpose GPU computing was NVIDIA.

And NVIDIA's CUDA—during that long waiting period from 2007 to 2012 when no one believed in it—placed its entire bet on Linux.

This wasn't an accident. CUDA's target users were researchers and HPC engineers. What did their machines run? Linux. What compiled their code? GCC. What did their workflows look like? SSHing into servers, running scripts, checking logs, tuning parameters.

For NVIDIA engineers doing CUDA development on Linux versus doing it on Windows, there was a structural gap. The Linux kernel is open source—NVIDIA could write its own kernel modules, bypass the OS's GPU scheduler, and let CUDA directly control every compute unit of the GPU. On Windows, the same thing had to go through the WDDM driver model, passing through an extra scheduling layer controlled by Microsoft. The latency and restrictions added by this extra layer were imperceptible when playing games; but when training a model that required thousands of GPUs to synchronize, every microsecond of overhead was magnified thousands of times.

**Linux didn't win because it was easy to use. It won because it was open enough—open enough to let NVIDIA do whatever it wanted without needing permission from any platform owner.**

And GPU clusters were only one escape route. Another route was quieter, but had a much larger footprint.

If you walked out of the Computer Science department and into the labs of the Electrical Engineering or Mechanical Engineering departments next door, you would see a different kind of computer—not a desktop PC, not a server, but bare EVBs (Evaluation Boards). These palm-sized circuit boards were the brains of medical instruments, industrial robots, agricultural drones, and autonomous driving sensor modules. Their processors might be ARM or RISC-V, their memory was only a few hundred MBs, and storage was measured in GBs. What OS did they run?

100% Linux.

Not because researchers favored the open-source spirit, but because there was no other choice. Microsoft had tried—Windows CE, Windows Embedded, changing names several times—but the Windows kernel was too bulky, licensing fees were too high, and it didn't allow you to strip the system down to just the few modules you needed. An EVB with only 256MB of RAM couldn't fit Windows, but it could run a Linux kernel stripped down to tens of MBs, plus the custom drivers and control programs you wrote yourself.

This might seem unrelated to AI, and even less related to gaming. But it had a severely underestimated consequence: **Every engineer who ever wrote a Linux driver on an EVB was someone who understood the entire pipeline "from kernel to hardware."** Where did these people go later? Some founded robotics companies, some went into autonomous driving, some joined NVIDIA to write CUDA drivers, and some became the backbone of AI infrastructure teams. What they brought with them wasn't proficiency in a specific programming language, but an engineering intuition of "opening the lid to look inside"—exactly the disappearing capability discussed in the interlude.

Linux's victory never just happened in data centers. It happened simultaneously on every embedded circuit board stuffed inside instrument casings, every drone auto-navigating over fields, and every ultrasound probe running real-time image recognition in hospitals. Windows had never reached those places.

Here, a mirror image of the pattern identified in Chapter 2 appears—

DirectX's pattern was: **Microsoft used convenience to attract developers into Windows, used API lock-in to bind them, and finally locked in consumers.**

CUDA on Linux's pattern was: **NVIDIA used freedom to attract researchers into CUDA, used ecosystem lock-in to bind them, and finally locked in the entire AI industry.**

The locking mechanism was exactly the same. But the location of the lock was different. Chapter 2's lock was installed on Windows; Chapter 5's lock was installed on Linux. The Windows moat Microsoft spent ten years paving was completely useless on the most important battlefield of AI—because the battlefield wasn't there.

In September 2012, two researchers at the University of Toronto—Alex Krizhevsky and his advisors Ilya Sutskever and Geoffrey Hinton—published an image recognition model called AlexNet. It won the ImageNet competition, beating the runner-up by over ten percentage points.

AlexNet was trained using two NVIDIA GTX 580 graphics cards. Running CUDA. The operating system was Linux.

Those two GTX 580s retailed for about $500 each. They were originally designed for gamers—to play *Skyrim*, to run *Battlefield 3*. Gamers who bought those cards shared the R&D cost of the Fermi architecture for NVIDIA; the CUDA cores inside the Fermi architecture were used by Krizhevsky to do matrix multiplication; the results of that matrix multiplication ignited the deep learning revolution.

That is the full story of Chapter 7. But in Chapter 5, the only fact we need to remember is this: **At the moment of ignition, Windows wasn't present. Intel wasn't present either.**

They weren't defeated. They walked away on their own.

---

## V. Closing Arguments

In 2014, Satya Nadella took over as Microsoft CEO. The first thing he did that sent shockwaves through the industry was standing on stage, smiling in front of a slide that read "Microsoft ♥ Linux."

The tech journalists in the audience laughed out loud. Thirteen years earlier, this company's former CEO had called Linux a cancer.

Nadella wasn't doing PR. He was acknowledging reality. More than half the workloads on Azure cloud services ran Linux; all the important frameworks of the AI research community—TensorFlow, PyTorch, JAX—all treated Linux as their primary platform; every company in the world that wanted to do AI was renting GPU clusters running Linux. If Microsoft continued treating Linux as an enemy, its cloud business—the biggest growth engine for the entire company's future—would be completely left behind by AWS and Google Cloud.

Nadella's "Microsoft ♥ Linux" was Microsoft's unconditional surrender.

But the surrender came too late.

The software ecosystem of AI had already entirely grown in the soil of Linux. Every deep learning framework, every set of training tools, every pipeline from data preprocessing to model deployment—all assumed the underlying layer was Linux. This wasn't prejudice; it was engineering reality. The performance of NVIDIA's CUDA toolchain on Linux consistently outperformed Windows; GPU cluster management tools were almost entirely written for Linux; containerization tech (Docker) ran natively on Linux, while on Windows it was just an emulation layer.

Microsoft later did a lot to compensate—acquiring GitHub, making WSL (Windows Subsystem for Linux) nearly seamless, investing tens of billions of dollars in OpenAI. Every step of these moves was smart. But they addressed the symptoms, not the disease.

The disease is: **When the roots of an ecosystem grow in someone else's soil, you can water them, fertilize them, and build a greenhouse over them—but you can never pull the roots up and transplant them into your own garden.**

Things were even worse for Intel. After Larrabee died, Intel disappeared from the GPU market for a full twelve years. In 2022, it finally launched the consumer discrete graphics Arc series—but in that year, NVIDIA's data center GPU revenue had already surpassed its gaming GPU revenue, and the AI arms race had already reached a boiling point. Intel walked into a missile war carrying a bow and arrow.

Back to the Stanford PhD student at the beginning of this chapter.

Every day she SSHs from macOS into a Linux cluster, trains models with CUDA, pushes results to GitHub, and tracks experiments with Weights & Biases—in her entire workflow, the role of Windows is zero, and the role of the Intel CPU is "just run preprocessing." She feels this is perfectly natural.

But this isn't natural. It is the delayed bill for three decisions: Ballmer's "cancer" comment in 2001, the Intel board's veto in 2010, and Windows' choice since 1993 to hide hardware behind walls.

**The total amount of that bill is the industrial dominance of an entire era.**

Microsoft paid this bill—it tried to buy back a torn admission ticket at the cost of tens of billions of dollars in AI investments, reorganization after reorganization, and sacrificing Xbox (the story of Chapter 10).

Intel is still paying. And may never finish paying.

---

## VI. The Loot is Still Being Divided

Here, we must draw a line connecting Chapter 2 and Chapter 5—because the two sides of the exact same pattern finally converge here.

Chapter 2's DirectX was the weapon Microsoft used to lock the PC gaming ecosystem. It succeeded. By the early 2000s, the vast majority of PC games only ran on Windows; developers were locked onto DirectX, and consumers were locked onto Windows.

But the wall that locked in gaming had a side effect—it made Windows increasingly closed off. Every new layer of API, every new driver model, every new security mechanism was designed to protect the commercial interests of the previous layer, rather than to let developers touch the hardware. People who needed to touch the hardware—research engineers, HPC engineers, those who would later become AI researchers—weren't driven away by Microsoft's malice; they were forced out by Microsoft's success.

**Windows' moat was too deep, so deep that even its own people couldn't get out—and the people outside didn't want to come in.**

This is why when AlexNet ignited in 2012, the fire burned on Linux. Not because someone deliberately chose Linux; but because Linux was the only place not locked down by any single company.

And once the fire of AI burned on Linux, it never moved again. Because the entire ecosystem brought by the flames—frameworks, tools, communities, educational resources, the job market—all grew on Linux. Even if an ML engineer in 2025 wanted to train models on Windows, she would find: the tutorials are for Linux, the Docker images are for Linux, the latest NVIDIA CUDA version stabilizes on Linux first, and the debugging experience on Stack Overflow is entirely Linux-based.

This lock-in effect is exactly the same mechanism as DirectX locking in game developers—only the direction is reversed.

**Chapter 2's pattern: Microsoft uses convenience to lock developers → developers lock consumers → consumers are locked on Windows.**

**Chapter 5's pattern: Linux uses freedom to attract researchers → researchers build the ecosystem → the ecosystem locks the entire AI industry → the AI industry is locked on Linux.**

The cost materialized thirty years later.

The Windows moat Microsoft spent thirty years building was perfectly bypassed in the AI era. It wasn't breached—it was bypassed. The besiegers didn't even realize they were taking a detour. They just went to a freer place, and built a bigger city there.

---

But AI researchers weren't the only group forced to Linux by Windows' closed nature.

In the exact same year Nadella stood on stage and said "Microsoft ♥ Linux"—2014—in another nondescript office building in Seattle, a chubby, slow-speaking former Microsoft employee was staring at a set of data.

The data showed: Microsoft was planning to turn the Windows Store into a closed App Store. All software released on Windows would have to pass Microsoft review, and Microsoft would take a cut. If this came true, his company—a company that lived by selling games on Windows—would turn from a landlord into a tenant.

He decided to do something a hundred times more radical than "♥ Linux."

He was going to move the entire Windows gaming ecosystem onto Linux. Without modifying a single line of Windows source code. Without asking for Microsoft's permission. Without consulting anyone.

His name was Gabe Newell. His plan required a team of full-stack engineers who could write everything from system calls to GPU drivers—because what they needed to do was build a virtual Windows on top of Linux, making tens of thousands of DirectX games believe they were still running in Microsoft's world.

This, according to all reasonable engineering judgment, was impossible to achieve.

![](ch05_en.png)