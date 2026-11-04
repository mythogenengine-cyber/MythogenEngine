// 頁面讀取書名／系列名的入口。名稱只寫在 src/data/catalog.json。
import catalog from '@site/src/data/catalog.json';

type Names = { [locale: string]: string };
type Entry = { id: string; title: Names; fullTitle?: Names };

function pick(names: Names | undefined, locale: string): string | undefined {
  if (!names) return undefined;
  return names[locale] || names['zh-Hant'];
}

export function catalogTitle(
  kind: 'books' | 'series',
  id: string,
  locale: string,
  { full = false }: { full?: boolean } = {},
): string {
  const list = (catalog as unknown as Record<string, Entry[]>)[kind];
  const entry = list.find((e) => e.id === id);
  if (!entry) throw new Error(`[catalog] ${kind} "${id}" 不在 src/data/catalog.json`);
  return (full && pick(entry.fullTitle, locale)) || pick(entry.title, locale) || id;
}
