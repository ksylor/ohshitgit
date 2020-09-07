---
tags: tip
title: A u pičku materinu, sjebo sam nešto i to dobro, molim te reci mi da git ima čarobnu vremeplov mašinu!?!
id: magicna-vremeplov-masina
order: 1
---

```git
git reflog
# vidjećeš listu svih stvari koje si
# radio u gitu, na svim brančevima!
# svaki od njih ima index HEAD@{index}
# nađi onaj koji tražiš prije nego što pokvariš sve
git reset HEAD@{index}
# magična vremeplov mašina
```

Možeš da koristiš ovu komandu da vratiš stvari koje si slučajno izbrisao, ili da izbrišeš neke stvari koji si probao a koje su skrišile tvoj repo, ili da vratiš staro stanje poslije lošeg merga, ili da se vratiš u vrijeme kada su stvari zapravo radile. Ja koristim `reflog` STALNO. Kapa dole svim svim svim svim ljudima koji su predložili da se doda ova komanda!