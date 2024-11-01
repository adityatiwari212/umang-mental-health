const Doctor = require('../models/doctor'); // Adjust the path as necessary

// Function to create a new doctor
exports.createDoctor = async (req, res) => {
    try {
        const { name, email, password, location, age, yearOfExp, speciality } = req.body;

        // Validate that all required fields are provided
        if (!name || !email || !password || !location || !age || !yearOfExp || !speciality) {
            return res.status(400).json({ message: "All fields are required" });
        }

        // Check if the email already exists
        const existingDoctor = await Doctor.findOne({ email });
        if (existingDoctor) {
            return res.status(400).json({ message: "Email already in use" });
        }

        // Create a new doctor
        const newDoctor = new Doctor({ name, email, password, location, age, yearOfExp, speciality });

        // Save the doctor to the database
        await newDoctor.save();

        // Respond with the created doctor (excluding the password)
        const { password: _, ...doctorWithoutPassword } = newDoctor.toObject();
        res.status(201).json({ message: "Doctor created successfully", doctor: doctorWithoutPassword });
    } catch (error) {
        // Handle errors
        res.status(500).json({ message: "Server error", error: error.message });
    }
};
// Function to get doctors by location
exports.getDoctorsByLocation = async (req, res) => {
    try {
        const { location } = req.params;

        // Fetch doctors based on location
        const doctors = await Doctor.find({ location }).select('-password');

        // Check if any doctors were found
        if (doctors.length === 0) {
            return res.status(404).json({ message: "No doctors found for this location" });
        }

        // Respond with the fetched doctors
        res.status(200).json({ message: "Doctors fetched successfully", doctors });
    } catch (error) {
        // Handle errors
        res.status(500).json({ message: "Server error", error: error.message });
    }
};
