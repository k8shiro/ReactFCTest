FROM "node:14-alpine"
RUN npm install -g create-react-app

RUN mkdir /react-app
COPY ./react-app /react-app
WORKDIR /react-app

RUN yarn install
CMD yarn start
