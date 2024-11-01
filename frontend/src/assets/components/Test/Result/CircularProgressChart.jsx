import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import './Result.css'; // Import the CSS file
import { Chart, ArcElement } from 'chart.js';

Chart.register(ArcElement);

const CircularProgressChart = ({ totalScore }) => {
  // Ensure totalScore is within the valid range
  const clampedTotalScore = Math.max(0, Math.min(100, totalScore));

  const data = {
    datasets: [
      {
        data: [clampedTotalScore, 100 - clampedTotalScore],
        backgroundColor: [()=>{
          if(totalScore>70) return `green`
          else if(totalScore > 50) return `yellow`
          else if(totalScore > 30) return `orange`
          else return `red`
        }, '#ffffff'],
        borderWidth:0,
      },
    ],
  };

  const options = {
    // Adjust cutoutPercentage as needed
    cutoutPercentage: 50,
    // Remove rotation and circumference if not necessary
    // rotation: Math.PI,
    // circumference: Math.PI,
    tooltips: { enabled: false },
    hover: { mode: null },
  };

  return (
    <div className="circular-progress">
      <Doughnut data={data} options={options} />
      <div className="doughnut-center">{`${clampedTotalScore}%`}</div>
      {/* <div className="fig-label">fig 1</div> */}
    </div>
  );
};

export default CircularProgressChart;
