import axios from "axios";
import About from "components/Sections/About";
import Contact from "components/Sections/Contact";
import Github from "components/Sections/Github";
import Hero from "components/Sections/Hero";
import Work from "components/Sections/Work";
import Navbar from "components/UI/Navbar";
import { GetStaticProps } from "next";
import { NextSeo } from "next-seo";
import { Element } from "react-scroll";
import api from "util/api";

export const getStaticProps: GetStaticProps = async () => {
    const [githubResponse, about] = await Promise.all([
        axios.get(
            "https://api.github.com/users/joetifa2003/repos?sort=updated&per_page=4"
        ),
        api.get("/about-me"),
    ]);

    return {
        props: {
            githubData: githubResponse.data,
            about: about.data,
        },
        revalidate: 60,
    };
};

const App = ({ githubData, about }: any) => {
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
            <div className="py-8 space-y-8">
                <Element name="about">
                    <About data={about} />
                </Element>
                <Element name="work">
                    <Work />
                </Element>
                <Element name="github">
                    <Github data={githubData} />
                </Element>
                <Element name="contact">
                    <Contact />
                </Element>
            </div>
        </>
    );
};

export default App;
