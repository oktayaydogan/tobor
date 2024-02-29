FROM node:latest
WORKDIR /tobor
COPY . .
RUN npm install
CMD ["node", "index.js"]
