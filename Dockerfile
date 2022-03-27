FROM node as builder
WORKDIR /usr/app
COPY package*.json ./
RUN npm install
RUN npm run build

#
FROM node
WORKDIR /usr/app
COPY package*.json ./
RUN npm install

COPY --from=builder /usr/app/dist ./dist

EXPOSE 4000
CMD node dist/src/index.js
