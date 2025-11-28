---
tags: tip
title: A francba, véletlenül rossz branchre commiteltem!
id: veletlen-rossz-branch
order: 5
---

```git
# utolsó commit visszavonása a változtatások megtartásával
git reset HEAD~ --soft
git stash
# mozgatás a jó branchre
git checkout a-jo-branch-neve
git stash pop
git add . # vagy csak egy-egy fájl hozzáadása
git commit -m "üzenet beszúrása";
# ím, a változtatások a jó branchen vannak
```

Rengetegen javasolták erre a helyzetre a `cherry-pick` megoldást is, szóval válaszd nyugodtan a neked logikusabbnak tűnő megoldást!

```git
git checkout a-jo-branch-neve
# a legutóbbi commit kiválasztása a masterből
git cherry-pick master
# törlés a masterből
git checkout master
git reset HEAD~ --hard
```
