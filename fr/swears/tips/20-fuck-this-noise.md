---
tags: tip
title: Et merde, je laisse tomber.
id: je-repars-a-zero
note: this should always be the last one in the list, so setting order to 20 so I don't have to re-name/re-order it
order: 20
---

```git
cd ..
sudo rm -r depot-git-foireux
git clone https://some.github.url/depot-git-foireux.git
cd depot-git-foireux
```

Merci à Eric V. pour ce conseil. Par conséquent, en cas de réclamation à cause du `sudo`, voyez-ça directement avec lui...

Plus sérieusement, quand votre branche est devenue tellement foireuse que le plus simple c'est de revenir à l'état d'origine du dépôt distant, essayez cette méthode "homologuée git". Mais attention, c'est ferme et définitif&nbsp;: impossible de revenir en arrière&nbsp;!

```git
# obtenir la dernière version du serveur
git fetch origin
git checkout master
git reset --hard origin/master
# supprimer les fichiers et répertoires non archivés
git clean -d --force
# répéter checkout/reset/clean pour chaque branche problématique
```
