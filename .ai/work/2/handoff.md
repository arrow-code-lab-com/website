---
issue: 2
pr: 3
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
    - .ai/specs/spec-20261104-155900.md
  requirements:
    - .ai/specs/spec-20261104-155900.md
    - .ai/specs/assets/20261104-155900/review.html
events: 18
---

# Issue #2 の索引

この索引は `events/` から機械的に生成される写しです。手で書き換えないでください（次の記録で上書きされます）。

- 現在地: `review-revert`（outcome: findings）
- フロー: `ai-default-medium` / 通過: `triage` → `requirements` → `impl`
- open な指摘: 6 件（Major 以上 1 件）

## open な指摘

- Major `.ai/specs/assets/20261104-155900/review.html:5` 追跡物の確認ページにローカルの絶対パス（ユーザー名を含む）が混入している … `events/20261104T161253-review.yaml`
- Minor `src/components/HomePage.astro:7` Services の構成と文言の扱いが CLAUDE.md と食い違ったまま … `events/20261104T161304-review.yaml`
- Minor `.ai/work/2/events` decision / concern / verification の event が 1 件も積まれていない … `events/20261104T161305-review.yaml`
- Minor `src/components/HomePage.astro:82` Hero の主ボタンがフォームへ直行し、ご依頼の前に（Notice）を読まずに問い合わせられる … `events/20261104T161406-review.yaml`
- Minor `src/components/HomePage.astro:37` 「無料」と「個別にお見積もり」の文言が複数箇所に重複している … `events/20261104T161407-review.yaml`
- Minor `src/components/HomePage.astro:192` .services__lead が負のマージンで .section-title の余白を打ち消している … `events/20261104T161408-review.yaml`

## 成果物

- triage: `.ai/specs/spec-20261104-155900.md`
- requirements: `.ai/specs/spec-20261104-155900.md`
- requirements: `.ai/specs/assets/20261104-155900/review.html`

## 直近の経路

- triage → requirements
- requirements → impl
- impl → review
- review ↩ impl（追跡物 .ai/specs/assets/20261104-155900/review.html にローカルの絶対パス（ユーザー名を含む）が入っており、公開リポジトリで漏れる（Major））

## 記録（判断・懸念・検証・環境・質問）

- concern [review] site.description が新しい Hero の打ち出しと合っていない … `events/20261104T161409-review.yaml`
- concern [review] cta.contact キーが未使用になった … `events/20261104T161410-review.yaml`
