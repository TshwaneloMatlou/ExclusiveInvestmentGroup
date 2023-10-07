import React, { useState } from 'react';

const TableCurrency = () => {
  // State to keep track of the selected row
  const [selectedRow, setSelectedRow] = useState(null);

  // Sample data for the table (you can replace it with your data)
  const [data, setData] = useState([
    {
      id: 1,
      currentBalance: 300,
      riskPercent: 1,
      riskMoney: '',
      rewardPercent: 3,
      rewardMoney: '',
      tradeDate: "",
      pair: 'EURUSD',
      direction: 'BUY', // Default direction is 'BUY'
      lotSize: 0.01,
      openPrice: 0.00801,
      stopLossPoints: '',
      stopLossPrice: '',
      takeProfitPoints: '',
      takeProfitPrice: '',
    },
    {
      id: 2,
      currentBalance: 300,
      riskPercent: 1,
      riskMoney: '',
      rewardPercent: 3,
      rewardMoney: '',
      tradeDate: "",
      pair: 'GBPUSD',
      direction: 'SELL',
      lotSize: 0.01,
      openPrice: 0.00801,
      stopLossPoints: '',
      stopLossPrice: '',
      takeProfitPoints: '',
      takeProfitPrice: '',

    },
    // Add more rows as needed
  ]);

  // Define the first set of table headings
  const firstHeadings = ['Account Details', 'Main Data', 'Final Data'];

  // Define the second set of table headings
  const secondHeadings = [
    'No.',
    'Current_($)',
    'Risk_(%)',
    'Risk_($)',
    'Reward_(%)',
    'Reward_($)',
    'TradeDate',
    'TradingPair',
    'Direction',
    'LotSize',
    'OpenPrice',
    'SL_(Points)',
    'SL_(Price)',
    'TP_(Points)',
    'TP_(Price)',
  ];

  // Function to handle row click and toggle selected row
  const handleRowClick = (index) => {
    setSelectedRow(index === selectedRow ? null : index);
  };

  // Function to calculate riskMoney and rewardMoney based on currentBalance
  const calculateRiskAndReward = (index, value) => {
    const riskPercent = data[index].riskPercent;
    const rewardPercent = data[index].rewardPercent;
    const riskMoney = (value * riskPercent / 100).toFixed(2);
    const rewardMoney = (value * rewardPercent / 100).toFixed(2);
    return { riskMoney, rewardMoney };
  };

  // Function to handle changes in currentBalance
  const handleCurrentBalanceChange = (index, value) => {
    const newData = [...data];
    newData[index].currentBalance = value;
    // Calculate and update riskMoney and rewardMoney based on riskPercent and rewardPercent
    const { riskMoney, rewardMoney } = calculateRiskAndReward(index, value);
    newData[index].riskMoney = riskMoney;
    newData[index].rewardMoney = rewardMoney;
    // Calculate and update stopLossPoints and takeProfitPoints based on riskMoney and rewardMoney
    newData[index].stopLossPoints = (riskMoney / 1000).toFixed(5);
    newData[index].takeProfitPoints = (rewardMoney / 1000).toFixed(5);
    // Update the table data
    setData(newData);
  };

  // Function to handle direction change and calculate stopLossPrice and takeProfitPrice
  const handleDirectionChange = (index, value) => {
    const newData = [...data];
    newData[index].direction = value;

    // Check if stopLossPoints is a valid number before calculations
    if (!isNaN(newData[index].stopLossPoints)) {
      // Calculate and update stopLossPrice based on direction
      if (value === 'BUY') {
        newData[index].stopLossPrice = (newData[index].openPrice - parseFloat(newData[index].stopLossPoints)).toFixed(5);
      } else if (value === 'SELL') {
        newData[index].stopLossPrice = (newData[index].openPrice + parseFloat(newData[index].stopLossPoints)).toFixed(5);
      }
    }

    // Check if takeProfitPoints is a valid number before calculations
    if (!isNaN(newData[index].takeProfitPoints)) {
      // Calculate and update takeProfitPrice based on direction
      if (value === 'BUY') {
        newData[index].takeProfitPrice = (newData[index].openPrice + parseFloat(newData[index].takeProfitPoints)).toFixed(5);
      } else if (value === 'SELL') {
        newData[index].takeProfitPrice = (newData[index].openPrice - parseFloat(newData[index].takeProfitPoints)).toFixed(5);
      }
    }

    // Update the table data
    setData(newData);
  };

  return (
    <div className='shadow-lg shadow-blue-400 border-2 border-green-300 p-5'>
      <h1 className='font-bold text-[25px] bg-green-300'>Template for (Consistent Currency)</h1>
      <table className="min-w-full bg-white border border-collapse border-black rounded-lg">
        <thead>
          <tr className="bg-gray-100">
            <th
              colSpan={2}
              className="py-2 px-3 text-center text-xs font-semibold text-gray-600 uppercase border-b border-black border-l border-r"
            >
              {firstHeadings[0]}
            </th>
            {firstHeadings.slice(1).map((heading, index) => (
              <th
                key={index}
                className={`py-2 px-3 text-center text-xs font-semibold text-gray-600 uppercase border-b border-black border-l border-r ${
                  heading === 'Main Data' ? 'border-t border-black' : ''
                }`}
                colSpan={heading === 'Main Data' ? 4 : 9}
              >
                {heading}
              </th>
            ))}
          </tr>
          <tr className="bg-gray-100">
            {secondHeadings.map((heading, index) => (
              <th
                key={index}
                className={`${
                  heading === 'No.'
                    ? 'py-2 px-3 text-center text-xs font-semibold text-gray-600 uppercase'
                    : 'py-2 px-3'
                } border border-black`}
              >
                {heading}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.map((row, index) => (
            <tr
              key={index}
              className={`${
                selectedRow === index ? 'bg-blue-200' : index % 2 === 0 ? 'bg-gray-100' : 'bg-white'
              } cursor-pointer hover:bg-blue-100 border-b border-black`}
              onClick={() => handleRowClick(index)}
            >
              <td className="py-2 px-3 border-l border-r border-black">{row.id}</td>
              <td className="py-2 px-3 border-l border-r border-black">
                <input
                  className='w-full rounded-xl text-center font-bold'
                  type="text"
                  value={row.currentBalance}
                  onChange={(e) => handleCurrentBalanceChange(index, e.target.value)}
                />
              </td>

              <td className="py-2 px-3 border-l border-r border-black">
                <input
                  className='w-full rounded-xl text-center font-bold'
                  type="text"
                  value={row.riskPercent}
                  onChange={(e) => {
                    const newData = [...data];
                    newData[index].riskPercent = e.target.value;
                    setData(newData);
                  }}
                />
              </td>
              <td className="py-2 px-3 border-l border-r border-black text-center text-red-500 font-bold">$ {row.riskMoney}</td>

              <td className="py-2 px-3 border-l border-r border-black">
                <input
                  className='w-full rounded-xl text-center font-bold'
                  type="text"
                  value={row.rewardPercent}
                  onChange={(e) => {
                    const newData = [...data];
                    newData[index].rewardPercent = e.target.value;
                    setData(newData);
                  }}
                />
              </td>
              <td className="py-2 px-3 border-l border-r border-black text-center text-red-500 font-bold">$ {row.rewardMoney}</td>

              <td className="py-2 px-3 border-l border-r border-black">
                <input
                    className='w-full rounded-xl text-center font-bold'
                    type="datetime-local"
                    value={row.tradeDate}
                    onChange={(e) => {
                      const newData = [...data];
                      newData[index].tradeDate = e.target.value;
                      setData(newData);
                    }}
                />
              </td>
              <td className="py-2 px-3 border-l border-r border-black">
                <input
                  className='w-full rounded-xl text-center font-bold'
                  type="text"
                  value={row.pair}
                  onChange={(e) => {
                    const newData = [...data];
                    newData[index].pair = e.target.value;
                    setData(newData);
                  }}
                />
              </td>
              <td className="py-2 px-3 border-l border-r border-black">
                <select
                  className='w-full rounded-xl text-center font-bold'
                  value={row.direction}
                  onChange={(e) => handleDirectionChange(index, e.target.value)}
                >
                  <option value="BUY">BUY</option>
                  <option value="SELL">SELL</option>
                </select>
              </td>
              <td className="py-2 px-3 border-l border-r border-black">
                <input
                  className='w-full rounded-xl text-center font-bold'
                  type="text"
                  value={row.lotSize}
                  onChange={(e) => {
                    const newData = [...data];
                    newData[index].lotSize = e.target.value;
                    setData(newData);
                  }}
                />
              </td>
              <td className="py-2 px-3 border-l border-r border-black">
                <input
                  className='w-full rounded-xl text-center font-bold'
                  type="text"
                  value={row.openPrice}
                  onChange={(e) => {
                    const newData = [...data];
                    newData[index].openPrice = e.target.value;
                    setData(newData);
                  }}
                />
              </td>
              <td className="py-2 px-3 border-l border-r border-black text-center text-red-500 font-bold">{row.stopLossPoints}</td>
              <td className="py-2 px-3 border-l border-r border-black text-center text-red-500 font-bold">{row.stopLossPrice}</td>
              <td className="py-2 px-3 border-l border-r border-black text-center text-red-500 font-bold">{row.takeProfitPoints}</td>
              <td className="py-2 px-3 border-l border-r border-black text-center text-red-500 font-bold">{row.takeProfitPrice}</td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableCurrency;
