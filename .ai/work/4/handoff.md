---
issue: 4
flow: ai-default-medium
status: review-revert
outcome: findings
evidence:
  spec_status: none
  has_issue: true
  has_pr: false
  tasks_total: 0
  tasks_done: 0
  integration: none
  open_major: 2
  merged: false
  accepted: false
passed: [impl]
attempts: {}
edges:
  impl->review: 1
  review->impl: 1
events: 18
---

# Issue #4 の索引

この索引は `events/` から機械的に生成される写しです。手で書き換えないでください（次の記録で上書きされます）。

- 現在地: `review-revert`（outcome: findings）
- フロー: `ai-default-medium` / 通過: `impl`
- open な指摘: 11 件（Major 以上 2 件）

## open な指摘

- Major `src/content/apps/ja/room-check-pdf.md:19` 公開前のアプリに「ストア公開まで担当」と完了済みの実績として書いている … `events/20261108T154935-review.yaml`
- Major `.ai/work/4/events` Issue #4 の受入条件（Done）に対応する verification event が 1 件もない … `events/20261108T154936-review.yaml`
- Minor `.ai/work/4/events` kind: decision / concern が 0 件 … `events/20261108T154937-review.yaml`
- Minor `src/components/HomePage.astro:48` 根拠の事実「Copilot」を「GitHub Copilot」と補っている … `events/20261108T154938-review.yaml`
- Minor `src/components/HomePage.astro:66` 「業務知識: 医療系」を強みに挙げつつ、Notice では医療ソフトウェアの依頼をお断りしており読み手が迷う … `events/20261108T154939-review.yaml`
- Minor `src/components/AppList.astro:39` カードでは tech が空だと role も表示されない（詳細ページと条件が違う） … `events/20261108T154940-review.yaml`
- Minor `src/components/HomePage.astro:168` About の小見出し（h3）の下のスキルカードも h3 で、見出しの階層が崩れている … `events/20261108T154941-review.yaml`
- Minor `src/components/AppList.astro:35` カード全体のリンク内にスクリーンショットの alt が入り、リンクの読み上げ名が長くなる … `events/20261108T154942-review.yaml`
- Minor `src/components/HomePage.astro:46` 経歴の組み合わせ（医療系 15 年・現役・前職金融機関）と Notice の「本業と競合」で勤務先が絞り込みやすくなる … `events/20261108T155045-review.yaml`
- Minor `src/components/HomePage.astro:72` 進め方の「伝言による行き違いがありません」が断定的な約束になっている … `events/20261108T155046-review.yaml`
- Minor `src/components/HomePage.astro:244` 汎用名にした .section-lead が HomePage のスコープ付きスタイルに残っている … `events/20261108T155047-review.yaml`

## 直近の経路

- impl → review
- review ↩ impl（Major 2 件: 公開予定のアプリを『ストア公開まで担当』と公開済みのように書いている／受入条件の verification event が無い）
