---
tags: tip
title: Saco, preciso desfazer um commit feito 5 commits atrás!
id: desfazer-um-commit
order: 7
---

```git
# encontre o commit que você precisa desfazer
git log
# utilize as setas para navegar pelo histórico 
# quando encontrar o commit, salve o hash 
git revert [hash salvo]
# o git vai criar um commit que desfaz o commit
# siga as instruções para alterar a mensagem de commit
# ou apenas salve e faça o commit
```

Parece que não é necessário encontrar, copiar e colar o conteúdo antigo do arquivo para desfazer as alterações! Se você fez commit de um bug, é possível desfazer a alteração de uma vez só com o `revert`.

Você também pode fazer revert de um único arquivo em vez do commit inteiro! Mas, claro, como tudo no git, você precisa de um monte de comandos diferentes para isso...