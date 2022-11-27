# Dockerでcitationを構築する

このガイドではcitaitonをDockerで構築します。

::: tip 前提条件

- Docker、及びDocker-Composeがインストールされていること

インストールしていない場合はDockerの[公式ドキュメント](https://docs.docker.com/get-docker/)を参照して用意してください。

:::

## Botの作成

まず、最初にcitationとして動作させるBotを作成します。

Botについては [このガイド](create-bot.md) を確認しながら作成してください。

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

次のコマンドで、citationを起動します。

```sh
docker-compose up -d
```

Botがオンラインになり、アクティビティ欄にバージョンが表示されれば成功です。

お疲れ様でした。

## アップデート

次のコマンドで、citationをアップデートします。

```sh
git pull
docker-compose build
docker-compose down --rmi all && docker-compose up -d
```

::: warning

アップデートを行う際は [Releases](https://github.com/citation-dev/citation/releases) を事前に確認してください。

:::
