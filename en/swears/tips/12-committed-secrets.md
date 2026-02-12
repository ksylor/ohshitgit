---
tags: tip
title: Oh shit, I committed my passwords/API keys/secrets!
id: committed-secrets
order: 12
---

```git
# if you haven't pushed yet, you can amend
git reset --soft HEAD~1
# edit your files to remove secrets
git add .
git commit -m "your message here"
# if you already pushed, you're in deeper shit
# you'll need to rotate those secrets IMMEDIATELY
# then use git filter-branch or BFG Repo-Cleaner
# but honestly, just assume those secrets are compromised
```

This is the big one. The "oh fuck oh fuck oh fuck" moment. If you haven't pushed yet, you can fix it easily. If you have pushed, those secrets are burned - rotate them immediately. Don't try to be clever and just remove them in a new commit, because they're still in the git history and git history is forever.
