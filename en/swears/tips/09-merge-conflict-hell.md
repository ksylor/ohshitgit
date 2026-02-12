---
tags: tip
title: Oh shit, I'm in merge conflict hell and I have no idea what I'm doing!
id: merge-conflict-hell
order: 9
---

```git
# to see which files are conflicted
git status
# edit the conflicted files, look for the <<<< >>>> markers
# remove the markers and keep the code you want
# then add the resolved files
git add .
git commit
# or if you want to bail out of the merge entirely
git merge --abort
```

Merge conflicts are scary looking but they're actually pretty straightforward. Git is just asking you "hey, I found two different versions of this code, which one do you want?" Look for the `<<<<<<<`, `=======`, and `>>>>>>>` markers, delete them and the code you don't want, then commit. Or just nope out with `--abort` and pretend it never happened.
