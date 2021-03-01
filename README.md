# The official home of Oh Shit, Git!?!
https://ohshitgit.com/
(and the swear-free version at Dangit, Git!?!
https://dangitgit.com/

# Contributing guidelines

Thanks for coming! Note that I will only accept PRs for language translations (e.g. translating the site into a new language) or fixes to typos. 

If you have ideas for new content or thoughts on how to improve existing content, please open an Issue first so that we can discuss it. 

This site is my copyrighted content and my decisions whether or not to make any suggested changes are final. 

I have a very busy full-time job and I'm currently homeschooling my two kids due to COVID, so please be patient if I take a bit to respond. I usually will wait a bit until there are several PRs & Issues pending, then I'll tackle them all once.

# Adding a new language translation

Firstly, THANK YOU for donating your time to help share Oh Shit, Git with folks in your language! It has been wonderful to see so many folks contributing to translations, I appreciate it!

Hopefully this process will be super simple for you, and please do let me know if anything can be improved - the best way is to tweet at me @ksylor or @ohshitgit, or create a PR and I'll get tagged in automatically.

# Development
The site is built using the [Eleventy (11ty)](https://www.11ty.dev/docs/) static site generator, and is deployed to [Netlify](https://www.netlify.com/).

## Local development
The following commands will all need to be run in a terminal/command line prompt.

1. Fork the project repo to your computer. If you are unfamiliar with fork-based PRs, [Github has some great docs on working with forks](https://docs.github.com/en/free-pro-team@latest/github/collaborating-with-issues-and-pull-requests/working-with-forks).

2. Before you start work, create a new branch for your changes using:
`git checkout -b add-language-zz` Please choose a descriptive branch name such as `add-language-fr` or similar. Netlify will use this branch later to create a test environment for your changes!

3. Make sure you have the dependencies installed by running `npm install` or `npx install`.

4. Turn on the development server to preview your changes via
`eleventy --serve` (if you have Eleventy installed globally) or `npx @11ty/eleventy --serve` (if you only installed it locally)

5. Copy/paste the `Local Access` url from the Eleventy console output into your browser. You will get an error, but that's okay! In order to generate the swear-filled and non-swear-filled content, there isn't a single access point, and we use redirects on the server to show the correct content from the language sub-directories to folks.

6. Navigate to `[localhost url from step 5]/en/swears/index.html` to see the english version of ohshitgit.com, or `[localhost url from step 5]/en/noswears/index.html` to see the english version of dangitgit.com (without swears!).

7. Now you can go ahead and work on the site locally, any file changes should refresh the site automatically. For more details, visit the Eleventy docs.

## Adding a new language

### There are a few general rules for translation:
- Don't translate or change the urls ohshitgit.com or dangitgit.com.
- Don't translate or change metadata - e.g. `contentType: swears` is checked in code and needs to be in english. 
- Don't translate or change file names.
- Do translate content faithfully and to the best of your ability! Use all the swears you want for the swear-filled content. Remove swears for the noswear content. 
- Have fun! If I've used english idioms that don't translate well, replace them with funnier ones from your language! 

*IMPORTANT: Please use the correct two-letter [ISO-639-1 language code](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes). If your content is targeted to a specific country as well, use the format of `pt-BR` using the [ISO-3166 country code](https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes).*

### Start by creating the translated content

1. Find the `/en/` folder in the directory and make a copy of it (and all of it's children) renamed with the correct two-letter [ISO-639-1 language code](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) of your language. In this folder you will find copies of the english-language files for the site, broken down into sub-groups of files with `/swears/` and `/noswears/`. 

2. Each directory contains an `index.html` file which defines some 11ty "front matter" metadata for the language & site version - make sure that this file references the correct language code under the `locale` metadata item. The other metadata should not be updated.

3. In the `/partials/` directory you will find a few short nunjucks (`.njk`) files for global site elements. Please translate the content of these files, but keep the markup & any inline code intact.

4. In the `/tips/` directory you will find markdown  `.md` files that contain each git tip - the example commands, and some funny explanatory text. 

5. Each `tip` file has metadata at the top - please leave the `tags` and `order` the same. Translate the tip's `title` which will be displayed to users (keep the format "Oh Shit, ..." or "Dangit, ..." to begin every title). Also translate the `id` which is used to generate an anchor tag to link directly to that tip. 

6. Then, translate the contents of each `tip` file. Make sure that you keep the markdown formatting in place so that the syntax highlighting on the client can correctly format the output. Code examples should use the same git commands, but you can translate the comments denoted by `#`. 

### IMPORTANT DON'T FORGET! Update some plumbing code to get your language displayed on the site correctly

7. in the `_data` folder, open up `site.js` and add your new language to the list of languages on the site. For example, to add German to the site, use the local word for the language (e.g. not the english word German, but the German word Deutsch), the standard language code, and then a translation of the phrase "View in other languages" which will be used as an `aria-label` for the language picker when that language is selected.

```
"languages": [
    {
        "label": "deutsch",
        "code": "de",
        "arialabel": "In anderen Sprachen anzeigen"
    },
    ...
],
```

8. Next, add your information to the list of collaborators in `site.js`. Add your name and a link to your GitHub profile, then the language code for the language you added.

```
"collaborators": [
    {
        "name": "Moritz Stückler",
        "link": "https://github.com/pReya",
        "lang": "de"
    },
    ...
],
```

9. If all went well, you should now be able to go to `[localhost]/[your language code]/swears/index.html` and `[localhost]/[your language code]/noswears/index.html`, and you should see your language code link in the upper right of the english page! 

10. Add 4 new redirect rules to the `_redirects` file that will tell Netlify the proper file to load for each language code in the URL, and then redirect any other paths to the main url. Yours should go underneath the other redirects and in this same format:

```
# swedish swears
https://ohshitgit.com/sv        https://ohshitgit.com/sv/swears/index.html 200!
https://ohshitgit.com/          https://ohshitgit.com/sv    302  Language=sv

# swedish no swears
https://dangitgit.com/sv        https://dangitgit.com/sv/noswears/index.html 200!
https://dangitgit.com/          https://dangitgit.com/sv    302  Language=sv
```

11. Make sure to `git commit` your changes along the way so you don't lose your work :D

## Preview your changes in Netlify

Once you're happy with the state of your branch, we can preview the changes live in a new branch environment on Netlify!

1. Run `git push -u` to push the new branch up to Github, then [follow the instructions here for submitting a pull request using your forked repository](https://docs.github.com/en/free-pro-team@latest/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request-from-a-fork).

2. Once you've reviewed the changes and clicked the "Create Pull Request" button in the github UI, Netlify will automatically run checks on the new code. If all is well, you'll see a green checkmark and line for "Deploy preview", click on the "details" link, and it will take you to the preview site. Please don't share this URL widely, but feel free to get another pair of eyes to help edit/proofread.

3. Test that your new language appears in the language picker on the english site, and review your content one last time. 

4. Then, I'll take over from here and review the PR as per usual and either request changes or approve the PR. Once it's approved I'll merge it in and Netlify will automatically deploy the changes! 

# Questions? Problems? 

Feel free to message me on twitter or [create a Draft PR](https://github.blog/2019-02-14-introducing-draft-pull-requests/) with questions! Thanks again for your help!

<3 Katie
