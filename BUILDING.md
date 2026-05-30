# Building Travel-Web

This document explains how to build and validate the Travel-Web project.

## Project Structure

The Travel-Web project is organized as an npm workspace with two packages:

```
Travel-Web/
├── packages/backend/      # Express API server
├── packages/frontend/     # React web application
└── package.json           # Root workspace configuration
```

## Prerequisites

- **Node.js** >= 14.0
- **npm** >= 6.0 (or yarn 1.22+)
- **Git**

## Build Steps

### 1. Install Dependencies

```bash
# From project root
npm install

# This will:
# - Install root dependencies (if any)
# - Install all workspace dependencies
# - Link workspace packages together
```

### 2. Validate Installation

```bash
# List installed dependencies
npm ls

# Check workspace links
npm ls -a

# Verify backend can start
cd packages/backend && npm start &
# Press Ctrl+C to stop

# Verify frontend can build
cd packages/frontend && npm run build
```

### 3. Run in Development

```bash
# From project root, run both servers
npm run dev

# OR run individual servers in separate terminals:

# Terminal 1: Backend
npm run backend
# or
cd packages/backend && npm run dev

# Terminal 2: Frontend  
npm run frontend
# or
cd packages/frontend && npm start
```

### 4. Production Build

```bash
# Build all packages
npm run build

# This creates:
# - packages/backend/ (no separate build needed for Node.js)
# - packages/frontend/build/ (optimized React bundle)
```

## Project Files Overview

### Root Configuration
- **package.json** - Workspace configuration and scripts
- **.gitignore** - Git ignore rules
- **README.md** - Project overview and quick start
- **SETUP.md** - Detailed setup instructions
- **BUILDING.md** - This file

### Backend (packages/backend/)
- **src/server.js** - Main Express application entry point
- **src/models/schemas.js** - MongoDB schema definitions
- **src/routes/** - API endpoint routes
  - auth.js - Authentication endpoints
  - vehicles.js - Vehicle management
  - inquiries.js - Inquiry management
  - bookings.js - Booking management
- **package.json** - Backend dependencies
- **.env.example** - Environment variables template
- **README.md** - Backend documentation

### Frontend (packages/frontend/)
- **src/index.js** - React app entry point
- **src/App.js** - Main App component with routing
- **src/index.css** - Global styles
- **src/pages/** - Page components
  - Login.js - Login/signup page
  - SignUp.js - Registration page
  - CustomerSearch.js - Vehicle search page
  - AgencyDashboard.js - Agency management page
- **src/components/** - Reusable components (to be expanded)
- **public/index.html** - HTML template
- **package.json** - Frontend dependencies
- **README.md** - Frontend documentation

## NPM Scripts

### Root Level Commands
```bash
npm install              # Install all dependencies
npm run dev             # Run both backend and frontend in dev mode
npm run build           # Build all packages
npm run backend         # Run backend server only
npm run frontend        # Run frontend app only
```

### Backend Commands (from packages/backend)
```bash
npm start               # Production mode
npm run dev            # Development mode with nodemon
npm test               # Run tests (placeholder)
npm run build          # No build step required
```

### Frontend Commands (from packages/frontend)
```bash
npm start              # Start development server (port 3000)
npm run dev            # Alias for npm start
npm run build          # Create production build
npm test               # Run tests (placeholder)
```

## Testing the Build

### 1. Backend Health Check
```bash
# Start backend
npm run backend

# In another terminal, test health endpoint
curl http://localhost:5000/api/health

# Expected output:
# {"status":"OK","message":"Travel-Web API is running"}
```

### 2. Frontend Build Test
```bash
cd packages/frontend
npm run build

# Verify build output
ls -la build/
```

### 3. Full Integration Test
```bash
# Terminal 1
npm run backend

# Terminal 2
npm run frontend

# Open browser to http://localhost:3000
# You should see the Travel-Web login page
```

## Dependency Management

### Adding Dependencies

```bash
# Add to backend
cd packages/backend
npm install <package-name>

# Add to frontend
cd packages/frontend
npm install <package-name>

# Add to root (workspace-level)
npm install <package-name> -w
```

### Updating Dependencies
```bash
# Update all
npm update

# Update specific package
npm update <package-name>
```

## Environment Configuration

### Backend .env Setup
```bash
cd packages/backend
cp .env.example .env
# Edit .env with:
# PORT=5000
# NODE_ENV=development
# MONGODB_URI=mongodb://localhost:27017/travel-web
# JWT_SECRET=your_secret_key
```

### Frontend .env Setup (Optional)
```bash
cd packages/frontend
# Create .env if needed with:
# REACT_APP_API_URL=http://localhost:5000/api
```

## Troubleshooting Build Issues

### Issue: `npm ERR! missing: <package>`
**Solution**: Run `npm install` again from project root

### Issue: Port already in use
```bash
# Kill processes on ports
lsof -ti:3000 | xargs kill -9  # Frontend
lsof -ti:5000 | xargs kill -9  # Backend
```

### Issue: Module not found
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Issue: React app won't start
```bash
# Clear React cache
rm -rf packages/frontend/node_modules/.cache
npm start
```

## Build Verification Checklist

- [ ] `npm install` completes without errors
- [ ] `npm run backend` starts without errors
- [ ] Backend health check returns OK
- [ ] `npm run frontend` starts without errors
- [ ] Frontend opens at http://localhost:3000
- [ ] Can navigate between Login, SignUp, Customer Search, Agency Dashboard pages
- [ ] Backend API endpoints return 501 (Not Implemented) rather than 404

## Next Steps After Building

1. **Backend Development**:
   - Implement MongoDB integration
   - Create authentication endpoints
   - Implement vehicle CRUD operations
   - Add inquiry and booking logic

2. **Frontend Development**:
   - Connect to backend API
   - Implement form validation
   - Add error handling
   - Implement real API calls

3. **Testing**:
   - Set up Jest testing
   - Add unit tests
   - Add integration tests

4. **Deployment**:
   - Configure production environment
   - Set up CI/CD pipeline
   - Deploy to hosting platform

## CI/CD Integration

The project can be integrated with GitHub Actions or other CI/CD systems:

```yaml
# Example GitHub Actions workflow
- name: Install dependencies
  run: npm install

- name: Build
  run: npm run build

- name: Test backend
  run: cd packages/backend && npm test

- name: Test frontend
  run: cd packages/frontend && npm test
```

## Documentation

- [README.md](./README.md) - Project overview
- [SETUP.md](./SETUP.md) - Setup instructions
- [packages/backend/README.md](./packages/backend/README.md) - Backend docs
- [packages/frontend/README.md](./packages/frontend/README.md) - Frontend docs

## Support

For build-related issues:
1. Check this document first
2. Review package.json files for configuration
3. Check backend and frontend README files
4. Review error messages carefully
5. Open an issue with build logs
