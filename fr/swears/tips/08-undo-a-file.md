---
tags: tip
title: Et merde, je veux annuler la modification d'un fichier !
id: annuler-un-fichier
order: 8
---

```git
# trouver le hash d'un commit d'avant la modification
git log
# se déplacer dans l'historique avec flèche haut / flèche bas
# une fois le commit trouvé, mémoriser son hash
git checkout [hash mémorisé] -- path/to/file
# l'ancienne version du fichier est désormais dans l'index
git commit -m "Super, pas de copier/coller pour annuler"
```

Quand j'ai enfin réussi à capter le truc, c'était ENORME. ENORME ! ENAUUUUURME... Non mais sérieux ! C'est quoi ce putain de monde où on doit utiliser un `checkout --` pour annuler les modifications d'un fichier ? :shakes-fist-at-linus-torvalds:
