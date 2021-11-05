import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import { animateScroll } from "react-scroll";
import { styled, theme } from "twin.macro";

const ScrollButton = styled.div<{ visible: boolean }>`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    bottom: 1rem;
    right: 1rem;
    border-radius: 999px;
    background-color: ${theme`colors.darkCyan`};
    transition: all 250ms ease-in-out;
    height: 64px;
    width: 64px;
    cursor: pointer;
    z-index: 15;
    opacity: ${({ visible }) => (visible ? 1 : 0)};
`;

function ScrollToTop() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        document.addEventListener("scroll", (e) => {
            if (window.scrollY > 150) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        });
    }, []);

    return (
        <ScrollButton
            visible={visible}
            onClick={() => {
                animateScroll.scrollToTop();
            }}
        >
            <FaArrowUp size="24px" color="#fff" />
        </ScrollButton>
    );
}

export default ScrollToTop;
