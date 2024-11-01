import React, { useState } from "react";
import api from "../../api";
import "./Question.css"
import {  USER_INFO_ID } from "../../constants";
const Question = ({ question }) => {
    // console.log("question is" , question ,  "answer are" , question.answers);
    
    
    const [answers, setAnswers] = useState([]);
    const [showAnswers, setShowAnswers] = useState(false);
    const [showAnswerForm, setShowAnswerForm] = useState(false);
    const [newAnswer, setNewAnswer] = useState("");

    const fetchAnswers = () => {
        if(setShowAnswerForm) setShowAnswerForm(false);
        if(showAnswers) setShowAnswers(false);
    //     else {api.get(`/api/umang2/qna/questions/${question._id}/answers`).then(response => {
    //         setAnswers(response.data);
    //         setShowAnswers(true);
    //     }); 
    // }
    else{
        setAnswers(question.answers)
        console.log("answers are " , question.answers);
        
        setShowAnswers(true);
    }
    };

    const handleAnswerSubmit = (e) => {
        e.preventDefault();
        console.log("user" ,localStorage.getItem(USER_INFO_ID));
        
        const payload = {
            text : newAnswer ,
            askedBy  : localStorage.getItem(USER_INFO_ID)
        }
        console.log("payload is " , payload);
        
        api.post(`/api/umang2/qna/answers/${question._id}/create`, payload).then(response => {
            
            const updatedAnswers = response.data.question.answers; 
            setAnswers(updatedAnswers);
            setNewAnswer(""); // Clear the form input
            setShowAnswerForm(false); // Close the answer form
            setShowAnswers(true); // Show the updated answers
        });
    };

    return (
        <div className="question-container">
            <div className="question-text">

            <p>{question.text}</p>
            </div>
            <div className="question-meta">
                <p>Asked By Lorem, ipsum 15 Aug 2024 12:12pm</p>
            </div>
            <div className="button-group">
                <button onClick={fetchAnswers}>{showAnswers ? "Cancel" : "See Answer"}</button>
                <button onClick={() => {setShowAnswerForm(!showAnswerForm); setShowAnswers(false); }}>
                    {showAnswerForm ? "Cancel" : "Write Answer"}
                </button>
            </div>
            {showAnswers && (
                <div className="answers">
                    {answers.map((answer, index) => (
                        <p key={index}>{answer.text}</p>
                    ))}
                </div>
            )}
            {showAnswerForm && (
                <form onSubmit={handleAnswerSubmit} className="answer-form">
                    <textarea 
                        value={newAnswer}
                        onChange={(e) => setNewAnswer(e.target.value)}
                        placeholder="Write your answer"
                    />
                    <button type="submit">Submit</button>
                </form>
            )}
        </div>
    );
};

export default Question;
