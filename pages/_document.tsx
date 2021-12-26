import Document, { Head, Html, Main, NextScript } from "next/document";
class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link
                        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap"
                        rel="stylesheet"
                    />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@700&display=swap"
                        rel="stylesheet"
                    />

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
