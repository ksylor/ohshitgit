---
tags: tip
title: Dangit, hice algo terriblemente mal, por favor dime que git tiene una maquina del tiempo mágica‽
id: maquina-del-tiempo-magica
order: 1
---

```git
git reflog
# verás una lista de todo lo que
# haz hecho en git, en todas las ramas!
# cada uno tiene un index HEAD@{index}
# busca el comando anterior al que rompio todo
git reset HEAD@{index}
# maquina del tiempo mágica
```

Puedes usar esto para recuperar cosas que borraste accidentalmente, o simplemente para borrar cosas que intentaste hacer que rompieron el repo, o para recuperate de un mal merge, o simplemente para volver a un momento donde las cosas funcionaba. Yo uso `reflog` MUCHISIMO. Mega agradecimiento para las muchiiiiismas personas que sugirieron que lo agregue.
