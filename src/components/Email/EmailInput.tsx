import "./EmailInput.css";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const EmailInput = () => {
    return (
        <>
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
        </>
    )
}

export default EmailInput
