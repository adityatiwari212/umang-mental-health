import React, { useState, useEffect } from "react";
import Timer from "../Timer";
import { allWords } from "../../../constants";
import "./styles/MemoryTest.css"
function MemoryTest({ setGame1, setGame2 ,setFinalScore}) {
    
  const [showDescription, setShowDescription] = useState(true);
    const totalWordsToChoose = 10;
    const totalWordsForRecall = 25;
    const time2recall = 45*(1000);
    const time2memorize = 30*(1000);
    const [tenWords, setTenWords] = useState([]); // tenwords is the words to memorize
    const [thirtyWords, setThirtyWords] = useState([]); // thirtywords is the words to display while selection
    const [showWords, setShowWords] = useState(false);
    const [isRecallTime, setIsRecallTime] = useState(false);
    const [score, setScore] = useState(0);
    const [chosenWords, setChosenWords] = useState([]);
    const [showScore, setShowScore] = useState(false);

    const startMemoryTest = () => {
      setShowDescription(false);
      setShowWords(true);

      const showWordsTimer = setTimeout(() => {
        setShowWords(false);
      }, time2memorize);
  
      const recallTimer = setTimeout(() => {
        setIsRecallTime(true);
      }, time2memorize + 10000);
  
      const testTimer = setTimeout(() => {
        console.log("time up");
        handleRecallSubmit();
      }, time2memorize + 10000 + time2recall);
  
      return () => {
        clearTimeout(showWordsTimer);
        clearTimeout(recallTimer);
        clearTimeout(testTimer);
      };

    };
  
    useEffect(() => {
      if (showScore === true) {
        const timer = setTimeout(() => {
          setGame1(false);
          setGame2(true);
        }, 5000); // 5 seconds
      }
    }, [showScore]);
  
    useEffect(() => {
      // Choose 10 random words from allWords
      const ten = [];
      while (ten.length < totalWordsToChoose) {
        const randomIndex = Math.floor(Math.random() * allWords.length);
        const randomWord = allWords[randomIndex].slice(0,1).toUpperCase().concat(allWords[randomIndex].slice(1));
        if (!ten.includes(randomWord)) {
          ten.push(randomWord);
        }
      }
      setTenWords(ten);
  
      // Prepare array of 30 words (10 ten + 20 additional random)
      const allAvailableWords = [...ten];
      while (allAvailableWords.length < totalWordsForRecall) {
        const randomIndex = Math.floor(Math.random() * allWords.length);
        const randomWord = allWords[randomIndex].slice(0,1).toUpperCase().concat(allWords[randomIndex].slice(1));
        if (!allAvailableWords.includes(randomWord)) {
          allAvailableWords.push(randomWord);
        }
      }
  
      // Shuffle the array of 30 words
      const shuffleArray = (array) => {
        // Fisher-Yates shuffle algorithm
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
      };
      const shuffledWords = shuffleArray(allAvailableWords);
      setThirtyWords(shuffledWords);
  
      
    }, []);
  
    const handleSelection = (word) => {
      if (chosenWords.length < totalWordsToChoose) {
        setChosenWords([...chosenWords, word]);
        if (tenWords.includes(word)) setScore(score + 1);
      } else if (chosenWords.includes(word)) {
        if (tenWords.includes(word)) setScore(score - 1);
        setChosenWords(chosenWords.filter((w) => w !== word));
      }
    };
  
    const handleRecallSubmit = () => {
      setFinalScore((prevFinalScore)=>{console.log("Memory test score /10" , prevFinalScore+(score*10/totalWordsToChoose)); return prevFinalScore+(score*10/8)})
      setShowScore(true);
    };

  

    return (
        <header className="_memTest-header">
          <h1>Memory Test</h1>

          {showDescription && (
        <div className="_memTest-description">
        <p>
          Welcome to the Memory Test! In this test, you will be presented with a list
          of {totalWordsToChoose} words to memorize within {time2memorize / 1000} seconds.
          After the memorization period, you will need to recall up to {totalWordsToChoose} words
          from a larger list of {totalWordsForRecall} words. You have {time2recall / 1000} seconds to
          complete the recall phase.
        </p> <br></br>
        <p>
          Click the Start button below to begin the test. During the memorization phase,
          focus on remembering as many words as you can. During the recall phase, select
          up to {totalWordsToChoose} words that you remember from the list presented.
          Your score will reflect how many correct selections you make out of {totalWordsToChoose}.
        </p>
        <button className="_memTest-start-button" onClick={startMemoryTest}>
          Start Test
        </button>
      </div>
      
      )}

          {showWords && (
            <div className="_memTest-words-container">
              <h2>Remember these words:</h2>
              <ul className="_memTest-words-list">
                {tenWords.map((word, index) => (
                  <li key={index}>{word}</li>
                ))}
              </ul>
              <div className="_memTest-countdown">
                <Timer time2go={30} />
              </div>
            </div>
          )}
      
          {isRecallTime && (
            <div className="_memTest-recall-container">
              <h2>Choose up to {totalWordsToChoose} words from the list:</h2>
              <div className="_memTest-recall-items">
                {thirtyWords.map((word, index) => (
                  <div className="_memTest-recall-item" key={index}>
                    <input
                      type="checkbox"
                      checked={chosenWords.includes(word)}
                      onChange={() => handleSelection(word)}
                    />
                    <label>{word}</label>
                  </div>
                ))}
              </div>
      
              <button className="_memTest-recall-submit" onClick={handleRecallSubmit}>
                Submit
              </button>
      
              {showScore ? (
                <div className="_memTest-score-container">
                  <h2>Your score:</h2>
                  <label>{score} out of {totalWordsToChoose} correct</label>
                </div>
              ) : (
                <div className="_memTest-countdown">
                  <Timer time2go={45} />
                </div>
              )}
            </div>
          )}
      
          {!showDescription && !showWords && !isRecallTime && (
            <div className="_memTest-countdown">
              <h2>Get ready to recall the words...</h2>
              <Timer time2go={10} />
            </div>
          )}
        </header>
      );
      
  }


  export default MemoryTest;