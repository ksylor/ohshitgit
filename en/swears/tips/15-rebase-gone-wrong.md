---
tags: tip
title: Oh shit, I tried to rebase and now everything is fucked!
id: rebase-gone-wrong
order: 15
---

```git
# abort the rebase if you're still in the middle of it
git rebase --abort
# if you already finished the rebase and regret it
git reflog
# find the commit before you started the rebase
# it'll say something like "checkout: moving from your-branch"
git reset --hard HEAD@{index}
# your branch is back to how it was before the rebase
```

Rebase is powerful but it's also a great way to completely fuck up your branch. The good news is that git keeps track of where your branch was before you started the rebase, so you can always go back. `git rebase --abort` is your panic button if you're in the middle of a rebase that's going sideways.
