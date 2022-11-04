import { Button } from "components/UI/Button";
import useTranslation from "next-translate/useTranslation";
import { FaArrowDown } from "react-icons/fa";
import { scroller } from "react-scroll";
import SideDiv from "./Elements/SideDiv";

function Hero() {
    const { t } = useTranslation("home");

    return (
        <section className="relative flex flex-col justify-center min-h-screen bg-gray">
            <SideDiv />
            <img
                src="/hero/images/blob2.svg"
                className="absolute bottom-0 right-0"
                alt=""
            />
            <div className="container flex flex-col items-center pt-24 space-y-8 space-y-reverse lg:space-x-8 lg:space-y-0 lg:flex-row">
                <div className="order-2 w-full mt-4 space-y-4 lg:w-8/12 lg:order-1 lg:mt-0">
                    <h2 className="font-mono text-darkCyan font-bold text-2xl md:text-3xl xl:text-5xl tracking-[0.2em]">
                        {t("hero.h-1")}
                    </h2>
                    <h1 className="text-4xl font-bold md:text-5xl xl:text-7xl">
                        {t("hero.h-2")}
                    </h1>
                    <h2 className="text-4xl font-bold md:text-5xl xl:text-6xl">
                        {t("hero.h-3")}
                    </h2>
                    <p className="text-2xl xl:text-3xl">{t("hero.p")}</p>
                    <div className="flex flex-col space-y-4 md:space-y-0 md:pt-8 md:space-x-8 md:flex-row">
                        {[
                            {
                                name: t("hero.btn-about"),
                                section: "about",
                            },
                            {
                                name: t("hero.btn-contact"),
                                section: "contact",
                            },
                        ].map(({ name, section }, i) => (
                            <Button
                                key={i}
                                className="w-full lg:w-auto"
                                onClick={() => {
                                    scroller.scrollTo(section, {
                                        smooth: true,
                                        offset: -96,
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
                <div className="order-1 w-full lg:h-full lg:w-4/12 lg:order-2">
                    <img
                        src="/hero/images/hero.svg"
                        alt=""
                        width="1024px"
                        height="1024px"
                        className="w-full h-full"
                    />
                </div>
            </div>
        </section>
    );
}

export default Hero;
