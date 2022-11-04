const nextTranslate = require("next-translate");

module.exports = nextTranslate({
    images: {
        domains: ["opengraph.githubassets.com"],
    },
    runtime: "experimental-edge",
});
