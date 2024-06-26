import "./Hero.css";
import top10 from "../../assets/top10.svg";
import { FaPlay } from "react-icons/fa6";
import { LuInfo } from "react-icons/lu";
import { IoVolumeHighOutline } from "react-icons/io5";

interface IHero {
    caption: string;
    age: string;
}

const Hero = ({ caption, age }: IHero) => {
    return (
        <>
            <div className="hero-wrapper">
                <div className="atlas-wrapper">
                    <img alt="Atlas" className="atlas-img" src="https://occ-0-5543-299.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABRI8j5rmHo4qJ1VJvg6AdFB26WAmXjvNIVv3fVMiYoAkyYLMNA6YYftiyAiMZ4Oj3sBE8uAmWTXFn53PIH4EWKdYDqqFq-I9GZMVutGYOd60IqsuWkyB9ZvSdaHBOqm0WauNUfUyt5f5oY4QBKPFHe9F49_fbuiDuQQG5-TlutjFUBVzNNScNw.webp?r=080" title="Atlas"></img>
                </div>
                <div className="titlewrapper">
                    <img src={top10} alt="" />
                    <h3>#1 in Movies Today</h3>
                </div>
                <div className="movieDescription">
                    {caption}
                </div>
            </div>
            <div className="playContent">
                <div className="buttonContainer">
                    <div className="playWrapper">
                        <FaPlay />
                        <button className="play">Play</button>
                    </div>
                    <div className="infoWrapper">
                        <LuInfo color="#fff" />
                        <button className="info">More Info</button>
                    </div>

                </div>
                <div className="rating">
                    <div className="volume">
                        <IoVolumeHighOutline color="#fff" />
                    </div>
                    <button className="ageRating">{age}</button>

                </div>
            </div>
        </>
    )
}

export default Hero
