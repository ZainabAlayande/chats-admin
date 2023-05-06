FROM node:14.16.0-alpine

WORKDIR /godmode

COPY . .

RUN yarn install \
  --prefer-offline \
  --frozen-lockfile \
  --non-interactive \
  --production=false

RUN yarn build

RUN rm -rf node_modules && \
  NODE_ENV=production yarn install \
  --prefer-offline \
  --pure-lockfile \
  --non-interactive \
  --production=true


ENV HOST 0.0.0.0

ENV PORT 3088

EXPOSE ${PORT}

CMD [ "yarn", "start" ]
