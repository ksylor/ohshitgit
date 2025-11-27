---
tags: tip
title: Ó basszameg, egy fájlon vissza kell vonnom a változtatásaimat!
id: fajl-visszavonasa
order: 8
---

```git
# keresd meg az ahhoz tartozó hasht
# mielőtt a fájlt módosítottad volna
git log
# használd a nyilakat a fel és lefelé mozgatáshoz
# ha megtaláltad a commitedet, mentsd el a hashét
git checkout [mentett hash] -- fajl/eleresi/utvonala
# és a régi fájl már ott van az indexben
git commit -m "Azt a kurva, nem kell a másolttészta"
```

Mikor erre rájöttem egy hatalmas világ nyílt ki előttem. Mármint óriási. KURVÁRA GIGÁSZI. De most komolyan, melyik retkes telibekúrt bolygón az a leglogikusabb lépés, hogy egy `checkout --` paranccsal 'kicsekkoljunk' egy szájbatekert fájlt?! :shakes-fist-at-linus-torvalds:
