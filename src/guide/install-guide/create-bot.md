# Bot を作成する

このガイドでは citation として動作する Bot を作成します。

## App を作成する

[Discord Developer Portal](https://discord.com/developers/applications)にアクセスし、`New Application`をクリックします。

アプリの名前とチームを選択したら `Create` をクリックします。

![アプリ作成画面](../../image/guide/install-guide/create-app.png)

::: tip team とは

チームは、複数人で開発する際に、アプリを共有するための機能です。

チームを作成するには、[Discord Developer Portal](https://discord.com/developers/applications)にアクセスし、`New Team`をクリックします。

チーム間ではトークンを共有したりすることができます。機能の詳細については Discord Developer Documentation を参照してください。

[Teams - Discord Developer Documentation](https://discord.com/developers/docs/topics/teams)

:::

## Bot を作成する

App をクリックして、`General Information` に移動したら、 `Bot` メニューへ移動します。

![アプリ詳細画面](../../image/guide/install-guide/app-general-info.png)

`Add Bot` をクリックし、新しい Bot ユーザーを作成しましょう。

::: danger Too many users have this username, please try another. と表示される場合

エラーの通り、Bot の名前が他のユーザーと被っている可能性があります。

初期状態では App の名前をそのまま Bot の名前に使います。App の名前は別の App と被っていても存在できますが、Bot に関してはユーザーのアカウントと同じ扱いです。(ユーザーアカウントも同じユーザー名と Discord Tag は存在できない)

`General Information` に戻り、App の名前を一時的に変更して `Add Bot` をクリックしましょう。

:::

## トークンを入手する

`Reset Token` をクリックし、Bot のトークンをコピーします。

このトークンは Bot の認証に使用されます。後々使うので、安全な場所に保存しておきましょう。

::: danger トークンは絶対に他人に教えないでください

トークンは機密情報です。絶対に他人に教えないようにしてください。

トークンを共有したい場合はチーム機能などを活用してください。詳しくは Discord Developer Documentation を参照してください。

[Teams - Discord Developer Documentation](https://discord.com/developers/docs/topics/teams)

:::

## Authorization Flow の設定

必要に応じて `Authorization Flow` を設定します。

- `PUBLIC BOT`: 公開 Bot かの設定を行います。招待リンクを公開していなくても実は招待リンクは自作することができます。公開したくない場合はこの設定を OFF にしてください。(OFF にしても自分だけは招待することができます。)

## Privileged Gateway Intents の設定

citation を正常に動作させるため、 `Privileged Gateway Intents` の設定を行います。

`Server Members Intent` と `MESSAGE CONTENT INTENT` を `ON` にしてください。

`Privileged Gateway Intents` については[こちら](https://discord.com/developers/docs/topics/gateway#gateway-intents)を参照してください。

## Bot をサーバーに招待する

設定が完了したら Bot をサーバーに招待しましょう。

`OAuth2` タブから `OAuth2 URL Generator` に移動します。

![OAuth2 URL Generator](../../image/guide/install-guide/oauth2.png)

### SCOPES を設定

最初に`SCOPES`を設定します。

citation は Web サービスではないため、 `bot` だけで大丈夫です。

![SCOPES](../../image/guide/install-guide/scopes.png)

### 権限を設定する

次に Bot の権限を設定します。

`BOT PERMISSIONS`から次の権限にチェックをつけてください。

- `Send_Messages` (メッセージの送信権限) - **必須**
- `Send_Messages_in_Threads` (スレッドでのメッセージ送信権限) - **必須**
- `Embeds_Links` (リンクの埋め込み権限) - **必須**
- `Attach Files` (添付ファイル送信権限) - **必須**
- `Read Messages / View Channels` (メッセージ、チャンネルの閲覧権限) - **必須**
- `Use External Emojis` (別鯖の絵文字使用権限)
- `Use External Sticker` (別鯖のステッカー使用権限)

::: tip

`Use External Emojis` と `Use External Sticker` は必須ではありませんが、別鯖の絵文字やステッカーを正常に引用したい場合はチェックをつけてください。

:::

### Bot をサーバーに招待する

`GENERATED URL` に招待リンクが発行されます。画面の指示に従って Bot をサーバーに招待してください。

---

お疲れ様です。これで Bot を作成することができました。

前にいたガイドに戻って起動作業に移ってください。

- [Docker で citation を構築する](docker.md)
- [自分でビルドする](self-build.md)
