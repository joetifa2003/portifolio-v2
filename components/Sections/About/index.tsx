import Header from "components/UI/Header";
import Section from "components/UI/Layout/Section";

function About() {
    return (
        <Section tw="relative">
            <img
                src="/about/images/blob1.svg"
                alt=""
                tw="absolute bottom-0 right-0 w-[150px] sm:w-auto"
            />
            <div tw="container">
                <Header>About me</Header>
                <p tw="text-justify text-xl lg:text-3xl">
                    Hello! My name is Youssef and I enjoy creating things that
                    live on the internet. My interest in web development started
                    back in 2015 when I decided to convert an android app to a
                    website — turns out hacking together a simple website taught
                    me a lot about HTML, CSS & JavaScript!
                    <br />
                    <br />
                    Fast-forward to today, and i have learned alot about web
                    devolpment and I have worked on alot of side projects!
                </p>
                <div tw="mt-8 text-xl lg:text-2xl">
                    Here are a few technologies I've been working with recently
                </div>
                <div tw="mt-4">
                    {["React", "Vue", "JavaScipt(ES6+)"].map((item) => (
                        <div key={item} tw="text-xl">
                            - {item}
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
}

export default About;
