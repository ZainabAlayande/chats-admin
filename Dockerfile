FROM node:18-alpine as build

WORKDIR /godmode

COPY . ./

RUN yarn install \
  --prefer-offline \
  --frozen-lockfile \
  --non-interactive \
  --production=false

RUN yarn build

FROM node:18-alpine

WORKDIR /godmode

COPY --from=build /app/.output ./
ENV HOST 0.0.0.0

ENV PORT 3088

EXPOSE ${PORT}

CMD ["node", "/app/server/index.mjs"]
