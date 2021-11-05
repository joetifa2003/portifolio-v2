import tw, { styled } from "twin.macro";

const NavbarContainer = styled.div`
    position: relative;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-top: 0;
    padding-bottom: 0;

    ${tw`container`}
`;

export default NavbarContainer;
