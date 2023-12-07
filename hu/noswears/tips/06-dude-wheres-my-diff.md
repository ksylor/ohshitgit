---
tags: tip
title: Teringettét, megpróbáltam különbséget nézni, de nem történt semmi?!
id: haver-hol-a-diffem
order: 6
---

Ha tudod, hogy vannak változtatásaid, de a `diff` mégis üres, valószínűleg a staging-hez `add`-tad hozzá a fájljaidat, és egy speciális kapcsolót kell használnod.

```git
git diff --staged
```

Hogy miért van itt a fájl? &macr;\\\_(ツ)\_/&macr; (Igen, tudom, hogy ez egy funkció, és nem egy hiba, de nem egyértelmű, és összezavarja az embert, amikor először találkozik vele.)
