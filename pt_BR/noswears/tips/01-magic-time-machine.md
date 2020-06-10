---
tags: tip
title: Saco, quebrei tudo. Por favor, me diz que o git tem uma máquina do tempo mágica?!?!
id: maquina-do-tempo-magica
order: 1
---

```git
git reflog
# Você vai ver uma lista de tudo o que fez 
# em todos os branches no git!
# Cada alteração tem um índice HEAD@{índice}
# Encontre a alteração feita antes de você 
# cagar tudo 
git reset HEAD@{índice}
# máquina do tempo mágica 
```

Você pode utilizar isso para recuperar coisas excluídas por acidente, ou apenas remover algo que tentou e quebrou o repositório, ou recuperar coisas depois de um merge com problemas, ou, simplemesmente, voltar no tempo para quando as coisas realmente funcionavam. Eu utilizo MUITO o `reflog`. Eu tiro o chapéu para as várias várias várias várias pessoas que sugeriram adicioná-lo!