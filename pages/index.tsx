import About from "components/Sections/About";
import Github from "components/Sections/Github";
import Hero from "components/Sections/Hero";
import Work from "components/Sections/Work";
import Navbar from "components/UI/Navbar";
import { GetServerSideProps } from "next";
import { NextSeo } from "next-seo";
import { Element } from "react-scroll";

export const getServerSideProps: GetServerSideProps = async () => {
    const res = await fetch(
        "https://api.github.com/users/joetifa2003/repos?sort=updated&per_page=8"
    );

    return {
        props: {
            githubData: await res.json(),
        },
    };
};

const App = ({ githubData }: { githubData: any }) => {
    return (
        <>
            <NextSeo
                title="Youssef Ahmed | Full Stack web developer"
                description="Full Stack web developer from Egypt."
                openGraph={{
                    images: [{ url: "/SocialImage.png" }],
                }}
                twitter={{
                    cardType: "summary_large_image",
                }}
            />
            <Navbar />
            <Hero />
            <Element name="about-me">
                <About />
            </Element>
            <Element name="my-work">
                <Work />
            </Element>
            <Element name="github">
                <Github data={githubData} />
            </Element>
        </>
    );
};

export default App;
