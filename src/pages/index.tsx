import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { ArrowRight } from 'lucide-react';
import styles from './index.module.css';
import RecentUpdates from '@site/src/components/RecentUpdates';
import { catalogTitle } from '@site/src/utils/catalog';
import catalog from '@site/src/data/catalog.json';
import technotesData from '@site/src/data/technotes.json';
import diaryData from '@site/src/data/diary.json';

// 首頁三段（用戶 2026-11-04 決定的次序）：
//   1. 作品導航：書｜系列｜清醒記錄｜散文 四個入口（名稱與介紹在 src/data/catalog.json 的 sections）
//   2. 最新文章（RecentUpdates）
//   3. 宣言與最新著作《大道無形》

type Names = { [locale: string]: string };
type Section = { to: string; title: Names; intro: Names; unit: Names };

function pick(names: Names, locale: string): string {
  return names[locale] || names['zh-Hant'];
}

function useLocale() {
  const { i18n } = useDocusaurusContext();
  const locale = i18n.currentLocale;
  return { locale, isEn: locale === 'en', isZhHK: locale === 'zh-HK' };
}

// ---------- 1. 作品導航 ----------
function SectionNav() {
  const { locale, isEn } = useLocale();
  const sections = (catalog as unknown as { sections: Record<string, Section> }).sections;
  const count = (list: unknown) => (Array.isArray(list) ? list.length : 0);
  const counts: Record<string, number> = {
    books: catalog.books.length,
    series: catalog.series.length,
    notes: count((technotesData as Record<string, unknown>)[locale] ?? (technotesData as Record<string, unknown>)['zh-Hant']),
    essays: count((diaryData as Record<string, unknown>)[locale] ?? (diaryData as Record<string, unknown>)['zh-Hant']),
  };

  return (
    <header className={styles.navHero}>
      <div className="container-wide">
        <p className={styles.kicker}>{isEn ? 'Nebula Walker · 星忘塵' : '星忘塵 · Nebula Walker'}</p>
        <h1 className={styles.siteTitle}>Mythogen Engine</h1>
        <p className={styles.tagline}>
          {isEn
            ? 'Industry and capital structure analysis, long-form books and essays.'
            : '產業與資本結構分析、長篇著作與散文。'}
        </p>

        <nav className={styles.sectionGrid} aria-label={isEn ? 'Sections' : '分類'}>
          {Object.entries(sections).map(([key, s]) => (
            <Link key={key} to={s.to} className={styles.sectionCard}>
              <span className={styles.sectionHead}>
                <span className={styles.sectionTitle}>{pick(s.title, locale)}</span>
                <span className={styles.sectionCount}>
                  {counts[key]} {pick(s.unit, locale)}
                </span>
              </span>
              <span className={styles.sectionIntro}>{pick(s.intro, locale)}</span>
              <span className={styles.sectionArrow} aria-hidden="true">
                <ArrowRight size={18} />
              </span>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

// ---------- 3. 宣言與最新著作 ----------
function Manifesto() {
  const { locale, isEn, isZhHK } = useLocale();
  const bookTitle = catalogTitle('books', 'ai-tao', locale);

  const coveringLines = isEn
    ? ['Prose covers emptiness', 'Credentials cover absence', 'Corporate rhetoric covers power dynamics']
    : ['文筆遮蓋空洞', '證書遮蓋缺席', '企業話術遮蓋權力運作'];

  const dashLine = isEn
    ? '— AI just rips them all off at once.'
    : isZhHK
    ? '——AI 只係將佢哋一次過掀開。'
    : '——AI 只是把它們一次性掀開。';

  const closingLine = isEn
    ? 'From the manufacturing of narratives, to the passing of costs, to the arbitrage of anxiety — all the way to the structure of consciousness. No anxiety to sell. No tools to peddle. What it dismantles is the underlying mechanics. Technology changes, platforms shift, but the mechanisms driving it all remain — understand the mechanics, and no change can catch you off guard.'
    : isZhHK
    ? '從敘事嘅製造、成本嘅轉嫁、焦慮嘅套利，一路追到意識嘅結構。唔賣焦慮，唔賣工具，拆嘅係底層力學。技術會變，平台會換，但驅動呢一切嘅機制唔會變——睇明咗力學，技術點變都唔使驚。'
    : '從敘事的製造、成本的轉嫁、焦慮的套利，一路追到意識的結構。不賣焦慮，不賣工具，拆的是底層力學。技術會變，平台會換，但驅動這一切的機制不會變——看懂了力學，技術怎麼變都不怕。';

  return (
    <section className={styles.manifesto}>
      <div className="container-wide">
        <div className={styles.manifestoInner}>
          <div className={styles.manifestoText}>
            <p className={styles.badge}>{isEn ? 'NEW BOOK · 2026' : '全新出版 · 2026'}</p>
            <h2 className={styles.manifestoHeadline}>
              {isEn ? "AI isn't the problem." : 'AI 不是問題，'}
              <br />
              <span className={styles.accent}>{isEn ? 'The coverings are.' : '遮蓋物才是。'}</span>
            </h2>
            <ul className={styles.coveringLines}>
              {coveringLines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
            <p className={styles.dashLine}>{dashLine}</p>
            <p className={styles.closingLine}>{closingLine}</p>
            <div className={styles.actions}>
              <Link className={`${styles.button} ${styles.buttonPrimary}`} to="/docs/AI_TAO/INFO_PAGE">
                {isEn ? 'Read' : '閱讀'} {isEn ? bookTitle : `《${bookTitle}》`} <ArrowRight size={16} />
              </Link>
              <Link className={`${styles.button} ${styles.buttonSponsor}`} to="https://portaly.cc/Mythogen">
                {isEn ? 'Sponsor' : '贊助支持'}
              </Link>
              <Link className={`${styles.button} ${styles.buttonMatters}`} to="https://matters.town/@mythogenengine">
                Matters
              </Link>
            </div>
          </div>
          <Link to="/docs/AI_TAO/INFO_PAGE" className={styles.coverLink}>
            <img
              src="/img/book_cover_invisible_path.jpg"
              alt={`${bookTitle} — ${isEn ? 'Book Cover' : '書封面'}`}
              className={styles.coverImg}
              loading="lazy"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const { locale, isEn } = useLocale();
  return (
    <Layout
      title="Mythogen Engine"
      description={
        isEn
          ? 'Mythogen Engine by Nebula Walker: industry and capital structure analysis, long-form books and essays.'
          : locale === 'zh-HK'
          ? 'Mythogen Engine｜星忘塵：產業與資本結構分析、長篇著作與散文。'
          : 'Mythogen Engine｜星忘塵：產業與資本結構分析、長篇著作與散文。'
      }>
      <main>
        <SectionNav />
        <RecentUpdates />
        <Manifesto />
      </main>
    </Layout>
  );
}
