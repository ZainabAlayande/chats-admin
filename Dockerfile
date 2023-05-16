FROM node:18-alpine

WORKDIR /godmode

COPY ./package.json /godmode/

RUN yarn install \
  --prefer-offline \
  --frozen-lockfile \
  --non-interactive \
  --production=false

RUN yarn build

ENV PATH ./node_modules/.bin/:$PATH

ENV HOST 0.0.0.0

ENV PORT 3088

EXPOSE ${PORT}

RUN  yarn dev
