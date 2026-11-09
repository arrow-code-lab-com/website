---
issue: 5
pr: 8
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
attempts: { impl: 1, review: 1 }
edges:
  triage->requirements: 1
  requirements->impl: 1
  impl->review: 2
  review->impl: 1
  review->pr: 1
  pr->done: 1
artifacts:
  triage:
    - .ai/specs/spec-20261108-155914.md
  requirements:
    - .ai/specs/spec-20261108-155914.md
    - .ai/specs/assets/spec-20261108-155914/review.html
  pr:
    - .ai/local/tmp/pr-body-5.md
events: 49
---

# Issue #5 の索引

この索引は `events/` から機械的に生成される写しです。手で書き換えないでください（次の記録で上書きされます）。

- 現在地: `pr-success`（outcome: ready）
- フロー: `ai-default-medium` / 通過: `triage` → `requirements` → `impl` → `review` → `pr`
- open な指摘: 0 件（Major 以上 0 件）

## 成果物

- triage: `.ai/specs/spec-20261108-155914.md`
- requirements: `.ai/specs/spec-20261108-155914.md`
- requirements: `.ai/specs/assets/spec-20261108-155914/review.html`
- pr: `.ai/local/tmp/pr-body-5.md`

## 直近の経路

- triage → requirements
- requirements → impl
- impl → review
- review ↩ impl（Major 1 件: 確認ページ review.html にローカルの絶対パスがコミットされている）
- impl → review
- review → pr
- pr → done

## 記録（判断・懸念・検証・環境・質問）

- verification [impl] Done1: 並びが Flow → Notice → FAQ → Contact になり、Contact の直前は FAQ（お受けできない依頼は Notice の最後） … `events/20261109T083459-impl.yaml`
- verification [impl] Done2: FAQ 7 問で小さな依頼・NDA・権利・契約書・支払い・遠方・納品後の修正と保守を扱う。金額なし、即時対応はしないと明記 … `events/20261109T083500-impl.yaml`
- verification [impl] 英語トップに FAQ・受託の文言は増えていない（dist/en/index.html に該当なし）。型チェック 0 errors、本番ビルド成功 … `events/20261109T083501-impl.yaml`
- decision [impl] Notice の対応条件カードの見出しを h3 から h4 にした（新しい小見出し「対応の条件」の下に入るため）。Contact は背景の交互の並びに合わせて section--alt にした … `events/20261109T083502-impl.yaml`
- concern [review] ローカルの main が origin/main より古い（PR #7 のマージ 79dda61 を含まない） … `events/20261109T083657-review.yaml`
- verification [impl] §1-5: Flow の「お見積もり・ご契約」に「ここまでは無料です」、注記に「ご相談・お見積もりは無料です」（dist/index.html で確認） … `events/20261109T084039-impl.yaml`
- verification [impl] §1-5: Notice が「こんな方に向いています」で始まり、対応の条件、最後にお受けできないご依頼の順（dist/index.html で確認） … `events/20261109T084040-impl.yaml`
- verification [impl] §1-5: Contact に書いてほしいこと 4 項目と「要件が固まっていなくても大丈夫です」がある（dist/index.html で確認） … `events/20261109T084041-impl.yaml`
- verification [impl] 指摘の修正後も型チェック 0 errors、本番ビルド成功。追跡物に /Users/ を含むファイルなし … `events/20261109T084042-impl.yaml`
