import Head from "next/head"
import Header from "../../components/Header"
import SBanner from "../../components/SBanner";
import SignupForm from "../../components/auth/SignupForm";
import Newsletter from "../../components/Newsletter";

export default function SignIn()
{
    return (
        <>
            <Head>
                <title>Sign in</title>
                <meta name="description" content="Sign in" />
            </Head>
            <Header />
            <SBanner />
            <SignupForm />
            <Newsletter />
        </>
    )
}