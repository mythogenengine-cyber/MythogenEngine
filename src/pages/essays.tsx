import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Translate, { translate } from '@docusaurus/Translate';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import hubsData from '@site/src/data/hubs.json';
import styles from './essays.module.css';

interface EssayDoc {
  id: string;
  title: string;
  date: string;
  description: string;
  url: string;
}

interface EssayGroup {
  id: string;
  title: string;
  docs: EssayDoc[];
}

interface EssaysData {
  groups: EssayGroup[];
  rest: EssayDoc[];
}

export default function EssaysPage(): JSX.Element {
  const { i18n } = useDocusaurusContext();
  const currentLocale = i18n.currentLocale;
  const localeData =
    (hubsData as Record<string, { essays: EssaysData }>)[currentLocale] ||
    (hubsData as Record<string, { essays: EssaysData }>)['zh-Hant'];
  const essaysData: EssaysData = localeData?.essays || { groups: [], rest: [] };

  const pageTitle = translate({
    id: 'page.essays.title',
    message: '散文',
    description: 'Essays page title',
  });
  const pageDescription = translate({
    id: 'page.essays.description',
    message: '個人隨筆、七日書與思考筆記',
    description: 'Essays page description',
  });

  const sevenDaysGroup = essaysData.groups.find((g) => g.id === 'seven-days');
  const otherGroups = essaysData.groups.filter((g) => g.id !== 'seven-days');

  return (
    <Layout title={pageTitle} description={pageDescription}>
      <main className={styles.pageWrapper}>
        <div className="container">
          <header className={styles.header}>
            <span className={styles.eyebrow}>
              <Translate id="page.essays.title" description="Essays page title">
                散文
              </Translate>
            </span>
            <h1 className={styles.title}>{pageTitle}</h1>
            <p className={styles.description}>{pageDescription}</p>
          </header>

          {/* 1. Seven Days Book (Pinned) */}
          {sevenDaysGroup && (
            <section className={styles.section}>
              <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>
                  {sevenDaysGroup.title}
                  <span className={styles.pinnedBadge}>
                    <Translate id="hubs.pinnedBadge" description="Pinned badge">
                      置頂
                    </Translate>
                  </span>
                </h2>
                <p className={styles.sectionDesc}>
                  <Translate
                    id="hubs.sevenDaysDesc"
                    description="Seven days section description">
                    置頂專欄・七日的心智與寫作探索
                  </Translate>
                </p>
              </div>

              <div className={styles.cardsGrid}>
                {sevenDaysGroup.docs.map((doc) => (
                  <Link key={doc.id} to={doc.url} className={styles.essayCard}>
                    <div className={styles.essayMeta}>
                      {doc.date && <span className={styles.essayDate}>{doc.date}</span>}
                    </div>
                    <h3 className={styles.essayTitle}>{doc.title}</h3>
                    <p className={styles.essayDesc}>{doc.description}</p>
                    <div className={styles.cardFooter}>
                      <span className={styles.readLink}>
                        <Translate id="hubs.readArticle" description="Read article link">
                          閱讀文章
                        </Translate>{' '}
                        &rarr;
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* 2. Other Essay Groups (if any) */}
          {otherGroups.map((group) => (
            <section key={group.id} className={styles.section}>
              <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>{group.title}</h2>
              </div>
              <div className={styles.cardsGrid}>
                {group.docs.map((doc) => (
                  <Link key={doc.id} to={doc.url} className={styles.essayCard}>
                    <div className={styles.essayMeta}>
                      {doc.date && <span className={styles.essayDate}>{doc.date}</span>}
                    </div>
                    <h3 className={styles.essayTitle}>{doc.title}</h3>
                    <p className={styles.essayDesc}>{doc.description}</p>
                    <div className={styles.cardFooter}>
                      <span className={styles.readLink}>
                        <Translate id="hubs.readArticle" description="Read article link">
                          閱讀文章
                        </Translate>{' '}
                        &rarr;
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          ))}

          {/* 3. Remaining Essays */}
          {essaysData.rest && essaysData.rest.length > 0 && (
            <section className={styles.section}>
              <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>
                  <Translate id="hubs.allEssays" description="Essays section title">
                    隨筆
                  </Translate>
                </h2>
              </div>

              <div className={styles.cardsGrid}>
                {essaysData.rest.map((doc) => (
                  <Link key={doc.id} to={doc.url} className={styles.essayCard}>
                    <div className={styles.essayMeta}>
                      {doc.date && <span className={styles.essayDate}>{doc.date}</span>}
                    </div>
                    <h3 className={styles.essayTitle}>{doc.title}</h3>
                    <p className={styles.essayDesc}>{doc.description}</p>
                    <div className={styles.cardFooter}>
                      <span className={styles.readLink}>
                        <Translate id="hubs.readArticle" description="Read article link">
                          閱讀文章
                        </Translate>{' '}
                        &rarr;
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </main>
    </Layout>
  );
}

