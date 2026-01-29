---
tags: tip
title: A francba vissza kell vonnom egy commitet úgy 5 committel ezelőttről!
id: commit-visszavonasa
order: 7
---

```git
# visszavonandó commit megkeresése
git log
# használd a nyilakat a fel és lefelé mozgatáshoz
# ha megtaláltad az előzményekben a commitet, mentsd el a hashét
git revert [mentett hash]
# a git készít egy új commitet ami visszavonja a kijelöltet
# kövesd az utasításokat az üzenet módosításához
# vagy csak mentsd el ahogy van
```

Mint kiderült, nem kell levadászni ősrégi fájlok adatait és azt beilleszteni a jelenlegi fájlba hogy vissza lehessen vonni ezeket a változtatásokat. Ha esetleg (véletlenül) sikerült egy szoftverhibát commitelned akkor az egészet pikk-pakk visszavonhatod a `revert` paranccsal!

Hogyne, egyetlen fájlon történt változtatás is simán visszavonható! De ahogy a git esetében lenni szokott, nagyon más parancsok vezetnek oda...
