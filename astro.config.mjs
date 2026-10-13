// @ts-check
import { defineConfig } from 'astro/config';

// 本站已绑定独立域名：https://icep.com.hk（2026-10 于 HKDNR 注册）
//
// 域名通过「仓库 Settings → Pages → Custom domain」配置，不使用 public/CNAME 文件，
// 与同账号下的 east-west-press 仓库保持一致。
// 仓库级域名会覆盖账号级域名（muguangling.com），因此不再受其影响。
//
// base 会被 src/i18n/ui.ts 的 withBase() 用于拼接站内链接：
// 绑独立域名后站点位于根路径，故 base 为 '/'。
export default defineConfig({
  site: 'https://icep.com.hk',
  base: '/',
  i18n: {
    // 繁體中文为默认语言，位于根路径 '/'；英文位于 '/en/'
    defaultLocale: 'zh-Hant',
    locales: ['zh-Hant', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
