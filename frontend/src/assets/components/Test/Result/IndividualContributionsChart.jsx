import React from 'react';
import { Pie } from 'react-chartjs-2';
import 'chartjs-plugin-datalabels';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import './Result.css'; // Import the CSS file

Chart.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const IndividualContributionsChart = ({ scores }) => {
  const data = {
    labels: ['Cognitive Memory', 'Rational Thinking', 'Cognitive Flexibility and Processing Speed', 'Emotion Recognition and Empathy'],
    datasets: [
      {
        data: scores,
        backgroundColor: ['#ff6384', '#36a2eb', '#ffce56', '#ff9f40'],
        // borderWidth: 1,
        
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
        position: 'bottom',
        labels: {
          font: {
            size: 12,
            family: 'Arial',
          },
          color: '#333',
        },
      },
      // datalabels: {
      //   color: '#fff',
      //   font: {
      //     weight: 'bold',
      //     size : '15px'
      //   },
      //   formatter: (value, context) => {
      //     return context.chart.data.labels[context.dataIndex];
      //   },
      // },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return tooltipItem.label;
          },
        },
      },
    },
  };

  return (
    <div className="pie-chart">
      <Pie data={data} options={options} />
    </div>
  );
};

export default IndividualContributionsChart;
