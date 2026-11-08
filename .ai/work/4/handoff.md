---
issue: 4
pr: 7
flow: ai-default-medium
status: pr-success
outcome: ready
evidence:
  spec_status: none
  has_issue: true
  has_pr: true
  tasks_total: 0
  tasks_done: 0
  integration: none
  open_major: 0
  merged: false
  accepted: false
passed: [impl, review, pr]
attempts: { impl: 1, review: 1 }
edges:
  impl->review: 2
  review->impl: 1
  review->pr: 1
  pr->done: 1
artifacts:
  pr:
    - .ai/local/tmp/pr-body-4.md
events: 43
---

# Issue #4 の索引

この索引は `events/` から機械的に生成される写しです。手で書き換えないでください（次の記録で上書きされます）。

- 現在地: `pr-success`（outcome: ready）
- フロー: `ai-default-medium` / 通過: `impl` → `review` → `pr`
- open な指摘: 1 件（Major 以上 0 件）

## open な指摘

- Minor `CLAUDE.md:131` 公開前に合わせた文言（担当範囲・経歴・Apps のリード）を、公開時に戻すことが未決事項に書かれていない … `events/20261108T155351-review.yaml`

## 成果物

- pr: `.ai/local/tmp/pr-body-4.md`

## 直近の経路

- impl → review
- review ↩ impl（Major 2 件: 公開予定のアプリを『ストア公開まで担当』と公開済みのように書いている／受入条件の verification event が無い）
- impl → review
- review → pr
- pr → done

## 記録（判断・懸念・検証・環境・質問）

- verification [impl] Done1: トップの Apps（開発事例）にスクリーンショット・使った技術・担当範囲が出る … `events/20261108T155240-impl.yaml`
- verification [impl] Done2: About に経歴・得意な技術・分野・進め方が出る … `events/20261108T155241-impl.yaml`
- verification [impl] Done3: 勤務先・個人を特定できる記載なし（一致は tokushoho の『銀行振込』のみ）。英語トップに受託の文言なし … `events/20261108T155242-impl.yaml`
- verification [impl] 型チェック 0 errors、本番ビルド成功 … `events/20261108T155243-impl.yaml`
- decision [impl] RoomCheckPDF の使った技術は room-check-pdf リポジトリの pubspec.yaml から、事実として確かめられるものだけを載せた。担当範囲は公開前のため『企画・設計・開発（公開予定）』にした … `events/20261108T155244-impl.yaml`
- decision [impl] tech / role をアプリの frontmatter に足し、日英の両方に書いた（アプリ詳細の日英を揃える方針のため）。英語カードにも出るが、アプリの紹介でありお受けする依頼の記載ではない … `events/20261108T155245-impl.yaml`
