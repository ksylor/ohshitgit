---
tags: tip
title: Oh shit, hice algo terriblemente mal, por favor dime que git tiene una máquina del tiempo mágica!?!
id: maquina-del-tiempo-magica
order: 1
---

```git
git reflog
# verás una lista de todo lo que
# has hecho en git, ¡en todas las ramas!
# cada uno tiene un index HEAD@{index}
# busca el comando anterior al que rompió todo
git reset HEAD@{index}
# maquina del tiempo mágica
```

Puedes usar esto para recuperar cosas que borraste accidentalmente, o simplemente para borrar cosas que intentaste hacer que rompieron el repo, o para recuperarte de un mal merge, o simplemente para volver a un momento donde las cosas funcionaban. Yo uso `reflog` MUCHÍSIMO. Mega agradecimiento para las muchiiiiismas personas que sugirieron que lo agregue.
