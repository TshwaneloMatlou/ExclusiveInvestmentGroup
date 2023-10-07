import React from 'react'
import useFetch from "../components/useFetch";
import TopBanner from '../components/TopBanner'
import TopCards from '../components/TopCards'
import BottomBanner from '../components/BottomBanner'
import Create from '../components/Create'
import ChartList from '../components/ChartList';

const Home = () => {

   /** Connect to the useFetch.js and Displaying Data */
   const {data, isPending, error} = useFetch('http://localhost:8000/blogs')

  return (
    <div>
      <TopBanner />
      <TopCards />
      <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-4 ">
                {/* Code Used to Display Error if we can't access Database   */}
                { error && <div>{ error }</div>}

                {/* Code Used to display loading while the data is being fetched  */}
                { isPending && <div>Loading</div> }

                {/* Code Used to Display Data From The Database  */}
                {data && <div className="lg:col-span-3"><ChartList blogs={data} title="All Charts!" /></div>}

                {/* Code Used to Filter Data From The Database 
                <BlogList blogs={blogs.filter((blog) => blog.author === 'mario' )} title="Mario's Blogs!" /> */}

                <div>
                    <Create />
                </div> 
                
            </div>
      <useFetch />
      
      <BottomBanner />
    </div>
  )
}

export default Home
