---
tags: tip
title: Foda-se, enganei-me e fiz commit para main de código que devia estar num branch novo!
id: accidental-commit-master
order: 4
---

```git
# cria um novo branch a partir do estado atual de main
git branch um-branch-novo
# elimina o ultimo commit de main
git reset HEAD~ --hard
git checkout um-branch-novo
# o teu commit esta neste branch agora :)
```

Nota: não funciona se já fizeste push para um branch público ou partilhado, e se já tentáste outras coisas, talvez tenhas que fazer `git reset HEAD@{varios-commits-atras}` em vez de `HEAD~`. Mágoa infinita. Para além disso, imensas pessoas sugeriram uma ótima e mais simples maneira de fazer isto que eu não conhecia. Obrigado a todos!
