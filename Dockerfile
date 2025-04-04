# Base image with Node.js and core utilities
FROM node:18-alpine AS builder

# Install pnpm globally
RUN npm install -g pnpm

WORKDIR /app

# Copy lockfile and package manifests
COPY pnpm-lock.yaml ./
COPY package.json ./

# Install dependencies (faster with pnpm)
RUN pnpm install --frozen-lockfile

# Copy the rest of your code
COPY . .

# Build the Next.js app
RUN pnpm build

# Create production image
FROM node:18-alpine AS runner

RUN npm install -g pnpm

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000

# Copy only necessary build artifacts
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/pnpm-lock.yaml ./pnpm-lock.yaml
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/next.config.mjs ./next.config.mjs
COPY --from=builder /app/app ./app

EXPOSE 3000

CMD ["pnpm", "start"]
