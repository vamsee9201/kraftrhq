# frontend-repo/Dockerfile
FROM node:18

# Set the working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json .
RUN npm install

# Copy the React app's code
COPY . .

# Build the React app
RUN npm run build

# Use a lightweight server to serve the React app
RUN npm install -g serve
EXPOSE 3000
CMD ["serve", "-s", "build", "-l", "3000"]
