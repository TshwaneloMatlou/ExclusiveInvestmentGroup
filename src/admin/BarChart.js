import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = () => {
  const [chartData, setChartData] = useState({
    datasets: [],
  });

  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    setChartData({
      labels: ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'],
      datasets: [
        {
          label: 'Trades $',
          data: [18127, 22201, 19490, 17938, 24182, 17842, 22475],
          borderColor: 'rgb(53, 162, 235)',
          backgroundColor: 'rgba(53, 162, 235, 0.4)',
        },
      ],
    });

    setChartOptions({
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Weekly Trades',
        },
      },
      maintainAspectRatio: false, // Disable the default aspect ratio
      responsive: true, // Make the chart responsive
      scales: {
        x: {
          stacked: true, // Adjust these options as needed
        },
        y: {
          stacked: true, // Adjust these options as needed
        },
      },
    });
  }, []);

  return (
    <>
      <div className='w-full overflow-x-auto relative md:col-span-2 lg:h-[70vh] h-[50vh] mx-auto my-5 border rounded-lg bg-white'>
        <Bar className='m-5' data={chartData} options={chartOptions} />
      </div>
    </>
  );
};

export default BarChart;
