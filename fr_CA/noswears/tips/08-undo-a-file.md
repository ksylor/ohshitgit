---
tags: tip
title: Tabarnouche, je veux annuler la modification d'un fichier&nbsp;!
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

Quand j'ai enfin réussi à connaître ce truc, c'était ENORME. ENORME&nbsp;! ENAUUUUURME... Non mais sérieux&nbsp;! C'est quoi ce monde où on doit utiliser un `checkout --` pour annuler les modifications d'un fichier&nbsp;? :shakes-fist-at-linus-torvalds:
