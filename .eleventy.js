const CleanCSS = require("clean-css");
module.exports = function(config) {
    // minify css to output inline in head
    config.addFilter("cssmin", function(code) {
        return new CleanCSS({}).minify(code).styles;
    });

    config.addPassthroughCopy({"assets": "/"});

    function getTipCollection(collection, contentType, lang) {
        let tips = collection.getFilteredByGlob(lang + "/" + contentType + "/tips/*.md");
        tips.sort((a, b) => (a.order > b.order) ? 1 : -1);
        return tips;
    }

    // collection of tips sorted
    config.addCollection('tips_swears_en', function(collection) {
        return getTipCollection(collection, "swears", "en");
    });

    config.addCollection('tips_noswears_en', function(collection) {
        return getTipCollection(collection, "noswears", "en");
    });
};