---
tags: tip
title: Oh merda, he fet commit accidentalment a la branca equivocada!
id: commit-accidental-branca-equivocada
order: 5
---

```git
# desfés l'últim commit, però conserva els canvis disponibles
git reset HEAD~ --soft
git stash
# ves a la branca correcta
git checkout name-of-the-correct-branch
git stash pop
git add . # o afegeix fitxers individualment
git commit -m "el teu missatge aquí"
# ara els canvis són a la branca correcta
```

Molta gent també ha suggerit fer servir `cherry-pick` en aquesta situació, així que tria l'opció que et sembli més adient!

```git
git checkout name-of-the-correct-branch
# agafa l'últim commit de master
git cherry-pick master
# elimina'l de master
git checkout master
git reset HEAD~ --hard
```
