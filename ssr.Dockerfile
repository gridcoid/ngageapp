# FROM node:16-alpine3.16 AS builder
FROM node:16-alpine3.16

WORKDIR /app

COPY . .

RUN apk add g++ make py3-pip

RUN yarn install

# RUN yarn build

# FROM node:16-alpine3.16

# WORKDIR /app

# COPY --from=builder /app  .

ENV HOST 0.0.0.0
EXPOSE 3000

CMD [ "yarn", "start" ]
