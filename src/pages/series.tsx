import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Translate, { translate } from '@docusaurus/Translate';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import hubsData from '@site/src/data/hubs.json';
import styles from './series.module.css';

interface DocItem {
  id: string;
  title: string;
  date: string;
  description: string;
  url: string;
  category?: string;
}

interface SeriesItem {
  id: string;
  title: string;
  description: string;
  itemsCount: number;
  dateRange: string;
  docs: DocItem[];
}

export default function SeriesPage(): JSX.Element {
  const { i18n } = useDocusaurusContext();
  const currentLocale = i18n.currentLocale;
  const localeData = (hubsData as Record<string, { series: SeriesItem[] }>)[currentLocale] || (hubsData as Record<string, { series: SeriesItem[] }>)['zh-Hant'];
  const seriesList: SeriesItem[] = localeData?.series || [];

  const pageTitle = translate({
    id: 'page.series.title',
    message: '系列',
    description: 'Series page title',
  });
  const pageDescription = translate({
    id: 'page.series.description',
    message: '主題式深入剖析與專題連載',
    description: 'Series page description',
  });

  return (
    <Layout title={pageTitle} description={pageDescription}>
      <main className={styles.pageWrapper}>
        <div className="container">
          <header className={styles.header}>
            <span className={styles.eyebrow}>
              <Translate id="page.series.title" description="Series page title">
                系列
              </Translate>
            </span>
            <h1 className={styles.title}>{pageTitle}</h1>
            <p className={styles.description}>{pageDescription}</p>
          </header>

          <div className={styles.seriesList}>
            {seriesList.map((series) => (
              <article key={series.id} className={styles.seriesCard}>
                <div className={styles.seriesHeader}>
                  <h2 className={styles.seriesTitle}>{series.title}</h2>
                  <div className={styles.metaGroup}>
                    <span className={styles.badge}>
                      <Translate
                        id="hubs.articlesCount"
                        description="Articles count badge"
                        values={{ count: series.itemsCount }}>
                        {'{count} 篇'}
                      </Translate>
                    </span>
                    {series.dateRange && series.dateRange !== '-' && (
                      <span className={styles.dateBadge}>{series.dateRange}</span>
                    )}
                  </div>
                </div>

                <p className={styles.seriesDesc}>{series.description}</p>

                <ul className={styles.docList}>
                  {series.docs.map((doc, idx) => (
                    <li key={doc.id} className={styles.docItem}>
                      <span className={styles.docIndex}>
                        {String(idx + 1).padStart(2, '0')}.
                      </span>
                      <Link to={doc.url} className={styles.docLink}>
                        {doc.title}
                      </Link>
                      {doc.date && <span className={styles.docDate}>{doc.date}</span>}
                    </li>
                  ))}
                </ul>

                {series.docs.length > 0 && (
                  <div className={styles.cardFooter}>
                    <Link to={series.docs[0].url} className={styles.readSeriesLink}>
                      <Translate id="hubs.readSeries" description="Read series button label">
                        閱讀系列
                      </Translate>{' '}
                      &rarr;
                    </Link>
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </main>
    </Layout>
  );
}

