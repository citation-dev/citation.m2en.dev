# 自分でビルドする

このガイドではcitaitonを自力でビルドする方法です。

::: tip 前提条件

- Java 17 (JDK 17) がインストールされていること

Gradleはデーモンが付属しているため、必要ではありません。

:::

::: warning 注意事項

この方法では、仕様上バージョンが正常に取得できず、アクティビティ欄にバージョンが表示されません。

機能自体に影響はありません。バージョンを正しく表示したい場合は [Dockerを使った構築](docker.md) をご検討ください。

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

## ビルド

次のコマンドで、citationのビルドを行います。

これには時間がかかります。

```sh 
./gradlew build
```

## 起動

ビルドに成功すると `build/libs` 配下にJarファイルが生成されます。

次のコマンドで、citationを起動します。

```sh
java -jar build/libs/citation.ja
```

Botがオンラインになり、アクティビティ欄にバージョンが表示されれば成功です。

お疲れ様でした。

::: warning 

このコマンドを実行する際は、環境変数ファイル `.env` が同じディレクトリに存在することを確認してください。

存在しない場合は起動に失敗します。

:::

## アップデート

次のコマンドで、citationをアップデートします。

```sh
git pull
./gradlew build
java -jar build/libs/citation.ja
```

::: warning

アップデートを行う際は [Releases](https://github.com/citation-dev/citation/releases) を事前に確認してください。

:::
