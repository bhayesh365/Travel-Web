const express = require('express');
const cors = require('cors');
require('dotenv').config();

// Import route modules
const authRoutes = require('./routes/auth');
const vehicleRoutes = require('./routes/vehicles');
const inquiryRoutes = require('./routes/inquiries');
const bookingRoutes = require('./routes/bookings');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Travel-Web API is running' });
});

// Mount route modules
app.use('/api/auth', authRoutes);
app.use('/api/vehicles', vehicleRoutes);
app.use('/api/inquiries', inquiryRoutes);
app.use('/api/bookings', bookingRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Endpoint not found' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Travel-Web API server listening on port ${PORT}`);
});

module.exports = app;
