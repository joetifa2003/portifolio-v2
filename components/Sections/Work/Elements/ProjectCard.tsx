import Button from "components/UI/Button";
import Chips from "components/UI/Chips";
import Image from "next/image";
import tw, { styled } from "twin.macro";

const CardBody = styled.div`
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    ${tw`p-4 xl:p-12 bg-lightGray`}
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
        <div tw="flex flex-col lg:flex-row" className={className}>
            <div tw="flex lg:w-6/12">
                {imageUrl ? (
                    <Image
                        src={imageUrl}
                        width={1920}
                        height={1080}
                        objectFit="cover"
                        alt=""
                    />
                ) : (
                    <div tw="w-full h-full bg-[#a1a1a1]"></div>
                )}
            </div>
            <CardBody tw="w-full lg:w-6/12">
                <div tw="font-bold text-3xl xl:text-6xl">
                    <span tw="text-darkCyan">{"<"}</span>
                    {title}
                    <span tw="text-darkCyan">{">"}</span>
                </div>
                <p tw="text-base xl:text-2xl mt-8">{description}</p>

                <div tw="mt-8 text-base mb-2">Technologies I used</div>
                <Chips items={technologies} />

                <div tw="mt-auto pt-8">
                    <Button
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
