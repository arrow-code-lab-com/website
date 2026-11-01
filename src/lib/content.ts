import { getCollection, type CollectionEntry } from 'astro:content';
import type { Lang } from '../i18n/ui';

// 本番ビルドでは draft: true のエントリを除外する（開発サーバーでは表示する）
const isVisible = (data: { draft: boolean }) => import.meta.env.DEV || !data.draft;

/** "ja/my-app" → "my-app" */
export function slugOf(entry: { id: string }): string {
  return entry.id.split('/').slice(1).join('/');
}

export async function getApps(lang: Lang): Promise<CollectionEntry<'apps'>[]> {
  const apps = await getCollection(
    'apps',
    ({ id, data }) => id.startsWith(`${lang}/`) && isVisible(data),
  );
  return apps.sort((a, b) => a.data.order - b.data.order);
}
