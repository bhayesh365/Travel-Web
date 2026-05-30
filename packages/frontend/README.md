# Travel-Web Frontend

React web application for the Travel-Web two-sided travel booking platform.

## Project Structure

```
packages/frontend/
├── src/
│   ├── index.js            # React entry point
│   ├── App.js              # Main app component with routing
│   ├── index.css           # Global styles
│   ├── pages/
│   │   ├── Login.js        # Customer/Agency login page
│   │   ├── SignUp.js       # User registration page
│   │   ├── CustomerSearch.js    # Vehicle search and filtering
│   │   └── AgencyDashboard.js   # Agency vehicle management
│   └── components/         # Reusable components (to be created)
├── public/
│   └── index.html          # HTML template
└── package.json
```

## Installation

Install dependencies:
```bash
npm install
```

## Running the Application

### Development mode (with hot reload):
```bash
npm start
```

or 

```bash
npm run dev
```

The application will open at `http://localhost:3000`

### Production build:
```bash
npm run build
```

Creates an optimized production build in the `build/` directory.

## Features (Currently Implemented as UI)

### Customer Side
- **Login/SignUp** - Role-based authentication (Customer/Agency)
- **Vehicle Search** - Search by city, dates, AC preference, and capacity
- **Search Results** - Display available vehicles with details
- **Inquiry** - Raise inquiries for selected vehicles
- **Chat** - (To be implemented) Direct messaging with agencies
- **Booking** - (To be implemented) Complete trip details and pay

### Agency Side
- **Dashboard** - View and manage vehicles
- **Vehicle Management** - Add, edit, delete vehicles with details
- **Inquiries** - (To be implemented) Receive and respond to customer inquiries
- **Bookings** - (To be implemented) View confirmed bookings

## Technology Stack

- **React** - UI library
- **React Router DOM** - Client-side routing
- **Axios** - HTTP client for API calls
- **CSS** - Styling

## API Integration

The frontend communicates with the backend API at:
- Development: `http://localhost:5000/api`
- Production: Configure in environment variables

## File Organization

The application follows a modular structure:
- **pages/** - Full-page components (routed views)
- **components/** - Reusable UI components
- **services/** - API and utility functions (to be created)
- **styles/** - Global and component-specific styles

## Available Scripts

- `npm start` - Start development server
- `npm run dev` - Start development server (alias)
- `npm run build` - Create production build
- `npm test` - Run tests (Jest)

## Next Steps

1. Implement page-to-page navigation
2. Create API service layer for backend communication
3. Implement authentication flow with JWT
4. Add vehicle search functionality with real API calls
5. Implement inquiry creation and management
6. Add real-time chat with Socket.io
7. Implement booking and payment flow
8. Add form validation
9. Add error handling and user feedback
10. Add component tests
11. Responsive design for mobile
12. Add user profile pages
13. Add review and rating system
14. Implement AI assistant chat

## Folder Structure (Planned)

```
packages/frontend/src/
├── components/
│   ├── Header.js
│   ├── Navigation.js
│   ├── VehicleCard.js
│   ├── SearchFilter.js
│   ├── ChatWindow.js
│   └── ...
├── services/
│   ├── api.js
│   ├── auth.js
│   └── ...
├── pages/
│   ├── Login.js
│   ├── SignUp.js
│   ├── CustomerSearch.js
│   ├── AgencyDashboard.js
│   ├── InquiryDetail.js
│   ├── BookingPage.js
│   └── ...
├── styles/
│   ├── global.css
│   ├── colors.css
│   └── ...
├── App.js
└── index.js
```

## Environment Variables

Create a `.env` file in the frontend directory:
```
REACT_APP_API_URL=http://localhost:5000/api
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
