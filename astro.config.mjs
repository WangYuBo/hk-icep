// @ts-check
import { defineConfig } from 'astro/config';

// 当前部署形态：GitHub Pages 项目站点 → https://wangyubo.github.io/hk-icep/
// 因此必须同时设置 site 与 base（base 会被 src/i18n/ui.ts 的 withBase() 用于拼接站内链接）。
//
// 日后绑定自定义域名（如 https://example.com）时改两处：
//   1. 本文件：site 改为域名，base 改为 '/'
//   2. 在 public/ 下新增 CNAME 文件，内容为域名本身
export default defineConfig({
  site: 'https://wangyubo.github.io',
  base: '/hk-icep',
  i18n: {
    // 繁體中文为默认语言，位于根路径 '/'；英文位于 '/en/'
    defaultLocale: 'zh-Hant',
    locales: ['zh-Hant', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
