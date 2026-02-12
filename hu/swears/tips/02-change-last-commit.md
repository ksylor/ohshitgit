---
tags: tip
title: Ó, baszki, commit-oltam, és utána jöttem rá, hogy még egy kis változtatást csinálnom kell!
id: utolso-commit-modositasa
order: 2
---

```git
# készítsd el a változtatást
git add . # vagy adj hozzá egyéni fájlokat
git commit --amend --no-edit
# az utolsó commit most már tartalmazza a változtatást!
# FIGYELMEZTETÉS: soha ne módosíts publikus commit-okat
```

Ez általában akkor történik velem, amikor commit-olok, lefuttatom a teszteket/linter-eket... és hogy baszódna ketté, nem tettem szóközt egy egyenlőségjel után. Ez megoldható egy új commit-ként is, majd `rebase -i`-t futtatva a commit-ok egyesítése céljából, de ez milliószor gyorsabb.

*Figyelem: Soha ne módosíts olyan commit-okat, amelyek már felkerültek egy publikus/megosztott ágra! Csak azokat módosítsd, amik csak a helyi repóban léteznek, különben nagyon sok kellemetlen percnek fogsz elébe nézni.*