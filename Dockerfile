FROM node:latest as build

WORKDIR /usr/local/app

COPY . /usr/local/app

RUN npm install

COPY . .

RUN npm run build:prod

FROM nginx:latest

COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /usr/local/app/dist/ci-cd-angular-template /usr/share/nginx/html

EXPOSE 80
