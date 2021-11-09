import Button from "components/UI/Button";
import Header from "components/UI/Header";
import Container from "components/UI/Layout/Container";
import Section from "components/UI/Layout/Section";
import { AiOutlineStar, AiOutlineFork } from "react-icons/ai";

const Github = ({ data }: { data: any }) => {
    console.log(data);

    return (
        <Section fullScreen>
            <Container>
                <div tw="flex justify-between items-center">
                    <Header>Github repos</Header>
                    <Button
                        target="_blank"
                        rel="noopener noreferrer"
                        href={"https://github.com/joetifa2003"}
                        tw="hidden lg:flex"
                    >
                        My github
                    </Button>
                </div>
                <div tw="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {data.map((repo: any) => (
                        <a
                            key={repo.id}
                            tw="bg-lightGray p-4 hover:scale-[1.02] transform transition-all duration-500 cursor-pointer border-2 border-transparent hover:border-darkCyan"
                            href={repo.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <div tw="text-4xl font-bold">
                                <span tw="text-darkCyan">{"<"}</span>
                                {repo.name}
                                <span tw="text-darkCyan">{">"}</span>
                            </div>
                            <div tw="flex space-x-4 mt-4">
                                {[
                                    {
                                        name: "stargazers_count",
                                        icon: <AiOutlineStar />,
                                    },
                                    {
                                        name: "forks_count",
                                        icon: <AiOutlineFork />,
                                    },
                                ].map(({ name, icon }) => (
                                    <div
                                        tw="flex items-center text-xl"
                                        key={name}
                                    >
                                        {repo[name]} {icon}
                                    </div>
                                ))}
                            </div>
                        </a>
                    ))}
                    <Button
                        target="_blank"
                        rel="noopener noreferrer"
                        href={"https://github.com/joetifa2003"}
                        tw="flex lg:hidden"
                    >
                        My github
                    </Button>
                </div>
            </Container>
        </Section>
    );
};

export default Github;
