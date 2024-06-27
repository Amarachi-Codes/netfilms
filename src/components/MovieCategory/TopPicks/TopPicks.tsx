import { useEffect, useState } from "react";
import "./TopPicks.css";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { MdNavigateNext } from "react-icons/md";

 interface movies{
    id: number;
  title: string;
  poster_path: string;
  release_date: string
 }

const TopPicks = () => {
const [movies, setMovies] = useState<movies[]>([]);
    const apiKey = "ef68f6f884ee63a5d3115f1060501444";
    const videos = "https://api.themoviedb.org/3/movie/now_playing";
    
    useEffect(()=>{
        fetchData()
    },[])

    const fetchData = async()=>{
        try {
            await axios.get(`${videos}?api_key=${apiKey}`).then((response)=>{
                const result = response.data.results
                console.log(result);
                setMovies(result)
                
            })
        } catch (error) {
            console.log(`Error fetching Data:${error}`);
            
        }
    }

   

    // const videoChanger = (id:number)=>{
    //     let videoElement: React.ReactNode;
    //     switch(id){
    //         case 1022789:
    //             videoElement = <iframe className="iframe"  src="https://www.youtube.com/embed/LEjhY15eCx0?si=RV6Zo4PKGwQs4JvO" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    //             break;
    //         case 653346:
    //             videoElement = <iframe className="iframe" src="https://www.youtube.com/embed/XtFI7SNtVpY?si=bw_T5jkxNeCEUPAY" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    //         break;
    //         case 639720:
    //             videoElement = <iframe  className="iframe" src="https://www.youtube.com/embed/NISb51kjq7U?si=QIH2GjiY_QV9eozX" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    //         break;
    //         case 573435:
    //             videoElement = <iframe className="iframe" src="https://www.youtube.com/embed/hRFY_Fesa9Q?si=8RlunR7n--4OkQvU" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    //         break;
             
        
    //         default:
    //             videoElement =<p>Unable to load</p>
            
    //         }
    //     }

  return (
    <>
    <h2>Today's Top Pick for you</h2>
    <div className="table">
        
        <div className="card">
            {movies.map((items)=>(
               
                <div className="movieContainer" key={items.id}>

                    {items.poster_path &&(
                        <NavLink to={"../video"}><img src={`https://image.tmdb.org/t/p/w200${items.poster_path}`} alt={`${items.title} Poster`} /></NavLink>
                        
                    )}
                    
                    {/* <h3 className="myID">{items.id}</h3> */}
 
                    {/* <h3>{items.title}</h3> */}
                </div>
            ))}
        </div>
        <div className="scrollRight">
            <MdNavigateNext className="next" color="#fff"/>
        </div>
       
    </div>
    </>
  )
}

export default TopPicks
