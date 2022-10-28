import Head from "next/head"
import Header from "../../components/Header"
import HsBanner from "../../components/hotel/HsBanner";
import HsBlog from "../../components/hotel/HsBlog";
import HsSlider from "../../components/hotel/HsSlider";
import Newsletter from "../../components/Newsletter";

export default function Hotel(props){
    return (
        <>
            <Head>
                <title>Hotel</title>
                <meta name="description" content="Hotel" />
            </Head>
            <Header />
            <HsBanner />
            <HsBlog />
            <HsSlider />
            <Newsletter />
            <h1>{props.hotel.title}</h1>
            <p>{props.hotel.body}</p>
        </>
    )
}

export async function getServerSideProps(context)
{
    const res = await fetch("https://jsonplaceholder.typicode.com/posts/${context.params.id}")
    const data = await res.json();

    return {
        props : {
            hotel : data
        }
    }
}