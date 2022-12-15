# Build it yourself

This guide shows you how to build citaiton by yourself.

::: tip Prerequisites

- Java 17 (JDK 17) must be installed.

Gradle comes with a daemon, so it is not required.

:::

::: warning

This method does not display the version in the activity column because the version cannot be obtained correctly due to the specification.

This does not affect the function itself. If you want to display the version correctly, please consider [Building with Docker](docker.md).

:::

## Creating a Bot

First, create a Bot to run as a citation.

Please review [this guide](create-bot.md) to learn more about creating a bot.

## Clone the repository

```sh
## SSH
git clone git@github.com:citation-dev/citation.git
# HTTPS
git clone https://github.com/citation-dev/citation.git

cd citation
```

## Create an environment variable file

Copy the environment variable file as `.env` with the following command, then edit it according to the instructions in the file.

```sh
cp .env.example .env
```

## Build

The following command will build citation.

This will take some time.

```sh
. /gradlew build
```

## Startup

After a successful build, Jar files will be generated under `build/libs`.

Start citation with the following command.

```sh
java -jar build/libs/citation.ja
```

If the bot comes online and the version is displayed in the Activity column, you have succeeded.

Thank you for your hard work.

::: warning

When executing this command, make sure that the environment variable file `.env` exists in the same directory.

If it does not exist, the startup will fail.

::::

## Update

The following command will update citation.

```sh
git pull
. /gradlew build
java -jar build/libs/citation.ja
```

::: warning

Please check [Releases](https://github.com/citation-dev/citation/releases) before updating.

::::
