import Button from "components/UI/Button";
import Container from "components/UI/Layout/Container";
import Section from "components/UI/Layout/Section";
import { FaArrowDown } from "react-icons/fa";
import { scroller } from "react-scroll";
import SideDiv from "./Elements/SideDiv";

function Hero() {
    return (
        <Section fullScreen tw="relative bg-gray justify-center">
            <SideDiv />
            <img
                src="/hero/images/blob2.svg"
                tw="absolute bottom-0 right-0"
                alt=""
            />
            <Container tw="pt-20">
                <div tw="flex flex-col lg:flex-row lg:space-x-4 items-center">
                    <div tw="w-full lg:w-8/12 order-2 lg:order-1 mt-4 lg:mt-0">
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
                            I’m a full stack web developer from Egypt that loves
                            javascript.
                        </div>
                        <div tw="mt-8">
                            <Button
                                tw="w-full lg:w-auto"
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
                    <div tw="w-full lg:w-4/12 order-1 lg:order-2">
                        <img
                            src="/hero/images/hero.svg"
                            alt=""
                            width="1024px"
                            height="1024px"
                            tw="w-full h-full"
                        />
                    </div>
                </div>
            </Container>
        </Section>
    );
}

export default Hero;
