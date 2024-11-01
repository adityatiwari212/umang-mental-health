const express = require('express');
const { askQuestion, getAnswers, writeAnswer, getLatestQuestions } = require('../controllers/qnaController'); // Adjust the path as necessary
const router = express.Router();

// Route to ask a new question
router.post('/questions/create', askQuestion);

// Route to get answers for a specific question
router.get('/questions/:questionId/answers', getAnswers);

// Route to write an answer for a specific question
router.post('/answers/:questionId/create', writeAnswer);

router.get('/questions/recent' , getLatestQuestions)
module.exports = router;
