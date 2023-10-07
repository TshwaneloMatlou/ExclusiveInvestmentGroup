import React, { useState, useEffect } from 'react';

const ForexExchangeRate = () => {
  const [forexPair, setForexPair] = useState('EURUSD'); // Default Forex pair
  const [exchangeRate, setExchangeRate] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchExchangeRate = async () => {
      setLoading(true);
      try {
        // Replace 'YOUR_API_KEY' with your actual API key
        const apiKey = 'ZT16LS9K385JA90F';
        const response = await fetch(
          `https://api.apilayer.com/exchangerates_data/${forexPair}`,
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${apiKey}`,
            },
          }
        );

        if (response.ok) {
          const data = await response.json();
          setExchangeRate(data.exchangeRate);
        } else {
          console.error('Failed to fetch exchange rate.');
        }
      } catch (error) {
        console.error('Error fetching exchange rate:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchExchangeRate();
  }, [forexPair]);

  return (
    <div className="max-w-md mx-auto mt-4 p-4 border border-gray-300 rounded shadow-md">
      <h2 className="text-xl font-semibold mb-4">Forex Exchange Rate</h2>
      <div className="mb-4">
        <label htmlFor="forexPair">Forex Pair</label>
        <div className="flex items-center">
          <input
            type="text"
            id="forexPair"
            value={forexPair}
            onChange={(e) => setForexPair(e.target.value)}
            className="w-full border rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
      </div>
      {loading && <p>Loading...</p>}
      {exchangeRate !== null && (
        <div className="mt-4">
          <p className="text-lg font-semibold">
            Exchange Rate ({forexPair}): {exchangeRate}
          </p>
        </div>
      )}
    </div>
  );
};

export default ForexExchangeRate;
