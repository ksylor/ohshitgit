const CleanCSS = require("clean-css");
module.exports = function (config) {
    // minify css to output inline in head
    config.addFilter("cssmin", function (code) {
        return new CleanCSS({}).minify(code).styles;
    });

    config.addPassthroughCopy({ "assets": "/" });

    /** get the aria label for the language picker for the current locale **/
    config.addNunjucksShortcode("langpicker_arialabel", function(locale, languageData){
        let lang = languageData.find(function(el){ return el.code == locale});
        return lang["arialabel"];
    });

    function getTipCollection(collection, contentType, lang) {
        let tips = collection.getFilteredByGlob(lang + "/" + contentType + "/tips/*.md");
        tips.sort((a, b) => (a.order > b.order) ? 1 : -1);
        return tips;
    }

    // collection of tips sorted
    config.addCollection('tips_swears_en', function (collection) {
        return getTipCollection(collection, "swears", "en");
    });

    config.addCollection('tips_noswears_en', function (collection) {
        return getTipCollection(collection, "noswears", "en");
    });

    // German language version
    config.addCollection('tips_swears_de', function (collection) {
        return getTipCollection(collection, "swears", "de");
    });

    config.addCollection('tips_noswears_de', function (collection) {
        return getTipCollection(collection, "noswears", "de");
    });

    // Polish language version
    config.addCollection('tips_swears_pl', function (collection) {
        return getTipCollection(collection, "swears", "pl");
    });

    config.addCollection('tips_noswears_pl', function (collection) {
        return getTipCollection(collection, "noswears", "pl");
    });
};