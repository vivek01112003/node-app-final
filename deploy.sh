#!/bin/bash

echo "Starting deployment..."

echo "Building Docker image..."
docker build -t node-todo-app:latest .

echo "Stopping old container..."
docker stop node-todo-app || true

echo "Removing old container..."
docker rm node-todo-app || true

echo "Starting new container..."
docker run -d \
  --name node-todo-app \
  --restart unless-stopped \
  -p 3000:3000 \
  node-todo-app:latest

echo "Deployment completed successfully!"

