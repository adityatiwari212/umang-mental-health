import React, { useState, useEffect } from "react";
import "./styles/Test.css"
import Result from "./Result/Result";

import MentalHealthQuestionnaire from "./SelfAssess";
import MemoryTest from "./MemoryTest";
import MathTest from "./MathTest";
import TrailMakingTest from "./TrailMakingTest";
import EmotionTest from "./EmotionTest";

function Test() {
  const [game1, setGame1] = useState(true);
  const [game2, setGame2] = useState(false);
  const [game3, setGame3] = useState(false);
  const [game4, setGame4] = useState(false);
  const [showResult , setShowResult] = useState(false);
  const [game1Score, setGame1Score] = useState(0);
  const [game2Score, setGame2Score] = useState(0);
  const [game3Score, setGame3Score] = useState(0);
  const [game4Score, setGame4Score] = useState(0);
  useEffect(()=>{
    if(!setGame4 && !setGame1){
      console.log("form test component scores are " , game1Score ,"-", game2Score ,"-", game3Score ,"-", game4Score);
    }
  } , [setGame4]) 
 
  return (
    <div className="App">
      {game1 && <MemoryTest setGame1={setGame1} setGame2={setGame2} setFinalScore={setGame1Score}/>}
      {game2 && <MathTest setGame2={setGame2} setGame3={setGame3} setFinalScore={setGame2Score} />} 
       {game3 && <TrailMakingTest setGame3={setGame3} setGame4={setGame4} setFinalScore={setGame3Score} />}
      {game4 && <EmotionTest setGame4={setGame4} setFinalScore={setGame4Score}/>}
      {!game1 && !game2 && !game3 && !game4 && !showResult &&
      <>
      <MentalHealthQuestionnaire />
      <button className="selfassess-submit-btn" onClick={()=>{setShowResult(true)}}> Next</button>
      </>
    }
    {showResult && <Result mathScore={game2Score} memoryScore={game1Score} trailScore={game3Score} emotionScore={game4Score}/>}
    </div>
  );
}



export default Test;
