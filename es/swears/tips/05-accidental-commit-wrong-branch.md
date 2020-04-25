---
tags: tip
title: Oh shit, accidentalmente hice commit a la rama equivocada!
id: commit-accidental-en-rama-equivocada
order: 5
---

```git
# deshaz el útlimo commit, pero deja los cambio disponibles
git reset HEAD~ --soft
git stash
# muevete a la rama correcta
git checkout nombre-de-la-rama-correcta
git stash pop
git add . # or add individual files
git commit -m "your message here";
# ahora tus cambios estan en la rama correcta
```

Mucha gente sugirió usar `cherry-pick` para esta situacion, asi que, usa la que más sentido te haga!

```git
git checkout nombre-de-la-rama-correcta
# coge el último commit de master
git cherry-pick master
# borralo de master
git checkout master
git reset HEAD~ --hard
```
