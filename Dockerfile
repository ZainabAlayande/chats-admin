FROM node:14.16.0-alpine

RUN apt add --no-cache openssh

WORKDIR /godmode

COPY . .

RUN npm install

EXPOSE 3088

ENV HOST=0.0.0.0
ENV NODE_ENV=production
ENV PORT=3088

RUN npm run build

CMD [ "npm", "run", "start" ]
