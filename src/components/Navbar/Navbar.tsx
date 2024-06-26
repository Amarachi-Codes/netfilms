import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import { RiArrowDownSFill } from "react-icons/ri";

const Navbar = () => {
    return (
        <>
            <div className="navWrapper">

                <div className="navLeft">
                    <div>
                        <h1>Netflix</h1>
                    </div>
                    <div>
                    <NavLink to=""> Home</NavLink>
                    <NavLink to=""> TV Shows</NavLink>
                    <NavLink to=""> Movies</NavLink>
                    <NavLink to=""> New & Popular</NavLink>
                    <NavLink to=""> My List</NavLink>
                    <NavLink to=""> Browse by Languages</NavLink>
                    </div>
                </div>
                <div className="navRight">
                    <NavLink to=""> <IoSearch /></NavLink>
                    <NavLink to=""> Kids</NavLink>
                    <NavLink to=""> <IoMdNotificationsOutline /></NavLink>
                    <img className="profile-icon" src="https://occ-0-5543-299.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABXYofKdCJceEP7pdxcEZ9wt80GsxEyXIbnG_QM8znksNz3JexvRbDLr0_AcNKr2SJtT-MLr1eCOA-e7xlDHsx4Jmmsi5HL8.png?r=1d4" alt=""></img>
                    <NavLink to=""> <RiArrowDownSFill color="#fff"/></NavLink>
                </div>



            </div>
        </>
    )
}

export default Navbar
