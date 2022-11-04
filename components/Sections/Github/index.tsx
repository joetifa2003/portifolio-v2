import { LinkButton } from "components/UI/Button";
import Header from "components/UI/Header";
import Image from "next/image";
import { AiOutlineFork, AiOutlineStar } from "react-icons/ai";

const Github = ({ data }: { data: any }) => {
    return (
        <section className="container">
            <div className="flex items-center justify-between">
                <Header>Github repos</Header>
                <LinkButton
                    target="_blank"
                    rel="noopener noreferrer"
                    href={"https://github.com/joetifa2003"}
                    className="hidden lg:flex"
                >
                    My github
                </LinkButton>
            </div>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                {data.map((repo: any, idx: number) => (
                    <a
                        key={idx}
                        className="bg-lightGray p-4 hover:scale-[1.02] transform transition-all duration-500 cursor-pointer border-2 border-transparent hover:border-darkCyan flex flex-col space-y-4"
                        href={repo.link}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div className="text-xl font-bold lg:text-4xl">
                            <span className="text-darkCyan">{"<"}</span>
                            {repo.repo}
                            <span className="text-darkCyan">{">"}</span>
                        </div>
                        <p className="text-lg">{repo.description}</p>
                        <div className="flex space-x-4">
                            {[
                                {
                                    name: "stars",
                                    icon: <AiOutlineStar />,
                                },
                                {
                                    name: "forks",
                                    icon: <AiOutlineFork />,
                                },
                            ].map(({ name, icon }) => (
                                <div
                                    className="flex items-center text-xl"
                                    key={name}
                                >
                                    {repo[name]} {icon}
                                </div>
                            ))}
                        </div>
                        <div>
                            <Image {...repo.imageProps} placeholder="blur" />
                        </div>
                    </a>
                ))}
                <LinkButton
                    target="_blank"
                    rel="noopener noreferrer"
                    href={"https://github.com/joetifa2003"}
                    className="flex lg:hidden"
                >
                    My github
                </LinkButton>
            </div>
        </section>
    );
};

export default Github;
