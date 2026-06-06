# API 仕様

Base URL: `/api/v1`

## 認証

ログインAPI以外のエンドポイント（health除く）はトークンが必要です。  
リクエストヘッダに `Authorization: Bearer <token>` を付与してください。

---

## Health

| Method | Path | 説明 |
|--------|------|------|
| GET | /health | ヘルスチェック |

### レスポンス

```json
{ "status": "ok" }
```

---

## ログイン

| Method | Path | 説明 |
|--------|------|------|
| GET | /login | ログイン |
| GET | /logout | ログアウト |

---

## 書籍

トークン必要

| Method | Path | 説明 |
|--------|------|------|
| GET | /books | すべて取得 |
| GET | /books/{id} | 指定して取得 |
| PUT | /books | 登録 |
| POST | /books/{id} | 更新 |
| DELETE | /books/{id} | 削除 |

---

## ユーザー

トークン必要

| Method | Path | 説明 |
|--------|------|------|
| GET | /users | すべて取得 |
| GET | /users/{id} | 指定して取得 |
| PUT | /users | 登録 |
| POST | /users/{id} | 更新 |
| DELETE | /users/{id} | 削除 |
