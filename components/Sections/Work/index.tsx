import Header from "components/UI/Header";
import Section from "components/UI/Layout/Section";
import ProjectCard from "./Elements/ProjectCard";

function Work({ projects }: any) {
    return (
        <Section className="container">
            <Header>Some of my work</Header>
            {projects.map((project: any) => (
                <ProjectCard
                    key={project.name}
                    name={project.name}
                    imageProps={project.imageProps}
                    description={project.description}
                    technologies={project.tech_used.map(
                        (tech: any) => tech.name
                    )}
                    url={project.url}
                />
            ))}
        </Section>
    );
}

export default Work;
