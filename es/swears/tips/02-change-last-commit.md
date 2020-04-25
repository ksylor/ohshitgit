---
tags: tip
title: Oh shit, hice commit e inmediatamente me di cuenta que tenia que hacer un pequeño cambio!
id: cambiar-ultimo-commit
order: 2
---

```git
# realizar cambios
git add . # o agregue archivos individuales
git commit --amend --no-edit
# ahora tu último commit contiene los cambios!
# ADVERTENCIA: nunca arregles commits públicos
```

Esto suele pasarme cuando hago commit y luego corro tests/linters... y mátame, me olvide de poner un espacio antes de un signo igual. También podrías realizar el cambio como un nuevo commit y luego hacer `rebase -i` para realizar un squash the ambos cambios juntos, pero esta manera es un millon de veces más rápido.

*Advertencia: Nunca deberías arreglar commits que han sido subidos a ramas públicas/compartidas. Solo arregla commits que existan en tu copia local o la vas a pasar mal.*
