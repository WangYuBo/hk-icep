# hk-icep — 香港國際教科文出版社官網

香港國際教科文出版社有限公司（International Culture & Education Press (Hong Kong) Co.,
Limited）官方網站，基於 [Astro](https://astro.build) 的繁體中文／英文雙語靜態站，
通過 GitHub Actions 自動部署到 GitHub Pages。

- 線上地址：https://muguangling.com/hk-icep/ （英文版 https://muguangling.com/hk-icep/en/）
- 倉庫：https://github.com/WangYuBo/hk-icep

> ⚠️ 本賬號的用戶站點綁定了 `muguangling.com`，因此項目站點都會被重定向到該域名下。
> `https://wangyubo.github.io/hk-icep/` 會 301 跳轉到上面的地址。
> 若要改用獨立域名，見文末「日後綁定自定義域名」。

## 本地開發

```bash
npm install
npm run dev       # 開發伺服器 http://localhost:4321/hk-icep/
npm run build     # 構建到 dist/
npm run preview   # 預覽構建結果
```

## 目錄結構

```
src/
├── i18n/ui.ts              全部界面文案（中英對照），改文案先看這裡
├── layouts/BaseLayout.astro  頁頭 / 導航 / 頁腳
├── components/             BookCard（書目卡片）、BookDetail（書目詳情）
├── styles/global.css       配色與樣式（色值在檔案頂部 :root 裡）
├── content/books/          書目內容，{zh-Hant,en}/ 各一份同名檔案
└── pages/
    ├── *.astro             繁體中文版（位於根路徑 /）
    └── en/*.astro          英文版（位於 /en/）
```

## 上線前必填清單

- [ ] **出版方向**：`src/pages/about.astro` 與 `src/pages/en/about.astro` 中的
      「出版方向 / What We Publish」目前是佔位內容，請替換為真實的出版領域
- [ ] **社標**：`public/logo.svg`（頁頭，透明底）與 `public/favicon.svg`（瀏覽器圖標，
      深藍底）目前是設計稿，如已有正式社標請直接覆蓋同名檔案
- [ ] **電話**：聯繫頁目前只公開電郵；如需公開電話，在
      `src/pages/contact.astro` 與 `src/pages/en/contact.astro` 中補上
- [ ] **地址公開範圍**：聯繫頁目前展示商業登記證上的完整註冊地址
      （太子工業大廈 24 樓 A27 室）。若該址僅為註冊用途、不對外接待，
      建議只保留「香港」層級
- [ ] **書目**：目前尚無書目，書目頁與首頁精選區顯示「整理中」空狀態

## 如何添加一本書

1. 在 `src/content/books/zh-Hant/` 新建 `書名-slug.md`，在 `src/content/books/en/`
   建同名檔案（語言切換按 slug 對應，同名才能互跳）：

   ```markdown
   ---
   title: 書名
   subtitle: 副標題（可選）
   author: 作者
   publisher: 出版方（可選，缺省視為本社）
   isbn: 978-988-0000-00-0
   format: 精裝          # 英文版寫 Hardback
   cover: covers/書名-slug.jpg
   buyLink: https://...  # 可選，填了才顯示「購買本書」按鈕
   lang: zh-Hant         # 英文版寫 en
   featured: true        # 是否在首頁精選展示
   publishDate: "2026"
   ---

   書籍簡介正文（Markdown 格式）……
   ```

2. 把封面圖放進 `public/covers/`（jpg/png/svg 均可，frontmatter 的 `cover` 路徑對應即可）
3. `git push` 後 GitHub Actions 自動重新構建發布

> 只有中文版或只有英文版也可以：缺少對應語言時，該書詳情頁會自動隱藏語言切換按鈕，不會產生死鏈。

## 如何修改頁面文案

- 頁面正文：`src/pages/*.astro`（繁中）與 `src/pages/en/*.astro`（英文）
- 導航、頁腳、按鈕等公共文案：`src/i18n/ui.ts`
- 配色：`src/styles/global.css` 頂部的 `:root` 變數

> ⚠️ `ui.ts` 中的 `siteLegalName` / `siteLegalNameEn` 是頁腳的法定名稱，
> 必須與商業登記證逐字一致，請勿隨意改寫。

## 部署

push 到 `main` 分支即自動部署（`.github/workflows/deploy.yml`）。

### 首次部署前（在 GitHub 網頁上操作一次）

1. 倉庫 **Settings → Pages → Build and deployment → Source** 選 **GitHub Actions**
2. push 到 `main`，等 Actions 跑完即可訪問

### 日後綁定自定義域名

1. 改 `astro.config.mjs`：`site` 改為域名，`base` 改為 `'/'`
2. 在 `public/` 下新增 `CNAME` 檔案，內容為域名本身（如 `example.com`）
3. 在域名註冊商處配置 DNS：
   - 根域名 `example.com` 四條 A 記錄 → `185.199.108.153` / `185.199.109.153` /
     `185.199.110.153` / `185.199.111.153`
   - `www.example.com` CNAME → `wangyubo.github.io`
4. 回到倉庫 **Settings → Pages → Custom domain** 填入域名並勾選 Enforce HTTPS
