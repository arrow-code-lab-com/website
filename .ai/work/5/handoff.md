---
issue: 5
pr: 8
flow: ai-default-medium
status: impl-success
outcome: "実装完了"
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
passed: [triage, requirements, impl]
attempts: {}
edges:
  triage->requirements: 1
  requirements->impl: 1
  impl->review: 1
artifacts:
  triage:
    - .ai/specs/spec-20261108-155914.md
  requirements:
    - .ai/specs/spec-20261108-155914.md
    - .ai/specs/assets/spec-20261108-155914/review.html
events: 10
---

# Issue #5 の索引

この索引は `events/` から機械的に生成される写しです。手で書き換えないでください（次の記録で上書きされます）。

- 現在地: `impl-success`（outcome: 実装完了）
- フロー: `ai-default-medium` / 通過: `triage` → `requirements` → `impl`
- open な指摘: 0 件（Major 以上 0 件）

## 成果物

- triage: `.ai/specs/spec-20261108-155914.md`
- requirements: `.ai/specs/spec-20261108-155914.md`
- requirements: `.ai/specs/assets/spec-20261108-155914/review.html`

## 直近の経路

- triage → requirements
- requirements → impl
- impl → review

## 記録（判断・懸念・検証・環境・質問）

- verification [impl] Done1: 並びが Flow → Notice → FAQ → Contact になり、Contact の直前は FAQ（お受けできない依頼は Notice の最後） … `events/20261109T083459-impl.yaml`
- verification [impl] Done2: FAQ 7 問で小さな依頼・NDA・権利・契約書・支払い・遠方・納品後の修正と保守を扱う。金額なし、即時対応はしないと明記 … `events/20261109T083500-impl.yaml`
- verification [impl] 英語トップに FAQ・受託の文言は増えていない（dist/en/index.html に該当なし）。型チェック 0 errors、本番ビルド成功 … `events/20261109T083501-impl.yaml`
- decision [impl] Notice の対応条件カードの見出しを h3 から h4 にした（新しい小見出し「対応の条件」の下に入るため）。Contact は背景の交互の並びに合わせて section--alt にした … `events/20261109T083502-impl.yaml`
