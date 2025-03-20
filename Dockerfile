FROM node:lts-alpine AS build

WORKDIR /app
COPY . /app

RUN npm install
RUN npm run build

FROM node:lts-alpine

WORKDIR /app

COPY --from=build /app/out /app
RUN npm install -g serve

EXPOSE 3000

CMD ["npx", "serve", "."]