import { Outlet } from "react-router-dom";
import Navbar from "../pages/home/Navbar";


const Root = () => {
    return (
        <div className="max-w-[1980px] ">
           <Navbar></Navbar>
           <Outlet></Outlet>
           
        </div>
    );
};

export default Root;