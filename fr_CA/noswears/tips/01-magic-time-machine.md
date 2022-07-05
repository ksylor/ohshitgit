---
tags: tip
title: Ayoye, j'ai fait quelque chose de pas correct pantoute, par pitié dites-moi que git peut voyager dans le temps&nbsp;!?!
id: magic-time-machine
order: 1
---

```git
git reflog
# liste tout ce que vous avez fait dans git,
# quelle que soit la branche !
# chaque entrée correspond à un index HEAD@{index}
# trouvez celui juste avant d'avoir tout cassé
git reset HEAD@{index}
# git est magique
```

Ça sert pour récupérer une suppression accidentelle, ou annuler des tentatives qui ont cassé le dépôt, ou s'en sortir après une mauvaise fusion, ou simplement revenir en arrière à un point où les choses fonctionnaient correctement. J'utilise BEAUCOUP `reflog`. Chapeau trèèèès bas aux nombreuuuuuuses personnes qui m'ont suggéré cette technique&nbsp;!
