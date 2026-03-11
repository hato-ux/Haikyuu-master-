# 配球マスター ⚾

高校野球の配球問題集アプリ。AIが状況を生成し、配球の評価・解説をしてくれます。

## デプロイ手順（Vercel）

### 1. GitHubにリポジトリ作成
1. [github.com](https://github.com) にログイン
2. 「New repository」→ 名前を `hakyuu-master` に設定
3. 「Create repository」

### 2. ファイルをアップロード
このフォルダの中身をすべてGitHubにアップロード：
- `package.json`
- `vite.config.js`
- `index.html`
- `.gitignore`
- `src/main.jsx`
- `src/App.jsx`

### 3. Vercelでデプロイ
1. [vercel.com](https://vercel.com) にGitHubアカウントでログイン
2. 「Add New Project」
3. GitHubのリポジトリを選択
4. Framework Preset: **Vite** を選択
5. 「Deploy」ボタンを押す

→ 数分で `https://hakyuu-master-xxx.vercel.app` のようなURLが発行されます！

### 4. iPhoneのホーム画面に追加
1. SafariでURLを開く
2. 下の共有ボタン（□↑）をタップ
3. 「ホーム画面に追加」→ 「追加」
