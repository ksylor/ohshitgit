---
tags: tip
title: Osti d'marde, je viens de commiter et il manque une toute petite modification&nbsp;!
id: modifier-le-dernier-commit
order: 2
---

```git
# faire ta correction
git add . # ou ajouter les fichiers un à un
git commit --amend --no-edit
# ton dernier commit contient désormais votre modification !
# ATTENTION : ne jamais amend-er les commits publics
```

Cela m'arrive généralement quand je commite puis lance des
tests/lints... et crisse, j'ai oublié un espace après une
virgule. Tu peux aussi faire le changement via un nouveau commit
puis faire `rebase -i` afin de fusionner les deux commits, mais c'est
minimum un million de fois plus rapide.

*Avertissement&nbsp;: Ne jamais faire un `amend` sur des commits déjà
poussés vers une branche publique/partagée&nbsp;! Uniquement ceux qui
n'existent que dans ta copie locale ou tu cours après le trouble...*
