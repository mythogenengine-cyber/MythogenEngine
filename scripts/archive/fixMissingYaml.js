const fs = require('fs');

const zhHkFile = 'i18n/zh-HK/docusaurus-plugin-content-docs/current/TechNotes/FABLE 不只是智力提升，AI 正在把專家直覺變成基礎設施.md';
const enFile = 'i18n/en/docusaurus-plugin-content-docs/current/TechNotes/FABLE 不只是智力提升，AI 正在把專家直覺變成基礎設施.md';

const zhHkYaml = `---
title: "FABLE 不只是智力提升，AI 正在把專家直覺變成基礎設施"
date: 2026-07-01
lang: zh-HK
section: sober-record
topic: t-ai
article_tags:
  zh:
    - AI
    - FABLE
    - 專家直覺
  en:
    - ai
    - fable
    - expert-intuition
keywords:
  - FABLE
  - AI
  - 專家直覺
summary: "每一次 AI 的智力提升到某個臨界點，都會產生質變——不是做同樣的事做得更好，而是突然做到以前根本做不到的事。"
status: published
reading_time: 8
sidebar_position: 1
description: "每一次 AI 的智力提升到某個臨界點，都會產生質變——不是做同樣的事做得更好，而是突然做到以前根本做不到的事。"
---
`;

const enYaml = `---
title: "FABLE: It's Not Just About Smarter AI — It's Turning Expert Intuition into Infrastructure"
date: 2026-07-01
lang: en
section: sober-record
topic: t-ai
article_tags:
  zh:
    - AI
    - FABLE
    - 專家直覺
  en:
    - ai
    - fable
    - expert-intuition
keywords:
  - FABLE
  - AI
  - Expert Intuition
summary: "Every time AI's intelligence reaches a certain threshold, a qualitative shift occurs — not doing the same things better, but suddenly doing things that were previously impossible."
status: published
reading_time: 8
sidebar_position: 1
description: "Every time AI's intelligence reaches a certain threshold, a qualitative shift occurs — not doing the same things better, but suddenly doing things that were previously impossible."
---
`;

const zhHkContent = fs.readFileSync(zhHkFile, 'utf-8');
if (!zhHkContent.startsWith('---')) {
  fs.writeFileSync(zhHkFile, zhHkYaml + zhHkContent, 'utf-8');
  console.log('Added YAML to zh-HK FABLE file');
}

const enContent = fs.readFileSync(enFile, 'utf-8');
if (!enContent.startsWith('---')) {
  fs.writeFileSync(enFile, enYaml + enContent, 'utf-8');
  console.log('Added YAML to en FABLE file');
}
