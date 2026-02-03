# Use a small Node.js image
FROM node:alpine

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the app code (including server.js)
COPY . .

# App listens on port 3000
EXPOSE 3000

# Production command (no nodemon)
CMD ["node", "server.js"]

# docker run -dp 3000:3000 \
# --name node-container \
# --mount type=bind,source=$PWD,target=/app \
# --mount type=volume,source=node_modules,target=/app/node_modules \
# node-image