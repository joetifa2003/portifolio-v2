import SeerReal from "assets/images/SeerReal.png";
import Wind from "assets/images/Wind.png";
import Header from "components/UI/Header";
import ProjectCard from "./Elements/ProjectCard";

const projects = [
    {
        name: "WindLang",
        image: Wind,
        description:
            "A simple programming language built with golang 🍃.\n\nThe website and playground for my programming language Wind.",
        url: "https://windlang.vercel.app/",
        technologies: ["Golang", "Next js", "Tailwindcss"],
    },
    {
        name: "Seer Real (WIP)",
        image: SeerReal,
        description:
            "A new generation of data services company, specializing in data consulting.",
        url: "https://www.seerreal.com/",
        technologies: ["Figma", "Next js", "Tailwind css"],
    },
];

function Work() {
    return (
        <section className="container">
            <Header>Some of my work</Header>
            <div className="space-y-8">
                {projects.map((project: any) => (
                    <ProjectCard
                        key={project.name}
                        name={project.name}
                        image={project.image}
                        description={project.description}
                        technologies={project.technologies.map(
                            (tech: any) => tech
                        )}
                        url={project.url}
                    />
                ))}
            </div>
        </section>
    );
}

export default Work;
