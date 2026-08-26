---
tags: tip
title: Oh merda, he fet commit i de seguida m'he adonat que necessito fer un petit canvi!
id: canviar-ultim-commit
order: 2
---

```git
# fes el teu canvi
git add . # o afegeix fitxers individualment
git commit --amend --no-edit
# ara el teu últim commit conté el canvi!
# AVÍS: no modifiquis mai commits públics
```

Això em passa sovint quan faig commit i després executo proves o linters... i merda, m'he oblidat de posar un espai després d'un signe igual. També podries fer el canvi en un commit nou i després executar `rebase -i` per fusionar-los, però això és aproximadament un milió de vegades més ràpid.

*Avís: no hauries de modificar mai commits que ja hagis pujat a una branca pública o compartida! Modifica només commits que existeixin a la teva còpia local o ho passaràs malament.*
