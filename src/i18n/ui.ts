export const languages = {
  ja: '日本語',
  en: 'English',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'ja';

export const contact = {
  formUrl: 'https://forms.gle/yS23XXq7SoenTrnE9',
  email: 'arrow.code.lab@gmail.com',
};

export const ui = {
  ja: {
    'site.title': 'アプリ開発・AI活用のご相談｜Arrow Code Lab',
    'site.description':
      'Arrow Code Lab は、アプリ開発のご依頼とAI活用のご相談を承る個人事業です。紙やExcelで回している作業のアプリ化から、生成AIの取り入れ方まで。ご相談・お見積もりは無料です。',
    'site.ogImageAlt': 'Arrow Code Lab　アプリ開発・AI活用のご相談を承ります',
    'nav.services': 'サービス',
    'nav.apps': '開発事例',
    'nav.about': 'About',
    'nav.contact': 'お問い合わせ',
    'footer.privacy': 'プライバシーポリシー',
    'footer.tokushoho': '特定商取引法に基づく表記',
    'cta.contact': 'お問い合わせ',
    'apps.empty': '現在準備中です。公開までしばらくお待ちください。',
    'apps.status.released': '公開中',
    'apps.status.development': '公開予定',
    'apps.tech': '使った技術',
    'apps.role': '担当',
    'apps.back': 'トップへ戻る',
  },
  en: {
    'site.title': 'Arrow Code Lab — Apps for everyday needs',
    'site.description':
      'Arrow Code Lab is an independent developer based in Japan that builds and publishes apps.',
    'site.ogImageAlt': 'Arrow Code Lab — Apps for everyday needs.',
    'nav.services': 'Services',
    'nav.apps': 'Apps',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'footer.privacy': 'Privacy Policy',
    'footer.tokushoho': 'Legal Notice (Japanese)',
    'cta.contact': 'Contact us',
    'apps.empty': 'Coming soon.',
    'apps.status.released': 'Available',
    'apps.status.development': 'Coming soon',
    'apps.tech': 'Built with',
    'apps.role': 'Role',
    'apps.back': 'Back to home',
  },
} as const;

export type UIKey = keyof (typeof ui)['ja'];

export function useTranslations(lang: Lang) {
  return (key: UIKey) => ui[lang][key];
}

export function getLangFromUrl(url: URL): Lang {
  const [, first] = url.pathname.split('/');
  return first === 'en' ? 'en' : defaultLang;
}

/** 言語に応じたパスを返す。path は日本語版のパス（例: "/privacy/"） */
export function localizePath(path: string, lang: Lang): string {
  return lang === defaultLang ? path : `/${lang}${path}`;
}

/** 現在のパスを別言語のパスに置き換える */
export function switchLangPath(pathname: string, to: Lang): string {
  const base = pathname.replace(/^\/en(?=\/|$)/, '') || '/';
  return localizePath(base, to);
}
