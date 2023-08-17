---
tags: tip
title: Que merda, preciso de desfazer num commit, tipo há 5 commits atrás!
id: undo-a-commit
order: 7
---

```git
# procura a merda do commit que precisas de desfazer
git log
# usa as arrow keys para navegar no histórico
# encontraste o commit? guarda a hash
git revert [hash do commit]
# o git vai criar um novo commit que desfaz esse commit
# a seguir aparece-te a mensagem do commit para a editares
# ou apenas grava para finalizar o commit
```

Afinal parece que de não precisas de rastrear e fazer a treta de um copy+paste dos conteúdos da versão anterior para a versão actual para desfazer alterações. Se fizeste um commit de um bug, podes desfazer o commit de uma só vez com o `revert`.

Também podes reverter apenas um ficheiro em vez do commit completo! Mas, claro, mesmo à git, é todo um conjunto diferente de comandos...
