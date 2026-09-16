# Stage 1: Build Dependencies
FROM node:20-alpine AS node-builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Development
FROM node-builder AS development
EXPOSE 5174
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0", "--port", "5174"]

# Stage 3 : Production
FROM node:20-alpine AS production
WORKDIR /app
RUN npm install --global serve
COPY --from=node-builder /app/dist ./dist

USER node
EXPOSE 3000
CMD ["serve", "-s", "dist", "-l", "3000"]