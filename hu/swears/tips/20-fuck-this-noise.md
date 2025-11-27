---
tags: tip
title: Faszom az egészbe, feladom.
id: faszom-az-egeszbe
note: this should always be the last one in the list, so setting order to 20 so I don't have to re-name/re-order it
order: 20
---

```git
cd ..
sudo rm -r kurva-git-konyvtar
git clone https://valami.github.url/kurva-git-konyvtar.git
cd kurva-git-konyvtar
```

Ezért köszönet illeti Eric V.-t, mindenki, aki panaszkodik a `sudo` használatára neki tegye!


De most komolyan. Ha a branched olyan mértékben van széttrollkodva, hogy már vissza kell az eredeti állapotot állítanod a törzskönyvtár alapján, akkor próbáld ki ezt, de vigyázzz, mert ez destruktív és visszafordíthatatlan lépés.

```git
# az origin legutóbbi változatának lekérése
git fetch origin
git checkout master
git reset --hard origin/master
# nem követett fájlok és könyvtárak törlése
git clean -d --force
# a checkout/reset/clean minden elbaszott branchre megismétlendő
```
