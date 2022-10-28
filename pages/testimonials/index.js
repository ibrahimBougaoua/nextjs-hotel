import Head from "next/head"
import Header from "../../components/Header"
import SBanner from "../../components/SBanner";
import OurClientSay from "../../components/testimonials/OurClientSay";
import TestimonialsImages from "../../components/testimonials/TestimonialsImages";
import ClientSay from "../../components/testimonials/ClientSay";
import OurTestimonial from "../../components/testimonials/OurTestimonial";
import TestimonialInfo from "../../components/testimonials/TestimonialInfo";
import WhatourPatientsHaveToSay from "../../components/testimonials/WhatourPatientsHaveToSay";

export default function Testimonials()
{
    return (
        <>
            <Head>
                <title>Testimonials</title>
                <meta name="description" content="Testimonials" />
            </Head>
            <Header />
            <SBanner />
            <OurClientSay />
            <TestimonialsImages />
            <ClientSay />
            <OurTestimonial />
            <TestimonialInfo />
            <WhatourPatientsHaveToSay />
        </>
    )
}