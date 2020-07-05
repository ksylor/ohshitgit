---
tags: tip
title: Saco, fiz commit na branch errada!
id: commit-na-branch-errada-por-engano
order: 5
---

```git
# desfaça o último commit, mas mantenha as alterações 
git reset HEAD~ --soft
git stash
# mova as alterações para a branch correta
git checkout nome-da-branch-correta
git stash pop
git add . # ou adicione arquivos individualmente
git commit -m "sua mensagem aqui";
# agora as suas alterações estão na branch correta 
```

Muitas pessoas sugeriram utilizar `cherry-pick` para essa situação, então escolha ai o que faz mais sentido para você!

```git
git checkout nome-da-branch-correta 
# pegue o último commit da master 
git cherry-pick master
# remova-o da master
git checkout master
git reset HEAD~ --hard
```