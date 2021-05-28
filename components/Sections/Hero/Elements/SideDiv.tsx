import styled from "@emotion/styled";
import { mq } from "utils/Responsive";

const SideDivWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 30vw;

    display: none;

    background-color: ${(props) => props.theme.color.lightGray};
    box-shadow: inset 0px 80px 0px rgba(0, 0, 0, 0.25);

    ${mq.lg} {
        display: flex;
    }
`;

function SideDiv() {
    return (
        <SideDivWrapper>
            <div
                css={{
                    display: "flex",
                    marginTop: "auto",
                }}
            >
                <img src="/hero/images/blob1.svg" width="100%" />
            </div>
        </SideDivWrapper>
    );
}

export default SideDiv;
