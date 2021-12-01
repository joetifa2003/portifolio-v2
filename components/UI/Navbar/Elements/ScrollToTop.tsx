import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import { animateScroll } from "react-scroll";
import className from "tailwind-styled-components";

const ScrollButton = className.div<{ $visible: boolean }>`
    flex    
    justify-center
    items-center
    fixed    
    right-4
    bottom-4
    transition-all
    duration-300
    rounded-full
    z-20
    cursor-pointer
    w-[64px]
    h-[64px]
    bg-darkCyan

    ${({ $visible }) => ($visible ? `opacity-100` : `opacity-0`)};
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
            $visible={visible}
            onClick={() => {
                animateScroll.scrollToTop();
            }}
        >
            <FaArrowUp size="24px" color="#fff" />
        </ScrollButton>
    );
}

export default ScrollToTop;
