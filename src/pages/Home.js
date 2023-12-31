import React from 'react'
import useFetch from "../components/useFetch";
import TopBanner from '../components/TopBanner'
import TopCards from '../components/TopCards'
import ChartList from '../components/ChartList';

const Home = () => {

   /** Connect to the useFetch.js and Displaying Data */
   const {data, isPending, error} = useFetch('http://localhost:8000/charts')

  return (
    <div>
      <TopBanner /> 
      <TopCards /> 
        <div>
            {/* Code Used to Display Error if we can't access Database   */}
            { error && <div>{ error }</div>}

            {/* Code Used to display loading while the data is being fetched  */}
            { isPending && <div>Loading</div> }

            {/* Code Used to Display Data From The Database  */}
            {data && <div className="lg:col-span-3"><ChartList charts={data} title="All Charts!" /></div>}

            {/* Code Used to Filter Data From The Database 
            <BlogList charts={charts.filter((blog) => blog.author === 'mario' )} title="Mario's charts!" /> */}
        </div>
      <useFetch />
      

    </div>
  )
}

export default Home
