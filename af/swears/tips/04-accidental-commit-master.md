---
tags: tip
title: Oh shit, ek het perongeluk iets commit aan die meester tak wat op 'n splinter nuwe tak moes gewees het!
id: perongelukke-meester-commit
order: 4
---

```git
# maak 'n splinter nuwe tak vanuit die huidige 
# toestand can die meester tak
git branch nuwe-tak-naam
# verwyder die commit van die meester tak
git reset HEAD~ --hard
git checkout nuwe-tak-naam
# jou commit leef nou in die nuwe tak :)
```


Nota: hierdie sal nie werk as jy klaar die verandering aan 'n openbare/publieke tak gestoot het nie, en as jy ander dinge eers probeer het sal jy dalk dinge moet herstel met `git reset HEAD@{hoeveelheid-commits-terug}` in plaas daarvan om van `HEAD~` gebruik te maak. Dit lei tot oneindige hartseer. Baie baie baie mense het ook 'n fantastiese manier voorgestel wat hierdie baie korter maak wat ek nie self geken het nie. 'n Groot dankie aan almal.