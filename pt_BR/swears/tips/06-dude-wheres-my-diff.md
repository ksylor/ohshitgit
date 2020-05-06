---
tags: tip
title: Merda, tentei fazer um diff e não aconteceu nada?!
id: cara-cade-o-meu-diff
order: 6
---

Se você sabe que alterou alguns arquivos, mas o `diff` não retorna nada, você provavelmente já adicionou (`git add`) esses arquivos na área de staging e, então, vai precisar utilizar uma flag especial.

```git
git diff --staged
```

Arquivar em &macr;\\\_(ツ)\_/&macr; (sim, eu sei que isso é uma funcionalidade e não um bug, mas é frustrante pra caralho e totalmente não óbvio na primeira vez que acontece com você!)