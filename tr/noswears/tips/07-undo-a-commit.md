---
tags: tip
title: Dangit, I need to undo a commit from like 5 commits ago!
id: undo-a-commit
order: 7
---

```git
# find the commit you need to undo
git log
# use the arrow keys to scroll up and down in history
# once you've found your commit, save the hash
git revert [saved hash]
# git will create a new commit that undoes that commit
# follow prompts to edit the commit message 
# or just save and commit
```

Turns out you don't have to track down and copy-paste the old file contents into the existing file in order to undo changes! If you committed a bug, you can undo the commit all in one go with `revert`.

You can also revert a single file instead of a full commit! But of course, in true git fashion, it's a completely different set of commands...
