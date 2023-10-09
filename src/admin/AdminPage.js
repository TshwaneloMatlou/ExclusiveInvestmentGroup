import React from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Footer from './Footer';
import BarChart from './BarChart';
import LineChart from './LineChart';

const AdminPage = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
          <div className="container mx-auto px-6 py-8">
            {/* Content */}
            <h1 className="text-2xl font-semibold mb-4">Admin Dashboard</h1>
            {/* Other dashboard components */}
            <BarChart />
            <LineChart />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default AdminPage;
