import Burgerino from "assets/images/Burgerino.png";
import Furniture from "assets/images/Furniture.png";
import Header from "components/UI/Header";
import ProjectCard from "./Elements/ProjectCard";

const projects = [
    {
        name: "Burgerino",
        image: Burgerino,
        description: "Simple website for a burger restaurant.",
        url: "https://burger-ruddy.vercel.app/",
        technologies: ["Figma", "Next js", "Emotion css"],
    },
    {
        name: "Furniture",
        image: Furniture,
        description: "A furniture company website.",
        url: "https://furniture-ten.vercel.app/",
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
