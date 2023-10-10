import { useParams , useHistory } from "react-router-dom";
import useFetch from "../components/useFetch";

const ChartDetails = () => {
    const { id } = useParams();
    const { data: chart, error, isPending } = useFetch('http://localhost:8000/charts/' + id);
    const history = useHistory();

    const handleClick = () => {
        fetch('http://localhost:8000/charts/' + chart.id, {
            method: 'DELETE'
        }).then(() => {
            history.push('./pages/Home');
        });
    }

    return (
        <div className="w-full sm:w-[80%] md:w-[60%] lg:w-[50%] xl:w-[40%] m-auto mt-5 text-center p-5 border-2 border-green-500">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {chart &&
                <article className="shadow-lg p-5">
                    <h2 className="text-2xl font-bold">{chart.pair}</h2>
                    <div className="m-5">{chart.description}</div>
                    <p className="text-gray-600">Date: {chart.date}</p>
                    <button onClick={handleClick} className="bg-red-500 text-white p-2 mt-5 rounded-md">Delete</button>
                </article>
            }
        </div>
    );
}

export default ChartDetails; 
