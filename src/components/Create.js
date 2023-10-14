import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
  const initialDescription =
    '\n Direction: [  ], \n Stop Loss: [  ], \n Take Profit 1: [  ], \n Take Profit 2: [  ]';

  const [pair, setPair] = useState("");
  const [description, setDescription] = useState(initialDescription);
  const [date, setDate] = useState("2023-01-01T00:00");
  const [weeklyZoomIn, setWeeklyZoomIn] = useState("");
  const [weeklyZoomOut, setWeeklyZoomOut] = useState("");
  const [dailyZoomIn, setDailyZoomIn] = useState("");
  const [dailyZoomOut, setDailyZoomOut] = useState("");
  const [hours4ZoomIn, setHours4ZoomIn] = useState("");
  const [hours4ZoomOut, setHours4ZoomOut] = useState("");
  const [hour1ZoomIn, setHour1ZoomIn] = useState("");
  const [hour1ZoomOut, setHour1ZoomOut] = useState("");
  const [minutes30ZoomIn, setMinutes30ZoomIn] = useState("");
  const [minutes30ZoomOut, setMinutes30ZoomOut] = useState("");
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const chart = {
      pair,
      description,
      date,
      weekly: {
        mainImage: {
          ZoomIn: weeklyZoomIn,
          ZoomOut: weeklyZoomOut,
        },
      },
      daily: {
        mainImage: {
          ZoomIn: dailyZoomIn,
          ZoomOut: dailyZoomOut,
        },
      },
      hours4: {
        mainImage: {
          ZoomIn: hours4ZoomIn,
          ZoomOut: hours4ZoomOut,
        },
      },
      hour1: {
        mainImage: {
          ZoomIn: hour1ZoomIn,
          ZoomOut: hour1ZoomOut,
        },
      },
      minutes30: {
        mainImage: {
          ZoomIn: minutes30ZoomIn,
          ZoomOut: minutes30ZoomOut,
        },
      },
    };

    setIsPending(true);

    fetch("http://localhost:8000/charts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(chart),
    }).then(() => {
      setIsPending(false);
      history.push("/home");
    });
  };

  return (
    <div className="container mx-auto my-5">
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg"
      >
        <h2 className="text-center font-semibold text-2xl pb-4">
          Add a New Chart
        </h2>
        <div className="mb-4">
          <label className="block text-lg font-semibold mb-2">Pair:</label>
          <select
            value={pair}
            required
            onChange={(e) => setPair(e.target.value)}
            className="w-full border-2 border-blue-500 p-3 rounded shadow-md font-semibold"
          >
            <option value="DOLLAR INDEX">DOLLAR INDEX</option>
            <option value="USDCAD">USDCAD</option>
            <option value="USDCHF">USDCHF</option>
            <option value="USDJPY">USDJPY</option>
            <option value="XAUUSD">XAUUSD</option>
            <option value="EURUSD">EURUSD</option>
            <option value="GBPUSD">GBPUSD</option>
            <option value="AUDUSD">AUDUSD</option>
            <option value="NZDUSD">NZDUSD</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-lg font-semibold mb-2">Description:</label>
          <textarea
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full h-[150px] border-2 border-blue-500 rounded shadow-md font-semibold"
          ></textarea>
        </div>

        <div className="mb-4">
          <label className="block text-lg font-semibold mb-2">Date and Time</label>
          <input
            type="datetime-local"
            value={date}
            required
            onChange={(e) => setDate(e.target.value)}
            className="w-full border-2 border-blue-500 p-3 rounded shadow-md font-semibold"
          />
        </div>

        <div className="mb-4 text-center">
          <h2 className="block text-xl font-semibold">Weekly Charts</h2>
          <div className="flex flex-wrap items-center">
            <div className="w-1/2 pr-2">
              <label className="block text-md font-semibold mb-2">Zoom In:</label>
              <input
                type="file"
                value={weeklyZoomIn}
                onChange={(e) => setWeeklyZoomIn(e.target.value)}
                className="w-full border-2 border-blue-500 p-3 rounded shadow-md"
                defaultValue="NoImage.jpg" // Set a default image file
              />
            </div>
            <div className="w-1/2 pl-2">
              <label className="block text-md font-semibold mb-2">Zoom Out:</label>
              <input
                type="file"
                value={weeklyZoomOut}
                onChange={(e) => setWeeklyZoomOut(e.target.value)}
                className="w-full border-2 border-blue-500 p-3 rounded shadow-md"
                defaultValue="NoImage.jpg" // Set a default image file
              />
            </div>
          </div>
        </div>

        <div className="mb-4 text-center">
          <h2 className="block text-xl font-semibold">Daily Charts</h2>
          <div className="flex flex-wrap items-center">
            <div className="w-1/2 pr-2">
              <label className="block text-md font-semibold mb-2">Zoom In:</label>
              <input
                type="file"
                value={dailyZoomIn}
                onChange={(e) => setDailyZoomIn(e.target.value)}
                className="w-full border-2 border-blue-500 p-3 rounded shadow-md"
                defaultValue="NoImage.jpg" // Set a default image file
              />
            </div>
            <div className="w-1/2 pl-2">
              <label className="block text-md font-semibold mb-2">Zoom Out:</label>
              <input
                type="file"
                value={dailyZoomOut}
                onChange={(e) => setDailyZoomOut(e.target.value)}
                className="w-full border-2 border-blue-500 p-3 rounded shadow-md"
                defaultValue="NoImage.jpg" // Set a default image file
              />
            </div>
          </div>
        </div>

        <div className="mb-4 text-center">
          <h2 className="block text-xl font-semibold">4 Hours Charts</h2>
          <div className="flex flex-wrap items-center">
            <div className="w-1/2 pr-2">
              <label className="block text-md font-semibold mb-2">Zoom In:</label>
              <input
                type="file"
                value={hours4ZoomIn}
                onChange={(e) => setHours4ZoomIn(e.target.value)}
                className="w-full border-2 border-blue-500 p-3 rounded shadow-md"
                defaultValue="NoImage.jpg" // Set a default image file
              />
            </div>
            <div className="w-1/2 pl-2">
              <label className="block text-md font-semibold mb-2">Zoom Out:</label>
              <input
                type="file"
                value={hours4ZoomOut}
                onChange={(e) => setHours4ZoomOut(e.target.value)}
                className="w-full border-2 border-blue-500 p-3 rounded shadow-md"
                defaultValue="NoImage.jpg" // Set a default image file
              />
            </div>
          </div>
        </div>

        <div className="mb-4 text-center">
          <h2 className="block text-xl font-semibold">1 Hour Charts</h2>
          <div className="flex flex-wrap items-center">
            <div className="w-1/2 pr-2">
              <label className="block text-md font-semibold mb-2">Zoom In:</label>
              <input
                type="file"
                value={hour1ZoomIn}
                onChange={(e) => setHour1ZoomIn(e.target.value)}
                className="w-full border-2 border-blue-500 p-3 rounded shadow-md"
                defaultValue="NoImage.jpg" // Set a default image file
              />
            </div>
            <div className="w-1/2 pl-2">
              <label className="block text-md font-semibold mb-2">Zoom Out:</label>
              <input
                type="file"
                value={hour1ZoomOut}
                onChange={(e) => setHour1ZoomOut(e.target.value)}
                className="w-full border-2 border-blue-500 p-3 rounded shadow-md"
                defaultValue="NoImage.jpg" // Set a default image file
              />
            </div>
          </div>
        </div>

        <div className="mb-4 text-center">
          <h2 className="block text-xl font-semibold">30 Minutes Charts</h2>
          <div className="flex flex-wrap items-center">
            <div className="w-1/2 pr-2">
              <label className="block text-md font-semibold mb-2">Zoom In:</label>
              <input
                type="file"
                value={minutes30ZoomIn}
                onChange={(e) => setMinutes30ZoomIn(e.target.value)}
                className="w-full border-2 border-blue-500 p-3 rounded shadow-md"
                defaultValue="NoImage.jpg" // Set a default image file
              />
            </div>
            <div className="w-1/2 pl-2">
              <label className="block text-md font-semibold mb-2">Zoom Out:</label>
              <input
                type="file"
                value={minutes30ZoomOut}
                onChange={(e) => setMinutes30ZoomOut(e.target.value)}
                className="w-full border-2 border-blue-500 p-3 rounded shadow-md"
                defaultValue="NoImage.jpg" // Set a default image file
              />
            </div>
          </div>
        </div>

        {isPending && (
          <button className="w-full bg-green-500 rounded text-red-500 font-semibold py-3 hover:bg-blue-600">
            Adding New Chart
          </button>
        )}
        {!isPending && (
          <button className="w-full bg-green-500 rounded text-white font-semibold py-3 hover:bg-blue-600">
            Add New Chart
          </button>
        )}
      </form>
    </div>
  );
};

export default Create;
