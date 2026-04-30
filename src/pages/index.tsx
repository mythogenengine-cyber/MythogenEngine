import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import { Cpu, Network, Activity, Moon, Layers, Sparkles, ArrowRight, Gamepad2, Monitor, BookOpen, Zap, Binary, Radio } from 'lucide-react';

function HeroSection() {
  const { i18n } = useDocusaurusContext();
  const locale = i18n.currentLocale;
  const isZhTW = locale === 'zh-Hant';
  const isZhHK = locale === 'zh-HK';
  const isEn = locale === 'en';

  const tagline = isZhTW
    ? 'AI 產業深度分析 ✕ 科幻敘事 ✕ 科技歷史'
    : isZhHK
    ? 'AI 產業深度分析 ✕ 科幻敘事 ✕ 科技歷史'
    : 'AI Industry Analysis ✕ Sci-Fi Fiction ✕ Tech History';

  const subtitle = isZhTW
    ? '一個跨越產業評論、長篇小說與遊戲科技史的寫作計劃。不賣課、不販焦慮，只做清醒的記錄。'
    : isZhHK
    ? '一個跨越產業評論、長篇小說同遊戲科技史嘅寫作計劃。唔賣課、唔販焦慮，只做清醒嘅記錄。'
    : 'A writing project spanning industry commentary, serialized fiction, and the hidden history of gaming technology. No courses. No hype. Just clear-eyed documentation.';

  const startReading = isEn ? 'Start Reading' : '開始閱讀';
  const sponsor = isEn ? 'Sponsor' : '贊助支持';

  return (
    <header className="hero-banner">
      <div className="container-wide">
        <div className="row">
          <div className="col col--8">
            <h1 className="hero-title text-8xl font-extralight tracking-tighter leading-none mb-8" style={{ fontSize: '5rem', lineHeight: '1.1' }}>
              Mythogen Engine
            </h1>
            <p className="hero-subtitle text-xl font-light leading-relaxed max-w-2xl mb-4" style={{ color: 'var(--ifm-color-primary)', fontSize: '1.1rem', fontWeight: 300 }}>
              {tagline}
            </p>
            <p className="hero-subtitle text-xl font-light leading-relaxed max-w-2xl mb-12" style={{ color: 'var(--color-on-surface-variant)', fontSize: '1.1rem' }}>
              {subtitle}
            </p>
            <div className="flex space-x-4">
              <Link
                className="button button--outline button--primary button--lg"
                to="/docs/ai-war/guide">
                {startReading}
              </Link>
              <Link
                className="button button--outline button--lg"
                to="https://portaly.cc/Mythogen"
                style={{ marginLeft: '1rem', borderColor: 'var(--color-secondary-container)', color: 'var(--color-secondary-container)' }}>
                {sponsor}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function CategoryCards() {
  const { i18n } = useDocusaurusContext();
  const locale = i18n.currentLocale;
  const isZhTW = locale === 'zh-Hant';
  const isZhHK = locale === 'zh-HK';
  const isEn = locale === 'en';
  const isZh = isZhTW || isZhHK;

  return (
    <section className="padding-vert--xl" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.05)' }}>
      <div className="container-wide">
        <div className="row">
          {/* AI Ecosystem War */}
          <div className="col col--6 margin-bottom--lg">
            <div className="card shadow--md" style={{ 
              background: 'var(--color-surface-container-low)', 
              padding: '3rem', 
              borderRadius: '0.25rem',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              border: 'none'
            }}>
              <div>
                <div className="flex space-x-4 mb-8" style={{ color: 'var(--ifm-color-primary)', display: 'flex', gap: '1rem' }}>
                  <Cpu size={36} strokeWidth={1.5} />
                  <Network size={36} strokeWidth={1.5} />
                  <Activity size={36} strokeWidth={1.5} />
                </div>
                <h2 className="text-4xl font-headline mb-4">
                  AI Ecosystem War <br />
                  <span className="text-on-surface-variant font-light text-2xl italic" style={{ fontSize: '1.5rem', display: 'block', marginTop: '0.5rem' }}>
                    {isEn ? '(Industry Analysis)' : '（產業分析書）'}
                  </span>
                </h2>
                <p style={{ color: 'var(--color-on-surface-variant)', fontWeight: 300 }}>
                  {isZhTW
                    ? '一份八章的深度研究：拆解微軟與蘋果的 AI 生態暗戰、OpenAI 的資金永動機、Claude Code 對 Copilot 的側翼突襲，以及這場戰爭的真正贏家與輸家。'
                    : isZhHK
                    ? '一份八章嘅深度研究：拆解微軟與蘋果嘅 AI 生態暗戰、OpenAI 嘅資金永動機、Claude Code 對 Copilot 嘅側翼突襲，以及呢場戰爭嘅真正贏家同輸家。'
                    : 'An eight-part deep dive: the silent war between Microsoft and Apple\'s AI ecosystems, OpenAI\'s funding perpetual motion machine, Claude Code\'s flanking attack on Copilot, and who actually wins and loses.'}
                </p>
              </div>
              <div className="margin-top--lg flex items-center" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Link to="/docs/ai-war/guide" style={{ color: 'var(--ifm-color-primary)', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontWeight: 300 }}>
                  {isEn ? 'Read the Book' : '閱讀全書'} <ArrowRight size={20} />
                </Link>
              </div>
            </div>
          </div>

          {/* Mirror Realm */}
          <div className="col col--6 margin-bottom--lg">
            <div className="card shadow--md" style={{ 
              background: 'var(--color-surface-container-lowest)', 
              padding: '3rem', 
              borderRadius: '0.25rem',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              border: 'none',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{ position: 'absolute', top: 0, right: 0, width: '200px', height: '200px', background: 'var(--color-secondary-container)', filter: 'blur(100px)', opacity: 0.1, borderRadius: '50%' }}></div>
              <div style={{ position: 'relative', zIndex: 1 }}>
                <div className="flex space-x-4 mb-8" style={{ color: 'var(--color-secondary-container)', display: 'flex', gap: '1rem' }}>
                  <Moon size={36} strokeWidth={1.5} />
                  <Layers size={36} strokeWidth={1.5} />
                  <Sparkles size={36} strokeWidth={1.5} />
                </div>
                <h2 className="text-4xl font-headline mb-4" style={{ color: 'white' }}>
                  Mirror Realm <br />
                  <span className="text-on-surface-variant font-light text-2xl italic" style={{ fontSize: '1.5rem', display: 'block', marginTop: '0.5rem' }}>
                    {isZh ? '(科幻小說)' : '(Sci-Fi Novel)'}
                  </span>
                </h2>
                <p style={{ color: 'var(--color-on-surface-variant)', fontWeight: 300 }}>
                  {isZhTW
                    ? '長篇連載科幻小說。一個由故障天體引擎渲染的世界，融合半自傳經歷、虛構世界觀與個人日記碎片。'
                    : isZhHK
                    ? '長篇連載科幻小說。一個由故障天體引擎渲染嘅世界，融合半自傳經歷、虛構世界觀同個人日記碎片。'
                    : 'A serialized sci-fi novel. A world rendered by a malfunctioning celestial engine, weaving together semi-autobiographical experience, fictional worldbuilding, and personal diary fragments.'}
                </p>
              </div>
              <div className="margin-top--lg" style={{ position: 'relative', zIndex: 1 }}>
                <Link to="/docs/mirror-realm/prologue" style={{ color: 'var(--color-secondary-container)', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontWeight: 300 }}>
                  {isEn ? 'Start from Prologue' : '從序章開始'} <ArrowRight size={20} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          {/* GameVictory */}
          <div className="col col--6 margin-bottom--lg">
            <div className="card shadow--md" style={{ 
              background: 'var(--color-surface-container-lowest)', 
              padding: '3rem', 
              borderRadius: '0.25rem',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              border: 'none',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{ position: 'absolute', top: 0, right: 0, width: '200px', height: '200px', background: 'var(--ifm-color-success, #4caf50)', filter: 'blur(100px)', opacity: 0.1, borderRadius: '50%' }}></div>
              <div style={{ position: 'relative', zIndex: 1 }}>
                <div className="flex space-x-4 mb-8" style={{ color: 'var(--ifm-color-success, #4caf50)', display: 'flex', gap: '1rem' }}>
                  <Gamepad2 size={36} strokeWidth={1.5} />
                  <Monitor size={36} strokeWidth={1.5} />
                  <BookOpen size={36} strokeWidth={1.5} />
                </div>
                <h2 className="text-4xl font-headline mb-4" style={{ color: 'white' }}>
                  GameVictory <br />
                  <span className="text-on-surface-variant font-light text-2xl italic" style={{ fontSize: '1.5rem', display: 'block', marginTop: '0.5rem' }}>
                    {isZh ? '(科技歷史)' : '(Tech History)'}
                  </span>
                </h2>
                <p style={{ color: 'var(--color-on-surface-variant)', fontWeight: 300 }}>
                  {isZhTW
                    ? '一本關於遊戲產業如何意外鋪設 AI 革命底層軌道的書。從 GPU 算力競賽到平台生態戰爭，四十年科技霸權的隱藏算術。'
                    : isZhHK
                    ? '一本關於遊戲產業點樣意外鋪設 AI 革命底層軌道嘅書。從 GPU 算力競賽到平台生態戰爭，四十年科技霸權嘅隱藏算術。'
                    : 'A book about how the gaming industry accidentally built the infrastructure for the AI revolution. From the GPU compute race to platform ecosystem wars — the hidden arithmetic of forty years of tech hegemony.'}
                </p>
              </div>
              <div className="margin-top--lg flex items-center" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', position: 'relative', zIndex: 1 }}>
                <Link to="/docs/GameVictory/INFO_PAGE" style={{ color: 'var(--ifm-color-success, #4caf50)', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontWeight: 300 }}>
                  {isEn ? 'Read the Book' : '閱讀本書'} <ArrowRight size={20} />
                </Link>
              </div>
            </div>
          </div>

          {/* Sci-Fi Vibe */}
          <div className="col col--6 margin-bottom--lg">
            <div className="card shadow--md" style={{ 
              background: 'var(--color-surface-container-low)', 
              padding: '3rem', 
              borderRadius: '0.25rem',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              border: 'none'
            }}>
              <div>
                <div className="flex space-x-4 mb-8" style={{ color: 'var(--ifm-color-warning, #ff9800)', display: 'flex', gap: '1rem' }}>
                  <Zap size={36} strokeWidth={1.5} />
                  <Binary size={36} strokeWidth={1.5} />
                  <Radio size={36} strokeWidth={1.5} />
                </div>
                <h2 className="text-4xl font-headline mb-4">
                  {isEn ? 'Lucid Record' : '清醒記錄'} <br />
                  <span className="text-on-surface-variant font-light text-2xl italic" style={{ fontSize: '1.5rem', display: 'block', marginTop: '0.5rem' }}>
                    {isEn ? '(Industry Notes & Commentary)' : '（產業筆記與評論）'}
                  </span>
                </h2>
                <p style={{ color: 'var(--color-on-surface-variant)', fontWeight: 300 }}>
                  {isZhTW
                    ? '獨立的 AI 產業評論與社會觀察。拆解賣課經濟的焦慮套利、AI 就業市場的結構性收縮、科技巨頭的敘事操作，以及被忽略的真實趨勢。'
                    : isZhHK
                    ? '獨立嘅 AI 產業評論同社會觀察。拆解賣課經濟嘅焦慮套利、AI 就業市場嘅結構性收縮、科技巨頭嘅敘事操作，以及被忽略嘅真實趨勢。'
                    : 'Independent AI industry commentary and social observation. Dissecting the anxiety arbitrage of the course-selling economy, structural contraction in AI job markets, tech giants\' narrative manipulation, and the real trends being overlooked.'}
                </p>
              </div>
              <div className="margin-top--lg" style={{ position: 'relative', zIndex: 1 }}>
                <Link to="/docs/category/lucid-record" style={{ color: 'var(--ifm-color-warning, #ff9800)', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontWeight: 300 }}>
                  {isEn ? 'Read Commentary' : '閱讀評論'} <ArrowRight size={20} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Refining the intersection of AI and speculative fiction.">
      <main>
        <HeroSection />
        <CategoryCards />
      </main>
    </Layout>
  );
}
