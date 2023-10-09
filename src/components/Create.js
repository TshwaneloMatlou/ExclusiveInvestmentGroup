import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('Mario');
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    const blog = { title, body, author };

    setIsPending(true);

    fetch('http://localhost:8000/blogs', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
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
          <label className="block text-lg font-semibold mb-2">Chart Title:</label>
          <input
            type="text"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border-2 border-blue-500 p-3 rounded shadow-md"
          />
        </div>

        <div className="mb-4">
          <label className="block text-lg font-semibold mb-2">Chart Body:</label>
          <textarea
            required
            value={body}
            onChange={(e) => setBody(e.target.value)}
            className="w-full border-2 border-blue-500 p-3 rounded shadow-md"
          ></textarea>
        </div>

        <div className="mb-4">
          <label className="block text-lg font-semibold mb-2">Chart Symbol/Pair:</label>
          <select
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="w-full border-2 border-blue-500 p-3 rounded shadow-md"
          >
            <option value="Mario">Mario</option>
            <option value="Yoshi">Yoshi</option>
          </select>
        </div>

        { !isPending && <button className="w-full bg-green-500 rounded text-white font-semibold py-3">Add New Chart</button> }
        { isPending && <button className="w-full bg-green-500 rounded text-red-500 font-semibold py-3">Adding New Chart</button> }
      </form>
    </div>
  );
};

export default Create;
