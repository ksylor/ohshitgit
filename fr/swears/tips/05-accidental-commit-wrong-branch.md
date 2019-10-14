---
tags: tip
title: Et merde, je me suis trompé de branche pour mon commit !
id: commit-dans-mauvaise-branche
order: 5
---

```git
# annuler le dernier commit, mais conserver les modifications
git reset HEAD~ --soft
git stash
# passer sur la bonne branche
git checkout nom-de-la-branche-correcte
git stash pop
git add . # ou ajouter les fichiers un à un
git commit -m "votre message ici";
# maintenant vos modifications sont sur la bonne branche
```

Pas mal de gens ont conseillé d'utiliser `cherry-pick` dans ce cas-là, donc à vous de faire votre choix et d'utiliser ce qui vous semble le plus logique !

```git
# passer sur la bonne branche
git checkout nom-de-la-branche-correcte
# y récupérer le dernier commit du master
git cherry-pick master
# supprimer le dernier commit du master
git checkout master
git reset HEAD~ --hard
```
