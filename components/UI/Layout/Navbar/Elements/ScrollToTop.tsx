import { css } from "@emotion/react";
import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import { animateScroll } from "react-scroll";

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
        <div
            css={(theme) => css`
                display: flex;
                justify-content: center;
                align-items: center;
                position: fixed;
                bottom: 1rem;
                right: 1rem;
                border-radius: 999px;
                background-color: ${theme.color.darkCyan};
                transition: all 250ms ease-in-out;
                height: 64px;
                width: 64px;
                cursor: pointer;
                z-index: 15;
                opacity: ${visible ? 1 : 0};
            `}
            onClick={() => {
                animateScroll.scrollToTop();
            }}
        >
            <FaArrowUp size="24px" color="#fff" />
        </div>
    );
}

export default ScrollToTop;
