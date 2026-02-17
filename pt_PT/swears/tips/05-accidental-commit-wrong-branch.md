---
tags: tip
title: Que merda, acidentalmente fiz o commit da branch errada!
id: accidental-commit-wrong-branch
order: 5
---

```git
# reverte o último commit, deixando as alterações disponíveis
git reset HEAD~ --soft
git stash
# passa para a branch correta
git checkout nome-da-branch-correta
git stash pop
git add . # ou um ou mais ficheiros separados por espaço
git commit -m "a tua mensagem"
# agora as tuas alterações estão na branch correta
```

Muitas pessoas sugeriram usar `cherry-pick` para este cenário, assim escolhe a que fizer mais sentido para esse teu neurónio!

```git
git checkout nome-da-branch-correta
# agarra no último commit para o master
git cherry-pick master
# e apaga-o do master
git checkout master
git reset HEAD~ --hard
```