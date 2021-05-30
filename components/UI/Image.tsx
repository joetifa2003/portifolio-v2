import { css } from "@emotion/react";

function Image({
    webp,
    fallback,
    alt,
    width,
    height,
    cssProp,
}: {
    webp?: string;
    fallback: string;
    alt?: string;
    width: number;
    height: number;
    cssProp: any;
}) {
    return (
        <picture
            css={css`
                ${cssProp}
            `}
        >
            {webp && <source srcSet={webp} type="image/webp" />}
            <img
                src={fallback}
                alt={alt}
                width={width}
                height={height}
                css={css`
                    ${cssProp}
                `}
                loading="lazy"
            />
        </picture>
    );
}

export default Image;
