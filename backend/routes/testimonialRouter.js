const express = require('express');
const { createTestimonial, getTopTestimonials } = require('../controllers/testimonialController'); // Adjust the path as necessary
const router = express.Router();

// Route to create a testimonial
router.post('/create', createTestimonial);

// Route to get top N testimonials
router.get('/top/:limit', getTopTestimonials);

module.exports = router;
