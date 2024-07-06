
import { useState } from "react";
import Hero from "../../components/Hero/Hero";
import Navbar from "../../components/Navbar/Navbar";
import "./Streaming.css";
import Watch from "../../components/Watch/Watch";
import Footer from "../../components/Footer/Footer";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import MobileNav from "../../components/mobileNav/MobileNav";
import MobileHero from "../../components/mobileHero/MobileHero";


const Streaming = () => {

  const [loading, setLoading] = useState(true);

  setTimeout(() => setLoading(false), 500)

  return (
    <>
      <div className="streamingContent">
        <div className="streaming-wrapper">
          <Navbar />
          <Hero age="13+" caption="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem odio sunt iusto non consequuntur, doloribus tempore iste eligendi possimus rerum!   Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem odio sunt iusto non consequuntur, doloribus tempore iste eligendi possimus rerum!" />
          
        </div>
        <MobileNav name="EthelDoris"/>
        <MobileHero/>
        {loading ? (
          <div className="loader">
            <p>Loading...</p>
            <AiOutlineLoading3Quarters />
          </div>
        ) : (
          <Watch />

        )
        }


        <div className="ustvShows">

        </div>
        <div className="continue-watching">

        </div>
        <div className="footerStreaming">
        <Footer/>
        </div>
      </div>
    </>
  )
}

export default Streaming
