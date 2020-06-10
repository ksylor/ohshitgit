---
tags: tip
title: Oeps, ik heb op master gecommit en dat moest in zo'n nare nieuwe branch!
id: accidental-commit-master
order: 4
---

```git
# Maak een nieuwe branch met de status van master
git branch some-new-branch-name
# rol de laatste commit op de master branch terug
git reset HEAD~ --hard
git checkout some-new-branch-name
# je commit leeft nu in deze branch! :)
```
Let op: Dit werkt niet als je de commit naar een publieke of gedeelde branch hebt gecommit. Als je al andere dingen geprobeerd hebt, moet je misschien een `git reset HEAD@{number-of-commits-back}` doen in plaats van `HEAD~`. Erg vervelend. Allerlei suggesties zijn aangeleverd door mensen die graag meedenken om dit sneller te doen dan ik dan kon. Dank allemaal! :)
