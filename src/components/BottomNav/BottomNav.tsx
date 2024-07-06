import { NavLink } from "react-router-dom";
import "./BottomNav.css";
import { IoMdHome } from "react-icons/io";
import { GrNewWindow } from "react-icons/gr";

const BottomNav = () => {
    return (
        <>
            <div className="bottomNav">
                <div className="bottomContainer">
                    <div>
                        <IoMdHome className="bottomIcon"/>
                        <NavLink to={"/"}>Home</NavLink>
                    </div>
                    <div>
                        <GrNewWindow className="bottomIcon"/>
                        <NavLink to={""}>New & Hot</NavLink>
                    </div>
                    <div>
                        <img className="profile-icon" src="https://occ-0-5543-299.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABXYofKdCJceEP7pdxcEZ9wt80GsxEyXIbnG_QM8znksNz3JexvRbDLr0_AcNKr2SJtT-MLr1eCOA-e7xlDHsx4Jmmsi5HL8.png?r=1d4" alt=""></img>
                        <NavLink to={""}>My Netflix</NavLink>
                    </div>


                </div>
            </div>
        </>
    )
}

export default BottomNav
