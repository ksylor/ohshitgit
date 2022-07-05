---
tags: tip
title: Ouate de phoque, je veux annuler un truc genre 5 commits en arrière&nbsp;!
id: annuler-un-commit
order: 7
---

```git
# trouver le commit que vous devez annuler
git log
# se déplacer dans l'historique avec flèche haut / flèche bas
# une fois le commit trouvé, mémoriser son hash
git revert [hash mémorisé]
# git va créer un nouveau commit qui annule ce commit
# suivre les instructions pour éditer le message de commit
# ou contentez-vous d'enregistrer et valider
```

Il s'avère que vous n'avez pas besoin de chercher l'ancien fichier puis copier-coller son contenu dans le fichier actuel pour annuler ce qui a été modifié&nbsp;! Si vous avez commité un bug, vous pouvez annuler votre livraison d'un seul coup avec `revert`.

Vous pouvez aussi annuler un seul fichier plutôt que le commit complet&nbsp;! Mais bien entendu, ça ne serait pas vraiment du git si cela n'impliquait pas un jeu de commandes complètement différentes...
