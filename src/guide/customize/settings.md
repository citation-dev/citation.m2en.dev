# citation の設定を変更する

citation はイメージ起動時に設定したボリュームに `config.yml` を生成し、それを設定ファイルとして扱います。

## デフォルト値

一部の設定項目は `config.yml` で指定されていない場合は決められたデフォルト値を設定値として扱います。

## 設定の再読込

設定をリロードするには現在アクティブな citation を再起動する必要があります。

```shell
cd citation # citation のディレクトリに移動
docker compose down && docker compose up -d
```

---

- 設定値の詳細は [設定リファレンス](settings_reference.md) を参照してください。
- Docker のボリュームについては [Volumes - Docker Documentation](https://docs.docker.com/storage/volumes/) を参照してください。
