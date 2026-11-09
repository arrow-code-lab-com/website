---
issue: 6
pr: 9
flow: ai-default-medium
status: pr-success
outcome: ready
evidence:
  spec_status: draft
  has_issue: true
  has_pr: true
  tasks_total: 0
  tasks_done: 0
  integration: none
  open_major: 0
  merged: false
  accepted: false
passed: [triage, requirements, impl, review, pr]
attempts: {}
edges:
  triage->requirements: 1
  requirements->impl: 1
  impl->review: 1
  review->pr: 1
  pr->done: 1
artifacts:
  triage:
    - .ai/specs/spec-20261109-132837.md
  requirements:
    - .ai/specs/spec-20261109-132837.md
    - .ai/specs/assets/spec-20261109-132837/review.html
  pr:
    - .ai/local/tmp/pr-body-6.md
events: 22
---

# Issue #6 の索引

この索引は `events/` から機械的に生成される写しです。手で書き換えないでください（次の記録で上書きされます）。

- 現在地: `pr-success`（outcome: ready）
- フロー: `ai-default-medium` / 通過: `triage` → `requirements` → `impl` → `review` → `pr`
- open な指摘: 9 件（Major 以上 0 件）

## open な指摘

- Minor `scripts/og-image.mjs:4` og 画像の書き出しスクリプトが package.json に無い sharp を直接 import している（astro の optionalDependencies 頼み） … `events/20261109T134717-review.yaml`
- Minor `scripts/og-image.mjs:13` file URL の .pathname をそのままファイルパスとして sharp に渡している（空白・日本語を含むパスや Windows で壊れる） … `events/20261109T134718-review.yaml`
- Minor `.ai/work/6/events` この Issue に kind: decision / concern の event が 0 件 … `events/20261109T134719-review.yaml`
- Minor `src/components/Header.astro:17` 日本語ヘッダーのお問い合わせボタンが Google フォームを直接開き、Contact セクション（返信の目安・書いてほしいこと）を飛ばす … `events/20261109T134832-review.yaml`
- Minor `src/i18n/ui.ts:17` トップの title は全角『｜』、下層ページは半角『 | 』で、屋号の区切りが揃っていない … `events/20261109T134833-review.yaml`
- Minor `src/i18n/ui.ts:19` 日本語の site.description から『自社アプリの開発・公開』が抜けた … `events/20261109T134834-review.yaml`
- Minor `src/layouts/BaseLayout.astro:19` og:image の URL が固定（/og/{lang}.png）で、画像を作り直しても SNS のキャッシュが残る … `events/20261109T134835-review.yaml`
- Minor `scripts/og/en.svg:9` SVG の文字が実行した PC のフォント（Hiragino Sans・Menlo）頼みで、無い環境では豆腐や折り返しになっても成功扱いで書き出される … `events/20261109T134836-review.yaml`
- Minor `src/components/Header.astro:17` Google フォームへの外部リンク属性（formUrl＋target=_blank rel=noopener）の手書きが 4 か所になった … `events/20261109T134837-review.yaml`

## 成果物

- triage: `.ai/specs/spec-20261109-132837.md`
- requirements: `.ai/specs/spec-20261109-132837.md`
- requirements: `.ai/specs/assets/spec-20261109-132837/review.html`
- pr: `.ai/local/tmp/pr-body-6.md`

## 直近の経路

- triage → requirements
- requirements → impl
- impl → review
- review → pr
- pr → done

## 記録（判断・懸念・検証・環境・質問）

- concern [review] 受入の観点に対応する kind: verification の event が 1 件も無いが、impl-direct の手順が verification を積まない … `events/20261109T134720-review.yaml`
