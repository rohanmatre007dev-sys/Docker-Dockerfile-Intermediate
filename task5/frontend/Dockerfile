# Use a lightweight Node.js image
FROM node:alpine

# Set working directory inside the container
WORKDIR /app

# Copy package files first (helps Docker layer caching)
COPY package*.json ./

# Install frontend dependencies
RUN npm install

# Copy frontend app code (server.js)
COPY server.js ./

# Frontend listens on port 3000
EXPOSE 3000

# Start frontend server
CMD ["node", "server.js"]
