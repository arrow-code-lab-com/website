# CLAUDE.md

個人事業「Arrow Code Lab」の公開用ホームページのリポジトリ。

## 事業概要

- **自社アプリの開発・公開**: 自作アプリケーションを作って公開する
- **アプリ開発の受託**: アプリケーション作成の依頼を受け付ける
- **AI活用の相談**: AIの業務活用などの相談を受け付ける

## サイトの目的（優先順）

1. 信頼してもらう（何ができるのか、どんな実績があるのか）
2. 問い合わせてもらう（開発依頼・AI相談）
3. 自社アプリを紹介する（実績のアピールも兼ねる）

## 決定事項

| 項目 | 方針 |
|---|---|
| 事業者名 | **Arrow Code Lab**（正式名称。「arrow.code.lab」などの表記は使わない） |
| 運営形態 | **副業として運営**。サイトにも「副業として」と明記し、依頼者に対応範囲を理解してもらう |
| 対応条件 | 対応時間は平日の夜と土日祝日。返信の目安は3日以内。連絡はメール・チャットが基本 |
| お受けしない依頼 | 平日日中の定例会議・常駐／短納期・大規模な案件／24時間の障害対応・即時対応の保守／医療ソフトウェアに関する依頼（本業と競合するため） |
| ホスティング | GitHub Pages（静的サイト） |
| ドメイン | `arrow-code-lab.com`（取得済み） |
| 技術スタック | Astro ＋ GitHub Actions でビルド・デプロイ |
| ページ構成 | トップは1ページ構成。アプリ詳細・ポリシーは別ページ。ブログはいったん作らない |
| 言語 | 日本語（デフォルト）＋英語。**英語ページはアプリ紹介のみ**（英語圏からはアプリ開発の受託・AI相談を受け付けないため、サービス・依頼の流れ・ご依頼の前に・問い合わせフォーム・特定商取引法の表記は出さない） |
| デザイン | ミニマル・テック系（白基調＋アクセントカラー1色）。屋号にちなんで矢印モチーフを使ってもよい |
| 代表者情報 | **屋号のみ公開。個人名は載せない**。経歴はスキル・技術中心に紹介する |
| 料金 | **個別見積もりのみ**。金額は載せない |
| 問い合わせ | Googleフォーム（https://forms.gle/yS23XXq7SoenTrnE9）、メール arrow.code.lab@gmail.com。GitHub Pagesでは自前のフォーム処理ができないためGoogleフォームを使う |

## 初回公開の範囲

- トップページ（1ページ構成）
  - Hero: 屋号、キャッチコピー、問い合わせボタン
  - Services: アプリ開発の受託／AI活用の相談（それぞれ対応できるご相談の具体例を添える。自社アプリは Apps で紹介する）
  - Apps（見出しは「開発事例」）: 自社アプリのカード一覧。スクリーンショット・使った技術・担当範囲を見せ、詳細ページへリンクする
  - About: 屋号としての紹介（本業でも現役の開発者であること）、経歴、得意な技術・分野、進め方。経歴は「医療系の業務システムの開発 15 年（C#）」「前職は金融機関（簿記など）」までにとどめ、規模・勤務先は書かない
  - Flow: 相談から納品までの流れ（ご相談・お見積もりは無料、料金は「個別見積もり」と書く）
  - Notice（ご依頼の前に）: 「こんな方に向いています」から始め、副業であること・対応時間・返信の目安・打ち合わせの方法、最後にお受けできない依頼
  - FAQ（よくあるご質問）: 取引条件の疑問（小さな依頼・NDA・成果物の権利・契約書・支払い方法・遠方・納品後の修正と保守）。開閉式。問い合わせの直前に置き、断る条件だけが Contact の前に並ばないようにする
  - Contact: Googleフォームへの導線と返信の目安、書いてほしいこと（要件が固まっていなくてよい旨も）
- アプリ詳細ページ（最初は RoomCheckPDF を「公開予定」として掲載）
- プライバシーポリシー（Googleフォームで個人情報を受け取ることを明記する）
- 特定商取引法に基づく表記（`/tokushoho`、下書きは `src/pages/tokushoho.md`）
  - 運営責任者・所在地・電話番号は「請求があった場合には遅滞なく開示いたします」とする（屋号のみ公開の方針に合わせるため）
  - 請求があったときにすぐ開示できるよう、情報を手元に用意しておくこと
  - 料金は個別見積もりのため、この書き方で省略できるかは公開前に消費者庁のガイドか専門家に確認する

## コマンド

Node.js 24（`.nvmrc`）、パッケージマネージャーは npm。

```sh
npm install       # 依存パッケージのインストール
npm run dev       # 開発サーバー（http://localhost:4321）。draft のコンテンツも表示される
npm run build     # dist/ に静的サイトを出力。draft のコンテンツは除外される
npm run preview   # ビルド結果の確認
npm run check     # 型チェック（astro check）
npm run og        # og 画像を scripts/og/*.svg から public/og/*.png に書き出す
```

## ディレクトリ構成

```
src/
  content.config.ts           # コレクション（apps）のスキーマ定義
  content/
    apps/{ja,en}/<slug>.md    # アプリ紹介
  pages/                      # ルーティング。中身は components/ に置き、ページは言語を渡すだけにする
    index.astro               # /        → HomePage（日本語。全セクション）
    apps/[slug].astro         # /apps/x/ → AppDetail
    privacy.md                # プライバシーポリシー
    tokushoho.md              # 特定商取引法に基づく表記（日本語のみ）
    en/index.astro            # /en/     → EnHomePage（アプリ紹介と、アプリに関するメールでの問い合わせ先のみ）
    en/apps/[slug].astro, en/privacy.md
  components/                 # HomePage / EnHomePage / AppList（アプリのカード一覧）/ AppDetail / Header / Footer / Logo
  layouts/
    BaseLayout.astro          # 共通レイアウト（head、hreflang、ヘッダー、フッター）
    MarkdownLayout.astro      # src/pages/*.md 用
  i18n/ui.ts                  # UI文言の辞書、問い合わせ先、言語ヘルパー
  lib/content.ts              # 言語別にコレクションを取得するヘルパー
  styles/global.css           # 色などのデザイン変数と共通スタイル
  assets/apps/<slug>/         # アプリのアイコン・スクリーンショット
public/
  CNAME                       # arrow-code-lab.com
  favicon.svg
  og/{ja,en}.png              # SNS で共有したときの画像（1200×630。全ページ共通、言語で切り替え）
scripts/
  og/{ja,en}.svg              # og 画像の元
  og-image.mjs                # og 画像の書き出し（npm run og）
.github/workflows/deploy.yml  # withastro/action + actions/deploy-pages（main への push でデプロイ）
```

- i18n は Astro 標準の i18n ルーティングを使う（`defaultLocale: 'ja'`、`prefixDefaultLocale: false`。日本語は `/`、英語は `/en/`）
- `astro.config.mjs` の `site` は `https://arrow-code-lab.com`。独自ドメインなので `base` は設定しない
- 言語は URL から判定する（`getLangFromUrl`）。内部リンクは `localizePath()` で言語に合わせる
- 別言語版がないページは、`BaseLayout` の `altPath`（Markdown ページなら frontmatter の `altPath`）で言語切り替え先を指定する。指定すると hreflang は出力されない
- トップページの文言は、日本語は `src/components/HomePage.astro` の `copy`、英語は `src/components/EnHomePage.astro` に直接書いている
- 問い合わせ先（フォームURL・メール）は `src/i18n/ui.ts` の `contact` にまとめている
- アプリごとのプライバシーポリシーがアプリストアの審査で必要になったら、`/apps/<slug>/privacy` に置く

## コンテンツの追加

- アプリ: `src/content/apps/{ja,en}/room-check-pdf.md` を参考に、`ja/` と `en/` に同じファイル名で置く。`status` は `released`（公開中）/ `development`（公開予定）、並び順は `order`。ストアのリンクは `links`、アプリごとのポリシー類は `legal` に書く。開発事例として見せる使った技術は `tech`、担当範囲は `role` に書く（事実だけを書く）
- アプリの画像: アイコンとスクリーンショットは `src/assets/apps/<slug>/`（スクリーンショットは `ja/` `en/` に分ける）に置き、frontmatter の `icon` / `screenshots` に Markdown からの相対パスで書く。ビルド時に WebP に変換・縮小される
  - RoomCheckPDF の画像は room-check-pdf リポジトリの `docs/play-store-assets` ブランチ `doc/play_store/` から持ってきたもの。ストア用の画像を撮り直したら、こちらも差し替える
- og 画像（共有したときの画像）: 文言を変えるときは `scripts/og/{ja,en}.svg` を直して `npm run og` で書き出し、PNG を目で確かめてからコミットする。文字は実行した PC のフォントで描かれる。英語の画像には受託・相談の言葉を入れない
- トップの title は `src/i18n/ui.ts` の `site.title`。下層ページは「{ページ名} | Arrow Code Lab」になる
- `draft: true` のエントリは本番ビルドに含まれない（開発サーバーでは表示される）

## デプロイ・ドメイン設定

- GitHub リポジトリの Settings → Pages で、Source を「GitHub Actions」にする
- DNS 設定
  - Apex（`arrow-code-lab.com`）: A レコード `185.199.108.153` / `185.199.109.153` / `185.199.110.153` / `185.199.111.153`
  - `www`: CNAME で `<GitHubユーザー名>.github.io`
- Settings → Pages で Custom domain を設定し、「Enforce HTTPS」を有効にする
- ドメイン乗っ取りを防ぐため、GitHub のアカウント設定でドメインの所有確認（Verified domains）をしておく

## コンテンツ作成時のルール

- 個人名、住所、電話番号をサイトに書かない
- 料金の金額を書かない（「個別にお見積もりします」と書く）
- 副業の条件（対応時間・返信の目安など）と矛盾する約束を書かない（「即日対応」「いつでもご連絡ください」など）。条件を変えるときは HomePage の Notice・FAQ・Contact の文言も合わせて直す
- 本業の勤務先が特定できる情報は書かない
- アプリ詳細とプライバシーポリシーは、日本語と英語の内容を揃える。片方だけ更新した場合は、もう片方の更新が必要なことをユーザーに伝える
- 英語ページには、アプリ開発の受託・AI相談・見積もり・副業の対応条件など、依頼を受け付ける内容を書かない（英語版プライバシーポリシーも Google フォームと見積もりの記述を除いている）
- 実績や事例は、事実に基づいて書けるものだけ載せる（架空の実績を作らない）

## 未決事項

- [ ] キャッチコピー、サービス説明の文言（現在は仮の文言）
- [ ] アクセントカラー、ロゴ（現在は仮で青 `#2563eb` と矢印マーク）
- [ ] 正規URLを apex（`arrow-code-lab.com`）にするか `www` にするか（仮決め: apex）
- [ ] RoomCheckPDF を Google Play で公開したら、`status: released` にして `links.googlePlay` を追加する
- [ ] ブログ／お知らせを再開するか
- [ ] アクセス解析（GA4 / Cloudflare Web Analytics など）を入れるか。入れる場合はプライバシーポリシーに追記する
- [ ] 特定商取引法の表記: 料金が個別見積もりでも住所・電話番号を省略できるか確認する
- [ ] プライバシーポリシーの制定日を公開日に合わせる
