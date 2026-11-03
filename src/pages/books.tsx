import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Translate, { translate } from '@docusaurus/Translate';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import hubsData from '@site/src/data/hubs.json';
import styles from './books.module.css';

interface BookItem {
  id: string;
  title: string;
  description: string;
  url: string;
  entry: string;
  sidebar: string;
  chaptersCount: number;
}

export default function BooksPage(): JSX.Element {
  const { i18n } = useDocusaurusContext();
  const currentLocale = i18n.currentLocale;
  const localeData = (hubsData as Record<string, { books: BookItem[] }>)[currentLocale] || (hubsData as Record<string, { books: BookItem[] }>)['zh-Hant'];
  const books: BookItem[] = localeData?.books || [];

  const pageTitle = translate({
    id: 'page.books.title',
    message: '書',
    description: 'Books page title',
  });
  const pageDescription = translate({
    id: 'page.books.description',
    message: '專題完整著作與架構體系',
    description: 'Books page description',
  });

  return (
    <Layout title={pageTitle} description={pageDescription}>
      <main className={styles.pageWrapper}>
        <div className="container">
          <header className={styles.header}>
            <span className={styles.eyebrow}>
              <Translate id="page.books.title" description="Books page title">
                書
              </Translate>
            </span>
            <h1 className={styles.title}>{pageTitle}</h1>
            <p className={styles.description}>{pageDescription}</p>
          </header>

          <div className={styles.grid}>
            {books.map((book) => (
              <Link key={book.id} to={book.url} className={styles.card}>
                <span className={styles.badge}>
                  <Translate
                    id="hubs.chaptersCount"
                    description="Chapters count badge"
                    values={{ count: book.chaptersCount }}>
                    {'{count} 章'}
                  </Translate>
                </span>
                <h2 className={styles.cardTitle}>{book.title}</h2>
                <p className={styles.cardDesc}>{book.description}</p>
                <div className={styles.cardFooter}>
                  <span className={styles.readLink}>
                    <Translate id="hubs.readBook" description="Read book button label">
                      閱讀本書
                    </Translate>{' '}
                    &rarr;
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </Layout>
  );
}

