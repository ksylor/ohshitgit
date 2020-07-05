---
tags: tip
title: Do háje, omylem jsem udělal do masteru commit, který ale měl být v zcela nové větvi!
id: accidental-commit-master
order: 4
---

```git
# vytvor novou vetev ze soucasneho stavu masteru
git branch nazev-nejake-nove-vetve
# odstran posledni commit z master vetve
git reset HEAD~ --hard
git checkout nazev-nejake-nove-vetve
# tvuj commit je nyni v teto vetvi :)
```

Poznámka: toto nezafunguje, pokud jsi již provedl push tohoto commitu do veřejné/sdílené větve. Pokud jsi již zkoušel jiné věci, tak možná budeš potřebovat `git reset HEAD@{pocet-commitu-zpet}` namísto `HEAD~`. To zamrzí. Mnoho mnoho mnoho lidí navrhovalo super kratší postup, o kterém jsem nevěděl. Díky vám všem!