import Head from 'next/head';
import TopMenu from "./TopMenu";
import MainMenuWrapper from "./MainMenuWrapper";
import MobileMenuMain from "./MobileMenuMain";
import styles from '../styles/Navbar.module.css';

function HomeHeader()
{
    return (
        <>
            <div className="main_wrapper">
                <TopMenu />
                <MainMenuWrapper />
                <MobileMenuMain />
            </div>
        </>
    )
}

export default HomeHeader