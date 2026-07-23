---
tags: tip
title: Foda-se, fiz um diff, mas está vazio?!
id: dude-wheres-my-diff
order: 6
---

Se tens a certeza que alteraste ficheiros, mas o `diff` aparece vazio, provavelmente fizeste `add` dos ficheiros à área de staging e terás que usar uma flag.

```git
git diff --staged
```

Arquivar sob ¯\_(ツ)_/¯ (sim, eu sei que não defeito, é feitio, mas é estupidamente confuso e não é óbvio a primeira vez que te acontece!)
