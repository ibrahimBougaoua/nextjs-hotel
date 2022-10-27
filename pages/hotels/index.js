import Head from "next/head"
import Link from "next/link";

export default function Hotels(props)
{
    return (
        <div>
            <Head>
                <title>Hotels</title>
                <meta name="description" content="Hotels" />
            </Head>
            {props.hotles.map(hotel => (
                <div>
                    <Link href={`/hotels/${hotel.id}`} key={hotel.id}>
                        {hotel.title}
                    </Link>
                </div>
            ))}
            Hotels
        </div>
    )
}

/*
export async function getStaticPaths()
{
    const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10");
    const data = await res.json();

    const paths = data.map(d => {
        return {
            params : {
                id : `${d.id}`
            }
        }
    })
    return {
        paths : paths,
        fallback : false,
    }
}
*/

export async function getStaticProps()
{
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();

    return {
        props : {
            hotles : data
        }
    }
}