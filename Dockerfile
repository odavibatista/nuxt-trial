FROM node:18-alpine AS frontend

WORKDIR /home/node/app

COPY package.json ./

COPY package-lock.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

ENV NUXT_PORT=3000

ENV NUXT_HOST=0.0.0.0