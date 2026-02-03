# Use a lightweight Node.js image
FROM node:alpine

# Set working directory inside the container
WORKDIR /app

# Copy package files first (for better Docker cache)
COPY package*.json ./

# Install backend dependencies
RUN npm install

# Copy backend app code (server.js)
COPY server.js ./

# Backend listens on port 4000
EXPOSE 4000

# Start backend server
CMD ["node", "server.js"]