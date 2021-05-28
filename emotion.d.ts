import "@emotion/react";

declare module "@emotion/react" {
    export interface Theme {
        color: {
            gray: string;
            lightGray: string;
            cyan: string;
            darkCyan: string;
        };
        font: {
            mono: string;
        };
    }
}
