module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy("./website-church/images");
    eleventyConfig.addPassthroughCopy("./website-church/styles.css");

    return {
        dir: {
            input: "website-church",
            output: "public"
        }
    };
}