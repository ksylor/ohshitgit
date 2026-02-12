---
tags: tip
title: Oh shit, I committed a huge file and now everything is slow!
id: huge-file-committed
order: 14
---

```git
# if you haven't pushed yet
git reset --soft HEAD~1
# remove the huge file
rm path/to/huge/file
# add it to gitignore so this doesn't happen again
echo "path/to/huge/file" >> .gitignore
git add .
git commit -m "Remove huge file and add to gitignore"
# if you already pushed, you need the nuclear option
# git filter-branch or BFG Repo-Cleaner
```

Committed your 2GB database dump or that 500MB video file? Git remembers everything, so even if you delete it in the next commit, it's still there making your repo huge and slow. If you haven't pushed yet, easy fix. If you have pushed, you're looking at rewriting history, which is... not fun.
