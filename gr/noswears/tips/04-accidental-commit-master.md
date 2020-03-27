---
tags: tip
title: Dangit, I accidentally committed something to master that should have been on a brand new branch!
id: accidental-commit-master
order: 4
---

```git
# create a new branch from the current state of master
git branch some-new-branch-name
# remove the last commit from the master branch
git reset HEAD~ --hard
git checkout some-new-branch-name
# your commit lives in this branch now :)
```

Note: this doesn't work if you've already pushed the commit to a public/shared branch, and if you tried other things first, you might need to `git reset HEAD@{number-of-commits-back}` instead of `HEAD~`. Infinite sadness. Also, many many many people suggested an awesome way to make this shorter that I didn't know myself. Thank you all!