FROM node:latest

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ARG VITE_APP_BACKEND_URL

ENV VITE_APP_BACKEND_URL=$VITE_APP_BACKEND_URL

RUN npm run build

EXPOSE 5173

CMD ["npm", "run", "dev", "--", "--host"]