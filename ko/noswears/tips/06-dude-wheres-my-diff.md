---
tags: tip
title: Dangit, I tried to run a diff but nothing happened?!
id: dude-wheres-my-diff
order: 6
---

If you know that you made changes to files, but `diff` is empty, you probably `add`-ed your files to staging and you need to use a special flag.

```git
git diff --staged
```

File under &macr;\\\_(ツ)\_/&macr; (yes, I know this is a feature, not a bug, but it's baffling and non-obvious the first time it happens to you!)
