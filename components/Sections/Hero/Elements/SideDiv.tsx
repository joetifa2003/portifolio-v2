import tw, { styled } from "twin.macro";

const SideDivWrapper = styled.div`
    box-shadow: inset 0px 80px 0px rgba(0, 0, 0, 0.25);

    ${tw`absolute top-0 left-0 h-full w-[30vw] hidden md:flex bg-lightGray`}
`;

function SideDiv() {
    return (
        <SideDivWrapper>
            <div tw="flex mt-auto">
                <img src="/hero/images/blob1.svg" alt="" width="100%" />
            </div>
        </SideDivWrapper>
    );
}

export default SideDiv;
