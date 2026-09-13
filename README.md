# ロトルーレット公式サイト

ロト7・ロト6・ミニロトの数字選びを、ひとつのiPhoneアプリで楽しめることを紹介する1ページの公式サイトです。HTML・CSS・JavaScriptだけで動き、ビルドやライブラリのインストールは不要です。既存のiPhoneアプリのファイルは変更していません。

## 正式画像・URLの準備

画像9点の推奨サイズ・保存先・使用箇所と、URLの安全な入力手順は [ASSET_GUIDE.md](ASSET_GUIDE.md) にまとめています。正式素材の準備はこの一覧から始めてください。

## ファイル構成

- `index.html`：全セクションの文章、SEO、OGP、SoftwareApplicationとFAQPageの構造化データ
- `css/style.css`：色・文字・スマホとPCのレイアウト
- `js/main.js`：公式リンクの設定、スマホメニュー、画像がないときの表示
- `images/app/`：アプリ画面
- `images/logo/`：ロゴ
- `images/og/`：SNS共有用画像
- `images/screenshots/`、`images/icons/`：追加素材用の空フォルダ
- `favicon/favicon.svg`：仮のルーレットアイコン
- `.nojekyll`：GitHub Pagesでそのままファイルを公開するための設定
- `.gitignore`：不要な作業ファイルをGitに含めない設定

## ローカルで確認する方法

`index.html` をブラウザで開くだけで確認できます。Pythonが使える場合は、このフォルダで `python3 -m http.server 8000` を実行し、ブラウザで http://localhost:8000 を開く方法もあります。停止は Control + C です。

## 画像を差し替える

下の名前でPNG画像を配置してください。画像がない間は「画面画像 準備中」と表示します。写真のように見せた架空のアプリ画面は使用していません。

- `images/logo/logo-main.png`：正式ロゴ。未配置時は文字ロゴ
- `images/app/mode-select.png`：LOTO7 → LOTO6 → MINIのモード選択画面
- `images/app/loto7.png`：ロト7のプレイ画面（ABOUTでも使用）
- `images/app/loto6.png`：ロト6のプレイ画面
- `images/app/mini.png`：ミニロトのプレイ画面
- `images/app/spinning.png`：回転中
- `images/app/number-confirmed.png`：数字確定
- `images/app/completed.png`：完成
- `images/og/og-image.png`：共有用画像。横1200 × 縦630ピクセルを推奨

画面の表示枠は縦長です。画像全体が見えるように表示し、必要なら余白が入ります。正式画面の比率に合わせたい場合はCSSの `.screen-stage` の `aspect-ratio` を変更してください。アイコンは必要に応じて `favicon/favicon.svg` を差し替えます。

## URLの設定

`js/main.js` 冒頭の `SITE_LINKS` の空の引用符に確認済みURLを入力します。

- `appStore`：App Store。3か所のボタンとフッターへ一括反映
- `x`：公式X
- `youtube`：公式YouTube
- `privacy`：公開済みプライバシーポリシー
- `contact`：お問い合わせページ、または `mailto:メールアドレス`

未設定リンクは準備中として無効になります。架空のURLや価格は設定していません。JavaScriptを無効にした場合も本文・FAQは読めますが、公式リンクは有効になりません。

## 公開URL・検索・SNSの設定

`index.html` 冒頭のTODOコメントにあるcanonical・og:url・og:imageの3行をコメントの外に移し、`TODO_PUBLIC_URL` を実際の公開URLへ置き換えます。画像URLは「公開URL + images/og/og-image.png」となるよう、スラッシュの重複に注意してください。公開URL・画像が未確定の現段階では、この3項目は出力されません。公開前に必ず設定してください。

タイトル・説明・OGPの文章・Twitter Cardは設定済みです。アプリ価格やApp Store URLは推測せず、構造化データから省略しています。FAQを変更するときは、画面内の回答と冒頭のJSON-LD内の回答を両方変更してください。構造化データは検索結果での特別な表示を保証するものではありません。

フォントはNoto Sans JPを優先し、端末にない場合は標準の日本語フォントを使います。外部フォントの通信は発生しません。

## GitHub Pagesで公開する方法

1. GitHubでサイト用の新しいリポジトリを作成します。
2. **このフォルダ自体ではなく、中身をリポジトリの一番上に置きます。** `index.html` と `css`、`js`、`images` が同じ階層になるようにします。iPhoneアプリのソースをアップロードする必要はありません。
3. READMEやドットで始まる設定ファイルも含めて保存します。
4. リポジトリの Settings → Pages を開き、公開元を Deploy from a branch、ブランチを main、フォルダを / (root) にして保存します。
5. 表示された公開URLを開きます。反映には少し時間がかかる場合があります。
6. その公開URLを使い、上記のcanonical・OGPを設定して再度保存します。
7. iPhoneとPCから画像・メニュー・FAQ・すべての公式リンクを確認してください。

現段階ではGitHubへの送信・公開は行っていません。公開先リポジトリと公式URLが決まった後に実施してください。

## 主に修正するファイル

文章は `index.html`、デザインは `css/style.css`、リンクは `js/main.js` です。FAQはブラウザ標準の開閉機能を使用し、キーボードにも対応しています。メニューは768px未満で折りたたみ、PCでは常時表示します。アニメーションを減らす端末設定にも対応しています。

## 公開前チェック

- 正式画像とロゴ、OGP画像を配置
- 公式の5種類のリンクを設定
- 公開URLとOGP画像URLを設定
- 実機の画面とサイトの機能説明が一致しているか確認
- 正式画像に差し替えた後、スマホとPCの表示を再確認
