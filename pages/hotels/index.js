import Head from "next/head"
import Header from "../../components/Header"
import SbGridMain from "../../components/hotel/SbGridMain";
import Newsletter from "../../components/Newsletter";

export default function Hotels()
{
    return (
        <div>
            <Head>
                <title>Hotels</title>
                <meta name="description" content="Hotels" />
            </Head>
            <Header />
            <SbGridMain />
            <Newsletter />
        </div>
    )
}