import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import { Cpu, Network, Activity, Moon, Layers, Sparkles, ArrowRight, Gamepad2, Monitor, BookOpen, Zap, Binary, Radio, PenLine, Heart, Coffee, Shield } from 'lucide-react';

function HeroSection() {
  const { i18n } = useDocusaurusContext();
  const locale = i18n.currentLocale;
  const isZhTW = locale === 'zh-Hant';
  const isZhHK = locale === 'zh-HK';
  const isEn = locale === 'en';

  // Core headline
  const headline1 = isEn ? "AI isn't the problem." : 'AI 不是問題，';
  const headline2 = isEn ? 'The coverings are.' : '遮蓋物才是。';

  // Covering structure lines
  const coveringLines = isZhTW
    ? ['文筆遮蓋空洞', '證書遮蓋缺席', '企業話術遮蓋權力運作']
    : isZhHK
    ? ['文筆遮蓋空洞', '證書遮蓋缺席', '企業話術遮蓋權力運作']
    : ['Prose covers emptiness', 'Credentials cover absence', 'Corporate rhetoric covers power dynamics'];

  // Dash sentence
  const dashLine = isZhTW
    ? '——AI 只是把它們一次性掀開。'
    : isZhHK
    ? '——AI 只係將佢哋一次過掀開。'
    : '— AI just rips them all off at once.';

  // Closing sentence
  const closingLine = isZhTW
    ? '從敘事的製造、成本的轉嫁、焦慮的套利，一路追到意識的結構。不賣焦慮，不賣工具，拆的是底層力學。技術會變，平台會換，但驅動這一切的機制不會變——看懂了力學，技術怎麼變都不怕。'
    : isZhHK
    ? '從敘事嘅製造、成本嘅轉嫁、焦慮嘅套利，一路追到意識嘅結構。唔賣焦慮，唔賣工具，拆嘅係底層力學。技術會變，平台會換，但驅動呢一切嘅機制唔會變——睇明咗力學，技術點變都唔使驚。'
    : 'From the manufacturing of narratives, to the passing of costs, to the arbitrage of anxiety — all the way to the structure of consciousness. No anxiety to sell. No tools to peddle. What it dismantles is the underlying mechanics. Technology changes, platforms shift, but the mechanisms driving it all remain — understand the mechanics, and no change can catch you off guard.';

  const readBook = isEn ? 'Read the Book' : '閱讀全書';
  const sponsor = isEn ? 'Sponsor' : '贊助支持';

  return (
    <header className="hero-banner">
      <div className="container-wide">
        <div className={styles.heroBookSection}>
          {/* Left: Text content */}
          <div className={styles.heroContent}>
            <div style={{ marginBottom: '0.5rem' }}>
              <span className="badge" style={{ background: 'linear-gradient(135deg, #00f3ff, #b600f8)', border: 'none', color: 'black', fontWeight: 600, fontSize: '0.7rem', padding: '0.2rem 0.6rem', borderRadius: '4px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                {isEn ? 'NEW BOOK · 2026' : '全新出版 · 2026'}
              </span>
            </div>
            <h1 className={styles.heroHeadline}>
              {headline1}<br />
              <span className={styles.heroHeadlineAccent}>{headline2}</span>
            </h1>
            <div className={styles.coveringLines}>
              {coveringLines.map((line, i) => (
                <div key={i} className={styles.coveringLine}>{line}</div>
              ))}
            </div>
            <p className={styles.heroDash}>{dashLine}</p>
            <p className={styles.heroClosing}>{closingLine}</p>
            <div className={styles.heroActions}>
              <Link
                className="button button--outline button--primary button--lg"
                to="/docs/AI_TAO/INFO_PAGE"
                style={{ borderWidth: '2px', fontWeight: 500 }}>
                {readBook} <ArrowRight size={18} style={{ marginLeft: '0.4rem' }} />
              </Link>
              <Link
                className="button button--outline button--lg"
                to="https://portaly.cc/Mythogen"
                style={{ borderColor: 'var(--color-secondary-container)', color: 'var(--color-secondary-container)' }}>
                {sponsor}
              </Link>
              <Link
                className="button button--outline button--lg"
                to="https://matters.town/@mythogenengine"
                style={{ borderColor: 'var(--ifm-color-warning)', color: 'var(--ifm-color-warning)' }}>
                MATTERS
              </Link>
            </div>
          </div>

          {/* Right: Book cover */}
          <div className={styles.heroCoverWrap}>
            <Link to="/docs/AI_TAO/INFO_PAGE">
              <img
                src="/img/book_cover_invisible_path.png"
                alt={isEn ? 'The Invisible Path — Book Cover' : '大道無形 — 書封面'}
                className={styles.heroCoverImg}
              />
            </Link>
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
          {/* The Invisible Path (col-12) */}
          <div className="col col--12 margin-bottom--lg">
            <div className="card shadow--md" style={{ 
              background: 'var(--color-surface-container-lowest)', 
              padding: '3rem', 
              borderRadius: '0.25rem',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              border: 'none',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{ position: 'absolute', top: 0, right: 0, width: '400px', height: '300px', background: 'linear-gradient(135deg, #00f3ff, #b600f8)', filter: 'blur(120px)', opacity: 0.12, borderRadius: '50%' }}></div>
              <div style={{ position: 'relative', zIndex: 1, flex: 1, paddingRight: '2rem' }}>
                <div className="flex space-x-4 mb-8" style={{ color: 'var(--ifm-color-primary)', display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <Shield size={36} strokeWidth={1.5} />
                  <Sparkles size={36} strokeWidth={1.5} />
                  <BookOpen size={36} strokeWidth={1.5} />
                  <span className="badge" style={{ background: 'linear-gradient(135deg, #00f3ff, #b600f8)', border: 'none', color: 'black', fontWeight: 600, fontSize: '0.75rem', padding: '0.25rem 0.75rem', borderRadius: '4px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    {isEn ? 'NEW RELEASE' : '全新上架'}
                  </span>
                </div>
                <h2 className="text-4xl font-headline mb-4" style={{ fontSize: '2.5rem', color: 'white', fontWeight: 200 }}>
                  {isEn ? 'The Invisible Path' : '大道無形'} <br />
                  <span className="text-on-surface-variant font-light text-2xl italic" style={{ fontSize: '1.4rem', display: 'block', marginTop: '0.5rem', color: 'var(--color-on-surface-variant)' }}>
                    {isEn ? 'Narrative, Tools, and the Last Line of Defence' : '敘事、工具與意識的最後防線'}
                  </span>
                </h2>
                <div style={{ color: 'var(--color-on-surface-variant)', fontWeight: 300, lineHeight: 1.7, fontSize: '1.05rem' }}>
                  {isZhTW ? (
                    <p>AI 不是問題，遮蓋物才是。文筆遮蓋空洞，證書遮蓋缺席，企業話術遮蓋權力運作——AI 只是把它們一次性掀開。從敘事的製造、成本的轉嫁、焦慮的套利，一路追到意識的結構。不賣焦慮，不賣工具，拆的是底層力學。</p>
                  ) : isZhHK ? (
                    <p>AI 唔係問題，遮蓋物先係。文筆遮蓋空洞，證書遮蓋缺席，企業話術遮蓋權力運作——AI 只係將佢哋一次過掀開。從敘事嘅製造、成本嘅轉嫁、焦慮嘅套利，一路追到意識嘅結構。唔賣焦慮，唔賣工具，拆嘅係底層力學。</p>
                  ) : (
                    <p>AI isn't the problem — the coverings are. Prose covers emptiness, credentials cover absence, corporate rhetoric covers power dynamics. AI just rips them all off at once. From narrative manufacturing to cost displacement to anxiety arbitrage — all the way to the structure of consciousness. No anxiety to sell. No tools to peddle. It dismantles the underlying mechanics.</p>
                  )}
                </div>
              </div>
              <div className="margin-left--lg" style={{ position: 'relative', zIndex: 1, minWidth: '160px', textAlign: 'right' }}>
                <Link to="/docs/AI_TAO/INFO_PAGE" className="button button--outline button--primary button--lg" style={{ borderWidth: '2px', fontWeight: 500, display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                  {isEn ? 'Read Book' : '閱讀全書'} <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>

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
                  Mirror Realm
                </h2>
                <div style={{ color: 'var(--color-on-surface-variant)', fontWeight: 300 }}>
                  {isZhTW ? (
                    <>
                      <p>一個工程師走進設計好讓你輸的系統。說的、寫的、做的，從來都不是同一套——他花了四年才聽到這句話的重量。</p>
                      <p>如果你在一間大公司裡，覺得有些事情不對勁，但說不清楚哪裡不對——這本書試圖替你命名。以虛構島嶼為舞台，解剖制度如何在不需要壞人的情況下，把人磨碎。</p>
                    </>
                  ) : isZhHK ? (
                    <>
                      <p>一個工程師走進設計好要你輸嘅系統。講嘅、寫嘅、做嘅，從來都唔係同一套——佢用咗四年先聽到呢句話嘅重量。</p>
                      <p>如果你喺一間大公司入面，覺得有啲嘢唔對路，但講唔清楚邊度唔對——呢本書試圖幫你命名。以虛構島嶼為舞台，解剖制度點樣喺唔需要壞人嘅情況下，將人磨碎。</p>
                    </>
                  ) : (
                    <>
                      <p>An engineer walks into a system designed to make you lose. What is said, written, and done are never the same—it took him four years to hear the weight of these words.</p>
                      <p>If you're in a large corporation and feel something is wrong but can't articulate what it is—this book attempts to name it for you. Set on a fictional island, it dissects how institutions grind people down without needing villains.</p>
                    </>
                  )}
                </div>
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
                <Link to="/docs/TechNotes" style={{ color: 'var(--ifm-color-warning, #ff9800)', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontWeight: 300 }}>
                  {isEn ? 'Read Commentary' : '閱讀評論'} <ArrowRight size={20} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          {/* Diary */}
          <div className="col col--12 margin-bottom--lg">
            <div className="card shadow--md" style={{ 
              background: 'var(--color-surface-container-lowest)', 
              padding: '3rem', 
              borderRadius: '0.25rem',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              border: 'none',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{ position: 'absolute', bottom: 0, left: 0, width: '300px', height: '200px', background: 'var(--ifm-color-danger, #e91e63)', filter: 'blur(120px)', opacity: 0.08, borderRadius: '50%' }}></div>
              <div style={{ position: 'relative', zIndex: 1, flex: 1 }}>
                <div className="flex space-x-4 mb-8" style={{ color: 'var(--ifm-color-danger, #e91e63)', display: 'flex', gap: '1rem' }}>
                  <PenLine size={36} strokeWidth={1.5} />
                  <Heart size={36} strokeWidth={1.5} />
                  <Coffee size={36} strokeWidth={1.5} />
                </div>
                <h2 className="text-4xl font-headline mb-4" style={{ color: 'white' }}>
                  {isEn ? 'Diary' : '隨心書寫'} <br />
                  <span className="text-on-surface-variant font-light text-2xl italic" style={{ fontSize: '1.5rem', display: 'block', marginTop: '0.5rem' }}>
                    {isEn ? '(Personal Reflections)' : '（隨筆與日記）'}
                  </span>
                </h2>
                <p style={{ color: 'var(--color-on-surface-variant)', fontWeight: 300 }}>
                  {isZhTW
                    ? '沒有框架，沒有計劃，只是寫。關於職場、關於系統、關於一個人怎麼在體制裡找到自己的語言。'
                    : isZhHK
                    ? '冇框架，冇計劃，只係寫。關於職場、關於系統、關於一個人點喺體制入面搵到自己嘅語言。'
                    : 'No framework, no plan, just writing. About the workplace, about the system, about how one person finds their own language within institutions.'}
                </p>
              </div>
              <div className="margin-left--lg" style={{ position: 'relative', zIndex: 1 }}>
                <Link to="/docs/Diary" style={{ color: 'var(--ifm-color-danger, #e91e63)', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontWeight: 300 }}>
                  {isEn ? 'Read Diary' : '閱讀隨筆'} <ArrowRight size={20} />
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
