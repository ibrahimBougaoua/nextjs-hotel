import Head from "next/head"
import Header from "../../components/Header"
import SBanner from "../../components/SBanner";
import Newsletter from "../../components/Newsletter";
import Blog from "../../components/blog/Blog";
import News from "../../components/blog/News";

export default function SingleBlog()
{
    return (
        <>
            <Head>
                <title>Blog</title>
                <meta name="description" content="Blog" />
            </Head>
            <Header />
            <SBanner />
            <Blog />
            <News />
            <Newsletter />
        </>
    )
}