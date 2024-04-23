import Footer from "../../components/Footer/Footer";
import "./HomePage.css";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const HomePage = () => {
    return (
        <>
            <div className="homeConatainer">
                <div className="homeWrapper">

                    {/* <div> */}
                        <div className="header">
                            <h1 className="logo">Netflix</h1>
                            <div>
                            <button>Signin</button>
                            </div>
                        </div>
                        <div className="centerBody">
                            <h1 className="heading">Unlimited movies, TV shows, and more</h1>
                            <p className="watch">Watch anywhere. Cancel anytime.</p>
                            <h3 className="ready">Ready to watch? Enter your email to create or restart your membership</h3>
                            <div className="centerDown">
                                <div className="mail">
                                    <label htmlFor="">Email address</label>
                                    <input type="email" name="" id="" />
                                </div>
                                <div className="getStartedBtn">
                                    <button>Get Started </button>
                                    <MdOutlineKeyboardArrowRight />
                                </div>
                            </div>
                        </div>
                    {/* </div> */}

                    </div>
            </div>

                    <div>
                        <div>
                            <h2>Enjoy on your TV</h2>
                            <h5>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</h5>
                        </div>
                        <div>
                            <div>
                                <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" alt="" />
                                <div>
                                    <video src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v" autoPlay playsInline muted loop></video>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" alt="" />
                        <div>
                            <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png" alt="" />
                            <div>
                                <h3>Stranger Things</h3>
                                <p><a href="">Downloading</a></p>
                            </div>
                            <div className="loading">

                            </div>
                        </div>
                        <div>
                            <h2>Download your shows to watch offline</h2>
                            <p>Save your favorites easily and always have something to watch.</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h2>Watch everywhere</h2>
                            <p>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
                        </div>
                    </div>

                    <div>
                        <div>
                            <img src="https://occ-0-5544-778.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABejKYujIIDQciqmGJJ8BtXkYKKTi5jiqexltvN1YmvXYIfX8B9CYwooUSIzOKneblRFthZAFsYLMgKMyNfeHwk16DmEkpIIcb6A3.png?r=f55" alt="" />
                        </div>
                        <div>
                            <h2>Create profiles for kids</h2>
                            <p>Send kids on adventures with their favorite characters in a space made just for them—free with your membership.</p>
                        </div>
                    </div>
                    <div>
                        <h2>Frequently Asked Questions</h2>
                    </div>
                    <Footer />
             
        </>
    )
}

export default HomePage
