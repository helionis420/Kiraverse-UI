FROM node:lts

WORKDIR /usr/src/app

# Build the project
COPY package* .
RUN npm i
COPY . .
RUN npm run build
RUN npm run build-sb

# Expose the port for access
EXPOSE 4173/tcp

# Run the Nginx server
CMD ["npm", "run", "preview"]
