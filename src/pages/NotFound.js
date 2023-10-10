import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className='text-[26pt]'>404 Not Found</h1>
      <h2>Sorry</h2>
      <p>The Page Cannot be found</p>
      <Link to="/home">Back to Home Page....</Link>
    </div>
  );
};

export default NotFound;
