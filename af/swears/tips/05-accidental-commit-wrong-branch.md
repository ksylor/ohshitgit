---
tags: tip
title: Oh shit, ek het perongeluk na die verkeerde tak commit!
id: perongelukke-commit-na-verkeerde-tak
order: 5
---

```git
# maak die laaste opdrag ongedaan, 
# maar laat die wysigings beskikbaar
git reset HEAD~ --soft
git stash
# skuif na die regte tak
git checkout naam-van-regte-tak
git stash pop
git add . # of voef individuele leêrs by
git commit -m "jou boodskap hier"
# nou is jou wysigings op die regte tak
```

Baie mense het voorgestel om `cherry-pick` vir die geval ook te gebruik. Gebruik maar wat beste vir jou werk!

```git
git checkout naam-van-regte-tak
# gryp die laaste commit na die meester tak
git cherry-pick master
# wis dit uit van die meester tak
git checkout master
git reset HEAD~ --hard
```