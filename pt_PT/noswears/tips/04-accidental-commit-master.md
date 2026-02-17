---
tags: tip
title: Bolas, acidentalmente fiz um commit de algo para o master que devia estar numa branch nova!
id: accidental-commit-master
order: 4
---

```git
# cria uma branch nova a partir do estado actual do master
git branch um-novo-nome-qualquer-para-a-branch
# remove o último commit da branch master
git reset HEAD~ --hard
git checkout um-novo-nome-qualquer-para-a-branch
# o teu commit vive agora nesta branch :)
```

Nota: isto não funciona e já fizeste push deste commit para uma branch publica/partilhada, e se tentaste outras cenas antes, talvez precises de `git reset HEAD@{number-of-commits-back}` em vez e `HEAD~`. Dor no coração... Muita, mas muita malta sugeriu uma forma fantástica para encurtar este processo da que eu conhecia. Obrigado a todos!!