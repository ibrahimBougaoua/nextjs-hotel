import Head from 'next/head';
import TopMenu from "./TopMenu";
import MainMenuNavbar from "./MainMenuNavbar";
import MobileMenuMain from "./MobileMenuMain";
import styles from '../styles/Navbar.module.css';

function Header()
{
    return (
        <>
            <div className="main_wrapper">
                <TopMenu />
                <div className="main_menu_wrapper">
                    <MainMenuNavbar />
                </div>
                <MobileMenuMain />
            </div>
        </>
    )
}

export default Header