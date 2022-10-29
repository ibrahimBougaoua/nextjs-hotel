import Head from "next/head"
import Header from "../../components/Header"
import SBanner from "../../components/SBanner";
import ClientOne from "../../components/client/ClientOne";
import ClientTwo from "../../components/client/ClientTwo";
import ClientThree from "../../components/client/ClientThree";
import ClientFour from "../../components/client/ClientFour";
import ClientFive from "../../components/client/ClientFive";

export default function Clients()
{
    return (
        <>
            <Head>
                <title>Blog</title>
                <meta name="description" content="Blog" />
            </Head>
            <Header />
            <div id="main-wrapper " class="p-0">
                <SBanner />
                <ClientOne />
                <ClientTwo />
                <ClientThree />
                <ClientFour />
                <ClientFive />
            </div>
        </>
    )
}