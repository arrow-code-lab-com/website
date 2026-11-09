---
issue: 5
pr: 8
flow: ai-default-medium
status: review-revert
outcome: findings
evidence:
  spec_status: draft
  has_issue: true
  has_pr: true
  tasks_total: 0
  tasks_done: 0
  integration: none
  open_major: 1
  merged: false
  accepted: false
passed: [triage, requirements, impl]
attempts: {}
edges:
  triage->requirements: 1
  requirements->impl: 1
  impl->review: 1
  review->impl: 1
artifacts:
  triage:
    - .ai/specs/spec-20261108-155914.md
  requirements:
    - .ai/specs/spec-20261108-155914.md
    - .ai/specs/assets/spec-20261108-155914/review.html
events: 27
---

# Issue #5 の索引

この索引は `events/` から機械的に生成される写しです。手で書き換えないでください（次の記録で上書きされます）。

- 現在地: `review-revert`（outcome: findings）
- フロー: `ai-default-medium` / 通過: `triage` → `requirements` → `impl`
- open な指摘: 11 件（Major 以上 1 件）

## open な指摘

- Major `.ai/specs/assets/spec-20261108-155914/review.html:5` 確認ページにローカルの絶対パス（/Users/yano/...）が入ったままコミットされている（5 行目と 75 行目） … `events/20261109T083653-review.yaml`
- Minor `src/components/HomePage.astro:120` NDA の答えの「ご相談の内容をお伺いする前に結ぶこともできます」は、問診で確かめた事実の範囲を超えた約束になっている … `events/20261109T083654-review.yaml`
- Minor `src/components/HomePage.astro:401` FAQ の質問の前後に付けた飾りの「Q」「+」「−」が、スクリーンリーダーで質問文と一緒に読み上げられる … `events/20261109T083655-review.yaml`
- Minor `.ai/specs/spec-20261108-155914.md:1-5` 仕様書 §1-5 の受入の観点のうち 3 つに、kind: verification の event が無い … `events/20261109T083656-review.yaml`
- Minor `src/components/HomePage.astro:121` FAQ の NDA の答え（相談内容を伺う前に結べる）と、Contact でフォームに詳しく書いてもらう案内が食い違う … `events/20261109T083904-review.yaml`
- Minor `src/components/HomePage.astro:143` FAQ の保守の答えが対応時間と即時対応なしを Notice と同じ文言で直書きしており、条件を変えたときにずれる … `events/20261109T083905-review.yaml`
- Minor `src/components/HomePage.astro:106` Flow の中で「無料」がステップ本文と注記の 2 回出る … `events/20261109T083906-review.yaml`
- Minor `src/components/HomePage.astro:117` FAQ の 1 問目（小さな依頼・相談だけ）が servicesLead と noticeSuited の内容と重なる … `events/20261109T083907-review.yaml`
- Minor `src/components/HomePage.astro:419` FAQ の答えの字下げ 1.75rem が「Q」＋間隔の幅（約 1.35rem）と合わず、質問文とずれる … `events/20261109T083908-review.yaml`
- Minor `src/components/HomePage.astro:377` .notice__heading:first-of-type は h3 の並び順に依存しており、前に h3 が増えると余白が崩れる … `events/20261109T083909-review.yaml`
- Minor `src/components/HomePage.astro:392` summary に display: flex を当てており、古い WebKit では三角マーカーと「+」が両方出たり「Q」が改行されたりするおそれ … `events/20261109T083910-review.yaml`

## 成果物

- triage: `.ai/specs/spec-20261108-155914.md`
- requirements: `.ai/specs/spec-20261108-155914.md`
- requirements: `.ai/specs/assets/spec-20261108-155914/review.html`

## 直近の経路

- triage → requirements
- requirements → impl
- impl → review
- review ↩ impl（Major 1 件: 確認ページ review.html にローカルの絶対パスがコミットされている）

## 記録（判断・懸念・検証・環境・質問）

- verification [impl] Done1: 並びが Flow → Notice → FAQ → Contact になり、Contact の直前は FAQ（お受けできない依頼は Notice の最後） … `events/20261109T083459-impl.yaml`
- verification [impl] Done2: FAQ 7 問で小さな依頼・NDA・権利・契約書・支払い・遠方・納品後の修正と保守を扱う。金額なし、即時対応はしないと明記 … `events/20261109T083500-impl.yaml`
- verification [impl] 英語トップに FAQ・受託の文言は増えていない（dist/en/index.html に該当なし）。型チェック 0 errors、本番ビルド成功 … `events/20261109T083501-impl.yaml`
- decision [impl] Notice の対応条件カードの見出しを h3 から h4 にした（新しい小見出し「対応の条件」の下に入るため）。Contact は背景の交互の並びに合わせて section--alt にした … `events/20261109T083502-impl.yaml`
- concern [review] ローカルの main が origin/main より古い（PR #7 のマージ 79dda61 を含まない） … `events/20261109T083657-review.yaml`
