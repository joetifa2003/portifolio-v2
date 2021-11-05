import About from "components/Sections/About";
import Hero from "components/Sections/Hero";
import Work from "components/Sections/Work";
import Navbar from "components/UI/Layout/Navbar";
import { NextSeo } from "next-seo";
import { Element } from "react-scroll";

const App = () => {
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
        </>
    );
};

export default App;
