import Header from "./Header";
import Footer from "./Footer";
import BottomFooter from "./BottomFooter";

function Layout(props)
{
    return (
        <>
            <a href="javascript:" id="return-to-top"><i className="fas fa-sort-up"></i></a>
            <Header />
            {props.children}
            <Footer />
            <BottomFooter />
        </>
    )
}

export default Layout