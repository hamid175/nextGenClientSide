#node block

FROM node:alpine3.18 as build
WORKDIR /react/next-gen
COPY ./package.json /react/next-gen
RUN npm install --legacy-peer-deps
COPY . /react/next-gen


