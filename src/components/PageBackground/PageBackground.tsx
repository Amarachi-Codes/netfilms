import "./pagebackground.css";
import { Outlet } from "react-router-dom";

const PageBackground = () => {
  return (
    <>
        <div className="background">
                <div>
                    <Outlet />

                </div>


            </div>
    </>
  )
}

export default PageBackground
