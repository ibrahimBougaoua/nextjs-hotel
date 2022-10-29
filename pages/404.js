import Header from "../components/Header"
import SBanner from "../components/SBanner"
import PageIsntAvailable from "../components/PageIsntAvailable"
import Newsletter from "../components/Newsletter"

function Error()
{
    return (
        <>
            <Header />
            <SBanner />
            <PageIsntAvailable />
            <Newsletter />
        </>
    )
}

export default Error