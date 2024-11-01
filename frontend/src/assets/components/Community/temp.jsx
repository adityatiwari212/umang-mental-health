import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../../api.js";
import Question from "../Questions.jsx";
import "./Community.css"; // Import CSS for styling
import NavBar from "../Home/components/NavBar.jsx";
import Modal from "../Modal.jsx";
import RightSideBar from "../Solutions/RightSideBar.jsx";

const Community = () => {
    const [questions, setQuestions] = useState([]);
    const [newQuestion, setNewQuestion] = useState("");
    const [modal, setModal] = useState(true);

    useEffect(() => {
        // Fetch the latest 10 questions
        api.get("/api/community/recent/10/").then(response => {
            setQuestions(response.data);
        });
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(newQuestion);
        api.post("/api/community/questions/", { question_text: newQuestion }).then(response => {
            setQuestions([...questions, response.data]);
            setNewQuestion("");
        });
    };

    return (
        <>
            <NavBar /> 
        {/* change here */}

            {modal && <Modal childeren={<Termsncond setOpen={setModal}/>} setOpen={setModal}/>}
            <div className="ask-form-container">
                <form onSubmit={handleSubmit}>
                    <input type="text" 
                        value={newQuestion}
                        onChange={(e) => setNewQuestion(e.target.value)}
                        placeholder="Ask a question"
                    />
                    <button type="submit">Submit</button>
                </form>
            </div>

            <div className="welcome-section">
                <h1>Welcome to the Community</h1>
                <p> We are glad to have you here! This community is a safe space where you can share your thoughts, ask questions, and find support on your mental health journey. Whether you're looking for advice, coping strategies, or just need someone to listen, you've come to the right place. Together, we aim to foster a supportive and understanding environment where everyone can feel heard and valued.
                </p>
            </div>
            <div className="community-container">
                <div className="qna-container">
                    {questions.map((question, index) => (
                        <Question key={index} question={question} />
                    ))}
                </div>
                <RightSideBar />
            </div>
        </>
    );
};

const Termsncond = ({ setOpen }) => {
    return (
        <div className="Termsncond-container">
            <div className="Termsncond-content">
                <button className="Termsncond-close" onClick={() => setOpen(false)}>&times;</button>
                <h2>Terms and Conditions</h2>
                <p>
                    Welcome to our community! Before you proceed, please take a moment to read our terms and conditions. 
                    By using this platform, you agree to comply with the following rules and guidelines.
                </p>
                <p>
                    1. Respectful communication: Treat others with kindness and respect.
                </p>
                <p>
                    2. Privacy: Do not share personal information without consent.
                </p>
                <p>
                    3. No spam: Avoid posting irrelevant or promotional content.
                </p>
                <p>
                    4. Report issues: If you encounter inappropriate behavior, report it to the moderators.
                </p>
                <p>
                    We are committed to fostering a positive and supportive environment for everyone. Thank you for your cooperation!
                </p>
                <button onClick={() => setOpen(false)}>I Agree</button>
            </div>
        </div>
    );
};

export default Community;
