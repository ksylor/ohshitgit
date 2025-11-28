---
tags: tip
title: A francba, diff futtatás után egyáltalán semmi sem történt?!
id: bro-hol-a-diff
order: 6
---

Ha biztos vagy benne, hogy eszközöltél módosításokat a fájlokon de a `diff` változtatások listája üres, akkor valószínűleg csak az `add`-del hozzáadtad azokat a listához, de nem commiteltél így egy speciális opciót kell használnod.

```git
git diff --staged
```

Mert ezek már indexelésre kerültek...? &macr;\\\_(ツ)\_/&macr; (Igen tudom, hogy ez egy feature nem egy bug, de rettentően zavarba ejtő és nagyon nem egyértelmű az első alkalommal amikor ez felmerül.)
