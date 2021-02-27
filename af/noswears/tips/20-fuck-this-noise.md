---
tags: tip
title: Vergeet van die, ek gee op.
id: vergeet-die
note: this should always be the last one in the list, so setting order to 20 so I don't have to re-name/re-order it
order: 20
---

```git
cd ..
sudo rm -r simpel-git-repo-dir
git clone https://some.github.url/simpel-git-repo-dir.git
cd simpel-git-repo-dir
```

Dankie aan Eric V. vir die ene. Alle klagtes oor die gebruik van `sudo` in hierdie grap kan op hom gerig word.


In alle erns, indien jou tak so stukkend is dat jy die toestand van jou repo moet herstel om dieselfde te wees as jou remote repo in 'n "git-goedgekeurde" manier, probeer dit. Pasop alhoewel, dit is vernietigende en onterugkeerbare aksies!

```git
# kry die nuutste toestand van die oorsprong
git fetch origin
git checkout master
git reset --hard origin/master
# skrap untracked leêrs and gidse
git clean -d --force
# herhaal checkout/reset/clean vir elke stukkende tak
```