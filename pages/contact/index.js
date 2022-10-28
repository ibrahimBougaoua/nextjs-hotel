import Head from "next/head"
import Header from "../../components/Header"
import SBanner from "../../components/SBanner";
import Newsletter from "../../components/Newsletter";
import ServicesWrapper from "../../components/contact/ServicesWrapper";
import ContactMap from "../../components/contact/ContactMap";
import SubmitForm from "../../components/contact/SubmitForm";
import ContactMain from "../../components/contact/ContactMain";

export default function Contact()
{
    return (
        <>
            <Head>
                <title>Contact</title>
                <meta name="description" content="Contact" />
            </Head>
            <Header />
            <SBanner />
            <ServicesWrapper />
            <ContactMap />
            <SubmitForm />
            <ContactMain />
            <Newsletter />
        </>
    )
}