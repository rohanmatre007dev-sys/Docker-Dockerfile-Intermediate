# Take the smaller Node base image from alpine Linux
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# copy all the files name package*.json to the working directory of container 
COPY package*.json .

# Install the application dependencies of an application in container
RUN npm install

# Copy the server.js file from host to container
COPY server.js .

# Expose port 3000 to the outside world
EXPOSE 3000

# Command to run application inside container
CMD ["node", "server.js"]
