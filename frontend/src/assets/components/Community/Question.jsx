import React, { useState } from "react";
import api from "../../../api";

function Question({ question }) {
    const [answers, setAnswers] = useState([]);
    const [showAnswers, setShowAnswers] = useState(false);
    const [newAnswer, setNewAnswer] = useState("");

    const fetchAnswers = () => {
        api.get(`/api/community/${question._id}/answers/`).then(response => {
            setAnswers(response.data);
            setShowAnswers(true);
        });
    };

    const handleAnswerSubmit = (e) => {
        e.preventDefault();
        api.post(`/api/community/${question._id}/answer/`, { answer_text: newAnswer }).then(response => {
            setAnswers([...answers, response.data]);
            setNewAnswer("");
        });
    };
  return (
    <div className="question">
                <div className="question-stats">
                    
                    <p>2 answers</p>
                    
                </div>
                <div className="question-content">
                <p>{question.question_text}</p>
            <button onClick={fetchAnswers}>See Answer</button>

                    <p><small>40 seconds ago by User123</small></p>
                </div>

                {showAnswers && (
                <div className="answers">
                    {answers.map((answer, index) => (
                        <p key={index}>{answer.answer_text}</p>
                    ))}
                    
                    <form onSubmit={handleAnswerSubmit}>
                        <textarea 
                            value={newAnswer}
                            onChange={(e) => setNewAnswer(e.target.value)}
                            placeholder="Write your answer"
                        />
                        <button type="submit">Submit</button>
                    </form>
                
                </div>
            )}

            </div>
  )
}

export default Question