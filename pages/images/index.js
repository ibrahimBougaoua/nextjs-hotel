import Head from "next/head"
import Header from "../../components/Header"
import SBanner from "../../components/SBanner";
import OurFeatures from "../../components/image/OurFeatures";
import OurFeaturesList from "../../components/image/OurFeaturesList";
import AboutOurAgency from "../../components/image/AboutOurAgency";
import MobileDevices from "../../components/image/MobileDevices";
import AllMobileDevices from "../../components/image/AllMobileDevices";
import WelcomeToHTMLUikit from "../../components/image/WelcomeToHTMLUikit";
import Download from "../../components/image/Download";
import WelcomeToHTMLUikitSec from "../../components/image/WelcomeToHTMLUikitSec";
import CreativeDesignNews from "../../components/image/CreativeDesignNews";

export default function Images()
{
    return (
        <>
            <Head>
                <title>Images</title>
                <meta name="description" content="Images" />
            </Head>
            <Header />
            <SBanner />
            <OurFeatures />
            <OurFeaturesList />
            <AboutOurAgency />
            <MobileDevices />
            <AllMobileDevices />
            <WelcomeToHTMLUikit />
            <Download />
            <WelcomeToHTMLUikitSec />
            <CreativeDesignNews />
        </>
    )
}