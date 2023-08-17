---
tags: tip
title: Bolas! Fiz algo terrivelmente errado, por favor diz-me que o Git tem uma máquina do tempo mágica!?!
id: magic-time-machine
order: 1
---



```git
git reflog
# apresenta uma lista de toda a tua atividade
# no git, em todas as branches
# cada uma das alterações tem um index HEAD@{index}
# encontra a alteração antes do que deu erro
git reset HEAD@{index}
# máquina do tempo mágica
```

Podes usar este comando para recuperar algo que tenhas apagado acidentalmente, ou apenas para remover algo que tenha rebentado com o repositório, ou para reverter após um merge errado, ou apenas para voltar para uma fase em que as coisas realmente funcionavam. Uso IMENSO o comando `reflog`. Um mega obrigado a todos os que o sugeriram adicionar!
