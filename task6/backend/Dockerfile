# Use a small Node.js image
FROM node:alpine

# Work inside /app
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy backend code
COPY server.js ./

# Backend listens on port 4000
EXPOSE 4000

# Start backend
CMD ["node", "server.js"]
