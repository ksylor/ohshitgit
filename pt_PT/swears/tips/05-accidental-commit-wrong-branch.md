---
tags: tip
title: Foda-se, fiz commit para o branch errado!
id: accidental-commit-wrong-branch
order: 5
---

```git
# desfazer o ultimo commit, mantendo as alterações disponíveis
git reset HEAD~ --soft
git stash
# mudar para o branch correto
git checkout name-of-the-correct-branch
git stash pop
git add . # ou adicionar ficheiros individualmente
git commit -m "A tua mensagem aqui";
# agora as alteracoes estão no branch correto
```

Muita gente sugeriu usar `cherry-pick` nesta situação, usa o que fizer mais sentido para ti.

```git
git checkout nome-do-branch-correto
# puxar o commit mais recente para main
git cherry-pick master
# apagar de main
git checkout master
git reset HEAD~ --hard
```
