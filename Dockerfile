FROM node:18
WORKDIR /src/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 1337
CMD ["npm", "run", "develop"]