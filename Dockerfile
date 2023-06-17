FROM node:latest

WORKDIR /usr/app/

COPY . .

RUN npm install -g npm@9.7.1

RUN npm install

CMD ['npm', 'run', 'dev']