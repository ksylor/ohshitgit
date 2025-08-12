---
tags: tip
title: Oh shit, I pushed something broken to master and people are pissed!
id: pushed-wrong-thing
order: 10
---

```git
# if it's the most recent commit
git revert HEAD
git push origin master
# if it's an older commit
git log
# find the bad commit hash
git revert [bad-commit-hash]
git push origin master
```

DO NOT use `git reset` on commits you've already pushed unless you want to make enemies. `git revert` creates a new commit that undoes the bad one, so the history stays intact and your teammates won't want to murder you. Everyone makes mistakes, but using `reset` on public commits is how you make *enemies*.
