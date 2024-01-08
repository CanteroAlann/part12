FROM node:16 as base 

WORKDIR /usr/src/app

COPY . .

RUN npm ci

RUN npm run build

ENV PORT=3001
ENV REACT_APP_BACKEND_URL=http://localhost:3000

CMD npm start