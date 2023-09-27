FROM node:16-slim

WORKDIR /app

COPY ./package.json .
COPY ./index.js .

COPY Note.js .
COPY NoteController.js .
COPY NoteService.js .
COPY User.js .
COPY UserController.js .
COPY UserService.js .
COPY router.js .

RUN npm install

CMD [ "node", "index.js" ]
