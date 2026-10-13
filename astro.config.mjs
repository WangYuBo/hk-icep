// @ts-check
import { defineConfig } from 'astro/config';

// ⚠️ 注意：本 GitHub 账号的用户站点（wangyubo.github.io 仓库）绑定了自定义域名
//    muguangling.com，因此账号下所有「项目站点」都会被重定向到该域名下。
//    本站实际地址是 https://muguangling.com/hk-icep/
//    （https://wangyubo.github.io/hk-icep/ 会 301 跳转到这里）
//
// base 会被 src/i18n/ui.ts 的 withBase() 用于拼接站内链接，因此必须与仓库名一致。
//
// 日后为本站绑定独立域名时改两处：
//   1. 本文件：site 改为新域名，base 改为 '/'
//   2. 在 public/ 下新增 CNAME 文件，内容为域名本身（仓库级域名会覆盖账号级域名）
export default defineConfig({
  site: 'https://muguangling.com',
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
