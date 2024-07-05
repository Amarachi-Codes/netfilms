import EmailInput from "../../components/Email/EmailInput";
import Footer from "../../components/Footer/Footer";
import Questions from "../../components/Questions/Questions";
import "./HomePage.css";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import NetflixLogo from "../../assets/NetflixLogo.svg";
import LangButton from "../../components/langButton/LangButton";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";





const HomePage = () => {

    return (
        <>
            <div>
                 <div className="homeConatainer">
                    <div className="homeWrapper">

                          
                        <div className="header">
                            <img className="netflixLogo" src={NetflixLogo} alt="" />

                            <div className="headerRight">
                                <LangButton title="English" list={["English", "Igbo","Yoruba", "Spanish","French"]} width="widthNormal"/>
                                <NavLink to="/page/signin"><button className="btnSignin">Signin</button></NavLink>
                            </div>
                            <GiHamburgerMenu className="displaynav"/>
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
                        

                    </div>
                </div> 

                  <div className="watch">
                    <div className="watchWapper">
                        <h2>Enjoy on your TV</h2>
                        <h5>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</h5>
                    </div>
                    
                    <div className="watchVideo">
                        <img className="watchImg" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" alt="" />
                        <div className="playVideo">
                            <video className="watchvideo" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v" autoPlay playsInline muted loop></video>

                        </div>
                    </div>
                   
                </div>  

                <div className="strangerWrapper">
                    <div className="strangerImg">
                        <img className="strangerImg" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" alt="" />
                        <div className="stranger">
                            <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png" alt="" />
                            <div>
                                <h3>Stranger Things</h3>
                                <p><a href="">Downloading</a></p>
                            </div>
                            <div className="loading">

                            </div>
                        </div>
                    </div>
                    <div className="download">
                        <h2>Download your shows to watch offline</h2>
                        <p>Save your favorites easily and always have something to watch.</p>
                    </div>
                </div>
                <div className="watchEverywhere">
                    <div className="watchContent">
                        <h1>Watch<br/>
                        everywhere</h1>
                        <p>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
                    </div>
                    <div className="content2">
                        <h2>Watch everywhere</h2>
                        <p>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
                    </div>
                </div>

                <div className="profileWrapper">
                    <div>
                        <img src="https://occ-0-5544-778.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABejKYujIIDQciqmGJJ8BtXkYKKTi5jiqexltvN1YmvXYIfX8B9CYwooUSIzOKneblRFthZAFsYLMgKMyNfeHwk16DmEkpIIcb6A3.png?r=f55" className="profileimg" alt="" />
                    </div>
                    <div className="createProfile">
                        <h2>Create profiles for kids</h2>
                        <p>Send kids on adventures with their favorite</p>
                        <p> characters in a space made just for them—free with your membership.</p>
                    </div>
                </div>
                <div className="faq">
                    <h2>Frequently Asked Questions</h2>

                    <Questions title="What is Netflix?" answer="Netflix is a streaming service that offers a wide variety of award-winning
                             TV shows, movies, anime, documentaries, and more on thousands of internet-connected
                              devices. You can watch as much as you want, whenever you want without a
                            single commercial – all for one low monthly price. There's always something 
                            new to discover and new TV shows and movies are added every week!"/>

                    <Questions title="How much does Netflix cost?" answer="Watch Netflix on your smartphone, tablet, Smart TV, 
                            laptop, or streaming device, all for one fixed monthly fee. Plans range 
                            from ₦1,600 to ₦5,000 a month. No extra costs, no contracts."/>

                    <Questions title="Where can I watch?" answer="Watch anywhere, anytime. Sign in with your Netflix account 
                    to watch instantly on the web at netflix.com from your personal computer or on any 
                    internet-connected device that offers the Netflix app, including smart TVs, 
                    smartphones, tablets, streaming media players and game consoles.
                    You can also download your favorite shows with the iOS, Android, or Windows 10 app. 
                    Use downloads to watch while you're on the go and without an internet connection. 
                    Take Netflix with you anywhere."/>

                    <Questions title="How do I cancel?" answer="Netflix is flexible. There are no pesky contracts 
                    and no commitments. You can easily cancel your account online in two clicks. 
                    There are no cancellation fees – start or stop your account anytime."/>

                    <Questions title="What can I watch on Netflix?" answer="Netflix has an extensive library of feature 
                    films, documentaries, TV shows, anime, award-winning Netflix originals, and more. 
                    Watch as much as you want, anytime you want."/>

                    <Questions title="Is Netflix good for kids?" answer="The Netflix Kids experience is included 
                    in your membership to give parents control while kids enjoy family-friendly TV shows and movies 
                    in their own space. Kids profiles come with PIN-protected parental controls that 
                    let you restrict the maturity rating of content kids can watch and block 
                    specific titles you don’t want kids to see."/>
                    <div className="center">
                        <EmailInput />
                    </div>

                </div>
                <Footer />
            </div>
        </>
    )
}

export default HomePage
