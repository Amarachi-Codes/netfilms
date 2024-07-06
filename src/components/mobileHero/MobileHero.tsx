import { FaPlay } from "react-icons/fa";
import "./mobileHero.css";
import { NavLink } from "react-router-dom";


const MobileHero = () => {
  return (
    <>
      <div className="mHContainer">
        <div className="mHImage">
          <img className="mHImageTitle" src="https://occ-0-5543-299.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABRI8j5rmHo4qJ1VJvg6AdFB26WAmXjvNIVv3fVMiYoAkyYLMNA6YYftiyAiMZ4Oj3sBE8uAmWTXFn53PIH4EWKdYDqqFq-I9GZMVutGYOd60IqsuWkyB9ZvSdaHBOqm0WauNUfUyt5f5oY4QBKPFHe9F49_fbuiDuQQG5-TlutjFUBVzNNScNw.webp?r=080" alt="" />
          <div className="genre">
            <ul>
              <li>Soapy</li>
              <li>Emotional</li>
              <li>Drama</li>
            </ul>
            <div className="buttoncontainer">
              <div className="playWrapper">
                <FaPlay />
                <NavLink to={"/play"}><button className="play">Play</button></NavLink>
              </div>
              <div className="playWrapper">
                <FaPlay />
                <NavLink to={""}><button className="play">My List</button></NavLink>
              </div>
              <button></button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MobileHero
