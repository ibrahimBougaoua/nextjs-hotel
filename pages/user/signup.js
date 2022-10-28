import Head from "next/head"
import Header from "../../components/Header"
import SBanner from "../../components/SBanner";
import SignupForm from "../../components/auth/SignupForm";
import Newsletter from "../../components/Newsletter";

export default function SignUp()
{
    return (
        <>
            <Head>
                <title>Sign up</title>
                <meta name="description" content="Sign up" />
            </Head>
            <Header />
            <SBanner />
            <SignupForm />
            <Newsletter />
        </>
    )
}