import { LinkButton } from "components/UI/Button";
import Header from "components/UI/Header";
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
                {data.map((repo: any) => (
                    <a
                        key={repo.id}
                        className="bg-lightGray p-4 hover:scale-[1.02] transform transition-all duration-500 cursor-pointer border-2 border-transparent hover:border-darkCyan"
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div className="text-3xl font-bold lg:text-4xl">
                            <span className="text-darkCyan">{"<"}</span>
                            {repo.name}
                            <span className="text-darkCyan">{">"}</span>
                        </div>
                        <div className="flex mt-4 space-x-4">
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
                                    className="flex items-center text-xl"
                                    key={name}
                                >
                                    {repo[name]} {icon}
                                </div>
                            ))}
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
