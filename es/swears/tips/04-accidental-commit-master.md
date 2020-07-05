---
tags: tip
title: Oh shit, accidentalmente hice commit de algo a master que debía haber sido en una nueva rama!
id: commit-a-master-accidental
order: 4
---

```git
# crea una nueva rama desde master
git branch nombre-de-rama
# borra el último commit de la rama master
git reset HEAD~ --hard
git checkout nombre-de-rama
# tu commit ahora vive en al nueva rama :)
```

Nota: esto no funciona si ya haz realizado el push a una rama pública/compartida, y si haz intentado otra cosa antes, podrías necesitar hacer `git reset HEAD@{number-of-commits-back}` en vez de `HEAD~`. Tristeza infinita. También, mucuuuuuchas personas sugirieron una increible manera de hacer esto más corto que no la sabía. Gracias a todos.
