---
tags: tip
title: Dangit, ek moet my veranderinge aan 'n leêr terugkeer!
id: undo-a-file
order: 8
---

```git
# vind 'n hash vir 'n commit voordat die lêer verander is
git log
# gebruik jou sleutelbord pyljies om op 
# en af in geskiedenis te beweeg
# wanneer jy jou commit gevind het, stoor die hash
git checkout [gestoorde hash] -- path/to/file
# die ou weergawe van die leêr is nou in jou indeks
git commit -m "Wow, geen knip en plak om terug te keer nie"
```

Toe ek hierdie uiteindelik uitgevind het was fantasties. FANTASTIES. Maar in alle erns, op watter planeet maak `checkout --` sin as die beste manier om 'n leêr terug te keer? :wys-middelfinger-vir-linus-torvalds: