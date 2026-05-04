Author: 星忘塵 Nebula Walker
Date: 03MAY2026
Mythogen Engine

Google Is No Longer Designed for You Either: When Free Models Become the Gateway to Enterprise Cloud

—

In my previous article, I used Anthropic's Opus 4.7 as a case study to argue that AI models are shifting from "smart chat companions" to "components for enterprise deployment." A reader asked: is this just Anthropic's strategy, or is it the direction of the entire industry?

The answer was revealed on April 22, 2026 in Las Vegas.

Google Cloud Next 2026—over 32,000 attendees, three Keynotes, 700+ breakout sessions, 490+ sponsors. Nearly every announcement Google made at this event was saying the same thing:

Models are free. Infrastructure is the business.

—

▍What Did Google Cloud Next 2026 Announce?

According to the official Google Cloud blog, the core products released include: Gemini Enterprise Agent Platform (integrating the former Vertex AI), Agent Development Kit graphical framework upgrade, Agent Studio low-code interface, Agent Registry for unified management, Agent Memory Bank for cross-conversation memory, and the A2A protocol version 1.0. The partner marketplace already features enterprises including Atlassian, Box, Oracle, ServiceNow, and Workday.

Pull out the keywords from these announcements: framework, standardization, protocol, monitoring, deployment, CI/CD, security, cloud infra, governance.

Notice—none of these words appear: creativity, companionship, better conversation, personal intelligence.

Taiwan-based Google Developer Expert Yu-Wei Liu attended the entire event from closed-door sessions to the Developer Keynote. His observations summarized the same direction: Agent development architecture has been standardized, Agents can communicate with each other, Agents can be monitored, can be deployed anywhere, and the security framework is built. He used a telling metaphor: "When you hire employees, you have to protect your employees."

This was not a conference about how AI is getting smarter. This was a conference about how AI is being absorbed into enterprise software engineering systems.

—

▍The Apparent Star Is the Model; the Actual Star Is the Cloud

The core message repeated throughout Google Cloud Next 2026 was: Google is the only vendor offering first-party solutions across the entire enterprise AI stack. Sundar Pichai used nearly identical phrasing during the earnings call that same month.

Translated into plainer language: others sell you parts; I sell you the entire production line.

But the core of the production line isn't the model—it's the cloud.

The model is the entry point. You build an Agent with ADK, and then what? You need Cloud Run for deployment, AlloyDB for vector search, Dataproc for Spark pipelines, Secret Manager for API keys, Cloud Monitoring for tracing, IAM for access control. Every step consumes Google Cloud's compute, storage, and network resources. Every step generates a bill.

Google doesn't need to make money from models. Google needs you to use models to build Agents, and then those Agents live on Google Cloud, continuously consuming resources.

How successful is this strategy?

In Q1 2026, Google Cloud revenue exceeded $20 billion, up 63% year-over-year. Operating profit tripled from the same period last year, reaching $6.6 billion. Operating margin jumped from 9.4% to 32.9%. Google Cloud now accounts for 18% of Alphabet's total revenue—up from 13.6% a year ago and 11.8% the year before.

Pichai stated directly on the earnings call: "Our enterprise AI solutions have become the primary growth driver for Google Cloud."

—

▍Free Models Aren't Charity—They're a Funnel

Google's pricing strategy is worth dissecting.

Consumer side: Gemini has a permanently free tier. The paid Google AI Pro is $19.99/month, nearly identical to ChatGPT Plus and Claude Pro.

API side: Gemini 3 Flash costs just $0.50 per million input tokens; Flash-Lite is only $0.25. By comparison, GPT-5.2 costs $1.75 and Claude Opus 4.6 costs $5. Google's entry price is 3 to 20 times cheaper than competitors.

Developer tools: Gemini CLI has a generous free tier, Google AI Studio is completely free. ADK is open-source—no charge.

Enterprise side: Gemini Enterprise Agent Platform pricing is based on vCPU hours and memory—this is not an AI pricing model; this is a cloud infrastructure pricing model.

The cheaper the model, the easier it is for developers to get started. The more developers, the more Agents deployed on Google Cloud. The more Agents, the greater the cloud consumption.

Free models aren't charity. Free models are the customer acquisition funnel for enterprise cloud revenue.

—

▍The A2A Protocol: A Single Model Is No Longer the Answer

Another major announcement at the conference was the Agent-to-Agent (A2A) protocol version 1.0—enabling different Agents to communicate and invoke one another. Google released A2A as an open standard, not a proprietary ecosystem, but a communication protocol the entire industry can share.

The old worldview was: find the strongest single model and hand it all your tasks.

The worldview A2A represents is: there is no omnipotent single model. The future is multiple specialized Agents collaborating to complete tasks—Research Agent, Coding Agent, Reviewer Agent, Sales Agent, Finance Agent, each with its own role.

This is the same trend as Anthropic's Opus 4.7, just a different facet. Opus 4.7 made model behavior more literal, more strict, more suitable for orchestration—it's becoming a better "component." Google's A2A is building the "communication protocol" that lets these components talk to each other.

Both companies are doing the same thing from different angles: redefining AI from "an independent smart assistant" to "a node in an orchestrable system."

—

▍The Hidden Layer That Was Removed: The Model Didn't Get Dumber, but the Free Lunch Is Over

There's a common misconception here that needs to be clarified.

Agents managing Agents is nothing new—open-source frameworks like LangChain, AutoGen, and CrewAI were already doing multi-agent orchestration between 2023 and 2024. The real contribution of Google's A2A 1.0 is standardizing communication between Agents, not inventing the concept of multi-agent collaboration.

The question truly worth examining is: did the model get dumber? Or were the things it used to do for you stripped away?

Looking at benchmark data, the model's core reasoning capabilities haven't declined—enterprise scenario scores have risen across the board. But user experience has indeed gotten worse, not because "intelligence decreased," but because the allocation of intelligence changed. More compute resources have been directed toward tool calling, safety checks, instruction compliance, and context compression—foundational capabilities needed for enterprise deployment—leaving relatively fewer resources for raw conversation scenarios.

Take Opus 4.7 as an example: Anthropic removed manual control over the thinking budget, letting the model decide on its own—this is a transfer of control, not a weakening of reasoning capability itself. But the model no longer proactively infers intent the user hasn't explicitly stated, no longer automatically fills in content the user didn't request. These previously built-in behaviors were effectively a hidden assistive layer (harness). This harness used to be included for free; now it's been removed.

For enterprises, removing it is a good thing—they already have their own pipelines, their own system prompts, their own error-handling workflows. The model acting on its own initiative was actually a risk.

For individual users, removing it is a disaster—the "smart completions" you previously enjoyed were actually work the platform was doing for you. Now that work has been pushed back onto you: you have to clearly articulate your intent yourself, build your own multi-agent review workflows, and design your own system prompts to reconstruct the assistive layer that was removed.

As the major players standardize these frameworks, they simultaneously shift the cost and responsibility of building those frameworks onto users. This is the structural reason "the model became harder to use"—it's not declining intelligence; it's the free lunch being taken back.

—

▍The Subtext of Monitoring Demands: AI Unreliability Is an Industry Consensus

The Developer Keynote at Google Cloud Next showcased a complete Agent debugging scenario: an Agent makes an error during execution, engineers use OpenTelemetry to trace every step of reasoning and tool invocation, set up alerts with Cloud Monitoring, use Gemini Cloud Assist to analyze logs and find the root cause, and finally locate the specific code error in the Antigravity IDE.

If AI were truly as reliable as a human expert, you wouldn't need tracing, logs, approval flows, rollback, or guardrails.

The massive investment enterprises are making in AI observability infrastructure is itself an admission: Agents are powerful, but fundamentally unstable.

Models hallucinate, falsely report completion, and are systematically overconfident—this isn't one company's problem; it's the entire industry's reality. The only difference is: enterprises have the budget to build monitoring systems to intercept these problems. Individual users don't.

—

▍From "Assistant" to "Employee"

In the overall narrative of Google Cloud Next 2026, AI is no longer described as a chat tool or personal assistant. It's described as the enterprise's digital workforce. The language repeated throughout the conference—deployment, governance, compliance, security environment, access control—is entirely the vocabulary of human resources and enterprise management.

AI used to be: chatbot, Q&A assistant, toy.

Now AI is: digital worker, organizational resource, workflow executor.

Enterprises are beginning to describe AI using human resources language. This isn't a rhetorical technique; it's a fundamental shift in product positioning.

When AI is positioned as an "employee," what it needs is no longer "more soulfulness" or "better conversation," but: manageability, auditability, controllability, accountability. These requirements are almost diametrically opposed to what individual users want—a "smart thinking partner."

—

▍What Does This Mean for Individual Users?

Put Google's moves alongside Anthropic's, and the pattern becomes even clearer.

→ Anthropic: Opus 4.7 became more strict, more literal, more suited for enterprise deployment. 80% of revenue comes from enterprises.

→ Google: Offers models for free to attract developers; the real business is cloud infrastructure. Q1 cloud revenue: $20 billion, up 63% YoY.

→ OpenAI: GPT-5.5's pricing strategy is similarly tilting toward enterprises, with increasingly complex API pricing structures while the consumer side is simplified.

All three major AI companies are moving in the same direction simultaneously. This isn't coincidence—it's market forces.

Consumer monthly fees have a ceiling at $20. Enterprise contracts can be $100,000, $1 million, $10 million. When your investors expect you to prove your business model, when your valuation needs revenue to support it—which direction the product will go is self-evident.

Google's strategy is actually somewhat friendlier than Anthropic's—at least the models are free or very cheap. But the trade-off is: what you're getting is a tool that increasingly resembles an "enterprise component," not an assistant that increasingly resembles a "smart friend."

—

▍The Work Model of the Next Decade

Multiple speakers at Google Cloud Next 2026 pointed in the same direction: the Agent-native generation is about to enter the workforce, and the work model will fundamentally change.

Old generation—do things yourself, use tools to assist.

New generation—manage Agents, assign tasks, review output, design workflows, control quality.

Human roles are moving toward "manager." Not managing people—managing AI.

And the ability to manage AI is an entirely different skill set from the ability to chat with AI.

—

Google Cloud Next 2026 was not announcing that AI has gotten smarter.

It was announcing: AI has been absorbed into enterprise software engineering systems, transforming from a consumer product into infrastructure.

What Google, Microsoft, OpenAI, and Anthropic are competing for is not the chatbot market. It's who can become the Windows + AWS + SAP conglomerate of the AI era.

In this race, individual users' experience has never been the deciding factor. Enterprise cloud bills are.

This is not a complaint. This is reality.

And recognizing reality is always the first step to adapting to it.

—

Data sources: Google Cloud official blog (Cloud Next 2026 Wrap Up), TechCrunch (2026/4/29 Q1 earnings report), Fortune (2026/4/29), Constellation Research, The Next Web, Oplexa, Google official pricing pages, IntuitionLabs API pricing comparison. Taiwan observations cited from GDE Yu-Wei Liu's post in the "Taiwan AI Enthusiasts Community."

[#GoogleCloud](https://www.facebook.com/hashtag/googlecloud?__cft__[0]=AZZIxIeCPzCDsfyu7ZSCE-J75IuMVeXMHW4rvRSPXA0GPkJgjvlyLc_OC3h60ArNBiEal3N9w3OdWSjz5zhksyclqkDfTXPnAHTSWTsiKD1hVii_YzmCO3wHo-988RlHENr0h5K0ayVBw1KeEfY-yX1qhAC7OMV_M-8SV4ldpPHg2FEPHBh4e0XGro2HlNialSRoWXwUkdHI0y4Td71GwBMb&__tn__=*NK-R) [#AIModels](https://www.facebook.com/hashtag/ai%E6%A8%A1%E5%9E%8B?__cft__[0]=AZZIxIeCPzCDsfyu7ZSCE-J75IuMVeXMHW4rvRSPXA0GPkJgjvlyLc_OC3h60ArNBiEal3N9w3OdWSjz5zhksyclqkDfTXPnAHTSWTsiKD1hVii_YzmCO3wHo-988RlHENr0h5K0ayVBw1KeEfY-yX1qhAC7OMV_M-8SV4ldpPHg2FEPHBh4e0XGro2HlNialSRoWXwUkdHI0y4Td71GwBMb&__tn__=*NK-R) [#EnterpriseAI](https://www.facebook.com/hashtag/%E4%BC%81%E6%A5%ADai?__cft__[0]=AZZIxIeCPzCDsfyu7ZSCE-J75IuMVeXMHW4rvRSPXA0GPkJgjvlyLc_OC3h60ArNBiEal3N9w3OdWSjz5zhksyclqkDfTXPnAHTSWTsiKD1hVii_YzmCO3wHo-988RlHENr0h5K0ayVBw1KeEfY-yX1qhAC7OMV_M-8SV4ldpPHg2FEPHBh4e0XGro2HlNialSRoWXwUkdHI0y4Td71GwBMb&__tn__=*NK-R) [#ConsumerVsEnterprise](https://www.facebook.com/hashtag/%E6%B6%88%E8%B2%BB%E8%80%85vs%E4%BC%81%E6%A5%AD?__cft__[0]=AZZIxIeCPzCDsfyu7ZSCE-J75IuMVeXMHW4rvRSPXA0GPkJgjvlyLc_OC3h60ArNBiEal3N9w3OdWSjz5zhksyclqkDfTXPnAHTSWTsiKD1hVii_YzmCO3wHo-988RlHENr0h5K0ayVBw1KeEfY-yX1qhAC7OMV_M-8SV4ldpPHg2FEPHBh4e0XGro2HlNialSRoWXwUkdHI0y4Td71GwBMb&__tn__=*NK-R) [#DeepAnalysis](https://www.facebook.com/hashtag/%E6%B7%B1%E5%BA%A6%E5%88%86%E6%9E%90?__cft__[0]=AZZIxIeCPzCDsfyu7ZSCE-J75IuMVeXMHW4rvRSPXA0GPkJgjvlyLc_OC3h60ArNBiEal3N9w3OdWSjz5zhksyclqkDfTXPnAHTSWTsiKD1hVii_YzmCO3wHo-988RlHENr0h5K0ayVBw1KeEfY-yX1qhAC7OMV_M-8SV4ldpPHg2FEPHBh4e0XGro2HlNialSRoWXwUkdHI0y4Td71GwBMb&__tn__=*NK-R) [#cloudnext2026](https://www.facebook.com/hashtag/cloudnext2026?__cft__[0]=AZZIxIeCPzCDsfyu7ZSCE-J75IuMVeXMHW4rvRSPXA0GPkJgjvlyLc_OC3h60ArNBiEal3N9w3OdWSjz5zhksyclqkDfTXPnAHTSWTsiKD1hVii_YzmCO3wHo-988RlHENr0h5K0ayVBw1KeEfY-yX1qhAC7OMV_M-8SV4ldpPHg2FEPHBh4e0XGro2HlNialSRoWXwUkdHI0y4Td71GwBMb&__tn__=*NK-R)

Previous article — Claude's Tilt Toward Enterprise

Have you noticed AI getting dumber lately?

It's not your imagination. But it's not the truth either.

The same Opus 4.7:

→ Software engineering benchmark up 11 points

→ Web search capability down 4 points

→ Enterprise customers say "the strongest"

→ Individual users say "hard to use and expensive"

Everything that improved serves enterprise scenarios. Everything that declined serves the features you use every day.

This is not a technical mishap. This is a business decision.

[https://www.facebook.com/share/p/1FtLscgR8G/](https://www.facebook.com/MythogenEngine/posts/pfbid0uVLZjbPutyjed19vxD56ystXgennnmmELNxH64syrCJ2kJq1cfWTfS3jsVWYAL5Gl?__cft__[0]=AZZIxIeCPzCDsfyu7ZSCE-J75IuMVeXMHW4rvRSPXA0GPkJgjvlyLc_OC3h60ArNBiEal3N9w3OdWSjz5zhksyclqkDfTXPnAHTSWTsiKD1hVii_YzmCO3wHo-988RlHENr0h5K0ayVBw1KeEfY-yX1qhAC7OMV_M-8SV4ldpPHg2FEPHBh4e0XGro2HlNialSRoWXwUkdHI0y4Td71GwBMb&__tn__=-UK-R)


![](Gemini_Generated_Image_ygytq4ygytq4ygyt.png)
