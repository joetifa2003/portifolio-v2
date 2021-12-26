import Script from "next/script";
import "styles/globals.css";

function MyApp({ Component, pageProps }: any) {
    return (
        <>
            <Script
                data-goatcounter="https://joetifa.goatcounter.com/count"
                async
                src="//gc.zgo.at/count.js"
            ></Script>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
