FROM node:21
WORKDIR /tobor
COPY . .
RUN npm install
CMD ["node", "index.js"]
