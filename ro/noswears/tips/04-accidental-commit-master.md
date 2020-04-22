---
tags: tip
title: Pisici, am comis din greseală ceva în master care ar fi trebuit să fie pe un branch nou-nouț!
id: accidental-commit-master
order: 4
---

```git
# creează un branch de pe starea curenta a masterului
git branch un-nume-de-branch-nou
# scoate ultimul commit din master branch
git reset HEAD~ --hard
git checkout un-nume-de-branch-nou
# commitul tău este acum in branchul ăsta :)
```

Notă: chestia asta nu merge dacă deja ai împins commitul într-un branch public/comun și, dacă ai încercat alte lucruri înainte, s-ar putea să ai nevoie de `git reset HEAD@{number-of-commits-back}` în loc de `HEAD~`. Valea plângerii. Mai mult, mulți, mulți, mulți oameni au sugerat un fel foarte tare de a face chestia asta mai scurtă, pe care eu personal nu il știam. Vă mulțumesc tuturor!
