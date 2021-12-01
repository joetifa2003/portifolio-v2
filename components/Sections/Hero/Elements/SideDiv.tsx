import tw from "tailwind-styled-components";

const SideDivWrapper = tw.div`
    absolute top-0 left-0 h-full w-[30vw] hidden md:flex bg-lightGray shadow-lg
`;

function SideDiv() {
    return (
        <SideDivWrapper>
            <div className="flex mt-auto">
                <img src="/hero/images/blob1.svg" alt="" width="100%" />
            </div>
        </SideDivWrapper>
    );
}

export default SideDiv;
