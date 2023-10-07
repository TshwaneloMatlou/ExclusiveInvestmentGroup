import { Link } from "react-router-dom";

const ChartList = ({ blogs, title }) => {
  return (
    <div className="p-4 md:p-6 lg:p-8">
      <h2 className="text-center font-semibold">{title}</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog) => (
          <div
            className="p-4 border-2 shadow-md shadow-green-800 hover:shadow-2xl hover:shadow-purple-800 rounded-lg"
            key={blog.id}
          >
            <Link to={`/blogs/${blog.id}`} className="block">
              <h1 className="text-red-500 text-center italic font-bold text-lg">[{blog.id}] - {blog.title}</h1>
              <p className="font-semibold m-2">Image: {blog.body}</p>
              <p className="font-semibold">Symbol: {blog.author}</p>
              <p className="font-semibold m-2">Timeframe:</p>
              <p className="font-semibold m-2">Date:</p>
              <p className="font-semibold m-2">Date:</p>

            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChartList;
