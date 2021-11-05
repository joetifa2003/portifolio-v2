import Button from "components/UI/Button";
import tw, { styled } from "twin.macro";

const CardBody = styled.div`
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    box-sizing: border-box;

    ${tw`p-4 xl:p-12 bg-lightGray`}
`;

function ProjectCard({
    title,
    description,
    technologies,
    imageUrl,
    link,
}: {
    title: string;
    description: string;
    technologies: string[];
    imageUrl: string;
    link: string;
}) {
    return (
        <div>
            <div tw="flex flex-col lg:flex-row">
                <div tw="w-full lg:w-6/12">
                    {imageUrl ? (
                        <img
                            src={imageUrl}
                            width={1280}
                            height={720}
                            tw="w-full h-full object-cover"
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
                    <div tw="mt-8 text-base">Technologies I used</div>
                    <div>
                        {technologies.map((item) => (
                            <div key={item} tw="text-base">
                                - {item}
                            </div>
                        ))}
                    </div>
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
        </div>
    );
}

export default ProjectCard;
