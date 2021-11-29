FROM node:14.17.6

WORKDIR /home/front

COPY package*.json ./

RUN npm i -g npm@8.1.3

RUN npm -v

COPY . .

CMD ["npm", "run", "start"]

EXPOSE 3000