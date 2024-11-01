const Question = require('../models/qna'); // Adjust the path as necessary

// Function to ask a new question
exports.askQuestion = async (req, res) => {
    try {
        const { text, askedBy } = req.body;

        // Validate required fields
        if (!text || !askedBy) {
            return res.status(400).json({ message: "Question text and askedBy are required" });
        }

        // Create a new question
        const newQuestion = new Question({ text, askedBy });

        // Save the question to the database
        await newQuestion.save();

        res.status(201).json({ message: "Question asked successfully", question: newQuestion });
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

// Function to get answers for a specific question
exports.getAnswers = async (req, res) => {
    try {
        const { questionId } = req.params;

        // Fetch the question along with its answers and populate the askedBy field
        const question = await Question.findById(questionId)
            .populate('askedBy', 'firstName lastName')
            .populate('answers.askedBy', 'firstName lastName');

        // Check if the question exists
        if (!question) {
            return res.status(404).json({ message: "Question not found" });
        }

        res.status(200).json({ message: "Answers fetched successfully", question });
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};


// Function to write an answer for a specific question
exports.writeAnswer = async (req, res) => {
    try {
        const { questionId } = req.params;
        const { text, askedBy } = req.body;

        // Validate required fields
        if (!text || !askedBy) {
            return res.status(400).json({ message: "Answer text and askedBy are required" });
        }

        // Find the question by ID and add the answer to its answers array
        const question = await Question.findByIdAndUpdate(
            questionId,
            { $push: { answers: { text, askedBy } } },
            { new: true, useFindAndModify: false }
        );

        // Check if the question exists
        if (!question) {
            return res.status(404).json({ message: "Question not found" });
        }

        res.status(201).json({ message: "Answer added successfully", question });
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};
exports.getLatestQuestions = async (req, res) => {
    try {
        const latestQuestions = await Question.find({})
            .sort({ createdAt: -1 })  // Sort by creation date, descending
            .limit(10);  // Limit to 10 questions

        res.status(200).json(latestQuestions);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching latest questions', error });
    }
};