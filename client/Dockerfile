# Use an official Node.js image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json yarn.lock ./
RUN yarn install

# Copy the rest of the app
COPY . .

# Build the app
RUN yarn build

# Expose port 3000 (or your desired frontend port)
EXPOSE 3000

# Start the app
CMD ["yarn", "start"]
