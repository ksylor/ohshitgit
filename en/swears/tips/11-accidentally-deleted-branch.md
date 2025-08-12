---
tags: tip
title: Oh shit, I accidentally deleted my branch!
id: accidentally-deleted-branch
order: 11
---

```git
# find your branch in the reflog
git reflog
# look for something like "checkout: moving from your-branch-name"
# note the commit hash
git checkout -b your-branch-name [commit-hash]
# your branch is back!
```

Deleted a branch by accident? Don't panic! Git keeps track of everything in the reflog, even deleted branches. Just find the last commit that was on your branch and recreate it. It's like branch resurrection magic, except it actually works and doesn't require selling your soul.
