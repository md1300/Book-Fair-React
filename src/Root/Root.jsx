import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";



const Root = () => {
    return (
        <div className="bg-slate-50 m-4 ">
            <Navbar></Navbar>
            
            <Outlet ></Outlet>
             
            <Footer ></Footer>           
        </div>
    );
};

export default Root;