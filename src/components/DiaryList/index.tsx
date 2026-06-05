import React, { useState, useMemo } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Link from '@docusaurus/Link';
import { Search } from 'lucide-react';
import styles from './styles.module.css';

// We import the generated JSON. It's generated pre-build.
import diaryData from '@site/src/data/diary.json';

// Simple hash function to assign stable colors to dynamic tags
function getTagClass(tag) {
  const hash = tag.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const classes = [styles.tagAi, styles.tagJob, styles.tagEdu, styles.tagTech, styles.tagMedia];
  return classes[hash % classes.length];
}

export default function DiaryList() {
  const { i18n } = useDocusaurusContext();
  const locale = i18n.currentLocale;
  
  // Get articles for current locale, fallback to zh-Hant if not found
  const articles = diaryData[locale] || diaryData['zh-Hant'] || [];
  
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('ALL');
  const [sortOrder, setSortOrder] = useState('newest');

  // Determine which tag sub-array to use based on locale
  const tagLang = locale.startsWith('en') ? 'en' : 'zh';

  // Extract all unique tags
  const allTags = useMemo(() => {
    const tagsSet = new Set();
    articles.forEach(article => {
      const articleTags = article.tags && article.tags[tagLang] ? article.tags[tagLang] : [];
      articleTags.forEach(t => tagsSet.add(t));
    });
    return Array.from(tagsSet);
  }, [articles, tagLang]);

  // Filter articles
  const filteredArticles = useMemo(() => {
    const filtered = articles.filter(article => {
      // Search filter
      const searchLower = searchQuery.toLowerCase();
      const matchesSearch = 
        !searchQuery || 
        article.title.toLowerCase().includes(searchLower) || 
        (article.summary && article.summary.toLowerCase().includes(searchLower));

      // Tag filter
      const articleTags = article.tags && article.tags[tagLang] ? article.tags[tagLang] : [];
      const matchesTag = activeFilter === 'ALL' || articleTags.includes(activeFilter);

      return matchesSearch && matchesTag;
    });

    // Sort by date
    return [...filtered].sort((a, b) => {
      const dateA = a.date ? new Date(a.date).getTime() : 0;
      const dateB = b.date ? new Date(b.date).getTime() : 0;
      return sortOrder === 'newest' ? dateB - dateA : dateA - dateB;
    });
  }, [articles, searchQuery, activeFilter, tagLang, sortOrder]);

  // Determine featured (we just use the first item that matches, or just the very first item overall)
  const featuredArticle = articles.length > 0 && searchQuery === '' && activeFilter === 'ALL' ? articles[0] : null;
  
  // Articles for the grid
  const gridArticles = featuredArticle 
    ? filteredArticles.filter(a => a.id !== featuredArticle.id)
    : filteredArticles;

  return (
    <div className={styles.container}>
      <div className={`${styles.pageHeader} ${styles.animateIn}`}>
        <h1>{locale.startsWith('en') ? 'Diary' : '隨心書寫'}</h1>
        <p className={styles.subtitle}>
          {locale.startsWith('en') 
            ? 'No framework, no plan, just writing. About the workplace, about systems, about how a person finds their own language within the machine.' 
            : '沒有框架、沒有計劃，只是寫。關於職場、關於系統、關於一個人怎麼在體制裡找到自己的語言。'}<br/>
          <span>{locale.startsWith('en') ? '// Unfiltered thoughts, unscripted words.' : '// 不設前提、不設立場，只記錄。'}</span>
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
        {allTags.map(tag => (
          <button 
            key={tag}
            className={`${styles.filterBtn} ${activeFilter === tag ? styles.filterBtnActive : ''}`}
            onClick={() => setActiveFilter(tag)}
          >
            {tag}
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
