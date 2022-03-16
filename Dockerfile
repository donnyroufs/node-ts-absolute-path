FROM node:16

WORKDIR /usr/src/app

RUN yarn global add pm2

COPY package.json .
COPY yarn.lock .

RUN yarn

COPY . . 

RUN yarn build

USER node

CMD ["pm2-runtime", "./dist/src/bootstrap.js"]