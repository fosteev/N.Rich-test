# build environment
FROM node:12.2.0-alpine as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH

ARG IMG_NAME

ENV IMG_NAME $IMG_NAME

COPY package.json /app/package.json
RUN npm install --silent
COPY . /app

EXPOSE 3000
CMD [ "node", "./bin/www" ]
