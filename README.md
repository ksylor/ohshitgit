# The official home of Oh Shit, Git!?!
(and the swear-free version at Dangit, Git!?!

Thanks for coming! If you've volunteered to help add a new language translation to the site, THANK YOU!!! Hopefully this process will be super simple for you, and please do let me know if anything can be improved - the best way is to tweet at me @ksylor or @ohshitgit, or create a PR and I'll get tagged in automatically.

# Development
The site is built using the Eleventy (11ty) static site generator, and is deployed to Netlify.

## Local development
The following commands will all need to be run in a terminal/command line prompt.

1. Clone the project repo to your computer. Instructions are up and to the right of this file in the github ui (it's a big green button that says "clone or download"). Then `cd ohshitgit` to open the cloned repo.

2. Before you start work, create a new branch for your changes using:
`git checkout -b new-branch-name` Please choose a descriptive branch name such as `add-language-fr` or similar. Netlify will use this branch later to create a test environment for your changes!

3. Make sure you have the dependencies installed by running `npm install`.

4. Turn on the development server to preview your changes via
`eleventy --serve` (if you have Eleventy installed globally) or `npx @11ty/eleventy --serve`(if you only installed it locally)

5. Copy/paste the `Local Access` url from the Eleventy console output into your browser. You will get an error, but that's okay! In order to generate the swear-filled and non-swear-filled content, there isn't a single access point, and we use redirects on the server to show the correct content from the language sub-directories to folks.

6. Navigate to `[localhost url from step 5]/en/swears/index.html` to see the english version of ohshitgit.com, or `[localhost url from step 5]/en/noswears/index.html` to see the english version of dangitgit.com (without swears!).

7. Now you can go ahead and work on the site locally, any file changes should refresh the site automatically. For more details, visit the Eleventy docs.

## Adding a new language

### There are a few general rules for translation:
- Don't translate or change the sitenames ohshitgit.com or dangitgit.com.
- Don't translate or change metadata - e.g. `contentType: swears` is checked in code and needs to be in english. 
- Don't translate or change file names.
- Do translate content faithfully and to the best of your ability! Use all the swears you want for the swear-filled content. Remove swears for the noswear content. 
- Have fun! If I've used english idioms that don't translate well, replace them with funnier ones from your language! 

### Start by creating the translated content

1. Find the `/en/` folder in the directory and make a copy of it (and all of it's children) renamed with the language code of your language - e.g. `/de/` for German. In this folder you will find copies of the english-language files for the site, broken down into sub-groups of files with `/swears/` and `/noswears/`. 

2. Each directory contains an `index.html` file which defines some 11ty "front matter" metadata for the language & site version - make sure that this file references the correct language code under the `locale` metadata item. The other metadata should not be updated.

3. In the `/partials/` directory you will find a few short nunjucks (`.njk`) files for global site elements. Please translate the content of these files, but keep the markup & any inline code intact.

4. In the `/tips/` directory you will find markdown  `.md` files that contain each git tip - the example commands, and some funny explanatory text. 

5. Each `tip` file has metadata at the top - please leave the `tags` and `order` the same. Translate the tip's `title` which will be displayed to users (keep the format "Oh Shit, ..." or "Dangit, ..." to begin every title). Also translate the `id` which is used to generate an anchor tag to link directly to that tip. 

6. Then, translate the contents of each `tip` file. Make sure that you keep the markdown formatting in place so that the syntax highlighting on the client can correctly format the output. Code examples should use the same git commands, but you can translate the comments denoted by `#`. 

### Update some plumbing code to get your language displayed on the site correctly

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

9. Now this next part is kinda shitty and I want to make it so you don't have to do this manually! But, for now, the final thing we need to do is add the new language tip collection to the `.eleventy.js` configuration file. This is what tells Eleventy which files to group together for display on the main page. We'll need to add two new collections, one for the swear-filled version, and another for the non-swears version. Make sure you add the following lines inside the `module.exports(function(config) { ... });` block - replace the uses of `en` with your language code!

```
// replace uses of "en" with your language code!
config.addCollection('tips_swears_en', function(collection) {
    return getTipCollection(collection, "swears", "en");
});

config.addCollection('tips_noswears_en', function(collection) {
    return getTipCollection(collection, "noswears", "en");
});
```

10. If all went well, you should now be able to go to `[localhost]/[your language code]/swears/index.html` and `[localhost]/[your language code]/noswears/index.html`, and you should see your language code link in the upper right of the english page! 

11. Add 4 new redirect rules to the `_redirects` file that will tell Netlify the proper file to load for each language code in the URL, and then redirect any other paths to the main url. Yours should go underneath the other redirects and in this same format:

```
# french swears
https://ohshitgit.com/fr        https://ohshitgit.com/fr/swears/index.html 200!
#https://ohshitgit.com/fr/*      https://ohshitgit.com/fr 301!

# french no swears
https://dangitgit.com/fr        https://dangitgit.com/fr/noswears/index.html 200!
#https://dangitgit.com/fr/*      https://dangitgit.com/fr 301!
```

12. Make sure to `git commit` your changes along the way so you don't lose your work :D

## Preview your changes in Netlify

Once you're happy with the state of your branch, we can preview the changes live in a new branch environment on Netlify!

1. Run `git push -u` to push the new branch up to Github and set up a connection between the branches.

2. Go to the project page at https://github.com/ksylor/ohshitgit. If you pushed the branch recently, you should see a prompt to create a new pull request (PR). Click that button! If you don't see the prompt, go to https://github.com/ksylor/ohshitgit/pulls to create a new PR.

3. Once you've reviewed the changes and clicked the "Create Pull Request" button in the github UI, Netlify will automatically run checks on the new code. If all is well, you'll see a green checkmark and line for "Deploy preview", click on the "details" link, and it will take you to the preview site. Please don't share this URL widely, but feel free to get another pair of eyes to help edit/proofread.

4. Test that your new language appears in the language picker on the english site, and review your content one last time. 

5. Then, I'll take over from here and review the PR as per usual and either request changes or approve the PR. Once it's approved I'll merge it in and Netlify will automatically deploy the changes! 

# Questions? Problems? 

Feel free to message me on twitter or push up a WIP PR with questions! Thanks again for your help!

<3 Katie
