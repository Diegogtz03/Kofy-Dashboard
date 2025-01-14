FROM node:20.10.0-alpine

WORKDIR /kofy-dashboard

COPY package*.json ./

RUN npm install

COPY . .

CMD ["sh", "-c", "npm run build && npm start"]

EXPOSE 3005