import Button from "components/UI/Button";
import Chips from "components/UI/Chips";
import Image from "next/image";
import tw from "tailwind-styled-components";

const CardBody = tw.div`
    p-4 
    xl:p-12 
    bg-lightGray
    shadow-lg
`;

function ProjectCard({
    title,
    description,
    technologies,
    imageUrl,
    link,
    className,
}: {
    title: string;
    description: string;
    technologies: string[];
    imageUrl: string;
    link: string;
    className?: string;
}) {
    return (
        <div className={`flex flex-col lg:flex-row ${className}`}>
            <div className="flex lg:w-6/12">
                {imageUrl ? (
                    <Image
                        src={imageUrl}
                        width={1920}
                        height={1080}
                        objectFit="cover"
                        alt=""
                    />
                ) : (
                    <div className="w-full h-full bg-[#a1a1a1]"></div>
                )}
            </div>
            <CardBody className="flex flex-col justify-center w-full lg:w-6/12">
                <div className="text-3xl font-bold xl:text-6xl">
                    <span className="text-darkCyan">{"<"}</span>
                    {title}
                    <span className="text-darkCyan">{">"}</span>
                </div>
                <p className="mt-8 text-base xl:text-2xl">{description}</p>

                <div className="mt-8 mb-2 text-base">Technologies I used</div>
                <Chips items={technologies} />

                <div className="pt-8 mt-auto">
                    <Button
                        className="w-full lg:w-auto"
                        target="_blank"
                        rel="noopener noreferrer"
                        href={link}
                    >
                        Go to website
                    </Button>
                </div>
            </CardBody>
        </div>
    );
}

export default ProjectCard;
