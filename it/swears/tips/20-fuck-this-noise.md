---
tags: tip
title: Che casino di merda, mi arrendo.
id: che-casino
note: this should always be the last one in the list, so setting order to 20 so I don't have to re-name/re-order it
order: 20
---

```git
cd ..
sudo rm -r stupida-git-repo
git clone https://some.github.url/stupida-git-repo.git
cd stupida-git-repo-dir
```

Grazie a Eric V. per questa dritta. Tutti le lamentele riguardo l'uso di `sudo` possono essere rivolte a lui.

Davvero peró, se la tua branch è così incasinata che hai bisogno di resettare lo stato della tua repository così che sia lo stesso della repo remota in un modo che sia 'in stile git', prova il seguente metodo, ma fai attenzione, perchè le seguenti azioni sono distruttive e non si puó tornare indietro!

```git
# guarda lo stato di git piú recente
git fetch origin
git checkout master
git reset --hard origin/master
# elimina files e cartelle non tracciate
git clean -d --force
# ripeti checkout/reset/clean per ogni branch incasinata
```
