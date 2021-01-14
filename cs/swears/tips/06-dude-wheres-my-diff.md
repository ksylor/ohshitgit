---
tags: tip
title: Do hajzlu, spustil jsem diff, ale nic se nestalo?!
id: dude-wheres-my-diff
order: 6
---

Pokud víš, že jsi udělal změny, ale `diff` je prázdný, pak sis pravděpodobně přidal(`add`) soubory do staging stavu a proto budeš potřebovat použít speciální příznak.

```git
git diff --staged
```

&macr;\\\_(ツ)\_/&macr; - já vím, že to je validní chování a ne chyba, ale když se vám to stane poprvé, tak je to k posrání!
