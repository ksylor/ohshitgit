---
tags: tip
title: Dangit, I did something terribly wrong, please tell me git has a magic time machine!?!
id: magic-time-machine
order: 1
---

```git
git reflog
# you will see a list of every thing you've 
# done in git, across all branches!
# each one has an index HEAD@{index}
# find the one before you broke everything
git reset HEAD@{index}
# magic time machine
```

You can use this to get back stuff you accidentally deleted, or just to remove some stuff you tried that broke the repo, or to recover after a bad merge, or just to go back to a time when things actually worked. I use `reflog` A LOT. Mega hat tip to the many many many many many people who suggested adding it!