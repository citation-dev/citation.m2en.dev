# Ping

`/ping` で citation が接続しているアクティブなセッションの各 Rest request、GatewayAPI のレスポンスタイムを返します。

---

- このコマンドで表示されるレスポンスタイムはどれも大まかな値となり、正確な値ではないことに注意してください。
- GatewayAPI のレスポンスタイム
  - Discord が最後のハートビートに応答するのにかかった時間(ミリ秒)
  - コマンドが実行された時点の citation のセッションに対する WebSocket Ping をおおよそ表しています。
- Rest request のレスポンスタイム
  - Discord が Rest request に応答するのにかかった時間(ミリ秒)
  - これは Discord API から現在 citation が接続しているクライアントユーザーをリクエストし、それに対するレスポンスにかかった時間になっています。

::: tip citation のレスポンスが悪いと感じたら

[Discord Status](https://discordstatus.com/) の **API Response Time** を確認してください。

値が高い場合は citation のレスポンスが悪いということ以外に、Discord API サーバーのレスポンスが悪い可能性もあります。最新情報を確認してください。

:::
