export type Lang = 'zh-Hant' | 'en';

export const ui = {
  'zh-Hant': {
    // ⚠️ siteLegalName 必须与商业登记证上的登记名称完全一致，请勿改写
    siteName: '教科文出版社',
    siteLegalName: '香港國際教科文出版社有限公司',
    siteLegalNameEn: 'INTERNATIONAL CULTURE & EDUCATION PRESS (HONG KONG) CO., LIMITED',
    // 标语。备选：「立足香港，出版世界」「文以載道，書通天下」
    siteTagline: '以書為橋，聯通中外',
    'nav.home': '首頁',
    'nav.books': '書目',
    'nav.about': '關於我們',
    'nav.contact': '聯繫我們',
    'nav.langSwitch': 'EN',
    'home.featured': '精選書目',
    'home.viewAll': '查看全部書目',
    'home.aboutTitle': '關於我們',
    'home.aboutCta': '了解更多',
    // 业务范围取自商业登记证「業務性質」栏
    'services.title': '業務範圍',
    'services.publishing.title': '出版發行',
    'services.publishing.desc': '學術著作、教材與教輔、文化藝術類圖書的編輯與發行。',
    'services.rights.title': '版權代理',
    'services.rights.desc': '中文圖書的海外版權輸出與引進。',
    'services.film.title': '影視製作運營',
    'services.film.desc': '圖書內容的影視化開發與運營。',
    'services.exchange.title': '文化投資及國際文化交流',
    'services.exchange.desc': '文化交流項目的策劃與執行。',
    'books.title': '出版書目',
    'books.intro': '人文學科、社會科學、教育研究領域的學術著作、教材與譯著。',
    'books.empty': '書目整理中，敬請期待。',
    'book.author': '作者',
    'book.publisher': '出版方',
    'book.isbn': 'ISBN',
    'book.format': '裝幀',
    'book.published': '出版時間',
    'book.buy': '購買本書',
    'book.back': '返回書目',
    'contact.title': '聯繫我們',
    'footer.rights': '版權所有',
  },
  en: {
    siteName: 'ICEP Press',
    siteLegalName: 'INTERNATIONAL CULTURE & EDUCATION PRESS (HONG KONG) CO., LIMITED',
    siteLegalNameEn: 'INTERNATIONAL CULTURE & EDUCATION PRESS (HONG KONG) CO., LIMITED',
    siteTagline: 'Bridging cultures through books',
    'nav.home': 'Home',
    'nav.books': 'Books',
    'nav.about': 'About Us',
    'nav.contact': 'Contact',
    'nav.langSwitch': '繁體',
    'home.featured': 'Featured Books',
    'home.viewAll': 'View All Books',
    'home.aboutTitle': 'Who We Are',
    'home.aboutCta': 'Learn more about us',
    'services.title': 'What We Do',
    'services.publishing.title': 'Publishing & Distribution',
    'services.publishing.desc':
      'Editing and distribution of scholarly monographs, textbooks and teaching materials, and titles in culture and the arts.',
    'services.rights.title': 'Rights & Licensing',
    'services.rights.desc': 'Outbound and inbound licensing of Chinese-language titles.',
    'services.film.title': 'Film & Television Production',
    'services.film.desc': 'Screen adaptation and operation of book content.',
    'services.exchange.title': 'Cultural Investment & International Exchange',
    'services.exchange.desc': 'Planning and delivery of cross-cultural programmes.',
    'books.title': 'Our Books',
    'books.intro':
      'Scholarly works, textbooks and translations in the humanities, social sciences and education.',
    'books.empty': 'Our catalogue is being prepared — please check back soon.',
    'book.author': 'Author',
    'book.publisher': 'Publisher',
    'book.isbn': 'ISBN',
    'book.format': 'Format',
    'book.published': 'Published',
    'book.buy': 'Buy This Book',
    'book.back': 'Back to Books',
    'contact.title': 'Contact Us',
    'footer.rights': 'All rights reserved.',
  },
} as const;

export function t(lang: Lang, key: keyof (typeof ui)['zh-Hant']): string {
  return ui[lang][key];
}

// 站内链接/静态资源统一加上 GitHub Pages 的 base 前缀
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/+$/, '');
  return `${base}/${path.replace(/^\/+/, '')}`;
}

// 语言目录前缀：默认语言（繁體中文）位于根路径，英文位于 /en/
export function langPrefix(lang: Lang): string {
  return lang === 'en' ? 'en/' : '';
}

// 当前页面在另一语言下的路径（en 与 zh-Hant 页面路径互为镜像）
export function altLangPath(lang: Lang, path: string): string {
  const clean = path.replace(/^\/+/, '');
  return lang === 'en' ? clean : `en/${clean}`;
}

// <html lang="...">
export function htmlLang(lang: Lang): string {
  return lang === 'en' ? 'en' : 'zh-Hant';
}
