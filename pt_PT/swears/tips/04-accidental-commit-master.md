---
tags: tip
title: Que merda, acidentalmente fiz um commit de uma cena qualquer para o master que devia estar numa branch nova!
id: accidental-commit-master
order: 4
---

```git
# cria a estúpida da branch nova a partir do estado actual do master
git branch um-novo-nome-qualquer-para-a-branch
# remove o último commit da branch master
git reset HEAD~ --hard
git checkout um-novo-nome-qualquer-para-a-branch
# o teu commit vive agora nesta branch :)
```

Nota: isto não funciona e já fizeste push deste commit para uma branch publica/partilhada, e se tentaste outras merdas antes, talvez precises de `git reset HEAD@{number-of-commits-back}` em vez e `HEAD~`. Dor no coração... Muitos, mas muitos bandidos sugeriram uma forma brutal para encurtar este processo da que eu conhecia. Obrigado a todos!!