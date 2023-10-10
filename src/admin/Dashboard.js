import React from 'react';
import Create from '../components/Create';
import BarChart from './BarChart';

const Dashboard = () => {
  return (
    <div className='grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 mx-auto bg-gray-200'>
      <div>
        <Create />
      </div>
      <div>
        <BarChart />
      </div>
    </div>
  );
};

export default Dashboard;
