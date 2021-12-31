import Header from "components/UI/Header";
import ProjectCard from "./Elements/ProjectCard";

function Work({ projects }: any) {
    return (
        <section className="container">
            <Header>Some of my work</Header>
            <div className="space-y-8">
                {projects.map((project: any) => (
                    <ProjectCard
                        key={project.name}
                        name={project.name}
                        imageProps={project.imageProps}
                        description={project.description}
                        technologies={project.technologies.map(
                            (tech: any) => tech.name
                        )}
                        url={project.url}
                    />
                ))}
            </div>
        </section>
    );
}

export default Work;
