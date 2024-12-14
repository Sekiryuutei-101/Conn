# Use an official Node.js image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json yarn.lock ./
RUN yarn install


# Copy the rest of the app
COPY . .

# Set environment variables (for example, database connection)
ENV DATABASE_URL=${mongodb+srv://jitsaha567:lh0yZaGIUD2IwSPw@conn.c7f1d.mongodb.net/Conn?retryWrites=true&w=majority&appName=Conn}

# Run Prisma generate during the build
RUN npx prisma generate


# Expose port 3001 (or your backend port)
EXPOSE 3001

# Start the app
CMD ["yarn", "start"]
