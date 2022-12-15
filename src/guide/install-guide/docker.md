# Docker で citation を構築する

このガイドでは citaiton を Docker で構築します。

::: tip 前提条件

- Docker、及び Docker-Compose がインストールされていること

インストールしていない場合は Docker の[公式ドキュメント](https://docs.docker.com/get-docker/)を参照して用意してください。

:::

## Bot の作成

まず、最初に citation として動作させる Bot を作成します。

Bot については [このガイド](create-bot.md) を確認しながら作成してください。

## リポジトリをクローンする

```sh
# SSH
git clone git@github.com:citation-dev/citation.git
# HTTPS
git clone https://github.com/citation-dev/citation.git

cd citation
```

## 環境変数ファイルを作成する

下記コマンドで環境変数ファイルを `.env` としてコピーした後、ファイル内の指示に従って編集してください。

```sh
cp .env.example .env
```

必要であれば `docker-compose.yml` も編集してください。

## 起動

次のコマンドで、citation を起動します。

```sh
docker-compose up -d
```

Bot がオンラインになり、アクティビティ欄にバージョンが表示されれば成功です。

お疲れ様でした。

## アップデート

次のコマンドで、citation をアップデートします。

```sh
git pull
docker-compose build
docker-compose down --rmi all && docker-compose up -d
```

::: warning

アップデートを行う際は [Releases](https://github.com/citation-dev/citation/releases) を事前に確認してください。

:::
