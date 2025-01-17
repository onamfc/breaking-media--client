# Install dependencies using Node 18
FROM node:18-alpine AS dependencies

# Set working directory
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm ci

# Build the Next.js app
FROM node:18-alpine AS builder
WORKDIR /app
COPY --from=dependencies /app/node_modules ./node_modules
COPY . .

# Generate the build
RUN npm run build

# Use a minimal Node image for production
FROM node:18-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production

# Copy built app
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# Expose Next.js default port
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
