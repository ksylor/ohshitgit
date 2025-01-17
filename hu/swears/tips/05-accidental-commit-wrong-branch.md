---
tags: tip
title: Ó, baszki, véletlenül rossz ágra commit-oltam!
id: veletlen-rossz-ag-commit
order: 5
---

```git
# vond vissza az utolsó commit-ot, de hagyd meg a változtatásaidat
git reset HEAD~ --soft
git stash
# válts a helyes ágra
git checkout a-helyes-ag-neve
git stash pop
git add . # vagy adj hozzá egyéni fájlokat
git commit -m "a commit üzenet"
# a változtatásaid most már a helyes ágon vannak
```

Sokan javasolták a `cherry-pick`-et erre a célra, úgyhogy válaszd azt, amelyik több értelmet nyert számodra!

```git
git checkout a-helyes-ag-neve
# fogd az utolsó commit-ot master-ről
git cherry-pick master
# töröld azt master-ről
git checkout master
git reset HEAD~ --hard
```