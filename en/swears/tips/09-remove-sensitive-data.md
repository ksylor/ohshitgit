---
tags: tip
title: Oh shit, I commit some sensitive data in!
id: remove-sensitive-data
order: 9
---

```git
# remove all commits hisoty of the file with sensitive data
git filter-branch --force --index-filter \
  "git rm --cached --ignore-unmatch PATH-TO-YOUR-FILE-WITH-SENSITIVE-DATA" \
  --prune-empty --tag-name-filter cat -- --all
# you will see the logs to re-write history
# once it is done, remove sensitive data from the file
vim PATH-TO-YOUR-FILE-WITH-SENSITIVE-DATA
# add it back and commit it
git add PATH-TO-YOUR-FILE-WITH-SENSITIVE-DATA
git commit -m "Update YOUR-FILE-WITH-SENSITIVE-DATA"
# force to push to remote
git push origin --force --all
```

Trust me, if it was credit card, it would be too late to do this.
