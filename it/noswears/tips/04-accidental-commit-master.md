---
tags: tip
title: Dangit, ho accidentalmente fatto una commit su master che sarebbe dovuta essere su una branch nuova!
id: commit-master-accidentale
order: 4
---

```git
# crea una branch nuova dallo stato attuale di master
git branch nome-qualsiasi-branch-nuova
# rimuovi l'ultima commit dalla branch master
git reset HEAD~ --hard
git checkout nome-branch-appena-creata
# adesso la tua commit vive in questa branch :)
```

Nota: questo metodo non funzionerà se hai già pushed la commit verso una branch pubblica/condivisa; inoltre se hai già provato a risolvere in altri modi, puó darsi che tu debba `git reset HEAD@{number-of-commits-back}` invece di `HEAD~`. Tristezza infinita. Inoltre, tante tante tante persone mi hanno suggerito un modo per rendere questo metodo piú corto di com'era, di cui non avevo idea. Grazie a tutti!