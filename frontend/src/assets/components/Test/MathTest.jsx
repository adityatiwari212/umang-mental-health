import React, { useState, useEffect } from "react";
import {  Mathquestions } from "../../../constants";
import Timer from "../Timer";

import "./styles/Math.css"

function MathTest({ setGame2, setGame3, setFinalScore }) {
    const [leftOperand, setLeftOperand] = useState(() =>
      Math.floor(Math.random() * 100)
    );
    const [rightOperand, setRightOperand] = useState(() =>
      Math.floor(Math.random() * 100)
    );
    const [operator, setOperator] = useState('+');
    const [showDescription, setShowDescription] = useState(true);
    const [showScore, setShowScore] = useState(false);
    const [rightAnswers, setRightAnswers] = useState(0);
    const [answer, setAnswer] = useState(null);
  
    const getRandomQuestion = (operator, leftOperand, rightOperand) => {
      const operatorQuestions = Mathquestions[operator];
      const randomIndex = Math.floor(Math.random() * operatorQuestions.length);
      let question = operatorQuestions[randomIndex];
      return question
        .replace('{leftOperand}', leftOperand)
        .replace('{rightOperand}', rightOperand);
    };
  
    const [question, setQuestion] = useState(() =>
      getRandomQuestion(operator, leftOperand, rightOperand)
    );
  
    useEffect(() => {
      setQuestion(getRandomQuestion(operator, leftOperand, rightOperand));
    }, [operator, leftOperand, rightOperand]);
  
   

    
  
    useEffect(() => {
      if (showScore) {
        const timer = setTimeout(() => {
          setGame2(false);
          setGame3(true);
        },500); 
        return () => clearTimeout(timer);
      }
    }, [showScore, setGame2, setGame3]);
  
    const handleStartClick = () => {
      setShowDescription(false);
      setTimeout(() => {
        setShowScore(true);
      }, 60000); // 60 seconds
    };
  
    const handleNextClick = () => {
      if (answer) {
        const correctAnswer = (() => {
          switch (operator) {
            case '+':
              return leftOperand + rightOperand;
            case '-':
              return leftOperand - rightOperand;
            case '*':
              return leftOperand * rightOperand;
            case '/':
              return Math.floor(leftOperand / rightOperand); // Use floor for integer division
            default:
              throw new Error('Unsupported operator');
          }
        })();
  
        if (parseInt(answer) === correctAnswer) {
          const score = (operator === '+' || operator === '-') ? 2 : 3;
          setFinalScore(prevFinalScore =>{console.log("Math test score is " ,prevFinalScore + score ); return prevFinalScore + score});
          setRightAnswers(rightAnswers + 1);
        }
      }
  
      const nextOperator =
        operator === '+' ? '-' :
        operator === '-' ? '*' :
        operator === '*' ? '/' :
        '+';
      setOperator(nextOperator);
  
      const newLeftOperand = (() => {
        switch (nextOperator) {
          case '-':
            return Math.floor(50 + Math.random() * 50);
          case '/':
            return Math.floor(30 + Math.random() * 70);
          default:
            return Math.floor(15 + Math.random() * 15);
        }
      })();
      setLeftOperand(newLeftOperand);
  
      const newRightOperand = (() => {
        switch (nextOperator) {
          case '-':
            return Math.floor(10 + Math.random() * 39);
          case '/':
            const denominator = Math.floor(
              3 + Math.random() * (Math.floor(newLeftOperand / 2) - 4)
            );
            const result = Math.floor(newLeftOperand / denominator);
            setLeftOperand(result * Math.floor(newLeftOperand / result));
            return result;
          case '*':
            return Math.floor(3 + Math.random() * 6);
          default:
            return 0;
        }
      })();
      setRightOperand(newRightOperand);
  
      setAnswer(null);
    };
  
    return (
      <header className="_mathTest-header">
        <h1>Math Test</h1>
        {showDescription && (
          <div className="_mathTest-description">
            <p>Welcome to the Math Test! You have 60 seconds to answer the basic arithmetic math questions.</p>
            <button className="_mathTest-start-button" onClick={handleStartClick}>
              Start Test
            </button>
          </div>
        )}
        {!showDescription && (
          <>
            
            {!showScore && (<>
              <p className="_mathTest-question">{question}</p>
              <input
                type="number"
                className="_mathTest-input"
                value={answer || ''}
                onChange={(e) => setAnswer(e.target.value)}
              />
            </>)}
            {!showScore && <Timer time2go={60} />}
            {operator !== '/' ? (
              answer === null ? (
                <p>Please enter a value</p>
              ) : (
                <button className="_mathTest-button" onClick={handleNextClick}>
                  Next
                </button>
              )
            ) : answer === null ? (
              !showScore && <p>Please enter a value</p>
            ) : (
              !showScore && (
                <button className="_mathTest-button" onClick={() => setShowScore(true)}>
                  Submit
                </button>
              )
            )}
            
          </>
        )}
      </header>
    );
  }

  export default MathTest;