---
tags: tip
title: Hagyjuk az egészet, feladom.
id: hagyjuk-az-egeszet
note: this should always be the last one in the list, so setting order to 20 so I don't have to re-name/re-order it
order: 20
---

```git
cd ..
sudo rm -r hulye-git-repo-konyvtar
git clone https://some.github.url/hulye-git-repo-konyvtar.git
cd hulye-git-repo-konyvtar
```

Köszönet Eric V.-nek ezért a poénért. A `sudo` használata miatti panaszokat neki lehet címezni.


Komolyra fordítva, ha az ág annnyira elfuserált, hogy a repód állapotát a távoli repó állapotára kell visszaállítanod "git-helyes" módon, próbáld ki az allábit, de vigyázz, mert ezek a parancsok visznek mindent, és visszavonhatatlanok!

```git
# kérd le az origin legfrissebb állapotát
git fetch origin
git checkout master
git reset --hard origin/master
# töröld a nem követett fájlokat és könyvtárakat
git clean -d --force
# ismételd meg a checkout/reset/clean parancsokat minden elfuserált ágra
```