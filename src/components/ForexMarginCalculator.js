import React, { useState } from 'react';

const ForexMarginCalculator = () => {
  const [lotSize, setLotSize] = useState('0.01');
  const [leverage, setLeverage] = useState('400');
  const [currencyPair, setCurrencyPair] = useState('');
  const [requiredMargin, setRequiredMargin] = useState('');

  const calculateMargin = () => {
    // Validate input values
    const parsedLotSize = parseFloat(lotSize);
    const parsedLeverage = parseFloat(leverage);

    if (isNaN(parsedLotSize) || isNaN(parsedLeverage) || !currencyPair) {
      alert('Please enter valid values.');
      return;
    }

    // Perform margin calculation
    const margin = (parsedLotSize * 100000 * 100) / parsedLeverage; // Assuming a standard lot size of 100,000 units

    setRequiredMargin(margin.toFixed(2));
  };

  return (
    <div className="bg-white rounded-lg shadow-lg shadow-green-500 p-6">
      <h2 className="text-xl font-semibold mb-4 text-center">Forex Margin Calculator</h2>
      {/* Lot size input */}
      <div className="mb-4">
        <label htmlFor="lotSize">Lot Size</label>
        <div className="flex items-center">
          <input
            type="number"
            id="lotSize"
            value={lotSize}
            onChange={(e) => setLotSize(e.target.value)}
            className="w-full border rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
      </div>
      {/* Leverage input */}
      <div className="mb-4">
        <label htmlFor="leverage">Leverage</label>
        <div className="flex items-center">
          <input
            type="number"
            id="leverage"
            value={leverage}
            onChange={(e) => setLeverage(e.target.value)}
            className="w-full border rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
      </div>
      {/* Currency pair input */}
      <div className="mb-4">
        <label htmlFor="currencyPair">Currency Pair</label>
        <div className="flex items-center">
          <input
            type="text"
            id="currencyPair"
            value={currencyPair}
            onChange={(e) => setCurrencyPair(e.target.value)}
            className="w-full border rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300"
            placeholder="e.g., EUR/USD"
          />
        </div>
      </div>
      {/* Calculate button */}
      <div>
        <button
          className="bg-green-500 text-white p-2 rounded-md hover:bg-blue-600"
          onClick={calculateMargin}
        >
          Calculate Margin
        </button>
      </div>
      {/* Display required margin */}
      {requiredMargin !== '' && (
        <div className="mt-4">
          <p className="text-lg font-semibold">
            Required Margin for {lotSize} Lot(s) on {currencyPair} with {leverage}x Leverage: {requiredMargin} USD
          </p>
        </div>
      )}
    </div>
  );
};

export default ForexMarginCalculator;
