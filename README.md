# 余白の文芸部（MARGINS）

放課後の部室で十個の言葉を選ぶ、オリジナルのビジュアルノベル。

- 部員：如月零 / 雨宮陽菜 / 黒羽メイ / 白鷺琴
- ゲスト：モニカ（@monika_VVtuder）/ 紋匁しゆ（@ayamecu）/ 白羽ルミナ（絵・一ノ瀬アイ）
- セーブ：ゲストは端末の localStorage。Google / X 連携時のみサーバー保存

## 開発

```bash
npm install
npm run dev    # http://localhost:8080
npm run build
npm run typecheck
```

TanStack Start + Vite 8 + Zustand。DB は Neon（`DATABASE_URL`）または PGLite。

## ローズマリーさんへ

このコミットは「直して」と渡すためのスナップショットです。既知の粗いところ：

- 立ち絵7人同時だと SpriteLayer が狭い
- ルミナ立ち絵のマゼンタ抜けが端に残ることがある
- クラウドセーブは ID 連携（`grok-google` / `grok-x`）限定。プレビューの PGLite は再起動で消える
- `src/game/script.ts` が長い。シーン追加は同ファイルの `n` / `say` パターン

主なゲームコードは `src/game/`、立ち絵は `public/game/sprites/` です。
