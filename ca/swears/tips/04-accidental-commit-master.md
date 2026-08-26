---
tags: tip
title: Oh merda, he fet commit accidentalment a master d'una cosa que hauria d'haver anat en una branca nova!
id: commit-accidental-a-master
order: 4
---

```git
# crea una branca nova a partir de l'estat actual de master
git branch some-new-branch-name
# elimina l'últim commit de la branca master
git reset HEAD~ --hard
git checkout some-new-branch-name
# ara el teu commit viu en aquesta branca :)
```

Nota: això no funciona si ja has pujat el commit a una branca pública o compartida i, si abans has provat altres coses, potser hauràs de fer `git reset HEAD@{number-of-commits-back}` en lloc de `HEAD~`. Tristesa infinita. A més, molta gent va suggerir una manera genial d'escurçar-ho que jo mateix no coneixia. Gràcies a tothom!
