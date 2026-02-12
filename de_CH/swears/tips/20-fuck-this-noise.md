---
tags: tip
title: Gopferdammti Unordnig, ich gib uf!
id: gopferdammti-unordig
note: this should always be the last one in the list, so setting order to 20 so I don't have to re-name/re-order it
order: 20
---

```git
cd ..
sudo rm -r gopferdammts-git-repo
git clone https://some.github.url/gopferdammts-git-repo.git
cd gopferdammts-git-repo
```

Danke an Eric V. für dä Tipp. Alli Beschwerden über d Verwändig vo `sudo` bitte an ihn schigge.

Aber möl ernsthaft: wenn di Branch soo verhunzt isch, dass du dr Stand vo dim Repo uf dr Stand vom Git-Server zruggsetze muesch, denn sötsch du das do ausprobieren. Aber ufpasse, denn die Befähl lön sich nid rückgängig mache!


```git
# Hol dr neusti Stand vom Server
git fetch origin
git checkout master
git reset --hard origin/master
# Lösch alli Dateie und Ordner, die nonig 
# iicheckt sin
git clean -d --force
# Wiederhol checkout/reset/clean für jede verhunzte Branch
```