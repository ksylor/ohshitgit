---
tags: tip
title: A francba, ezt nagyon elszúrtam, kérlek add, hogy legyen egy varázslatos időgép a Gitben!
id: varazslatos-idogep
order: 1
---

```git
git reflog
# itt látod az összes változtatást, amit a 
# gittel végrehajtottál, az összes branchen!
# mindegyiknek van egy HEAD@{index} indexe
# találd meg azt, ami előtt minden elromlott
git reset HEAD@{index}
# huss, varázslatos időgép
```

Használd ezt arra, hogy visszaszerezz olyan dolgokat amiket véletlenül töröltél, vagy távolíts el olyanokat, amik elrontották a könyvtárat. Vagy állíts mindent helyre egy rossz merge után, vagy csak egyszerűen juss vissza arra a pontra, ahol még minden működött. Ezt a `reflog` parancsot RENGETEGSZER használom és nem tudok elégszer köszönetet mondani azoknak, akik javasolták, hogy kerüljön ide be!
