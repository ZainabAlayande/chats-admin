FROM node:14.0.0-alpine
WORKDIR /godmode
COPY package.json ./
RUN npm i
COPY . .

