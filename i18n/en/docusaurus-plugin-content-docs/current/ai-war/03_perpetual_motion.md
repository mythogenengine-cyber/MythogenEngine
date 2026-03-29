# Theme 03: AI Perpetual Motion Machine—The $100 Billion Capital Cycle

## Core Argument

The AI industry is operating an intricate "capital perpetual motion machine": investors pour money into AI companies, AI companies immediately spend it on chips and cloud services, and the money flows right back into the investors' pockets. Every link in this chain generates "revenue," but how much new money is actually being drawn from end users' pockets? **This is the most alarming financial structure since the dot-com bubble of 2000.**

---

## I. The "Money Magic Show" You've Probably Never Seen

Imagine this scenario: you open a restaurant (OpenAI). Business is booming, but you're constantly losing money. Your ingredient supplier (Nvidia) says, "I'll invest $100 billion in you!" You are moved to tears—and then you take that $100 billion to buy their ingredients.

The supplier's financial report suddenly shows an extra $100 billion in revenue. Your valuation skyrockets because of the "massive investment," and the supplier's stock price skyrockets because of "surging revenue." Everyone is happy.

**But the problem is: are there really enough customers in the restaurant to eat $100 billion worth of food?**

This is not a metaphor. Here are the real capital flows happening right now:

### Cycle 1: Nvidia → OpenAI → Nvidia

> Nvidia invests up to $100 billion in OpenAI
> → OpenAI commits to filling data centers with Nvidia chips
> → 💰 Flows back to Nvidia

OpenAI's CFO has stated publicly: **"This money will flow back to Nvidia."** Analysts estimate that for every $10 billion Nvidia invests in OpenAI, it receives $35 billion in chip procurement.

### Cycle 2: Amazon → OpenAI → Amazon

> Amazon invests $50 billion in OpenAI ($35 billion condition-attached)
> → OpenAI expands its use of AWS cloud services
> → 💰 Flows back to Amazon

### Cycle 3: The Oracle Triangular Cycle

> OpenAI and Oracle sign a $300 billion data center contract
> → Oracle takes this money to buy Nvidia hardware to build the data center
> → 💰 Flows back to Nvidia again

### Cycle 4: CoreWeave's Invisible Loop

> Nvidia invests in CoreWeave (one of OpenAI's cloud providers)
> → CoreWeave uses the investment to buy more Nvidia GPUs
> → OpenAI is also a client of CoreWeave
> → 💰 Multiple returns to Nvidia

---

## II. Echoes of History: The 2000 Telecom Bubble

Famed short-seller Michael Burry (yes, the one from *The Big Short* who predicted the 2008 financial crisis) posted a spreadsheet on social media modeling these cash cycles. The EU has begun flagging the risks of such cross-investments. Bloomberg ran an illustrated feature called "AI Circular Deals."

The last time a similar structure appeared? **The 2000 dot-com bubble.**

Back then, telecom equipment vendors (like Lucent Technologies and Nortel Networks) offered loans to their clients (so-called Vendor Financing) so the clients could buy their equipment. On paper, the vendors' revenue soared; in reality, many of those clients went bankrupt, the loans became bad debt, and the entire telecom supply chain collapsed.

**Structural Similarities Between the AI Perpetual Motion Machine and the Telecom Bubble:**

| Dimension | 2000 Telecom Bubble | 2025-2026 AI Cycle |
|---|---|---|
| Core Mechanism | Vendors loan money to clients to buy their equipment | Chip/Cloud providers invest in AI companies; AI companies use investments to buy their chips/cloud |
| Book Effect | Vendor revenue skyrockets | Nvidia/AWS revenue skyrockets |
| Hidden Risk | Client usage insufficient; loans become bad debt | AI end-demand insufficient to support the entire cycle |
| Valuation Basis | Number of users, bandwidth construction speed | Model capability, funding rounds |
| Ending | Nortel's market cap fell from $398B to bankruptcy | TBD |

---

## III. Proponents vs. Critics Debate

### Proponents' View: This is a "Virtuous Cycle"

Proponents argue this is no different from traditional industrial investment:
- Oil companies invest in drilling equipment vendors, who invest in steel companies—money flows through the supply chain.
- The key is whether AI end demand (costs saved by enterprise AI use, consumer fees for AI services) is growing.
- An ARR of $20 billion (OpenAI) and 900 million MAU proves the demand is real.

### Critics' Rebuttal: Where is the New Money?

Critics point out three fatal flaws in this perpetual motion machine:

1. **Double Counting of Revenue:** The same money is counted as revenue on both Nvidia's and OpenAI's financial reports. How much of the total AI industry "revenue" is double-counted?
2. **Conditional Funding:** SoftBank's investment is in three tranches, and Amazon's $35 billion is conditional—this money isn't paid upfront. If any link breaks (e.g., OpenAI IPO fails), subsequent funding could be pulled.
3. **The End-Demand Gap:** Of M365 Copilot's 15 million paid seats, the actual conversion rate is only ~35.8% (representing 3.3% of 4.5 billion M365 users). How much actual, monetizable ROI are enterprises getting from AI? Is a $30 monthly premium sustainable long-term?

---

## IV. In-House Chips: Signing Up for the Gym Doesn't Guarantee Six-Pack Abs

OpenAI's other card, besides financing, is the in-house chip codenamed "Titan."

| Dimension | Google TPU | OpenAI Titan |
|---|---|---|
| Generation | 7th Gen (TPU v7) | 1st Gen |
| Team Size | Thousands of people | ~20 people |
| Dev History | A decade of iterations | Just starting |
| Design Approach | Fully independent | Outsourced to Broadcom |
| Foundry | Custom team + TSMC | TSMC 3nm |
| Function | Training + Inference | **Inference only** (Training still relies on Nvidia) |
| Mass Production | Deployed at scale | Earliest H2 2026 |

Even if Titan goes smoothly, it only reduces partial inference costs; training still entirely depends on Nvidia.

Furthermore, TSMC's advanced process nodes are highly contested—Google, Nvidia, Apple, and AMD are all in line. Broadcom publicly stated that capacity is the bottleneck. Good luck to OpenAI trying to jump the queue as a new customer.

---

## V. DeepSeek's Wake-Up Call

If the perpetual motion machine represents the belief that "throwing money creates a moat," DeepSeek is the heavy punch that broke that belief.

**Core Event:** In early 2025, China's DeepSeek released its V3 and R1 models. The training cost was only $5.5–$6 million, yet it achieved reasoning capabilities comparable to GPT-4.

**How did they do it?**
- **Mixture-of-Experts (MoE) Architecture:** Only a small subset of parameters is activated per token, drastically reducing compute.
- **FP8 Mixed-Precision Training:** Using fewer bits to represent numbers, reducing memory usage and accelerating training.
- **Knowledge Distillation:** Using the output of larger models to train smaller ones, avoiding the redundancy of training from scratch.

**Impact on the Industry:**
1. **Nvidia Stock Plunge:** The day DeepSeek dropped, Nvidia experienced its largest single-day market cap evaporation in history. Investors questioned: If cheaper models work, who still needs so many expensive GPUs?
2. **OpenAI's Valuation Logic Shaken:** If the assumption "massive spending = unassailable moat" is broken, can OpenAI's $100 billion financing rounds and $850 billion valuation stand?
3. **Geopolitical Shockwaves:** The US strategy to restrict China's access to high-end chips via export controls was bypassed by DeepSeek's algorithmic innovations. This forced the West to re-evaluate the effectiveness of its "hardware blockade."

---

## VI. So How Long Can this Perpetual Motion Machine Spin?

There is a specific deadline: **Q4 2026 to 2027.**

OpenAI aims for an IPO by late 2026. Once public, the rules of the game fundamentally change—a listed company must publish quarterly financial reports. The cyclic financing structure, true gross margins, and actual cash burn will be laid bare under the sun.

Anthropic is also prepping an IPO, possibly in October 2026. As both companies go public together, market transparency will drastically increase, allowing investors to directly compare their financial health.

**Worst-case scenario:** If end-demand growth isn't fast enough, disappointing post-IPO earnings could trigger a rapid contraction of the entire AI investment cycle, rippling through OpenAI, Nvidia, CoreWeave, and even Microsoft's Azure cloud.

**Best-case scenario:** Enterprise AI adoption skyrockets in the next 1-2 years, end-demand catches up with the scale of investment, and the perpetual motion machine transforms into a true flywheel effect.

**This perpetual motion machine has at most 1-2 more years to spin before the truth comes to light.**

👉 [Theme 04: Microsoft's Four Tightening Spells](04_Microsofts_Four_Tightening_Spells.md)
