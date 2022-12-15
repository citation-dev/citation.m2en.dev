# Building citation with Docker

In this guide, we will build citation with Docker.

::: tip Prerequisites

- Docker and Docker-Compose must be installed.

If not, please refer to Docker's [official documentation](https://docs.docker.com/get-docker/).

:::

## Creating a Bot

First, create a Bot to run as a citation.

Please refer to [this guide](create-bot.md) to learn more about creating a bot.

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

Edit also `docker-compose.yml` if necessary.

## Startup

Start citation with the following command.

```sh
docker-compose up -d
```

If the bot comes online and the version appears in the Activity column, you have succeeded.

Thanks for your help.

## Update

Update citation with the following command.

```sh
git pull
docker-compose build
docker-compose down --rmi all && docker-compose up -d
```

::: warning

Please check [Releases](https://github.com/citation-dev/citation/releases) before updating.

::::
