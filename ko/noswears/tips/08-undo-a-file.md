---
tags: tip
title: Dangit, I need to undo my changes to a file!
id: undo-a-file
order: 8
---

```git
# find a hash for a commit before the file was changed
git log
# use the arrow keys to scroll up and down in history
# once you've found your commit, save the hash
git checkout [saved hash] -- path/to/file
# the old version of the file will be in your index
git commit -m "Wow, you don't have to copy-paste to undo"
```

When I finally figured this out it was HUGE. HUGE. H-U-G-E. But seriously though, on what planet does `checkout --` make sense as the best way to undo a file? :shakes-fist-at-linus-torvalds: