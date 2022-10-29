import Header from "./Header";
import Footer from "./Footer";
import BottomFooter from "./BottomFooter";

function Layout(props)
{
    return (
        <>
            {props.children}
            <Footer />
            <BottomFooter />
        </>
    )
}

export default Layout