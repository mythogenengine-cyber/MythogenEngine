import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Translate from '@docusaurus/Translate';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import financeData from '@site/src/data/finance.json';
import catalog from '@site/src/data/catalog.json';
import styles from './series.module.css';

// 財經學習總覽：資料由 scripts/generateHubs.js 生成 src/data/finance.json；
// 欄目名稱與介紹在 src/data/catalog.json 的 sections.finance，系列名在 catalog.json 的 finance。

type Names = { [locale: string]: string };

interface DocItem {
  id: string;
  title: string;
  date: string;
  description: string;
  url: string;
}

interface FinanceSeries {
  id: string;
  title: string;
  description: string;
  itemsCount: number;
  dateRange: string;
  docs: DocItem[];
}

function pick(names: Names, locale: string): string {
  return names[locale] || names['zh-Hant'];
}

export default function FinancePage(): JSX.Element {
  const { i18n } = useDocusaurusContext();
  const locale = i18n.currentLocale;
  const data = financeData as unknown as Record<string, FinanceSeries[]>;
  const seriesList: FinanceSeries[] = data[locale] || data['zh-Hant'] || [];

  const section = (catalog as unknown as { sections: Record<string, { title: Names; intro: Names }> }).sections.finance;
  const pageTitle = pick(section.title, locale);
  const pageDescription = pick(section.intro, locale);

  return (
    <Layout title={pageTitle} description={pageDescription}>
      <main className={styles.pageWrapper}>
        <div className="container">
          <header className={styles.header}>
            <span className={styles.eyebrow}>{pageTitle}</span>
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
                      <span className={styles.docIndex}>{String(idx + 1).padStart(2, '0')}.</span>
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
