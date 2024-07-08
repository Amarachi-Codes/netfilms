import Footer from "../../components/Footer/Footer";
import "./SignIn.css";
import netflixlogo from "../../assets/NetflixLogo.svg";

const SignIn = () => {
  return (
    <>
      <div className="SignContainer">
        <div>
          <img className="netflixLogo" src={netflixlogo} alt="" />
          {/* <h1 className="logo">Netflix</h1> */}

        </div>
        <div className="signinWrapper">
          <div className="signIn">
            <h2>Sign In</h2>

            <form action="">
              <input type="text" placeholder="Email or phone number" />
              <input type="password" placeholder="Password" />
              <button className="btnWrapper red">Sign In</button>
              <p className="or">OR</p>
              <button className="btnWrapper ash">Use a Sign-In Code</button>
              <div>
                <p>Forgot password?</p>
              </div>
            </form>
            <div className="bottomCheckbox">
              <div className="checkboxWrapper">
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Remember me</label>
              </div>
              <div className="new">
                <p>New to Netflix? </p>
                <p className="signup">Sign up now.</p>
              </div>
              <div className="protected">
                <p>This page is protected by Google reCAPTCHA to ensure you are
                  not a bot. <button><a href="">Learn more.</a></button>
                </p>
              </div>
            </div>
          </div>
          
        </div>
        <Footer />
      </div>
    </>
  )
}

export default SignIn
