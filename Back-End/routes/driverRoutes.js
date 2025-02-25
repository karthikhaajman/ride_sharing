const express = require('express');
const { registerDriver, updateAvailability, getAllDrivers } = require('../controllers/driverController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/register', authMiddleware, registerDriver);
router.put('/availability', authMiddleware, updateAvailability);
router.get('/', getAllDrivers);

module.exports = router;
