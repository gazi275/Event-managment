import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <div className="max-w-[1980px] ">
           
           <Outlet></Outlet> 
        </div>
    );
};

export default Root;