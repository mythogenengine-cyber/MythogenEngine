import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import { Cpu, Network, Activity, Moon, Layers, Sparkles, ArrowRight, Gamepad2, Monitor, BookOpen, Zap, Binary, Radio } from 'lucide-react';

function HeroSection() {
  const { i18n } = useDocusaurusContext();
  const isZh = i18n.currentLocale === 'zh-Hant' || i18n.currentLocale === 'zh-HK';

  return (
    <header className="hero-banner">
      <div className="container-wide">
        <div className="row">
          <div className="col col--8">
            <span className="font-label text-secondary tracking-widest uppercase text-xs mb-4 block" style={{ color: 'var(--color-secondary-container)' }}>
              {isZh ? '協定 01 // 核心網域整合' : 'Protocol 01 // Nexus Integration'}
            </span>
            <h1 className="hero-title text-8xl font-extralight tracking-tighter leading-none mb-8" style={{ fontSize: '5rem', lineHeight: '1.1' }}>
              {isZh ? '探索 AI 與敘事的' : 'Exploring the '}<span className="italic" style={{ color: 'var(--ifm-color-primary)' }}>{isZh ? '破碎現實' : 'Fractured Realities'}</span>{isZh ? '' : ' of AI & Narrative'}
            </h1>
            <p className="hero-subtitle text-xl font-light leading-relaxed max-w-2xl mb-12" style={{ color: 'var(--color-on-surface-variant)', fontSize: '1.25rem' }}>
              {isZh 
                ? '透過嚴謹的技術架構與推想敘事，進行合成智慧的雙軌探索。一次一行程式碼與文字，解密未來。'
                : 'A dual-track exploration of synthetic intelligence through rigorous technical architecture and speculative narrative threads. Decrypting the future, one line of code and prose at a time.'}
            </p>
            <div className="flex space-x-4">
              <Link
                className="button button--outline button--primary button--lg"
                to="/docs/ai-war/guide">
                {isZh ? '存取檔案庫' : 'Access Archives'}
              </Link>
              <Link
                className="button button--outline button--lg"
                to="https://portaly.cc/Mythogen"
                style={{ marginLeft: '1rem', borderColor: 'var(--color-secondary-container)', color: 'var(--color-secondary-container)' }}>
                {isZh ? '贊助支持' : 'Sponsor'}
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
  const isZh = i18n.currentLocale === 'zh-Hant' || i18n.currentLocale === 'zh-HK';

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
                    {isZh ? '(技術分析)' : '(Technical Analysis)'}
                  </span>
                </h2>
                <p style={{ color: 'var(--color-on-surface-variant)', fontWeight: 300 }}>
                  {isZh 
                    ? '深入探討大型語言模型編排、向量資料庫擴展，以及運算資源的地緣政治基礎架構。'
                    : 'Architectural deep-dives into LLM orchestration, vector database scaling, and the geopolitical infrastructure of compute.'}
                </p>
              </div>
              <div className="margin-top--lg flex items-center" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Link to="/docs/ai-war/guide" style={{ color: 'var(--ifm-color-primary)', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontWeight: 300 }}>
                  {isZh ? '啟動協定' : 'ENTER PROTOCOL'} <ArrowRight size={20} />
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
                  {isZh 
                    ? '穿越由故障天體引擎渲染的世界的連載史詩。在這裡，故障即是神。'
                    : 'A serialized odyssey through a world where reality is rendered by a malfunctioning celestial engine. Where the glitch is God.'}
                </p>
              </div>
              <div className="margin-top--lg" style={{ position: 'relative', zIndex: 1 }}>
                <Link to="/docs/mirror-realm/prologue" style={{ color: 'var(--color-secondary-container)', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontWeight: 300 }}>
                  {isZh ? '開始序列' : 'BEGIN SEQUENCE'} <ArrowRight size={20} />
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
                  {isZh 
                    ? '遊戲即未來：四十年科技霸權的隱藏算術。追蹤電子遊戲如何無意間鋪設了 AI 革命的底層軌道。'
                    : 'Gaming is the Future: The Hidden Arithmetic of Forty Years of Tech Hegemony. Tracing how video games inadvertently laid the foundation for the AI revolution.'}
                </p>
              </div>
              <div className="margin-top--lg flex items-center" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', position: 'relative', zIndex: 1 }}>
                <Link to="/docs/GameVictory/INFO_PAGE" style={{ color: 'var(--ifm-color-success, #4caf50)', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontWeight: 300 }}>
                  {isZh ? '閱讀手稿' : 'READ MANUSCRIPT'} <ArrowRight size={20} />
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
                  Sci-Fi Vibe <br />
                  <span className="text-on-surface-variant font-light text-2xl italic" style={{ fontSize: '1.5rem', display: 'block', marginTop: '0.5rem' }}>
                    {isZh ? '(技術筆記)' : '(Tech Notes)'}
                  </span>
                </h2>
                <p style={{ color: 'var(--color-on-surface-variant)', fontWeight: 300 }}>
                  {isZh 
                    ? '探索合成智慧與推想科技的邊界。包含各種關於 AI 開發、科幻設定與未來預測的實驗性筆記。'
                    : 'Exploring the edges of synthetic intelligence and speculative technology. Featuring experimental notes on AI development and sci-fi worldbuilding.'}
                </p>
              </div>
              <div className="margin-top--lg" style={{ position: 'relative', zIndex: 1 }}>
                <Link to="/docs/category/sci-fi-vibe" style={{ color: 'var(--ifm-color-warning, #ff9800)', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontWeight: 300 }}>
                  {isZh ? '瀏覽筆記' : 'BROWSE NOTES'} <ArrowRight size={20} />
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
