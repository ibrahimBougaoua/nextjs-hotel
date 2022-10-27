import Navbar from "./Navbar";
import TopMenu from "./TopMenu";
import MainMenuWrapper from "./MainMenuWrapper";
import MobileMenuMain from "./MobileMenuMain";
import Footer from "./Footer";
import BottomFooter from "./BottomFooter";

function Layout(props)
{
    return (
        <>
            <a href="javascript:" id="return-to-top"><i className="fas fa-sort-up"></i></a>
            <div className="main_wrapper">
                <TopMenu />
                <MainMenuWrapper />
                <MobileMenuMain />
            </div>
            <Navbar />
            {props.children}
            <Footer />
            <BottomFooter />
        </>
    )
}

export default Layout