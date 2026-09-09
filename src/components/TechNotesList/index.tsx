import React, { useState, useMemo } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Link from '@docusaurus/Link';
import { Search } from 'lucide-react';
import styles from './styles.module.css';

// We import the generated JSON. It's generated pre-build.
import techNotesData from '@site/src/data/technotes.json';

const CATEGORIES = [
  '資本與退出機制',
  '半導體週期',
  '平台與分發',
  '產業與資本競爭',
  '認知與敘事',
  '教育與勞動',
] as const;

const CATEGORY_NAMES_EN: Record<string, string> = {
  '資本與退出機制': 'Capital & Exit',
  '半導體週期': 'Semiconductor Cycles',
  '平台與分發': 'Platforms & Distribution',
  '產業與資本競爭': 'Industry & Capital Competition',
  '認知與敘事': 'Cognition & Narratives',
  '教育與勞動': 'Education & Labor',
};

// Simple hash function to assign stable colors to dynamic tags
function getTagClass(tag) {
  const hash = tag.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const classes = [styles.tagAi, styles.tagJob, styles.tagEdu, styles.tagTech, styles.tagMedia];
  return classes[hash % classes.length];
}

export default function TechNotesList() {
  const { i18n } = useDocusaurusContext();
  const locale = i18n.currentLocale;
  
  // Get articles for current locale, fallback to zh-Hant if not found
  const articles = techNotesData[locale] || techNotesData['zh-Hant'] || [];
  
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('ALL');
  const [sortOrder, setSortOrder] = useState('newest');

  // Determine which tag sub-array to use based on locale
  const tagLang = locale.startsWith('en') ? 'en' : 'zh';

  // Filter articles
  const filteredArticles = useMemo(() => {
    const filtered = articles.filter(article => {
      // Search filter
      const searchLower = searchQuery.toLowerCase();
      const matchesSearch = 
        !searchQuery || 
        article.title.toLowerCase().includes(searchLower) || 
        (article.summary && article.summary.toLowerCase().includes(searchLower));

      // Category filter
      const matchesCategory = activeFilter === 'ALL' || article.category === activeFilter;

      return matchesSearch && matchesCategory;
    });

    // Sort by date
    return [...filtered].sort((a, b) => {
      const dateA = a.date ? new Date(a.date).getTime() : 0;
      const dateB = b.date ? new Date(b.date).getTime() : 0;
      return sortOrder === 'newest' ? dateB - dateA : dateA - dateB;
    });
  }, [articles, searchQuery, activeFilter, sortOrder]);

  // Determine featured: latest published article with a date, only when no search and ALL filter
  const featuredArticle = useMemo(() => {
    if (searchQuery !== '' || activeFilter !== 'ALL') return null;

    const published = articles.filter(a => a.status === 'published' && a.date);
    if (published.length === 0) return null;

    return [...published].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())[0];
  }, [articles, searchQuery, activeFilter]);
  
  // Articles for the grid
  const gridArticles = featuredArticle 
    ? filteredArticles.filter(a => a.id !== featuredArticle.id)
    : filteredArticles;

  return (
    <div className={styles.container}>
      <div className={`${styles.pageHeader} ${styles.animateIn}`}>
        <h1>{locale.startsWith('en') ? 'Lucid Record' : '清醒記錄'}</h1>
        <p className={styles.subtitle}>
          {locale.startsWith('en') 
            ? 'Commentary on industry, capital structures, technology, and social observation. Dissecting price signal breakdowns, market exit mechanisms, capital cycles, rent extraction, and the real underlying trends.' 
            : '產業與資本結構評論、科技與社會觀察。拆解價格訊號失靈與退出機制、資本週期與地租截流、賣課經濟的焦慮套利，以及被忽略的真實趨勢。'}<br/>
          <span>{locale.startsWith('en') ? '// No course selling, no anxiety mongering, just lucid records.' : '// 不賣課、不販焦慮，只做清醒的記錄。'}</span>
        </p>
      </div>

      {featuredArticle && (
        <Link to={featuredArticle.slug} className={`${styles.featured} ${styles.animateInDelay}`}>
          <div className={styles.featuredLabel}>
            {locale.startsWith('en') ? 'Featured Article' : '置頂文章'}
          </div>
          <h2>{featuredArticle.title}</h2>
          <p className={styles.excerpt}>{featuredArticle.summary}</p>
          <div className={styles.meta}>
            {(featuredArticle.tags[tagLang] || []).slice(0, 3).map(tag => (
              <span key={tag} className={`${styles.tag} ${getTagClass(tag)}`}>{tag}</span>
            ))}
            <span className={styles.date}>{featuredArticle.date ? featuredArticle.date.substring(0, 7).replace('-', '.') : ''}</span>
          </div>
          <span className={styles.readArrow}>→</span>
        </Link>
      )}

      <div className={styles.searchRow}>
        <div className={styles.searchBox}>
          <Search className={styles.searchIcon} size={16} />
          <input 
            type="text" 
            placeholder={locale.startsWith('en') ? 'Search articles...' : '搜尋文章...'} 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className={styles.sortControls}>
          <span className={styles.sortLabel}>{locale.startsWith('en') ? 'Sort:' : '排序:'}</span>
          <button
            className={`${styles.sortBtn} ${sortOrder === 'newest' ? styles.sortBtnActive : ''}`}
            onClick={() => setSortOrder('newest')}
          >
            {locale.startsWith('en') ? '↓ Newest' : '↓ 最新'}
          </button>
          <button
            className={`${styles.sortBtn} ${sortOrder === 'oldest' ? styles.sortBtnActive : ''}`}
            onClick={() => setSortOrder('oldest')}
          >
            {locale.startsWith('en') ? '↑ Oldest' : '↑ 最舊'}
          </button>
        </div>
        <div className={styles.articleCount}>
          {filteredArticles.length} {locale.startsWith('en') ? 'articles found' : '篇文章'}
        </div>
      </div>

      <div className={styles.filterBar}>
        <span className={styles.filterLabel}>{locale.startsWith('en') ? 'Filter:' : '分類:'}</span>
        <button 
          className={`${styles.filterBtn} ${activeFilter === 'ALL' ? styles.filterBtnActive : ''}`}
          onClick={() => setActiveFilter('ALL')}
        >
          {locale.startsWith('en') ? 'All' : '全部'}
        </button>
        {CATEGORIES.map(cat => (
          <button 
            key={cat}
            className={`${styles.filterBtn} ${activeFilter === cat ? styles.filterBtnActive : ''}`}
            onClick={() => setActiveFilter(cat)}
          >
            {locale.startsWith('en') ? (CATEGORY_NAMES_EN[cat] || cat) : cat}
          </button>
        ))}
      </div>

      <div className={styles.articleGrid}>
        {gridArticles.map((article, idx) => {
          const articleTags = article.tags[tagLang] || [];
          const mainTag = articleTags[0];
          
          return (
            <Link 
              key={article.id} 
              to={article.slug} 
              className={styles.articleCard}
              style={{ animationDelay: `${(idx % 10) * 0.05}s` }}
            >
              <div className={styles.cardTop}>
                {mainTag && (
                  <span className={`${styles.tag} ${getTagClass(mainTag)}`}>
                    {mainTag}
                  </span>
                )}
                <span className={styles.cardDate}>{article.date ? article.date.substring(0, 10) : ''}</span>
              </div>
              <h3>{article.title}</h3>
              <p className={styles.cardExcerpt}>{article.summary}</p>
              
              <div className={styles.cardFooter}>
                <span className={styles.readTime}>
                  {article.reading_time} {locale.startsWith('en') ? 'min read' : '分鐘閱讀'}
                </span>
                <span className={styles.cardArrow}>→</span>
              </div>
            </Link>
          );
        })}

        {gridArticles.length === 0 && (
          <div className={styles.emptyState}>
            <div className={styles.emptyIcon}>∅</div>
            <p>{locale.startsWith('en') ? 'No articles found matching your criteria.' : '沒有找到符合條件的文章。'}</p>
          </div>
        )}
      </div>
    </div>
  );
}
