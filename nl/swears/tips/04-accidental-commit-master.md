---
tags: tip
title: Oh fuck, ik heb op master gecommit maar dat moest in zo'n kloterige nieuwe branch!
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
Let op: Dit werkt niet als je met je stomme hoofd de commit naar een publieke of gedeelde branch hebt gecommit. Als je al een tijdje hebt zitten prutsen, moet je misschien een `git reset HEAD@{number-of-commits-back}` doen in plaats van `HEAD~`.

Eeuwige klerezooi dat git.

Allerlei betweters hebben trouwens suggesties aangeleverd om dit nog sneller te doen dan ik dat kon. Dank allemaal! :)
