---
tags: tip
title: A la merda tot això, jo plego.
id: a-la-merda-aixo
note: this should always be the last one in the list, so setting order to 20 so I don't have to re-name/re-order it
order: 20
---

```git
cd ..
sudo rm -r fucking-git-repo-dir
git clone https://some.github.url/fucking-git-repo-dir.git
cd fucking-git-repo-dir
```

Gràcies a Eric V. per aquesta. Totes les queixes sobre l'ús de `sudo` en aquest acudit les podeu adreçar a ell.

De debò: si la teva branca està tan feta pols que necessites restablir l'estat del repositori perquè sigui igual que el repositori remot d'una manera «aprovada per Git», prova això, però vigila: són accions destructives i irrecuperables!

```git
# obtén l'estat més recent d'origin
git fetch origin
git checkout master
git reset --hard origin/master
# elimina els fitxers i directoris sense seguiment
git clean -d --force
# repeteix checkout/reset/clean per a cada branca feta pols
```
