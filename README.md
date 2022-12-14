# fastapi-login-with-react

## やったこと

`fastapi-login`というpythonライブラリを使って、ログイン要求のrestful apiを作りました。nextjsとaxiosを使って、それに対応するフロントエンドを立ち上げて、ログイン機能の実装した最小webアプリを作成してみました。

## ルーティング

- `/`：ホームページ

- `/login`：ログイン画面

- `/data`：データ画面、**ログイン要求**

## 実行

fastapiを8000番ポートで、nextjsを3000番ポートで立ち上げます。

そしてlocalhost:3000にアクセスして、`login`ボタンをクリックします。ユーザー名に`luzao`、パスワードに`1018`を入力してボタンを押して、「mrlove」というログイン要求の情報が画面上に表示されます。

## 参考

バックグラウンドの実装　[https://fastapi-login.readthedocs.io/](https://fastapi-login.readthedocs.io/)

## 不具合

ログインした状態で画面をリロードすると、ログアウト状態になります。原因としては、useContextで状態管理をしているので、リロードすると、保存するtokenがなくなること。


