# Use an official Node.js runtime as a base image
FROM node:14-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Nuxt.js app
RUN npm run build

# Expose the port that your Nuxt app will run on
EXPOSE 3000

# Command to run the application
CMD ["npm", "start"]
