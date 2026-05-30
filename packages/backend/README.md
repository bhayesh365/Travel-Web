# Travel-Web Backend

Express.js REST API server for the Travel-Web two-sided platform.

## Project Structure

```
packages/backend/
├── src/
│   ├── server.js           # Express app setup and route mounting
│   ├── models/
│   │   └── schemas.js      # Database schema definitions
│   └── routes/
│       ├── auth.js         # Authentication endpoints
│       ├── vehicles.js     # Vehicle management endpoints
│       ├── inquiries.js    # Inquiry management endpoints
│       └── bookings.js     # Booking management endpoints
├── package.json
└── .env.example
```

## Installation

1. Copy `.env.example` to `.env` and update values:
   ```bash
   cp .env.example .env
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Running the Server

### Development mode (with auto-reload):
```bash
npm run dev
```

### Production mode:
```bash
npm start
```

The server will start on the port specified in `.env` (default: 5000).

## API Health Check

Test the API is running:
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

## API Endpoints (Placeholder)

All endpoints currently return 501 (Not Implemented). This will be implemented in future iterations.

### Authentication Routes
- POST `/api/auth/login` - User login
- POST `/api/auth/signup` - New user signup
- POST `/api/auth/logout` - User logout
- GET `/api/auth/verify-token` - Verify JWT token

### Vehicle Routes
- GET `/api/vehicles/search` - Search vehicles with filters
- GET `/api/vehicles/:id` - Get vehicle details
- POST `/api/vehicles` - Add new vehicle (agency only)
- PUT `/api/vehicles/:id` - Update vehicle details
- DELETE `/api/vehicles/:id` - Delete vehicle

### Inquiry Routes
- POST `/api/inquiries` - Create new inquiry
- GET `/api/inquiries/:id` - Get inquiry details
- GET `/api/inquiries` - Get user's inquiries
- PUT `/api/inquiries/:id` - Update inquiry status

### Booking Routes
- POST `/api/bookings` - Create booking
- GET `/api/bookings/:id` - Get booking details
- GET `/api/bookings` - Get user's bookings
- PUT `/api/bookings/:id` - Update booking status

## Technologies Used

- **Express.js** - Web framework
- **Mongoose** - MongoDB ODM (to be integrated)
- **JWT** - Authentication tokens
- **bcryptjs** - Password hashing
- **CORS** - Cross-origin request handling
- **Socket.io** - Real-time chat (to be integrated)

## Next Steps

1. Implement MongoDB integration with Mongoose
2. Implement authentication endpoints with JWT
3. Implement vehicle management endpoints
4. Implement inquiry and booking logic
5. Add real-time chat with Socket.io
6. Add payment integration
7. Add comprehensive error handling
8. Add input validation
9. Add logging
10. Add testing (Jest)
