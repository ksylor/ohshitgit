---
tags: tip
title: Oh shit, ho provato a usare diff ma non è successo un cazzo?!
id: dude-wheres-my-diff
order: 6
---

Se sai di aver fatto modifiche ad alcuni file, ma `diff` non ti da risultati, probabilmente hai già `add` i tuoi files e devi usare `diff` usando una flag apposita.

```git
git diff --staged
```

File che appartengono a questa categoria &macr;\\\_(ツ)\_/&macr; (si, lo so che è una caratteristica voluta, non un bug, ma la prima volta che succede ti confonde!)
