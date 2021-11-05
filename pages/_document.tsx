import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
    static async getInitialProps(ctx: any) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        return (
            <Html>
                <Head>
                    <script
                        data-goatcounter="https://joetifa.goatcounter.com/count"
                        async
                        src="//gc.zgo.at/count.js"
                    ></script>
                    <meta
                        name="google-site-verification"
                        content="78OFSziPbL_z3R5xrBKVCsoQil08dEthi-KWCnQQMPs"
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
