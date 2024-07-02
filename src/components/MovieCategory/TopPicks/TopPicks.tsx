import { useEffect, useRef, useState } from "react";
import "./TopPicks.css";
import axios from "axios";
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import { useNavigate } from "react-router-dom";





 interface movies{
    id: number;
  title: string;
  poster_path: string;
  release_date: string
 }

const TopPicks = () => {
const [movies, setMovies] = useState<movies[]>([]);
const scrollContainerRef = useRef<HTMLDivElement>(null);  
const navigate = useNavigate() 


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


    const scrollRight = () => {
        if (scrollContainerRef.current) {
          scrollContainerRef.current.scrollBy({
            left: 800,
            behavior: "smooth",
          });
        }
      };
    

      const scrollLeft = () => {
        if (scrollContainerRef.current) {
          scrollContainerRef.current.scrollBy({
            left: -800,
            behavior: "smooth",
          });
        }
      };

       const playVideo =(id:number)=>{
             navigate(`/video/${id}`)
       }
    

  return (
    <>
    <h2>Today's Top Pick for you</h2>
    <div className="scrollableContainer">
    <div className="scrollLeft">
        
        <GrFormPrevious className="next" color="#fff" onClick={scrollLeft}/>
    </div>
    <div className="table" ref={scrollContainerRef}>
    
        
        <div className="card" >
            {movies.map((items)=>(
               
                <div className="movieContainer" key={items.id} >
                    {items.poster_path &&(
                        <div onClick={()=>playVideo(items.id)}>
                        <img src={`https://image.tmdb.org/t/p/w200${items.poster_path}`} alt={`${items.title} Poster`} />
                        </div>
                    )}
                    
                    {/* <h3 className="myID">{items.id}</h3> */}
 
                    {/* <h3 style={{color:'#fff'}}>{items.title}</h3> */}
                </div>
            ))}
            
        </div>
        <div className="scrollRight">
        
            <MdNavigateNext className="next" color="#fff" onClick={scrollRight}/>
        </div>
        
       
    </div>
    
    </div>
    </>
  )
}

export default TopPicks
