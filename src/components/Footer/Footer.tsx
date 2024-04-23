import FooterButton from "../FooterButton/FooterButton";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footerWrapper">
          <div>
            <p>
            <a className="questions" href="" >Questions? Contact us.</a></p>
            <p><a href="">FAQ</a></p>
            <p><a href="">Cookie Preferences</a></p>
            <FooterButton title="English" width="widthLarge" list={["English","French"]}/>
            {/* <button>English</button> */}
          </div>
          <div>
            <p><a href="">Help Center</a></p>
            <p><a href="">Corporate Information</a></p>
          </div>
          <div>
            <p><a href="">Terms of Use</a></p>
          </div>
          <div>
            <p><a href="">Privacy</a></p>
          </div>
        </div>
    </>
  )
}

export default Footer
