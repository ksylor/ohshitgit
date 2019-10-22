---
tags: tip
title: Oh shit, ho provato a vedere un diff ma non è successo un cazzo?! 
id: dude-wheres-my-diff
order: 6
---

Se sai di aver fatto modifiche su alcuni file, ma `diff` è vuoto, probabilmente hai già `add` i tuoi files e devi fare un `diff` usando una flag apposita.

```git
git diff --staged
```

File che appartengono a questa categoria &macr;\\_(ツ)_/&macr; (si, lo so che è una caratteristica voluta, non un bug, ma ti confonde la prima volta che succede!)