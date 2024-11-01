import React, { useState, useEffect } from "react";
import { emotions, stories } from "../../../constants";
import "./styles/emotion.css"
const EmotionTest = ({setGame4,setFinalScore}) => {
  
      const [selectedEmotions, setSelectedEmotions] = useState({});
      const [feedback, setFeedback] = useState('');
      const [currentStory, setCurrentStory] = useState(null);
      const [start, setStart] = useState(false);

      useEffect(() => {
        const randomIndex = Math.floor(Math.random() * stories.length);
        setCurrentStory(stories[randomIndex]);
      }, []);
    
      const handleEmotionChange = (character, emotion) => {
        setSelectedEmotions({
          ...selectedEmotions,
          [character]: emotion
        });
      };
    
      const handleSubmit = () => {
      let correctCount = 0;
    
      currentStory.characters.forEach(character => {
        if (selectedEmotions[character.name] === character.correctEmotion) {
          correctCount++;
        }
      });
    
      if (correctCount === 1) {
        setFinalScore(prevFinalScore => {console.log("emo score is " , prevFinalScore + 5);return prevFinalScore + 5});
      } else if (correctCount === 2) {
        setFinalScore(prevFinalScore => {console.log("emo score is " , prevFinalScore + 10);return prevFinalScore + 10});
      } else {
        setFinalScore(prevFinalScore => {console.log("emo score is " , prevFinalScore - 5);return prevFinalScore - 5});
      }
    
      setFeedback(correctCount === currentStory.characters.length ? 'All answers are correct!' : 'Some answers are incorrect.');
      const x = setTimeout(() => {
        setGame4(false);
      }, 5000);
    };
    
      if (!currentStory) {
        return <p>Loading...</p>;
      }
    
      return (
<div className="_emo_recg-emotion-recognition">
      <h1>Emotion Recognition</h1>

      {!start && (
        <div className="_emo_recg-description">
          <p>
            Welcome to the Trail Making Test! In this test, your task is to
            Read each story carefully, select the emotions for each character from dropdown menus, and submit your answers. 
            Each story presents characters with specific emotions you must match accurately.
          </p>
          <button className="button_start_tmt" onClick={()=>{setStart(true)}}>
            Start Test
          </button>
        </div>
      )}
{
  start && (
    <>
      <p>{currentStory.text}</p>
      {currentStory.characters.map(character => (
        <div key={character.name}>
          <h2>{character.name}</h2>
          <select
            className="_emo_recg-emotion-select"
            value={selectedEmotions[character.name] || ''}
            onChange={(e) => handleEmotionChange(character.name, e.target.value)}
          >
            <option value="" disabled>Select emotion</option>
            {emotions.map(emotion => (
              <option key={emotion} value={emotion}>{emotion}</option>
            ))}
          </select>
        </div>
      ))}
      <button className="_emo_recg-emotion-submit" onClick={handleSubmit}>Submit</button>
      {feedback && <p className="_emo_recg-emotion-feedback">{feedback}</p>}
    </>
  )
}

    </div>
      );
    };

    export default EmotionTest;