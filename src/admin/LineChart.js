import React from 'react';
import { Line } from 'react-chartjs-2';

const LineChart = () => {
  // Define your chart data here
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'Sample Data',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
        data: [65, 59, 80, 81, 56],
      },
    ],
  };

  const options = {
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
