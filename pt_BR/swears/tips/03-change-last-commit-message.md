---
tags: tip
title: Merda, preciso alterar a mensagem do meu último commit!
id: alterar-a-mensagem-do-ultimo-commit
order: 3
---
```git
git commit --amend
# siga as instruções na tela para alterar o commit
# ou melhor use um editor (code ou o que preferi)
GIT_EDITOR="code --wait" git commit --amend
```

Malditas regras idiotas de formatação de mensagens de commit.