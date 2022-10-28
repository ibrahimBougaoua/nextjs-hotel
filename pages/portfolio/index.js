import Head from "next/head"
import Header from "../../components/Header"
import SBanner from "../../components/SBanner";
import TabOurGallery from "../../components/portfolio/TabOurGallery";
import OurGallery from "../../components/portfolio/OurGallery";
import Portfolios from "../../components/portfolio/Portfolios";
import OurWorks from "../../components/portfolio/OurWorks";
import JustOurPictures from "../../components/portfolio/JustOurPictures";
import PfOurGallery from "../../components/portfolio/PfOurGallery";

export default function Portfolio()
{
    return (
        <>
            <Head>
                <title>Portfolio</title>
                <meta name="description" content="Portfolio" />
            </Head>
            <Header />
            <SBanner />
            <OurGallery />
            <Portfolios />
            <OurWorks />
            <JustOurPictures />
            <PfOurGallery />
            <TabOurGallery />
        </>
    )
}