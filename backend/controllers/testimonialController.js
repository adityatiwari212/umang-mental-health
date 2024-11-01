const Testimonial = require('../models/testimonial'); // Adjust the path as necessary

// Function to create a new testimonial
exports.createTestimonial = async (req, res) => {
    try {
        const { user, text, satisfactionRating } = req.body;
        
        
        // Validate required fields
        if (!user || !text || !satisfactionRating) {
            return res.status(400).json({ message: "All fields are required" });
        }

        // Create a new testimonial
        const newTestimonial = new Testimonial({
            user: user,
            text,
            satisfactionRating
        });

        // Save the testimonial to the database
        await newTestimonial.save();

        res.status(201).json({ message: "Testimonial created successfully", testimonial: newTestimonial });
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};


// Function to get N testimonials with the best ratings
exports.getTopTestimonials = async (req, res) => {
    try {
        const { limit } = req.params;

        // Validate that limit is provided and is a number
        if (!limit || isNaN(limit)) {
            return res.status(400).json({ message: "A valid number for limit is required" });
        }

        // Fetch the top N testimonials sorted by satisfactionRating in descending order
        const testimonials = await Testimonial.find()
            .sort({ satisfactionRating: -1, createdAt: -1 }) // Sort by rating, then by recency
            .limit(parseInt(limit))
            .exec();

        res.status(200).json({ message: "Top testimonials fetched successfully", testimonials });
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

