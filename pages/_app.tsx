import { Global } from "@emotion/react";
import GlobalStyles from "styles/Global";
import "styles/globals.css";
import { GlobalStyles as PreFlight } from "twin.macro";

function MyApp({ Component, pageProps }: any) {
    return (
        <>
            <PreFlight />
            <Global styles={GlobalStyles} />
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
