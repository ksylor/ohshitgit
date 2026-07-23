---
tags: tip
title: Foda-se, fiz uma asneira enorme, por favor diz-me que o git tem uma máquina do tempo!?!
id: magic-time-machine
order: 1
---

```git
git reflog
# vais ver uma lista de tudo o que fizeste no git
# em todos os branches!
# cada um tem um index HEAD@{index}
# procura o mais recente, antes da asneira
git reset HEAD@{index}
# maquina do tempo
```

Podes usar isto para recuperar coisas que foram apagadas acidentalmente, ou apagar experiências que estragaram o repo, ou desfazer um mau merge, ou simplesmente voltar a um ponto  em que as coisas estavam a funcionar. Eu uso `reflog` MUITAS vezes. Um beijinho especial à muita muita muita muita muita gente que sugeriu adicionar.
