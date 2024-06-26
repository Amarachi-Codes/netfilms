// import "./Video.css";
import { useEffect, useState } from "react";
import "./../MovieCategory/TopPicks/TopPicks.css";
import axios from "axios";

 interface movies{
    id: number;
  title: string;
  poster_path: string;
  release_date: string
 }

const Video = () => {
    const [movies, setMovies] = useState<movies[]>([]);
    const apiKey = "ef68f6f884ee63a5d3115f1060501444";
    //  const movieId = 653346;
    // const video = "https://api.themoviedb.org/3/movie/";
    const videos = "https://api.themoviedb.org/3/movie/now_playing";
    
    useEffect(()=>{
        fetchData()
    },[])

    const fetchData = async()=>{
        try {
            await axios.get(`${videos}?api_key=${apiKey}`).then((response)=>{
                // await axios.get(`${video}${movieId}/videos?api_key=${apiKey}`).then((response)=>{
                const result = response.data.results
                console.log(result);
                setMovies(result)
                
            })
        } catch (error) {
            console.log(`Error fetching Data:${error}`);
            
        }
    }

    const videoChanger = (id:number)=>{
        let videoElement: React.ReactNode;
        switch(id){
            case 1022789:
                videoElement = <iframe className="iframe"  src="https://www.youtube.com/embed/LEjhY15eCx0?si=RV6Zo4PKGwQs4JvO" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                break;
            case 653346:
                videoElement = <iframe className="iframe" src="https://www.youtube.com/embed/XtFI7SNtVpY?si=bw_T5jkxNeCEUPAY" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            break;
            case 639720:
                videoElement = <iframe  className="iframe" src="https://www.youtube.com/embed/NISb51kjq7U?si=QIH2GjiY_QV9eozX" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            break;
            case 573435:
                videoElement = <iframe className="iframe" src="https://www.youtube.com/embed/hRFY_Fesa9Q?si=8RlunR7n--4OkQvU" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            break;
             
        
            default:
                videoElement =<p>Unable to load</p>
            
            }
            return (
                <span>
                    {videoElement}
                </span>
     
            )
        }
    

  return (
    <div>
      <div className="table">
        <h2>Today's Top Pick for you</h2>
        <div className="card">
            {movies.map((items)=>(
                <div className="movieContainer" key={items.id}>

                    <div>
                        {videoChanger(items.id)}
                    </div>
                   
 
                    
                </div>
            ))}
        </div>
       
    </div>
    </div>
  )
}

export default Video
