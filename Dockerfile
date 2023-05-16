FROM node:18-alpine as builder

WORKDIR /godmode

COPY . .

RUN yarn install \
  --prefer-offline \
  --frozen-lockfile \
  --non-interactive \
  --production=false

RUN rm -rf node_modules && \
  NODE_ENV=production yarn install \
  --prefer-offline \
  --pure-lockfile \
  --non-interactive \
  --production=true

FROM node:18-alpine

WORKDIR /godmode

COPY --from=builder /godmode  .

RUN yarn build

ENV HOST 0.0.0.0

ENV PORT 3088

EXPOSE ${PORT}

ENTRYPOINT ["node", ".output/server/index.mjs"]
