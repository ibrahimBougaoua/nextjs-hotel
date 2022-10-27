export default function Hotel(props){
    return (
        <div>
            Hotel Details
            <h1>{props.hotel.title}</h1>
            <p>{props.hotel.body}</p>
        </div>
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