import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/shared/Footer/Footer";
import NavBar from "../pages/shared/NavBar/NavBar";
import { Helmet } from "react-helmet-async";

const Main = () => {
    const location = useLocation();
    const noHeaderFooter = location.pathname.includes('login')
    return (
        <div>
            <Helmet>
                <title>SA Camp | Home </title>
            </Helmet>
            {noHeaderFooter || <NavBar></NavBar>}
            <Outlet></Outlet>
            {noHeaderFooter || <Footer></Footer>}
        </div>
    );
};

export default Main;