#Dockerfile for Node.js server
FROM node:18

# Use the official Node.js image as the base image
WORKDIR /app
# Install app dependencies
COPY package*.json ./

# If you are building your code for production
# RUN npm ci --only=production
# For development
RUN npm install

# Bundle app source
COPY . .

# Make port 50000 available to the world outside this container
EXPOSE 50000


# Define the command to run your app using CMD which defines your runtime
CMD ["npm", "start"]
