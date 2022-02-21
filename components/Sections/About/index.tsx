import Chips from "components/UI/Chips";
import Header from "components/UI/Header";
import useTranslation from "next-translate/useTranslation";

const technologies = [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Vue",
    "Tailwind css",
    "Express",
    "Nest js",
    "Prisma orm",
    "Graphql",
    "Golang",
    "Rust",
    "Python",
    "Dart/Flutter",
    "Postgresql",
    "MongoDB",
    "Firebase",
];

function About() {
    const { t } = useTranslation("home");

    return (
        <section className="container">
            <Header>About me</Header>
            <p className="text-xl text-justify whitespace-pre-wrap lg:text-3xl">
                {t("about.p-1")}
            </p>
            <p className="mt-8 text-xl lg:text-2xl">{t("about.p-2")}</p>
            <div className="mt-4">
                <Chips
                    items={technologies.map(
                        (technologies: any) => technologies
                    )}
                />
            </div>
        </section>
    );
}

export default About;
