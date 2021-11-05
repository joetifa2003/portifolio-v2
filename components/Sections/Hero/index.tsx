import Button from "components/UI/Button";
import Section from "components/UI/Layout/Section";
import { FaArrowDown } from "react-icons/fa";
import { scroller } from "react-scroll";
import SideDiv from "./Elements/SideDiv";

function Hero() {
    return (
        <Section fullScreen tw="relative bg-gray justify-center">
            <SideDiv />
            <img src="/hero/images/blob2.svg" tw="absolute bottom-0 right-0" />
            <div tw="container pt-20">
                <div tw="flex flex-col lg:flex-row space-x-4 items-center">
                    <div tw="w-full lg:w-8/12">
                        <div tw="font-mono text-darkCyan font-bold text-2xl md:text-3xl xl:text-5xl tracking-[0.2em]">
                            Hi, my name is
                        </div>
                        <div tw="font-bold text-4xl md:text-5xl xl:text-7xl">
                            Youssef Ahmed
                        </div>
                        <div tw="font-bold text-4xl md:text-5xl xl:text-6xl">
                            I build things for the web.
                        </div>
                        <div tw="text-2xl xl:text-3xl mt-4">
                            I’m a full stack web devolper from Egypt that loves
                            javascript.
                        </div>
                        <div tw="mt-8">
                            <Button
                                as="button"
                                onClick={() => {
                                    scroller.scrollTo("about-me", {
                                        smooth: true,
                                    });
                                }}
                            >
                                <div>About me</div> <FaArrowDown size="16px" />
                            </Button>
                        </div>
                    </div>
                    <div tw="w-full lg:w-4/12">
                        <img
                            src="/hero/images/hero.svg"
                            alt=""
                            width="100%"
                            height="100%"
                        />
                    </div>
                </div>
            </div>
        </Section>
    );
}

export default Hero;
