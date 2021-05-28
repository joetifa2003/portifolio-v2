import styled from "@emotion/styled";
import { mq } from "utils/Responsive";

const NavbarlinksWrapper = styled.div`
    display: none;

    margin-left: -1rem;
    margin-right: -1rem;

    ${mq.lg} {
        display: flex;
    }
`;

export default NavbarlinksWrapper;
