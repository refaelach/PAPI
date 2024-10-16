# PAPI Project Documentation

## Overview
PAPI is a web application with a React frontend and a Go backend.

## Getting Started

### Prerequisites
- Node.js and npm
- Go 1.21 or later

### Running the Application
1. Start the backend:
   ```
   cd backend
   go run cmd/server/main.go
   ```
2. In a new terminal, start the frontend:
   ```
   cd frontend
   npm start
   ```

## Project Structure
- `/frontend`: React application
- `/backend`: Go server
- `/docs`: Project documentation

## API Endpoints
- GET /hello: Returns a greeting message