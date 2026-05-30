const express = require('express');
const router = express.Router();

// Placeholder for inquiry routes
// POST /api/inquiries - Create inquiry
// GET /api/inquiries/:id - Get inquiry details
// GET /api/inquiries - Get all inquiries (for customer or agency)
// PUT /api/inquiries/:id - Update inquiry status (agency only)

router.post('/', (req, res) => {
  // TODO: Implement create inquiry
  res.status(501).json({ message: 'Create inquiry not yet implemented' });
});

router.get('/:id', (req, res) => {
  // TODO: Implement get inquiry details
  res.status(501).json({ message: 'Get inquiry details not yet implemented' });
});

router.get('/', (req, res) => {
  // TODO: Implement get all inquiries (with role-based filtering)
  res.status(501).json({ message: 'Get inquiries not yet implemented' });
});

router.put('/:id', (req, res) => {
  // TODO: Implement update inquiry (accept/reject)
  res.status(501).json({ message: 'Update inquiry not yet implemented' });
});

module.exports = router;
