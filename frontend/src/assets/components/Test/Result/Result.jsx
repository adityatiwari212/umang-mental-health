// App.js

import React from 'react';
import CircularProgressChart from './CircularProgressChart';
import IndividualContributionsChart from './IndividualContributionsChart';
import './Result.css'; // Import the CSS file
import { feedback } from '../../../../constants';

const Result = (
    {memoryScore , mathScore , trailScore , emotionScore}
) => {
    console.log("result");
    console.log(memoryScore , mathScore , trailScore , emotionScore);
  const totalScore = Math.min(((memoryScore + mathScore + trailScore + emotionScore) / 50) * 100 );
  const scores = [memoryScore, mathScore, trailScore > 0 ? trailScore : 0 , emotionScore];
  
  const feedbackMessage = feedback(memoryScore, mathScore, trailScore, emotionScore);

  return (
    <div className="container">
      <h1>Mental Health Assessment</h1>
      <div className="chart-container">
        <CircularProgressChart totalScore={totalScore} />
        <IndividualContributionsChart scores={scores} />
      </div>
      <div className="feedback">
        <pre>{feedbackMessage}</pre>
      </div>
    </div>
  );
};

export default Result;
