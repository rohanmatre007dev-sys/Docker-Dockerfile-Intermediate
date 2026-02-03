# Use a small Node.js image
FROM node:alpine

# Work inside /app
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy backend code
COPY server.js ./

# Frontend listens on port 3000
EXPOSE 3000

# Start frontend
CMD ["node", "server.js"]
