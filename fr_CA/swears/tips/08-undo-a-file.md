---
tags: tip
title: Mange de l'osti d'marde mon crisse de sale, je veux juste annuler la modification d'un fichier&nbsp;!
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

Quand j'ai enfin réussi à comprendre cette crisse d'affaire, c'était
ENORME. ENORME&nbsp;!  ENAUUUUURME... Non mais sérieux&nbsp;! C'est
qui l'ostie de cave qui a pensé que ça avait de l'allure d'utiliser un
`checkout --` pour annuler les modifications d'un fichier&nbsp;?
:shakes-fist-at-linus-torvalds:
