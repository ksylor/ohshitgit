---
tags: tip
title: Voyons donc tabarnak, j'ai tout peté, y'a-tu une machine à voyager dans le temps dans git&nbsp;!?!
id: magic-time-machine
order: 1
---

```git
git reflog
# liste tout ce que tu as fait dans git,
# quelle que soit la branche !
# chaque entrée correspond à un index HEAD@{index}
# trouvez celui juste avant d'avoir tout cassé
git reset HEAD@{index}
# git est magique
```

Ça sert pour récupérer une suppression accidentelle, ou annuler des
tentatives qui ont magané ton repository, ou s'en sortir après une
mauvaise fusion, ou simplement revenir en arrière à un point où les
choses fonctionnaient correctement. J'utilise BEAUCOUP
`reflog`. Chapeau trèèèès bas aux nombreuuuuuuses personnes qui m'ont
suggéré cette technique&nbsp;!
