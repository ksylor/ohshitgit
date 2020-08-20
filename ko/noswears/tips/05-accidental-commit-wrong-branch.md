---
tags: tip
title: Dangit, I accidentally committed to the wrong branch!
id: accidental-commit-wrong-branch
order: 5
---

```git
# undo the last commit, but leave the changes available
git reset HEAD~ --soft
git stash
# move to the correct branch
git checkout name-of-the-correct-branch
git stash pop
git add . # or add individual files
git commit -m "your message here"
# now your changes are on the correct branch
```

A lot of people have suggested using `cherry-pick` for this situation too, so take your pick on whatever one makes the most sense to you!

```git
git checkout name-of-the-correct-branch
# grab the last commit to master
git cherry-pick master
# delete it from master
git checkout master
git reset HEAD~ --hard
```