---
tags: tip
title: Oh shit, I've been pushing to the wrong remote this whole time!
id: wrong-remote
order: 13
---

```git
# see what remotes you have
git remote -v
# add the correct remote
git remote add correct-origin https://github.com/correct/repo.git
# push your branch to the right place
git push correct-origin your-branch-name
# if you want to change where "origin" points
git remote set-url origin https://github.com/correct/repo.git
```

Been pushing your brilliant code to your fork instead of the main repo? Or worse, to some random repo you contributed to six months ago? `git remote -v` is your friend for checking where your code is actually going. You can have multiple remotes, so add the right one and push there instead.
