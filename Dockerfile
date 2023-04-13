FROM node:17-alpine

WORKDIR /app

RUN npx create-expo-app@latest --example with-router

CMD ["npx", "expo", "start"]