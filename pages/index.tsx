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
import api from "util/api";

export const getStaticProps: GetStaticProps = async () => {
    const [{ data: github }, { data: about }, { data: projects }] =
        await Promise.all([
            axios.get(
                "https://api.github.com/users/joetifa2003/repos?sort=updated&per_page=4"
            ),
            api.get("/about-me?populate=*"),
            api.get("/projects?populate=*"),
        ]);

    // optimize image loading
    for (const project of projects.data) {
        const { base64, img } = await getPlaiceholder(
            project.attributes.image.data.attributes.url,
            {
                size: 64,
            }
        );

        project.attributes.imageProps = {
            ...img,
            blurDataURL: base64,
            placeholder: "blur",
        };
    }

    return {
        props: {
            github,
            about: about.data.attributes,
            projects: projects.data.map((project: any) => project.attributes),
        },
        revalidate: 60,
    };
};

const App = ({ github, about, projects }: any) => {
    return (
        <div>
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
            <Hero />
            <div className="py-8 space-y-8">
                <Element name="about">
                    <About data={about} />
                </Element>
                <Element name="work">
                    <Work projects={projects} />
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
