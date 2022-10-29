import Head from "next/head"
import Header from "../../components/Header"
import SBanner from "../../components/SBanner";
import OurTeamMembers from "../../components/team/OurTeamMembers";
import Members from "../../components/team/Members";
import OurTeam from "../../components/team/OurTeam";
import OurTeamSecFour from "../../components/team/OurTeamSecFour";
import OurTeamSecFive from "../../components/team/OurTeamSecFive";

export default function Team()
{
    return (
        <>
            <Head>
                <title>Team</title>
                <meta name="description" content="Team" />
            </Head>
            <Header />
            <SBanner />
            <OurTeamMembers />
            <Members />
            <OurTeam />
            <OurTeamSecFour />
            <OurTeamSecFive />
        </>
    )
}