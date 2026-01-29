---
tags: tip
title: Ó basszameg, commiteltem és azonnal rá is jöttem, hogy egy apró módosítást kihagytam!
id: legutobbi-commit-modositasa
order: 2
---

```git
# hajtsd végre a változtatást
git add . # vagy csak egyes fájlokat adj hozzá
git commit --amend --no-edit
# most már az utolsó commited tartalmazza
# ezt az apró változtatást!
# FIGYELEM: soha ne módosíts publikus commitet!
```

Ez általában akkor történik velem, ha commitelek majd utána futtatom a tesztelőket, lintelőket... a kurva élet, nem tettem szóközt egy egyenlőségjel után. Persze ezt úgy is megteheted, ha csinálsz egy új commitet és utána futtatod a `rebase -i` parancsot, ami effektíve összefűzi a kettőt, de ez körülbelül ezerszer jobb.

*Figyelem: soha ne módosítsd azokat a commiteket, amiket már feltöltöttél nyilvános vagy megosztott branchre! Csak a te helyi változtatásaidat kezeld így, különben garantálom, hogy dádá lesz.*