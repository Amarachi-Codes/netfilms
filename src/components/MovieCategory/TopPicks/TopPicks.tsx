import { useEffect, useState } from "react";
import "./TopPicks.css";
import axios from "axios";
import { NavLink } from "react-router-dom";
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

  return (
    <>
    <div className="table">
        <h2>Today's Top Pick for you</h2>
        <div className="card">
            {movies.map((items)=>(
                <div className="movieContainer" key={items.id}>

                    {items.poster_path &&(
                        <NavLink to={"../watch"}><img src={`https://image.tmdb.org/t/p/w200${items.poster_path}`} alt={`${items.title} Poster`} /></NavLink>
                        
                    )}
                    
                    <h3 className="myID">{items.id}</h3>
 
                    {/* <h3>{items.title}</h3> */}
                </div>
            ))}
        </div>
       
    </div>
    </>
  )
}

export default TopPicks
