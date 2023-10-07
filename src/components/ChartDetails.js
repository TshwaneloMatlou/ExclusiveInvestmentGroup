import { useParams , useHistory } from "react-router-dom";
import useFetch from "../components/useFetch";

const ChartDetails = () => {
    const { id } = useParams();
    const { data: blog, error, isPending } = useFetch('http://localhost:8000/blogs/' + id);
    const history = useHistory();

    const handleClick = () => {
        fetch('http://localhost:8000/blogs/' + blog.id, {
            method: 'DELETE'
        }).then(() => {
            history.push('./pages/Home');
        });
    }

    return (
        <div className="w-full sm:w-[80%] md:w-[60%] lg:w-[50%] xl:w-[40%] m-auto mt-5 text-center p-5 border-2 border-green-500">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blog &&
                <article className="shadow-lg p-5">
                    <h2 className="text-2xl font-bold">{blog.title}</h2>
                    <p className="text-gray-600">Symbol: {blog.author}</p>
                    <div className="mt-5">{blog.body}</div>
                    <button onClick={handleClick} className="bg-red-500 text-white p-2 mt-5 rounded-md">Delete</button>
                </article>
            }
        </div>
    );
}

export default ChartDetails;
