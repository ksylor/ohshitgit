---
tags: tip
title: Foda-se, fiz commit e percebi imediatamente que preciso de fazer uma pequena alteração!
id: change-last-commit
order: 2
---

```git
# faz a alteracao que pretendes
git add . # or add individual files
git commit --amend --no-edit
# agora, o ultimo commit tem as alteracoes!
# AVISO: nunca facas amend de commits publicos
```

Isto costuma acontecer-me quando faço commit e depois executo testes e linters... e fdx, falta um espaço depois do igual. Também podes fazer um novo commit com as alterações, e depois executar `rebase -i` para fazer squash (ou seja, fundir) dos dois, mas isto é mais rápido.

*Aviso: Nunca faças amend de commits que foram pushed para um branch público ou partilhado! Faz amend apenas a commits que existem só na tua cópia local, ou as coisas vão correr mal.*
