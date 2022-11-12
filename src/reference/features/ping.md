# Ping

- citationが接続しているアクティブなセッションの各Rest request、GatewayAPIのレスポンスタイムを返します。
- このコマンドで表示されるレスポンスタイムはどれも大まかな値となり、正確な値ではないことに注意してください。
- GatewayAPIのレスポンスタイム
  - Discordが最後のハートビートに応答するのにかかった時間(ミリ秒)
  - コマンドが実行された時点のcitationのセッションに対するWebSocket Pingをおおよそ表しています。
- Rest requestのレスポンスタイム
  - DiscordがRest requestに応答するのにかかった時間(ミリ秒)
  - これはDiscord APIから現在citationが接続しているクライアントユーザーをリクエストし、それに対するレスポンスにかかった時間になっています。

::: tip citationのレスポンスが悪いと感じたら

[Discord Status](https://discordstatus.com/) の **API Response Time** を確認してください。

値が高い場合はcitationのレスポンスが悪いということではなく、Discord APIサーバーのレスポンスが悪い可能性があります。最新情報を確認してください。

:::
