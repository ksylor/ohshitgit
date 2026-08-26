---
tags: tip
title: Dangit, he fet una cosa terriblement malament; digues-me que Git té una màquina del temps màgica!?!
id: maquina-del-temps-magica
order: 1
---

```git
git reflog
# veuràs una llista de tot el que has fet
# a Git, en totes les branques!
# cada entrada té un índex HEAD@{index}
# busca la d'abans d'espatllar-ho tot
git reset HEAD@{index}
# màquina del temps màgica
```

Pots fer servir això per recuperar coses que has esborrat accidentalment, eliminar coses que has provat i que han espatllat el repositori, recuperar-te d'un merge desastrós o simplement tornar a un moment en què les coses funcionaven. Faig servir `reflog` MOLTÍSSIM. Moltes gràcies a totes les persones que van suggerir afegir-lo!
