import About from "components/Sections/About";
import Hero from "components/Sections/Hero";
import Work from "components/Sections/Work";
import Navbar from "components/UI/Layout/Navbar";

function Index() {
    return (
        <>
            <Navbar />
            <Hero />
            <About />
            <Work />
        </>
    );
}

export default Index;
