import "./mobileNav.css";
import { IoSearchSharp } from "react-icons/io5";
import { RiFolderSettingsLine } from "react-icons/ri";

interface Inav {
    name: string
}
const MobileNav = ({ name }: Inav) => {
  return (
    <div>
      <div className="mobileNav">
                <h4>For {name}</h4>
                <div className="iconLeft">
                    <RiFolderSettingsLine />
                    <IoSearchSharp />
                </div>

            </div>
    </div>
  )
}

export default MobileNav
