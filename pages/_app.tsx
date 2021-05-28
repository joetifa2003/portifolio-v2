import { Global, Theme, ThemeProvider } from "@emotion/react";
import GlobalStyles from "styles/Global";
import "styles/globals.css";

const theme: Theme = {
    color: {
        gray: "#212121",
        lightGray: "#323232",
        cyan: "#14FFEC",
        darkCyan: "#0D7377",
    },
    font: {
        mono: "'Fira Code', monospace",
    },
};

function MyApp({ Component, pageProps }) {
    return (
        <>
            <ThemeProvider theme={theme}>
                <Global styles={GlobalStyles} />
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    );
}

export default MyApp;
