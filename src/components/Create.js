import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
  const [pair, setPair] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('12/6/2023');
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    const chart = { pair, description, date }; 

    setIsPending(true);

    fetch('http://localhost:8000/charts', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(chart),
    }).then(() => {
      setIsPending(false);
      //history.go(-1);
      history.push('/home');
    });
  };

  return (
    <div className="container mx-auto my-5 ">
      <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-center font-semibold text-2xl pb-4">Add a New Chart</h2>
        <div className="mb-4">
          <label className="block text-lg font-semibold mb-2">Pair:</label>
          <input
            type="text"
            required
            value={pair}
            onChange={(e) => setPair(e.target.value)}
            className="w-full border-2 border-blue-500 p-3 rounded shadow-md"
          />
        </div>

        <div className="mb-4">
          <label className="block text-lg font-semibold mb-2">Decription:</label>
          <textarea
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full border-2 border-blue-500 p-3 rounded shadow-md"
          ></textarea>
        </div>

        <div className="mb-4">
          <label className="block text-lg font-semibold mb-2">Date</label>
          <select
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full border-2 border-blue-500 p-3 rounded shadow-md"
          >
            <option value="12/5/2023">12/5/2023</option>
            <option value="14/6/2023">14/6/2023</option>
          </select>
        </div>

        { !isPending && <button className="w-full bg-green-500 rounded text-white font-semibold py-3">Add New Chart</button> }
        { isPending && <button className="w-full bg-green-500 rounded text-red-500 font-semibold py-3">Adding New Chart</button> }
      </form>
    </div>
  );
};

export default Create;
