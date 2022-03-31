import axios from "axios";
import About from "components/Sections/About";
import Contact from "components/Sections/Contact";
import Github from "components/Sections/Github";
import Hero from "components/Sections/Hero";
import Work from "components/Sections/Work";
import { GetStaticProps } from "next";
import { NextSeo } from "next-seo";
import { getPlaiceholder } from "plaiceholder";
import { Element } from "react-scroll";

export const getStaticProps: GetStaticProps = async () => {
    const github = (
        await axios.get(
            "https://gh-pinned-repos.egoist.sh/?username=joetifa2003"
        )
    ).data;

    for (const repo of github) {
        const { base64, img } = await getPlaiceholder(repo.image);

        repo.imageProps = {
            ...img,
            blurDataURL: base64,
        };
    }

    return {
        props: {
            github,
        },
        revalidate: 60,
    };
};

const App = ({ github }: any) => {
    return (
        <div className="pb-16">
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
            <div className="space-y-8 lg:space-y-16">
                <Hero />
                <Element name="about">
                    <About />
                </Element>
                <Element name="work">
                    <Work />
                </Element>
                <Element name="github">
                    <Github data={github} />
                </Element>
                <Element name="contact">
                    <Contact />
                </Element>
            </div>
        </div>
    );
};

export default App;
