---
tags: tip
title: Et merde, je viens de commiter et il manque une toute petite modification !
id: modifier-le-dernier-commit
order: 2
---

```git
# faire votre correction
git add . # ou ajouter les fichiers un à un
git commit --amend --no-edit
# votre dernier commit contient désormais votre modification !
# ATTENTION : ne jamais amend-er les commits publics
```

Cela m'arrive généralement quand je commite puis lance des tests/lints... et PDM, j'ai oublié un espace après une virgule. Vous pouvez aussi faire le changement via un nouveau commit puis faire `rebase -i` afin de fusionner les deux commits, mais c'est minimum un million de fois plus rapide.

*Avertissement : Ne jamais faire un `amend` sur des commits déjà poussés vers une branche publique/partagée ! Uniquement ceux qui n'existent que dans votre copie locale ou vous irez au-devant de gros ennuis...*
