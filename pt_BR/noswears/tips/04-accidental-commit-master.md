---
tags: tip
title: Saco, eu fiz um commit na master por engano e deveria ter feito commit em uma branch nova!
id: commit-na-master-por-engano
order: 4
---

```git
# Crie a nova branch a partir da master atual 
git branch minha-nova-branch
# remova o último commit da master
git reset HEAD~ --hard
git checkout minha-nova-branch
# o seu commit está nessa branch agora :)
```

Nota: isso não funciona se você já fez push do commit para a master. Se você já tentou outras coisas antes, pode utilizar `git reset HEAD@{numero-de-commits-anteriores}` em vez `HEAD~`. Muito triste. Muitas muitas muitas pessoas sugeriram um jeito foda para fazer isso que eu mesmo não conhecia. Obrigado!