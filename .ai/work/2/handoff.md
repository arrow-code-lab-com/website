---
issue: 2
pr: 3
flow: ai-default-medium
status: pr-running
outcome: null
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
passed: [triage, requirements, impl, review]
attempts: { impl: 1, review: 1 }
edges:
  triage->requirements: 1
  requirements->impl: 1
  impl->review: 2
  review->impl: 1
  review->pr: 1
artifacts:
  triage:
    - .ai/specs/spec-20261104-155900.md
  requirements:
    - .ai/specs/spec-20261104-155900.md
    - .ai/specs/assets/20261104-155900/review.html
events: 29
---

# Issue #2 の索引

この索引は `events/` から機械的に生成される写しです。手で書き換えないでください（次の記録で上書きされます）。

- 現在地: `pr-running`
- フロー: `ai-default-medium` / 通過: `triage` → `requirements` → `impl` → `review`
- open な指摘: 3 件（Major 以上 0 件）

## open な指摘

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
- impl → review
- review → pr

## 記録（判断・懸念・検証・環境・質問）

- concern [review] site.description が新しい Hero の打ち出しと合っていない … `events/20261104T161409-review.yaml`
- concern [review] cta.contact キーが未使用になった … `events/20261104T161410-review.yaml`
- decision [impl] 想定依頼者は書き分けず『業務の困りごと』で括った。具体例は実績ではなく対応できるご相談の例として書いた。無料の記載は Hero と Services の両方に置いた（spec §8 の未解決事項。PR で確認する） … `events/20261104T161518-impl.yaml`
- verification [impl] npm run check 0 errors / npm run build 成功（7 pages）。dist/index.html に新しい Hero 文言と副ボタンが出ていることを確認 … `events/20261104T161519-impl.yaml`
