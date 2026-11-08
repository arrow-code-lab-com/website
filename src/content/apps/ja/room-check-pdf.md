---
# 新しいアプリを追加するときは、このファイルを参考に ja/ と en/ の両方に同じファイル名で置く
title: 入居前チェック（Room Check PDF）
description: 賃貸物件の入居前の状態を、部屋ごとに写真付きで記録して PDF にまとめるアプリです。退去時の原状回復トラブルを防ぎます。
icon: ../../../assets/apps/room-check-pdf/icon.png
# 画面は Google Play 掲載用に撮影したもの（room-check-pdf リポジトリの doc/play_store/）
screenshots:
  - { src: ../../../assets/apps/room-check-pdf/ja/1-mode-select.png, caption: モードを選択 }
  - { src: ../../../assets/apps/room-check-pdf/ja/2-home-tenant.png, caption: 入居者モードのホーム }
  - { src: ../../../assets/apps/room-check-pdf/ja/3-inspection-rooms.png, caption: 部屋ごとに点検 }
  - { src: ../../../assets/apps/room-check-pdf/ja/4-camera.png, caption: グリッドと水平線付きのカメラ }
  - { src: ../../../assets/apps/room-check-pdf/ja/5-item-detail.png, caption: 状態と写真を記録 }
  - { src: ../../../assets/apps/room-check-pdf/ja/6-pdf-preview.png, caption: PDF をプレビューして共有 }
  - { src: ../../../assets/apps/room-check-pdf/ja/7-home-manager.png, caption: 物件管理モードのホーム }
  - { src: ../../../assets/apps/room-check-pdf/ja/8-settings.png, caption: 設定 }
status: development # released（公開中） / development（公開予定）
platforms: [Android]
tech: [Flutter, Dart, Riverpod, Hive, PDF生成, アプリ内課金, AdMob]
role: 企画・設計・開発を 1 人で担当（Google Play で公開予定）
links: {}
legal:
  privacy: https://arrow-code-lab.github.io/room-check-pdf-policy/
  terms: https://arrow-code-lab.github.io/room-check-pdf-policy/terms.html
  tokushoho: https://arrow-code-lab.github.io/room-check-pdf-policy/legal.html
order: 1
---

Google Play で公開予定です。

## こんなときに

- **入居者の方**: 入居前からあった傷や汚れを写真で残しておき、退去時の敷金トラブルに備えたい
- **大家さん・清掃業者の方**: 複数の物件の状態を、同じ形式で点検・記録したい

起動時に「入居者モード」と「物件管理モード」を選べます。

## 主な機能

- **部屋・箇所ごとの記録**: 部屋（リビング、キッチンなど）と箇所（壁、床、天井、窓、ドア）ごとに、写真・状態（傷／汚れ／破損／カビ）・コメントを記録できます。入力内容は自動で保存されます。
- **アプリ内カメラ**: 1か所につき最大10枚まで続けて撮影できます。撮影位置を写真に記録するかどうかも選べます。
- **PDF 出力**: 記録した内容を A4 の PDF にまとめ、プレビューで確認してから共有できます。
- **物件管理**（物件管理モード）: 物件と号室ごとに点検を管理し、点検の予定や履歴を確認できます。取引先の書式などの PDF に、物件名や点検日を差し込んで出力することもできます。
- **日本語・英語に対応**: 画面と PDF を日本語または英語で使えます。

## データの扱い

写真や入力した内容は端末の中にだけ保存され、運営者のサーバーには送信されません。点検の記録と PDF の作成はオフラインでも使えます。

## 料金

基本無料でご利用いただけます（広告が表示されます）。物件管理モードには、広告の非表示などの機能が付いた月額プランがあります。
