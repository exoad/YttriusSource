FROM node:8-alpine

ENV NODE_ENV production

RUN mkdir /bot
WORKDIR /bot
COPY . /bot
RUN npm install

VOLUME /bot/config
CMD node .
