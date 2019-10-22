---
tags: tip
title: Dangit, ho accidentalmente fatto una commit su master che sarebbe dovuta essere su una branch nuova!
id: commit-master-accidentale
order: 4
---

```git
# crea una nuova branch dallo stato attuale di master
git branch nome-qualsiasi-nuova-branch
# rimuovi l'ultima commit dalla master branch
git reset HEAD~ --hard
git checkout nome-branch-appena-creata
# adesso la tua commit vive in questa branch :)
```

Nota: questo metodo non funzionerà se hai già pushed la commit verso una branch pubblica/condivisa, e se hai già provato a risolvere in altri modi, puó darsi che tu debba `git reset HEAD@{number-of-commits-back}` invece di `HEAD~`. Tristezza infinita. Inoltre, tante tante tante persone hanno suggerito un modo per rendere questo metodo piú corto di com'era di cui non avevo idea. Grazie a tutti!