---
tags: tip
title: Ó, baszki, valami szörnyen rosszat csináltam, kérlek mondd, hogy a gitnek van egy mágikus időgépe!?!
id: magikus-ido-gep
order: 1
---

```git
git reflog
# látni fogsz egy listát minden eddigi gites 
# tevékenységedről, minden git ágon!
# mindegyiknek van egy HEAD@{index} formátumú indexe
# keresd meg azt, amiben még nem törtél el mindent
git reset HEAD@{index}
# mágikus időgép
```

Ezt használhatod arra, hogy véletlen kitörölt dolgokat szerezz vissza, vagy olyan dolgot törölj, amit kipróbáltál és eltörte a repót, vagy visszaállni egy rossz merge-ről, vagy szimplán visszamenni egy olyan időbe, amikor a dolgok még valóban működtek. Én SOKAT használom a `reflog`-ot. Mega kalapemelés a nagyon nagyon nagyon nagyon nagyon sok embernek, akik javasolták, hogy adjam ezt is a listához!