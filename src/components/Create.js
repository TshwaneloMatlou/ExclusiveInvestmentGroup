import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {

    const [title, setTitle] = useState('');           
    const [body, setBody] = useState('');   
    const [author, setAuthor] = useState('Mario');  
    const [isPending, SetIsPending] = useState(false);
    const history = useHistory();
    
    const handleSubmit = (e) => {
        const blog = {title, body, author}

        SetIsPending(true);

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify (blog)
        }).then(() => {
            SetIsPending(false);
            //history.go(-1);
            history.push('/home');
        })
    }

    return ( 
        <div>
            <h2 className="text-center font-semibold pb-2">Add a New Chart</h2>
            <form onSubmit={handleSubmit}  className="grid m-3 shadow-2xl shadow-black">
             
                <label className="text-center font-extrabold">Chart Title: </label>
                <input 
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="border-2 border-blue-500 p-3 m-[5px] rounded shadow-2xl shadow-gray-500 "
                />

                <label className="text-center font-extrabold">Chart body: </label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    className="border-2  border-blue-500 p-3 m-[5px] rounded shadow-2xl shadow-gray-500"
                ></textarea>

                <label className="text-center font-extrabold">Chart Symbol/Pair: </label>
                <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    className="border-2  border-blue-500 p-3 m-[5px] rounded shadow-2xl shadow-gray-500"
                >
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                    
                </select>

                { !isPending && <button className="bg-green-500 rounded m-5 p-5 text-white font-extrabold">... Add New Chart ...</button> }
                { isPending && <button className="bg-green-500 rounded m-5 p-5 text-red-500 font-extrabold">... Adding New Chart ...</button> }

            </form>
        </div>
     );
}
 
export default Create;