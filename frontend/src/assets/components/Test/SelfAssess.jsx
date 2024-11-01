import React, { useState } from 'react';
import "./styles/MentalHealthQuestionnaire.css"
const MentalHealthQuestionnaire = () => {
  const [answers, setAnswers] = useState({});

  const questions = [
    
    {
      text: 'Did your legs or hands shake during the test?',
      indication: 'Shaking can be a physical symptom of anxiety or stress, but excessive shaking might suggest a more severe condition.'
    },
    
    {
      text: 'Did you feel overwhelmed or confused during the test?',
      indication: 'Overwhelm and confusion can indicate difficulty processing information or anxiety.'
    },
    {
      text: 'Did you experience difficulty remembering information presented in the memory test?',
      indication: 'Memory issues can be a symptom of various cognitive and emotional disorders.'
    },
    {
      text: 'Did you find the arithmetic problems particularly challenging or frustrating?',
      indication: 'Difficulty with arithmetic can be linked to anxiety, depression, or learning disabilities.'
    },
    {
      text: 'Did you feel impatient or restless while completing the trail-making test?',
      indication: 'Impatience and restlessness can be associated with ADHD or anxiety.'
    },
    {
      text: 'Did you have trouble understanding or responding to the emotions portrayed in the stories?',
      indication: 'Difficulty with emotional recognition can be a sign of emotional dysregulation or empathy deficits.'
    },
    {
      text: 'Did you experience any physical symptoms during the test, such as headaches or stomach aches?',
      indication: 'Physical symptoms can accompany anxiety, depression, or other mental health conditions.'
    },
    {
      text: 'Did you feel discouraged or hopeless while taking the test?',
      indication: 'Feelings of discouragement and hopelessness can be indicative of depression.'
    },
    {
      text: 'Did you find it difficult to concentrate on the tasks due to intrusive thoughts?',
      indication: 'Intrusive thoughts can be a symptom of anxiety or obsessive-compulsive disorder.'
    },
    {
      text: 'Did you feel a sense of detachment or disconnection from yourself or others during the test?',
      indication: 'Detachment can be associated with dissociative disorders or depression.'
    },
    {
      text: 'Did you experience any significant changes in your mood or behavior in the days leading up to or following the test?',
      indication: 'Mood and behavioral changes can provide clues about underlying mental health conditions.'
    }
  ];

  const handleAnswerChange = (questionIndex, answer) => {
    setAnswers({ ...answers, [questionIndex]: answer });
  };

  const handleSubmit = () => {
    // Process answers and provide feedback or redirect to relevant resources
    console.log(answers);
  };

  return (
    <div className="selfassess-container">
      <h2 className="selfassess-title">Self Assessment Questionnaire</h2>
      {questions.map((question, index) => (
        <div key={index} className="selfassess-question">
          <h3>{question.text}</h3>
          <div className="selfassess-answer-container">
          <label className="selfassess-answer-label">
            <input type="radio" value="yes" onChange={() => handleAnswerChange(index, 'yes')} /> Yes
          </label>
          <label className="selfassess-answer-label">
            <input type="radio" value="no" onChange={() => handleAnswerChange(index, 'no')} /> No
          </label>
            </div>
          <p className="selfassess-indication">{question.indication}</p>
        </div>
      ))}

    </div>
  );
};


export default MentalHealthQuestionnaire;
