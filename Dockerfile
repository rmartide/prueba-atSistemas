FROM node:10.13-alpine
WORKDIR /usr/src/app
COPY . .
RUN npm i && npm run build
CMD npm run node-start