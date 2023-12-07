---
tags: tip
title: Teringettét, egy fájlon kell visszavonnom a változtatásaimat!
id: fajl-visszavonasa
order: 8
---

```git
# keress meg egy, a fájl változtatása előtti, commit hash-t
git log
# az előzmények görgetéséhez használd a le- és fel nyilakat
# ha megtaláltad a commit-ot, jegyezd fel a hash-ét
git checkout [mentett hash] -- a/fájl/útvonala
# a fájl régi verziója elérhető lesz az indexben
git commit -m "Azta, nem kell copy-paste-elni a visszavonáshoz"
```

Mikor végre sikerült ezt kisilabizálnom, az HATALMAS volt. HATALMAS. HA-TAL-MAS! De most komolyan, melyik bolygón van a `checkout --`-nak értelme, mint a legjobb mód, egy fájl visszavonására? :ökölrázás-linus-torvalds-felé: