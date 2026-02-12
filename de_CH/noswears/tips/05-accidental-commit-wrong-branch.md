---
tags: tip
title: Oh Nei, ich ha uf em falsche Branch commited!
id: falsche-branch-commit
order: 5
---

```git
# Mach de letschti Commit rüggängig, aber bhalt d' Änderige
git reset HEAD~ --soft
git stash
# Gang zum richtige Branch
git checkout name-vom-richtige-branch
git stash pop
git add . # oder fieg einzelni Dateie dezue
git commit -m "Dini Nochricht do"
# Jetzt sind d' Änderige ufem richtige Branch
```

Vili hän vorgschlage `cherry-pick` dodefür z' nutze. Das isch au absolut ok, also nimm d' Variante, wo dir besser gfallt!

```git
git checkout name-vom-richtige-branch
# Nimm de letscht Commit vom master
git cherry-pick master
# Und lösch de Commit vom master
git checkout master
git reset HEAD~ --hard
```