const express = require('express');
const { registerRider, getAllRiders } = require('../controllers/riderController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/register', authMiddleware, registerRider);
router.get('/', getAllRiders);

module.exports = router;
