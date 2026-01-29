---
tags: tip
title: A francba, véletlenül a fő branchre raktam egy olyan módosítást, amit egy vadonat újra kellett volna!
id: veletlen-fo-branch
order: 4
---

```git
# csinálj egy új branchet a master jelenlegi állapotáról
git branch valami-uj-branch-neve
# távolítsd el a legutóbbi commitet a fő branchről
git reset HEAD~ --hard
git checkout valami-uj-branch-neve
# a commited ebben az új branchben létezik már :)
```

Megjegyzés: ez nem működik abban az esetben, ha már feltöltötted a commitedet egy nyilvános vagy megosztott branchre és ha már mást is kipróbáltál először, lehet, hogy a `git reset HEAD@{number-of-commits-back}` parancsot kell használd a `HEAD~` helyett. Végtelen elkeseredettség... Illetve nagyon-nagyon sokan javasoltak egy szuper módszert, amivel ez az egész sokkal rövidebbé tehető, köszönöm nektek!
