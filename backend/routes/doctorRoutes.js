const express = require('express');
const router = express.Router();
const doctorController = require('../controllers/doctorController');

// Route to create a new doctor
router.post('/create', doctorController.createDoctor);

// Route to get doctors by location
router.get('/location/:location', doctorController.getDoctorsByLocation);

module.exports = router;
