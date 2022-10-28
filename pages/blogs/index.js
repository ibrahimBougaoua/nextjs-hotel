import Head from "next/head"
import Header from "../../components/Header"
import SBanner from "../../components/SBanner";
import Newsletter from "../../components/Newsletter";
import BCategorie from "../../components/blog/BCategorie";

export default function Blogs()
{
    return (
        <>
            <Head>
                <title>Blogs</title>
                <meta name="description" content="Blogs" />
            </Head>
            <Header />
            <SBanner />
            <BCategorie />
            <Newsletter />
        </>
    )
}