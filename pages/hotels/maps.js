import Head from "next/head"
import Header from "../../components/Header"
import SBanner from "../../components/SBanner";
import Newsletter from "../../components/Newsletter";
import MapArea from "../../components/hotel/MapArea";
import GridMap from "../../components/hotel/GridMap";

function Maps()
{
    return (
        <>
            <Head>
                <title>Maps Hotels</title>
                <meta name="description" content="Maps Hotels" />
            </Head>
            <Header />
            <SBanner />
            <MapArea />
            <GridMap />
            <Newsletter />
        </>
    )
}

export default Maps