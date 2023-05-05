FROM node:14.16.0-alpine
WORKDIR /godmode
COPY package.json ./
RUN npm i
COPY . .

ENV HOST 0.0.0.0

ENV PORT 3088

EXPOSE ${PORT}

CMD [ "yarn", "start" ]
