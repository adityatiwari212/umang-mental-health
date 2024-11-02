import React, { useState } from 'react';
import axios from 'axios'; // Import axios
import { BipolarQuestions } from '../../../constants';
import "./styles/AnxietyTest.css";
import "./styles/button-50.css";
import api from '../../../api';

function BipolarTest() {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [responses, setResponses] = useState({});
    const [warning, setWarning] = useState(false);
    const [showResult, setShowResult] = useState(false);
    const [result, setResult] = useState(null); // Changed to null for clarity

    const handleOptionChange = (questionIndex, optionIndex) => {
        setResponses({
            ...responses,
            [questionIndex]: optionIndex
        });
        setWarning(false);
    };

    const handleNext = () => {
        if (responses[currentQuestionIndex] === undefined) {
            setWarning(true);
        } else if (currentQuestionIndex < Object.keys(BipolarQuestions).length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            // Prepare the responses array
            const ansArr = Object.values(responses);
            // Send ansArr to backend
            sendResponsesToBackend(ansArr);
            setShowResult(true);
        }
    };

    const sendResponsesToBackend = async (ansArr) => {
        try {
            const response = await api.post('/api/umang2/predict/anxiety', { input: ansArr }); // Update with your backend endpoint
            setResult(response.data.result); // Assuming the backend sends back a result
        } catch (error) {
            console.error('Error sending data to backend:', error);
        }
    };

    const currentQuestion = Object.entries(BipolarQuestions)[currentQuestionIndex];
    const questionText = currentQuestion[0];
    const options = currentQuestion[1];

    return (
        <div className='AnxietyTest-container'>
            <div className='greeting'>
                <h1>Good morning XYZ</h1>
            </div>
            <div className='intro'>
                <p>This test will help you assess your Bipolar levels by answering a series of questions. Please select the option that best describes how you feel.</p>
            </div>
            {!showResult ? (
                <>
                    <div className="question-block">
                        <div className="question">
                            <p>{questionText}</p>
                        </div>
                        <div className="options">
                            {options.map((option, optionIndex) => (
                                <label key={optionIndex}>
                                    <input 
                                        type="radio" 
                                        name={`question-${currentQuestionIndex}`} 
                                        value={optionIndex}
                                        onChange={() => handleOptionChange(currentQuestionIndex, optionIndex)}
                                        checked={responses[currentQuestionIndex] === optionIndex}
                                    />
                                    {option}
                                </label>
                            ))}
                        </div>
                    </div>
                    {warning && <div className='warning'><p>Please select an option before proceeding.</p></div>}
                    <div className="button-container-right-end">
                        <button className='button-50' onClick={handleNext}>
                            {currentQuestionIndex < Object.keys(BipolarQuestions).length - 1 ? "Next→" : "Submit"}
                        </button>
                    </div>
                </>
            ) : (
                <div className='result'>
                    <h2>Your Responses Sent Successfully</h2>
                    {result && <p>{result}</p>} {/* Display the result from the backend if needed */}
                </div>
            )}
        </div>
    );
}

export default BipolarTest;
