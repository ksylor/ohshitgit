---
tags: tip
title: Pisici, am comis într-un branch greșit!
id: accidental-commit-wrong-branch
order: 5
---

```git
# anulează ultimul commit, dar lasă modificările disponibile
git reset HEAD~ --soft
git stash
# mută-te pe branchul corect
git checkout nume-corect-de-branch
git stash pop
git add . # sau adaugă fișiere individuale
git commit -m "mesajul tău aici";
# acum modificările tale sunt pe branchul corect
```

Mulți oameni au sugerat de asemenea folosirea `cherry-pick`ului în această situație, deci alege ce vrei in funcție de ce are mai mult sens pentru tine!

```git
git checkout nume-corect-de-branch
# ia ultimul commit de pe master
git cherry-pick master
# șterge-l de pe master
git checkout master
git reset HEAD~ --hard
```
