const fs = require('fs');
const path = require('path');

const zhHantPath = 'docs/TechNotes/環境如何令人變蠢——認知與判斷（後記）.md';
const zhHkPath = 'i18n/zh-HK/docusaurus-plugin-content-docs/current/TechNotes/環境如何令人變蠢——認知與判斷（後記）.md';
const enPath = 'i18n/en/docusaurus-plugin-content-docs/current/TechNotes/環境如何令人變蠢——認知與判斷（後記）.md';

const zhHantContent = fs.readFileSync(zhHantPath, 'utf-8');

// 1. Create zh-HK version
const zhHkContent = zhHantContent.replace('lang: zh-Hant', 'lang: zh-HK');
const zhHkDir = path.dirname(zhHkPath);
if (!fs.existsSync(zhHkDir)) fs.mkdirSync(zhHkDir, { recursive: true });
fs.writeFileSync(zhHkPath, zhHkContent, 'utf-8');
console.log('Created zh-HK file');

// 2. Create en version
const enYaml = `---
title: "How Environments Make People Foolish—Cognition and Judgment (Postscript)"
date: 2026-06-02
lang: en
section: sober-record
topic: t-education
article_tags:
  zh:
    - 認知與判斷
    - 心理操控
    - 媒體素養
    - 杏仁核劫持
  en:
    - cognition-and-judgment
    - psychological-manipulation
    - media-literacy
    - amygdala-hijack
keywords:
  - Amygdala Hijack
  - Gaslighting
  - Groupthink
  - Artificial Urgency
  - Cognitive Traps
summary: "Those who have never experienced immense pressure rarely realize that human judgment can be systematically eroded by environments. Gaslighting, peer pressure, and artificial urgency are not exclusive to scams, but cognitive traps present in daily life."
status: published
reading_time: 10
description: "Those who have never experienced immense pressure rarely realize that human judgment can be systematically eroded by environments. Gaslighting, peer pressure, and artificial urgency are not exclusive to scams, but cognitive traps present in daily life."
series:
  id: efficiency-trap-cognition-erosion
  name: "效率陷阱與認知侵蝕四部曲"
  order: 2
  total: 4
---
Author: Nebula Walker
Date: 02JUN2026
MYTHOGEN ENGINE (mythogenengine.com)

**📌 Those who have never experienced immense pressure rarely realize that human judgment can be systematically eroded by environments. Gaslighting, peer pressure, and artificial urgency are not exclusive to scams, but cognitive traps present in daily life. In an era where everything accelerates, reserving clearheaded time to make decisions is the most underrated survival skill.**

`;

// Extract body starting from `# 環境如何令人變蠢...`
const bodyStartIndex = zhHantContent.indexOf('# 環境如何令人變蠢');
const bodyContent = zhHantContent.slice(bodyStartIndex);
const enDir = path.dirname(enPath);
if (!fs.existsSync(enDir)) fs.mkdirSync(enDir, { recursive: true });
fs.writeFileSync(enPath, enYaml + bodyContent, 'utf-8');
console.log('Created en file');
