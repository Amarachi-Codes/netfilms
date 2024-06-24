
import { useState } from "react";
import Hero from "../../components/Hero/Hero";
import Navbar from "../../components/Navbar/Navbar";
import "./Streaming.css";
import Watch from "../../components/Watch/Watch";



const Streaming = () => {

  const [loading, setLoading] = useState(true);

  setTimeout(() => setLoading(false), 2000)

  return (
    <>
    <div className="streamingContent">
      <div className="streaming-wrapper">
        <Navbar />
        <Hero />
      </div>

      {loading ? (
        <div>
          <p>Loading...</p>
        </div>
      ) : (
        <Watch/>

      )
      }


      <div className="ustvShows">

      </div>
      <div className="continue-watching">

      </div>

      </div>
    </>
  )
}

export default Streaming
