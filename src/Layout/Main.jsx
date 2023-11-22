import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Share/Footer/Footer";
import NavBar from "../Share/NavBar/NavBar";


const Main = () => {
    const location = useLocation();
    console.log(location);
    const navbarAndFooter = location.pathname.includes('login') || 
    location.pathname.includes('register')
    return (
        <div>
            { navbarAndFooter || <NavBar></NavBar>}
            <Outlet></Outlet>
           {navbarAndFooter || <Footer></Footer>}
        </div>
    );
};

export default Main;