---
tags: tip
title: Que merda! Fiz algo estupidamente errado, por favor diz-me que o Git tem uma filha da mãe de uma máquina do tempo!?!
id: magic-time-machine
order: 1
---

```git
git reflog
# apresenta uma lista de toda a tua atividade
# no git, em todas as branches
# cada uma das alterações tem um index HEAD@{index}
# encontra a alteração antes do que deu merda
git reset HEAD@{index}
# máquina do tempo filha da mãe
```

Podes usar este comando para recuperar uma merda que tenhas apagado estupidamente, ou apenas para remover algo que lixou o raio do repositório, ou para reverter após um merge parvo, ou apenas para voltar para uma fase em que tudo era maravilhoso e pensavas ser o melhor programador do mundo. Uso IMENSO o comando `reflog`. Um granda obrigado a todos os que sugeriram adicionar este comando!