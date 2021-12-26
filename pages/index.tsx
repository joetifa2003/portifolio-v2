import About from "components/Sections/About";
import Contact from "components/Sections/Contact";
import Github from "components/Sections/Github";
import Hero from "components/Sections/Hero";
import Work from "components/Sections/Work";
import Navbar from "components/UI/Navbar";
import { GetStaticProps } from "next";
import { NextSeo } from "next-seo";
import { Element } from "react-scroll";

export const getStaticProps: GetStaticProps = async () => {
    const res = await fetch(
        "https://api.github.com/users/joetifa2003/repos?sort=updated&per_page=4"
    );

    return {
        props: {
            githubData: await res.json(),
        },
        revalidate: 10,
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
            <div className="py-8 space-y-8">
                <Element name="about">
                    <About />
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
