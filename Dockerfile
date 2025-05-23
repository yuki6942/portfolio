FROM node:slim AS build

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .
RUN npm run build

FROM node:slim

WORKDIR /app
COPY --from=build /app ./

EXPOSE 3000

CMD ["npm", "start"]