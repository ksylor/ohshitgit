---
tags: tip
title: Ó, baszki, vagy 5 commit-tal ezelőttről kellene visszavonnom egy változtatást!
id: commit-visszavonasa
order: 7
---

```git
# keresd meg a visszavonandó commit-ot
git log
# az előzmények görgetéséhez használd a le- és fel nyilakat
# ha megtaláltad a commit-ot, jegyezd fel a hash-ét
git revert [elmentett hash]
# a git egy új commit-ot fog létrehozni, ami visszavonja ezt a commit-ot
# kövesd az utasításokat a commit üzenet szerkesztéséhez
# vagy csak ments és commit-olj
```

Mint kiderült, a visszavonáshoz nem kell visszakeresni a fájl régi tartalmát, és azzal felülírni a meglévőt! Ha egy hibát commit-oltál, a `revert`-tel egyetlen mozdulattal vonhatod vissza a commit-ot.

Egyetlen fájl visszavonására is van lehetőség, nem csak teljes commit-éra! De természetesen, a git-hez hűen, ahhoz kibaszottul más parancsok szükségesek...
