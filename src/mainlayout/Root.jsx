import { Outlet } from "react-router-dom";
import Navbar from "../pages/home/Navbar";
import { useEffect } from "react";
import { initFlowbite } from "flowbite";
import { Toaster } from "react-hot-toast";



const Root = () => {
    useEffect(() => {
        initFlowbite();
    })
    return (
        <div className="max-w-[1980px] ">
           <Navbar></Navbar>
           <Outlet></Outlet>
          <Toaster></Toaster>
           
        </div>
    );
};

export default Root;