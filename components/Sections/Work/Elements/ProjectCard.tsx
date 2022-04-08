import { LinkButton } from "components/UI/Button";
import Chips from "components/UI/Chips";
import Image from "next/image";

function ProjectCard({
    name,
    image,
    description,
    technologies,
    url,
    className,
}: any) {
    return (
        <div className={`flex flex-col lg:flex-row ${className}`}>
            <div className="flex lg:w-7/12">
                <Image
                    src={image}
                    objectFit="cover"
                    alt=""
                    placeholder="blur"
                    quality={100}
                />
            </div>
            <div className="flex flex-col justify-center w-full p-4 shadow-lg lg:w-5/12 xl:p-12 bg-lightGray">
                <div className="text-3xl font-bold xl:text-6xl">
                    <span className="text-darkCyan">{"<"}</span>
                    {name}
                    <span className="text-darkCyan">{">"}</span>
                </div>
                <p className="mt-8 text-base whitespace-pre-wrap xl:text-2xl">
                    {description}
                </p>

                <div className="mt-8 mb-2 text-base">Technologies I used</div>
                <Chips items={technologies} />

                <div className="pt-8 mt-auto">
                    <LinkButton
                        className="w-full lg:w-auto"
                        target="_blank"
                        rel="noopener noreferrer"
                        href={url}
                    >
                        Go to website
                    </LinkButton>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;
