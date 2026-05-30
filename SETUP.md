# Getting Started with Travel-Web

This document describes how to set up and run the Travel-Web project.

## Project Overview

Travel-Web is a two-sided travel booking platform connecting customers with travel agencies. It consists of two main packages:

- **Backend** (`packages/backend/`): Express.js REST API
- **Frontend** (`packages/frontend/`): React web application

## Prerequisites

- **Node.js** (v14 or higher)
- **npm** (v6 or higher) or **yarn**
- **MongoDB** (for database, optional for initial development)
- **Git**

## Project Setup

### 1. Clone and Install Dependencies

```bash
# Clone the repository
git clone <repository-url>
cd Travel-Web

# Install all dependencies (workspace mode)
npm install
```

### 2. Backend Setup

```bash
# Navigate to backend
cd packages/backend

# Copy environment file
cp .env.example .env

# Edit .env with your settings
# PORT=5000
# NODE_ENV=development
# MONGODB_URI=mongodb://localhost:27017/travel-web
# JWT_SECRET=your_jwt_secret_key_here
```

### 3. Frontend Setup

```bash
# Navigate to frontend
cd packages/frontend

# Dependencies are already installed (from root npm install)
```

## Running the Application

### Option 1: Run Both Servers (Recommended for Development)

**Terminal 1 - Backend:**
```bash
npm run backend
# OR
cd packages/backend && npm run dev
```

**Terminal 2 - Frontend:**
```bash
npm run frontend
# OR
cd packages/frontend && npm start
```

### Option 2: Run Individual Services

```bash
# Backend only
npm run backend

# Frontend only
npm run frontend

# Both in parallel (if you have a tool like concurrently installed)
npm run dev
```

### Access the Application

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000/api
- **Health Check**: http://localhost:5000/api/health

## Project Structure

```
Travel-Web/
├── packages/
│   ├── backend/          # Express API server
│   │   ├── src/
│   │   │   ├── server.js
│   │   │   ├── models/
│   │   │   └── routes/
│   │   ├── package.json
│   │   ├── .env.example
│   │   └── README.md
│   └── frontend/         # React web app
│       ├── src/
│       │   ├── pages/
│       │   ├── components/
│       │   └── index.js
│       ├── public/
│       ├── package.json
│       └── README.md
├── package.json          # Root workspace config
├── .gitignore
└── README.md             # Project specification
```

## Development Workflow

1. **Make changes** to backend or frontend code
2. **Frontend** will automatically reload (if running `npm start`)
3. **Backend** will automatically restart (if running with nodemon)
4. **Test changes** in the browser or with API tools (Postman, curl, etc.)

## Common Commands

### Root Level (npm workspace commands)
```bash
npm install              # Install all dependencies
npm run dev             # Run dev servers in all workspaces
npm run build           # Build all workspaces
npm run backend         # Run backend server only
npm run frontend        # Run frontend server only
```

### Backend Commands
```bash
cd packages/backend
npm run dev             # Development mode with nodemon
npm start               # Production mode
npm test                # Run tests
```

### Frontend Commands
```bash
cd packages/frontend
npm start               # Development mode with hot reload
npm run build           # Production build
npm test                # Run tests
```

## Testing the API

### Health Check
```bash
curl http://localhost:5000/api/health
```

Expected response:
```json
{
  "status": "OK",
  "message": "Travel-Web API is running"
}
```

### Using Postman or Similar Tools

1. Import API endpoints from the backend README
2. Set up environment variable for API URL: `http://localhost:5000/api`
3. Test various endpoints (all currently return 501 - Not Implemented)

## Troubleshooting

### Port Already in Use
```bash
# Kill process on port 3000 (frontend)
lsof -ti:3000 | xargs kill -9

# Kill process on port 5000 (backend)
lsof -ti:5000 | xargs kill -9
```

### Dependencies Not Installing
```bash
# Clear npm cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### MongoDB Connection Issues
- Ensure MongoDB is running locally
- Check MONGODB_URI in `.env` file
- Default: `mongodb://localhost:27017/travel-web`

## Next Development Steps

1. **Backend**: Implement MongoDB models and authentication
2. **Backend**: Create protected routes with JWT middleware
3. **Frontend**: Connect to backend API using axios
4. **Frontend**: Implement proper authentication flow
5. **Backend**: Implement vehicle search and filtering
6. **Backend**: Implement inquiry and booking logic
7. **Frontend**: Add real-time chat functionality
8. **Backend**: Set up payment gateway integration
9. **Both**: Add comprehensive testing
10. **Both**: Deploy to production

## Contributing

- Create feature branches from `main`
- Follow existing code style
- Add tests for new features
- Update documentation as needed
- Create pull requests for review

## Resources

- [Express.js Documentation](https://expressjs.com/)
- [React Documentation](https://react.dev/)
- [MongoDB Documentation](https://docs.mongodb.com/)
- [REST API Best Practices](https://restfulapi.net/)

## Support

For issues or questions:
1. Check existing documentation in `/packages/backend/README.md` and `/packages/frontend/README.md`
2. Check issue tracker in repository
3. Refer to the main README.md for project overview

## License

MIT License
