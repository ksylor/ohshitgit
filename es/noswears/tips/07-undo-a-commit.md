---
tags: tip
title: Dangit, necesito deshacer un commit de hace 5 comits!
id: dehacer-un-commit
order: 7
---

```git
# encuentra el commit que necesitas deshacer
git log
# usa las flechas para moverte para arriba y abajo en la historia
# una vez que encontraste el commit, guarda su hash
git revert [hash guardado]
# git va a crear un nuevo commit que deshace ese commit
# sigue las indicaciones para editar el mensaje del commit
# o simplemente guarda y haz el commit
```

Al parecer, no necesitas buscar y copiar-pegar el contenido del viejo archivo al actual para deshacer los cambios! Si hiciste commit de un bug, puedes deshacer el commit de una con `revert`

También puedes revertir un solo archivo en vez de todo un commit! Pero, por supuesto, haciendo honor a la filosofia git, es un maldito comando totalmente distinto.
