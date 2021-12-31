import Chips from "components/UI/Chips";
import Header from "components/UI/Header";

function About({ data }: any) {
    return (
        <section className="container">
            <Header>About me</Header>
            <p className="text-xl text-justify whitespace-pre-wrap lg:text-3xl">
                {data.about}
            </p>
            <div className="mt-8 text-xl lg:text-2xl">
                Here are a few technologies I've been working with recently
            </div>
            <div className="mt-4">
                <Chips
                    items={data.technologies.map(
                        (technologie: any) => technologie.name
                    )}
                />
            </div>
        </section>
    );
}

export default About;
