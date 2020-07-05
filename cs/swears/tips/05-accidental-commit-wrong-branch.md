---
tags: tip
title: Do hajzlu, omylem jsem udělal commit do špatné větve!
id: accidental-commit-wrong-branch
order: 5
---

```git
# vrat zpet poslední commit, ale zmeny v souborech nech
git reset HEAD~ --soft
git stash
# presun se do te spravne vetve
git checkout nazev-te-spravne-vetve
git stash pop
git add . # nebo pridej jednotlive soubory
git commit -m "vas popisek sem"
# nyni jsou tvoje zmeny ve spravne vetvi
```

Hodně lidí navrhovalo také možnost použití `cherry-pick` pro tuto situaci. Prostě si vyber, která z možností ti dává největší smysl!

```git
git checkout nazev-te-spravne-vetve
# prekopirujte posledni commit z masteru
git cherry-pick master
# smazte jej z masteru
git checkout master
git reset HEAD~ --hard
```