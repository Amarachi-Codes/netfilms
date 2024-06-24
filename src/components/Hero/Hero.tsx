import "./Hero.css";
import top10 from "../../assets/top10.svg";
import { TbReload } from "react-icons/tb";

const Hero = () => {
    return (
        <>
            <div className="hero-wrapper">
                <div className="atlas-wrapper">
                    <img alt="Atlas" className="atlas-img" src="https://occ-0-5543-299.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABRI8j5rmHo4qJ1VJvg6AdFB26WAmXjvNIVv3fVMiYoAkyYLMNA6YYftiyAiMZ4Oj3sBE8uAmWTXFn53PIH4EWKdYDqqFq-I9GZMVutGYOd60IqsuWkyB9ZvSdaHBOqm0WauNUfUyt5f5oY4QBKPFHe9F49_fbuiDuQQG5-TlutjFUBVzNNScNw.webp?r=080" title="Atlas"></img>
                </div>
                <div>
                    <img src={top10} alt="" />
                    #1 in Movies Today
                </div>
                <div>
                    caption
                </div>
                <div>
                    <div>
                        <button>Play</button>
                        <button>More Info</button>
                    </div>
                    <div>
                        <div><TbReload /></div>
                        <button>13+</button>
                        <h2>Top Searches</h2>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero
