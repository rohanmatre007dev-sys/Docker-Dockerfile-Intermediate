# Use a lightweight Node.js image
FROM node:22-alpine

# Set working directory inside the container
WORKDIR /app

# Copy dependency files first (helps Docker cache layers)
COPY package*.json .

# Install all Node.js dependencies
RUN npm install

# Copy the actual application code
COPY server.js .

# Inform Docker that the app will listen on port 3000
EXPOSE 3000

# Command to start the Node.js application
CMD [ "node", "server.js" ]
