const withTM = require("next-transpile-modules")(["vfile"]);
const nextTranslate = require("next-translate");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
    enabled: process.env.ANALYZE === "true",
});

module.exports = withTM({
    ...nextTranslate({
        ...withBundleAnalyzer({
            images: {
                domains: ["res.cloudinary.com"],
            },
        }),
    }),
});
