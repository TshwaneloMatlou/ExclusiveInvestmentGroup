import React from 'react';
import Create from '../components/Create';
import BarChart from './BarChart';
import LineChart from './LineChart';

const Dashboard = () => {
  return (
    <div className='grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 mb-5'>
      <div>
        <Create />
      </div>
      <div className='shadow-lg shadow-green-400 m-auto'>
        <BarChart />
      </div>
    </div>
  );
};

export default Dashboard;
