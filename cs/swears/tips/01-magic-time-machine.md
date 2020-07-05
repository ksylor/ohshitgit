---
tags: tip
title: Do hajzlu, něco jsem hodně posral. Nemá náhodou git nějaký stroj času?!?
id: magic-time-machine
order: 1
---

```git
git reflog
# uvidis seznam vsech veci, ktere jsi
# delal v gitu ve vsech vetvich
# kazda z nich ma index HEAD@{index}
# najdes tu, ktera fungovala nez jsi to vsechno rozbil 
git reset HEAD@{index}
# magicky stroj casu
```

Díky tomu můžeš dostat zpět věci, které jsi omylem smazal, nebo prostě smazat věci kterými sis si rozbil repozitář, nebo opravit stav po špatném mergování, nebo prostě cestovat v čase zpět do bodu, kdy ještě věci fungovaly. Já používám `reflog` HÓÓÓDNĚ. Klouboček všem těm mnoha mnoha mnoha mnoha lidem, kteří navrhli přidat sem tento tip!