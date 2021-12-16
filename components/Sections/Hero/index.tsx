import { Button } from "components/UI/Button";
import Section from "components/UI/Layout/Section";
import { FaArrowDown } from "react-icons/fa";
import { scroller } from "react-scroll";
import SideDiv from "./Elements/SideDiv";

function Hero() {
    return (
        <Section $fullScreen className="relative justify-center bg-gray">
            <SideDiv />
            <img
                src="/hero/images/blob2.svg"
                className="absolute bottom-0 right-0"
                alt=""
            />
            <div className="container pt-20">
                <div className="flex flex-col items-center lg:flex-row lg:space-x-8">
                    <div className="order-2 w-full mt-4 space-y-4 lg:w-8/12 lg:order-1 lg:mt-0">
                        <div className="font-mono text-darkCyan font-bold text-2xl md:text-3xl xl:text-5xl tracking-[0.2em]">
                            Hi, my name is
                        </div>
                        <div className="text-4xl font-bold md:text-5xl xl:text-7xl">
                            Youssef Ahmed
                        </div>
                        <div className="text-4xl font-bold md:text-5xl xl:text-6xl">
                            I build things for the web.
                        </div>
                        <div className="text-2xl xl:text-3xl">
                            I’m a full stack web developer from Egypt that loves
                            javascript.
                        </div>
                        <div className="flex flex-col space-y-4 md:space-y-0 md:pt-8 md:space-x-8 md:flex-row">
                            {[
                                {
                                    name: "About me",
                                    section: "about",
                                },
                                {
                                    name: "Contact me",
                                    section: "contact",
                                },
                            ].map(({ name, section }, i) => (
                                <Button
                                    key={i}
                                    className="w-full lg:w-auto"
                                    onClick={() => {
                                        scroller.scrollTo(section, {
                                            smooth: true,
                                        });
                                    }}
                                >
                                    <div>{name}</div>{" "}
                                    <FaArrowDown
                                        size="16px"
                                        className="animate-pulse"
                                    />
                                </Button>
                            ))}
                        </div>
                    </div>
                    <div className="order-1 w-full lg:w-4/12 lg:order-2">
                        <img
                            src="/hero/images/hero.svg"
                            alt=""
                            width="1024px"
                            height="1024px"
                            className="w-full h-full"
                        />
                    </div>
                </div>
            </div>
        </Section>
    );
}

export default Hero;
