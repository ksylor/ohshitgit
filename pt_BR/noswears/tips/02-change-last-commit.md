---
tags: tip
title: Saco, acabei de fazer um commit e percebi que tenho que fazer uma pequena alteração 
id: alterar-o-ultimo-commit
order: 2
---

```git
# faça a sua alteração
git add . # ou adicione arquivos individualmente
git commit --amend --no-edit
# agora o seu último commit contém a alteração
# AVISO: nunca faça alterações em commits públicos
```

Isso normalmente acontece quando eu faço commit, executo testes/linters e... saco, eu esqueci de colocar um espaço depois de um sinal de igual. Você também pode fazer a alteração como um novo commit e, então, utilizar o `rebase -i` para fazer o squash desse commit com o anterior, mas o amend é um milhão de vezes mais rápido.

Aviso: Você nunca deve fazer um amend em commits que já foram enviados (push) para uma branch public/compartilhada! Somente faça isso em commits que existem apenas na sua cópia local ou você poderá ter problemas.