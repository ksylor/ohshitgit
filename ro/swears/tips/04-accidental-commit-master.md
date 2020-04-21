---
tags: tip
title: Rahat, am comis din greseala ceva in master care ar fi trebuit sa fie pe un branch nou-nout!
id: accidental-commit-master
order: 4
---

```git
# creeaza un branch de pe starea curenta a masterului
git branch un-nume-de-branch-nou
# scoate ultimul commit din master branch
git reset HEAD~ --hard
git checkout un-nume-de-branch-nou
# commitul tau este acum in branchul asta :)
```

Nota: chestia asta nu merge daca deja ai impins commitul intr-un branch public/comun si daca ai incercat alte lucruri inainte, s-ar putea sa ai nevoie de `git reset HEAD@{number-of-commits-back}` in loc de `HEAD~`. Valea plangerii. Mai mult, multi, multi, multi oameni au sugerat un fel foarte tare de a face chestia asta mai scurta, pe care eu personal nu il stiam. Va multumesc tuturor!
