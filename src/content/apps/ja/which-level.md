---
title: どこだっけ ― 駐車位置メモ｜立体駐車場の何階・柱を記録
description: 停めた車の場所を、アプリを開くだけで記録する駐車位置メモアプリです。立体駐車場の階や柱の番号、写真も残せて、帰りは矢印と地図で車まで案内します。
icon: ../../../assets/apps/which-level/icon.png
# 画面は Google Play 掲載用に作ったもの（which-level リポジトリの fastlane/metadata/android/）
screenshots:
  - { src: ../../../assets/apps/which-level/ja/01_saved.png, caption: 開くだけで駐車位置を記録 }
  - { src: ../../../assets/apps/which-level/ja/02_findArrow.png, caption: 矢印で車まで案内 }
  - { src: ../../../assets/apps/which-level/ja/03_camera.png, caption: 柱や階の表示を撮って番号を記録 }
  - { src: ../../../assets/apps/which-level/ja/04_findMap.png, caption: 地図で車の場所を確認 }
  - { src: ../../../assets/apps/which-level/ja/05_fee.png, caption: 料金看板から駐車料金を試算 }
  - { src: ../../../assets/apps/which-level/ja/06_autoRecord.png, caption: 車の Bluetooth が切れたら自動で記録 }
  - { src: ../../../assets/apps/which-level/ja/07_history.png, caption: 履歴とお気に入り }
status: released # released（公開中） / development（公開予定）
platforms: [Android]
tech: [Flutter, Dart, SQLite, ML Kit（文字認識）, Google Maps, 気圧・方位センサー, アプリ内課金, AdMob]
role: 企画・設計・開発を 1 人で担当
links:
  googlePlay: https://play.google.com/store/apps/details?id=com.arrowcodelab.whichlevel
legal:
  privacy: https://which-level.arrow-code-lab.com/
  terms: https://which-level.arrow-code-lab.com/terms.html
  tokushoho: https://which-level.arrow-code-lab.com/legal.html
order: 1
---

Google Play で公開中です。iOS 版は準備中です。

## こんなときに

- ショッピングモールや空港の立体駐車場で、「何階に停めたっけ？」とならないようにしたい
- GPS が届きにくい地下駐車場でも、階・柱の番号と写真で車を見つけたい

## 主な機能

- **開くだけで記録**: アプリを開くと、時刻と位置が自動で保存されます。
- **柱の番号を写真から取り込み**: 柱や階の表示を撮ると、写っている「C-12」「3F」などの文字を候補に出します。タップすれば記録に入ります。メモも残せます。
- **矢印と地図で案内**: 車のある方向と距離を矢印で表示します。地図に切り替えると、周りの様子も確認できます。
- **いま何階かの目安**: スマホの気圧センサーで、停めた階との差を「車は 3F・いまは約 1F」のように目安で表示します。
- **駐車料金の試算**（日本国内のみ）: 料金看板を撮ると、看板の文字を端末の中で読み取り、停めていた時間から「いま」の料金を計算します。30 分後・1 時間後の料金も確認できます。
- **車から降りたら自動で記録**（Android のみ）: 車の Bluetooth との接続が切れたときに、駐車位置を保存します。Android Auto にも対応しています。
- **履歴とお気に入り**: よく行く駐車場はお気に入りに登録できます。場所・メモ・階・柱の番号で探せます。

階の目安と料金の試算は目安です。実際の表示や看板もあわせてご確認ください。

## データの扱い

記録と写真は端末の中に保存され、いまは運営者のサーバーには送信していません。アカウント登録は不要です。通信が届かない地下でも、写真や階のメモから車を探せます。

今後、看板の読み取りの精度を上げるためにクラウドの AI を使う機能を追加する場合があります。その場合は、送信する情報をプライバシーポリシーに書き、使うかどうかを選べるようにします。

## 料金

基本無料でご利用いただけます（広告が表示されます）。買い切りの広告なし版では、広告が表示されなくなり、履歴を無制限に見られ、お気に入りを 4 件以上登録でき、写真の保存期間を 7 日より長く（無期限まで）選べます。
