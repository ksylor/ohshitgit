---
tags: tip
title: Rahat, am comis intr-un branch gresit!
id: accidental-commit-wrong-branch
order: 5
---

```git
# anuleaza ultimul commit, dar lasa modificarile disponibile
git reset HEAD~ --soft
git stash
# muta-te pe branchul corect
git checkout nume-corect-de-branch
git stash pop
git add . # sau adauga fisiere individuale
git commit -m "mesajul tau aici";
# acum modificarile tale sunt pe branchul corect
```

Multi oameni au sugerat de asemenea folosirea `cherry-pick`ului in aceasta situatie, deci alege ce vrei in functie de ce are mai mult sens pentru tine!

```git
git checkout nume-corect-de-branch
# ia ultimul commit de pe master
git cherry-pick master
# sterge-l de pe master
git checkout master
git reset HEAD~ --hard
```
