---
tags: tip
title: Godsamme, ik heb op master gecommit en dat moest in zo'n kloterige nieuwe branch!
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
Let op: Dit werkt niet als je met je stomme hoofd de commit naar een publieke of gedeelde branch hebt gecommit. Als je heb zitten prutsen, moet je misschien een `git reset HEAD@{number-of-commits-back}` doen in plaats van `HEAD~`. Eeuwige klerezooi. Allerlei betweters hebben suggesties aangeleverd om dit sneller te doen dan ik dat kon. Dank allemaal! :)
