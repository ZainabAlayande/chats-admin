FROM node:18-alpine

WORKDIR /godmode

COPY package.json ./

RUN yarn install \
  --prefer-offline \
  --frozen-lockfile \
  --non-interactive \
  --production=false

RUN yarn build

ENV HOST 0.0.0.0

ENV PORT 3088

EXPOSE ${PORT}

CMD [ "yarn", "start" ]
