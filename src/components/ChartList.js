import { Link } from "react-router-dom";

const ChartList = ({ charts, pair }) => {
  return (
    <div className="p-4 md:p-6 lg:p-8">
      <h2 className="text-center font-semibold">{pair}</h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {charts.map((chart) => (
          <div
            className="p-4 border-2 shadow-md shadow-green-500 hover:shadow-2xl hover:shadow-blue-500 rounded-lg"
            key={chart.id}
          >
            <Link to={`/charts/${chart.id}`} className="block">
              <h1 className="text-red-500 text-center italic font-bold text-lg mb-5 underline">[{chart.id}] - {chart.pair}</h1>
              <p className="shadow-xl shadow-blue-200 font-semibold whitespace-pre-line mb-5 p-2">Trade: {chart.description}</p>
              <p className="bg-blue-200 font-semibold mb-5 p-2">Date: {chart.date}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChartList; 
