FROM node:latest

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ARG VUE_APP_BACKEND_URL

ENV VUE_APP_BACKEND_URL=$VUE_APP_BACKEND_URL

RUN npm run build

EXPOSE 5173

CMD ["npm", "run", "dev", "--", "--host"]