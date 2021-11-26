FROM node:16.13.0-alpine

RUN apk add bash

RUN npm i -g @nestjs/cli

USER node

WORKDIR /home/node/app
