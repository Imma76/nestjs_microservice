FROM node:18

WORKDIR /usr/app
COPY ./ /usr/app
COPY package.json ./
COPY package-lock.json ./

FROM --platform=linux/amd64 node:lts-alpine
COPY ./ ./
RUN npm install

