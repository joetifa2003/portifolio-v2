const withTM = require("next-transpile-modules")(["vfile"]);
const withBundleAnalyzer = require("@next/bundle-analyzer")({
    enabled: process.env.ANALYZE === "true",
});

module.exports = withTM({
    ...withBundleAnalyzer({
        images: {
            domains: ["res.cloudinary.com"],
        },
    }),
});
