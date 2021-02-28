const CleanCSS = require("clean-css");

module.exports = function (config) {
    // minify css to output inline in head
    config.addFilter("cssmin", function (code) {
        return new CleanCSS({}).minify(code).styles;
    });

    config.addPassthroughCopy({ _assets: "/" });
    config.addPassthroughCopy("_redirects");

    /** get the aria label for the language picker for the current locale **/
    config.addNunjucksShortcode(
        "langpicker_arialabel",
        function (locale, languageData) {
            let lang = languageData.find(function (el) {
                return el.code == locale;
            });
            return lang["arialabel"];
        }
    );

    config.addNunjucksShortcode("collaborator_info", function (collaborator) {
        return `<a href="${collaborator.link}">
          ${collaborator.name}
          </a> (<a href="/${collaborator.lang}">${collaborator.lang}</a>)`;
    });

    config.addNunjucksShortcode("otherhelpers_info", function (helper) {
        return `<a href="${helper.link}">${helper.name}</a>`;
    });

    config.addNunjucksShortcode("twitter_link", function (username) {
        const svg = `<svg class="twitter-icon" viewBox="0 0 235 191" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2"><path d="M73.7 191c88.7 0 137.2-73.5 137.2-137.2 0-2.1 0-4.2-.1-6.2 9.4-6.8 17.6-15.3 24.1-25-8.6 3.8-17.9 6.4-27.7 7.6 10-6 17.6-15.4 21.2-26.7-9.3 5.5-19.6 9.5-30.6 11.7C189 5.8 176.5 0 162.6 0c-26.6 0-48.2 21.6-48.2 48.2 0 3.8.4 7.5 1.3 11-40.1-2-75.6-21.2-99.4-50.4-4.1 7.1-6.5 15.4-6.5 24.2 0 16.7 8.5 31.5 21.5 40.1-7.9-.2-15.3-2.4-21.8-6v.6c0 23.4 16.6 42.8 38.7 47.3-4 1.1-8.3 1.7-12.7 1.7-3.1 0-6.1-.3-9.1-.9 6.1 19.2 23.9 33.1 45 33.5-16.5 12.9-37.3 20.6-59.9 20.6-3.9 0-7.7-.2-11.5-.7C21.1 183 46.5 191 73.7 191" fill="#fff" fill-rule="nonzero"/></svg>`;
        return `<a href="https://twitter.com/${username}" class="no-wrap">${svg}@${username}</a>`;
    });

    config.addNunjucksShortcode("github_link", function () {
        const svg = `<svg class="github-icon" xmlns="http://www.w3.org/2000/svg" fill="#222222" viewBox="0 0 1024 1024"><path fill-rule="evenodd" clip-rule="evenodd" d="M512 0C229.12 0 0 229.12 0 512c0 226.56 146.56 417.92 350.08 485.76 25.6 4.48 35.2-10.88 35.2-24.32 0-12.16-.64-52.48-.64-95.36-128.64 23.68-161.92-31.36-172.16-60.16-5.76-14.72-30.72-60.16-52.48-72.32-17.92-9.6-43.52-33.28-.64-33.92 40.32-.64 69.12 37.12 78.72 52.48 46.08 77.44 119.68 55.68 149.12 42.24 4.48-33.28 17.92-55.68 32.64-68.48-113.92-12.8-232.96-56.96-232.96-252.8 0-55.68 19.84-101.76 52.48-137.6-5.12-12.8-23.04-65.28 5.12-135.68 0 0 42.88-13.44 140.8 52.48 40.96-11.52 84.48-17.28 128-17.28 43.52 0 87.04 5.76 128 17.28 97.92-66.56 140.8-52.48 140.8-52.48 28.16 70.4 10.24 122.88 5.12 135.68 32.64 35.84 52.48 81.28 52.48 137.6 0 196.48-119.68 240-233.6 252.8 18.56 16 34.56 46.72 34.56 94.72 0 68.48-.64 123.52-.64 140.8 0 13.44 9.6 29.44 35.2 24.32C877.44 929.92 1024 737.92 1024 512 1024 229.12 794.88 0 512 0z" fill="#1B1F23"/></svg>`;
        return `<a href="https://github.com/ksylor/ohshitgit" class="no-wrap">${svg}GitHub</a>`;
    });

    config.addNunjucksFilter(
        "tips_by_language",
        function (allTips, contentType, lang) {
            const pathRegex = new RegExp(
                lang + "/" + contentType + "/tips/.*.md"
            );
            return allTips
                .filter(function (tip) {
                    return tip.inputPath.match(pathRegex);
                })
                .sort(function (a, b) {
                    return a.data.order - b.data.order;
                });
        }
    );

    config.addNunjucksFilter("sort_by_language", function (list) {
        return list.sort(function (a, b) {
            langA = a.lang || a.code;
            langB = b.lang || b.code;
            if (langA < langB) {
                return -1;
            }
            if (langA > langB) {
                return 1;
            }
        });
    });
};
