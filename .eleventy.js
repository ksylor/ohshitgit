const CleanCSS = require("clean-css");
module.exports = function(config) {
    // minify css to output inline in head
    config.addFilter("cssmin", function(code) {
        return new CleanCSS({}).minify(code).styles;
    });

    config.addPassthroughCopy({"assets": "/"});

    // collection of tips sorted
    config.addCollection('tips_swears_en', function(collection) {
        let tips = collection.getFilteredByGlob('en/swears/tips/*.md');
        tips.sort((a, b) => (a.order > b.order) ? 1 : -1);
        return tips;
    });

    config.addCollection('tips_noswears_en', function(collection) {
        let tips = collection.getFilteredByGlob('en/noswears/tips/*.md');
        tips.sort((a, b) => (a.order > b.order) ? 1 : -1);
        return tips;
    });

};