import { Outlet } from "react-router-dom";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

const LayoutWrapper = () => {
    return (
        <div className="layout-wrapper">
            <Header />
            <Outlet></Outlet>
            <Footer />
        </div>
    )
}

export default LayoutWrapper;