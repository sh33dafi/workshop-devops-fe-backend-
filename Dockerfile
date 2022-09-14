FROM node:16

WORKDIR /usr/src/app

COPY built/index.js index.js

EXPOSE 8080

CMD [ "node", "index.js" ]

