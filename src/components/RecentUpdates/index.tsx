import React, { useMemo } from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { ArrowRight, Sparkles } from 'lucide-react';
import styles from './styles.module.css';

import technotesData from '@site/src/data/technotes.json';
import catalog from '@site/src/data/catalog.json';
import diaryData from '@site/src/data/diary.json';
import financeData from '@site/src/data/finance.json';

interface ArticleItem {
  id: string;
  slug: string;
  title: string;
  date: string | null;
  lang?: string;
  section?: string;
  topic?: string;
  category?: string;
  summary?: string;
  status?: string;
  reading_time?: number;
  sectionType: 'technotes' | 'diary' | 'finance';
  sectionLabel: string;
}

export default function RecentUpdates() {
  const { i18n } = useDocusaurusContext();
  const locale = i18n.currentLocale;
  const isEn = locale === 'en';
  const isZhHK = locale === 'zh-HK';

  const localeKey = locale in technotesData ? locale : 'zh-Hant';
  // 分類名稱與連結由 src/data/catalog.json 的 sections 提供
  const sections = (catalog as any).sections;
  const sectionName = (key: string) => sections[key].title[locale] || sections[key].title['zh-Hant'];
  const notesName = sectionName('notes');
  const essaysName = sectionName('essays');
  const financeName = sectionName('finance');

  const recentArticles = useMemo(() => {
    const tnList: ArticleItem[] = ((technotesData as any)[localeKey] || []).map((a: any) => ({
      ...a,
      sectionType: 'technotes',
      sectionLabel: notesName,
    }));

    const diaryList: ArticleItem[] = ((diaryData as any)[localeKey] || []).map((a: any) => ({
      ...a,
      sectionType: 'diary',
      sectionLabel: essaysName,
    }));

    // 財經學習：來自 finance.json（scripts/generateHubs.js 生成），卡片標籤顯示欄目名
    const financeList: ArticleItem[] = ((financeData as any)[localeKey] || []).flatMap((s: any) =>
      s.docs.map((d: any) => ({
        id: d.id,
        slug: d.url,
        title: d.title,
        date: d.date,
        summary: d.description,
        status: d.status,
        reading_time: d.readingTime,
        sectionType: 'finance',
        sectionLabel: financeName,
      })),
    );

    const combined = [...tnList, ...financeList, ...diaryList].filter(
      item => item.id !== 'index' && item.date && item.status === 'published'
    );

    combined.sort((a, b) => {
      const timeA = a.date ? new Date(a.date).getTime() : 0;
      const timeB = b.date ? new Date(b.date).getTime() : 0;
      return timeB - timeA;
    });

    return combined.slice(0, 8);
  }, [localeKey, notesName, essaysName, financeName]);

  if (recentArticles.length === 0) {
    return null;
  }

  // Localized texts
  const badgeText = isEn ? 'RECENT UPDATES' : '最新動態';
  const headingText = isEn ? 'Latest Dispatches' : isZhHK ? '最新發布文章' : '最新發布文章';
  const subtitleText = isEn
    ? `The 8 most recent publications across ${notesName}, ${financeName} and ${essaysName}.`
    : `${notesName}、${financeName}與${essaysName}最新收錄的 8 篇文章。`;

  const techNotesLinkText = isEn ? `All ${notesName} →` : `所有${notesName} →`;
  const diaryLinkText = isEn ? `All ${essaysName} →` : `所有${essaysName} →`;
  const financeLinkText = isEn ? `All ${financeName} →` : `所有${financeName} →`;

  return (
    <section className={styles.section}>
      <div className="container-wide">
        <div className={styles.headerRow}>
          <div className={styles.titleArea}>
            <span className={styles.badge}>
              <Sparkles size={13} strokeWidth={2} />
              {badgeText}
            </span>
            <h2 className={styles.sectionTitle}>{headingText}</h2>
            <p className={styles.sectionSubtitle}>{subtitleText}</p>
          </div>
          <div className={styles.viewAllLinks}>
            <Link to={sections.notes.to} className={styles.viewAllLink}>
              {techNotesLinkText}
            </Link>
            <Link to={sections.finance.to} className={styles.viewAllLink}>
              {financeLinkText}
            </Link>
            <Link to={sections.essays.to} className={styles.viewAllLink}>
              {diaryLinkText}
            </Link>
          </div>
        </div>

        <div className={styles.grid}>
          {recentArticles.map((article) => {
            const formattedDate = article.date
              ? article.date.substring(0, 10).replace(/-/g, '.')
              : '';
            const readTimeText = article.reading_time
              ? isEn
                ? `${article.reading_time} min read`
                : `${article.reading_time} 分鐘閱讀`
              : '';

            const isDiary = article.sectionType === 'diary';

            return (
              <Link
                key={`${article.sectionType}-${article.id}`}
                to={article.slug}
                className={styles.card}
              >
                <div>
                  <div className={styles.cardTop}>
                    <span
                      className={`${styles.sectionBadge} ${
                        isDiary ? styles.badgeDiary : styles.badgeTechnotes
                      }`}
                    >
                      {article.category || article.sectionLabel}
                    </span>
                    <span className={styles.date}>{formattedDate}</span>
                  </div>
                  <h3 className={styles.cardTitle}>{article.title}</h3>
                  <p className={styles.cardExcerpt}>{article.summary}</p>
                </div>

                <div className={styles.cardFooter}>
                  <span className={styles.readingTime}>{readTimeText}</span>
                  <span className={styles.arrow}>→</span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
