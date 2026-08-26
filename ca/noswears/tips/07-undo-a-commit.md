---
tags: tip
title: Dangit, necessito desfer un commit de fa uns cinc commits!
id: desfer-un-commit
order: 7
---

```git
# busca el commit que necessites desfer
git log
# fes servir les tecles de fletxa per desplaçar-te per l'historial
# quan trobis el commit, desa'n el hash
git revert [hash desat]
# Git crearà un commit nou que desfà aquell commit
# segueix les indicacions per editar el missatge del commit
# o simplement desa'l i fes el commit
```

Resulta que no cal buscar i copiar-enganxar el contingut antic del fitxer dins del fitxer actual per desfer els canvis! Si has fet commit d'un error, pots desfer el commit d'una sola vegada amb `revert`.

També pots revertir un sol fitxer en lloc d'un commit sencer! Però, és clar, a l'estil típic de Git, és un conjunt de comandes completament diferent...
