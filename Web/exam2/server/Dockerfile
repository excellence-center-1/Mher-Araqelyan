FROM node:18

WORKDIR ./app/server

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5000

CMD ["npm", "run","prod"]

