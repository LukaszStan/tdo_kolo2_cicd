# Etap budowania
FROM node:20 AS builder
WORKDIR /app
COPY . .
RUN npm install && npm run build

# Etap serwowania
FROM node:20
WORKDIR /app
RUN npm install -g serve
COPY --from=builder /app/dist ./dist
EXPOSE 4173
CMD ["serve", "dist"]