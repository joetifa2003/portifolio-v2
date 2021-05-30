import styled from "@emotion/styled";
import { mq } from "utils/Responsive";

const HamburgerMenu = styled.div`
    display: block;
    position: absolute;
    right: 0;

    ${mq.lg} {
        display: none;
    }
`;

export default HamburgerMenu;
