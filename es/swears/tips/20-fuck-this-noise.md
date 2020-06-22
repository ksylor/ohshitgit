---
tags: tip
title: A la mierda este ruido, me doy por vencido.
id: fuck-this-noise
note: this should always be the last one in the list, so setting order to 20 so I don't have to re-name/re-order it
order: 20
---

```git
cd ..
sudo rm -rf fucking-git-repo-dir
git clone https://some.github.url/fucking-git-repo-dir.git
cd fucking-git-repo-dir
```

Gracias a Eric V. por esta. Todas las quejas por el uso de `sudo` en este chiste pueden ser dirigidas a él.

En serio, si tu rama está tan rota que necesitas reiniciar el estado de tu repo al mismo que el repo remoto en una manera aprobada por git, prueba esto, pero ten en cuenta que son acciones destructivas e irrecuperables!

```git
# recupera el último estado del origen
git fetch origin
git checkout master
git reset --hard origin/master
# elimina los archivos y directorios sin seguimiento
git clean -d --force
# repite checkout/reset/clean para cada rama rota
```
