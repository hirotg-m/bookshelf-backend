# 実行方法

## 前提条件

- Node.js 22 以上
- Docker（コンテナ実行の場合）

## コンテナを使わずに実行

### インストール

```bash
npm install
```

### ビルド

```bash
npm run build
```

### 起動（フォアグラウンド）

```bash
npm start
```

`Ctrl + C` で停止します。

### 起動（バックグラウンド）

```bash
npm start &
```

### 停止（バックグラウンドの場合）

```bash
fuser -k 3000/tcp
```

### 動作確認

```bash
curl http://localhost:3000/api/v1/health
```

## コンテナを使って実行

### ビルド

```bash
docker build -t bookshelf-backend .
```

### 起動

```bash
docker run -d --name bookshelf-backend -p 3000:3000 bookshelf-backend
```

### 停止

```bash
docker stop bookshelf-backend
docker rm bookshelf-backend
```

### 動作確認

```bash
curl http://localhost:3000/api/v1/health
```
