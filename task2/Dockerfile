FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY server.js .

# Expose port from environment variable (default only for metadata)
ARG PORT=3000
ENV PORT=$PORT
EXPOSE $PORT

CMD ["node", "server.js"]
