const express = require('express');
const router = express.Router();

// Placeholder for vehicle routes
// GET /api/vehicles/search - Search vehicles by city, dates, etc
// GET /api/vehicles/:id - Get vehicle details
// POST /api/vehicles - Add vehicle (agency only)
// PUT /api/vehicles/:id - Update vehicle (agency only)
// DELETE /api/vehicles/:id - Delete vehicle (agency only)

router.get('/search', (req, res) => {
  // TODO: Implement vehicle search with filters
  res.status(501).json({ message: 'Vehicle search not yet implemented' });
});

router.get('/:id', (req, res) => {
  // TODO: Implement get vehicle details
  res.status(501).json({ message: 'Get vehicle details not yet implemented' });
});

router.post('/', (req, res) => {
  // TODO: Implement add vehicle (requires auth)
  res.status(501).json({ message: 'Add vehicle not yet implemented' });
});

router.put('/:id', (req, res) => {
  // TODO: Implement update vehicle (requires auth)
  res.status(501).json({ message: 'Update vehicle not yet implemented' });
});

router.delete('/:id', (req, res) => {
  // TODO: Implement delete vehicle (requires auth)
  res.status(501).json({ message: 'Delete vehicle not yet implemented' });
});

module.exports = router;
