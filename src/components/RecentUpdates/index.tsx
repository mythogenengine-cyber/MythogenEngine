import React, { useMemo } from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { ArrowRight, Sparkles } from 'lucide-react';
import styles from './styles.module.css';

import technotesData from '@site/src/data/technotes.json';
import diaryData from '@site/src/data/diary.json';

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
  sectionType: 'technotes' | 'diary';
  sectionLabel: string;
}

export default function RecentUpdates() {
  const { i18n } = useDocusaurusContext();
  const locale = i18n.currentLocale;
  const isEn = locale === 'en';
  const isZhHK = locale === 'zh-HK';

  const localeKey = locale in technotesData ? locale : 'zh-Hant';

  const recentArticles = useMemo(() => {
    const tnList: ArticleItem[] = ((technotesData as any)[localeKey] || []).map((a: any) => ({
      ...a,
      sectionType: 'technotes',
      sectionLabel: isEn ? 'Lucid Record' : '清醒記錄',
    }));

    const diaryList: ArticleItem[] = ((diaryData as any)[localeKey] || []).map((a: any) => ({
      ...a,
      sectionType: 'diary',
      sectionLabel: isEn ? 'Diary' : '隨心書寫',
    }));

    const combined = [...tnList, ...diaryList].filter(
      item => item.id !== 'index' && item.date && item.status === 'published'
    );

    combined.sort((a, b) => {
      const timeA = a.date ? new Date(a.date).getTime() : 0;
      const timeB = b.date ? new Date(b.date).getTime() : 0;
      return timeB - timeA;
    });

    return combined.slice(0, 8);
  }, [localeKey, isEn]);

  if (recentArticles.length === 0) {
    return null;
  }

  // Localized texts
  const badgeText = isEn ? 'RECENT UPDATES' : '最新動態';
  const headingText = isEn ? 'Latest Dispatches' : isZhHK ? '最新發布文章' : '最新發布文章';
  const subtitleText = isEn 
    ? 'The 8 most recent publications across Lucid Record and Diary.'
    : isZhHK
    ? '清醒記錄與隨心書寫最新收錄的 8 篇文章。'
    : '清醒記錄與隨心書寫最新收錄的 8 篇文章。';
  
  const techNotesLinkText = isEn ? 'All Lucid Record →' : '所有清醒記錄 →';
  const diaryLinkText = isEn ? 'All Diary →' : '所有隨心書寫 →';

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
            <Link to="/docs/TechNotes" className={styles.viewAllLink}>
              {techNotesLinkText}
            </Link>
            <Link to="/docs/Diary" className={styles.viewAllLink}>
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
