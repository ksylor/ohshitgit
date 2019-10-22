---
tags: tip
title: Dangit, ho accidentalmento fatto una commit nella branch sbagliata!
id: commit-accidentale-branch-sbagliata
order: 5
---

```git
# annulla l'ultima commit, ma mantieni i cambiamenti in modo che siano accedibili
git reset HEAD~ --soft
git stash
# spostati sulla branch giusta 
git checkout nome-della-branch-giusta
git stash pop
git add . # o aggiungi i file individualmente
git commit -m "il tuo messaggio va qui"
# ora i tuoi cambiamenti sono sulla branch giusta
```

Un sacco di persone hanno suggerito l'uso di `cherry-pick` anche per questa situazione, scegli te quale dei due ha piú senso nel tuo caso!

```git
git checkout nome-della-branch-giusta
# prendi l'ultima commit fatto su master
git cherry-pick master
# cancellala da master
git checkout master
git reset HEAD~ --hard
```