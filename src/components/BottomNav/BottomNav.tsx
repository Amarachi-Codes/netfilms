import { NavLink } from "react-router-dom";
import "./BottomNav.css";
import { IoMdHome } from "react-icons/io";
import { GrNewWindow } from "react-icons/gr";

const BottomNav = () => {
    return (
        <>
            <div className="bottomNav">
                <div className="bottomContainer">
                    <NavLink className="bottomNavTitle" to={"/"}>
                        <div>
                            <IoMdHome className="bottomIcon" />
                            <p>Home</p>
                        </div>
                    </NavLink>
                    <NavLink className="bottomNavTitle" to={""}>
                        <div>
                            <GrNewWindow className="bottomIcon" />
                            <p>New & Hot</p>
                        </div>
                    </NavLink>
                    <NavLink className="bottomNavTitle" to={""}>
                    <div>
                        <img className="profile-icon" src="https://occ-0-5543-299.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABXYofKdCJceEP7pdxcEZ9wt80GsxEyXIbnG_QM8znksNz3JexvRbDLr0_AcNKr2SJtT-MLr1eCOA-e7xlDHsx4Jmmsi5HL8.png?r=1d4" alt=""></img>
                        <p>My Netflix</p>
                    </div>
                    </NavLink>

                </div>
            </div>
        </>
    )
}

export default BottomNav
