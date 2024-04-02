const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy("./website-church/images");
    eleventyConfig.addPassthroughCopy("./website-church/styles.css");
    eleventyConfig.addPassthroughCopy("./website-church/admin");

    eleventyConfig.addFilter("postDate", (dateObj) => {
        return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);  
    })

    return {
        dir: {
            input: "website-church",
            output: "public"
        }
    };
}