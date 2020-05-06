---
tags: tip
title: Merda, preciso desfazer as alterações em um arquivo!
id: desfazer-um-arquivo
order: 8
---

```git
# encontre o hash de um commit feito antes do arquivo ser alterado
git log
# utilize as setas para navegar pelo histórico
# quando encontrar o commit, salve o hash
git checkout [hash salvo] -- caminho/para/o/arquivo
# a versão antiga do arquivo estará no seu índice
git commit -m "Uau, você não precisa copiar e colar para desfazer!"
```

Quando eu finalmente descobri isso foi SENSACIONAL. SENSACIONAL. S-E-N-S-A-C-I-O-N-A-L. Mas, falando sério, em que merda de planeta que `checkout --` faz sentido como a melhor maneira de desfazer alterações em um arquivo? :ameaca-um-soco-no-linus-torvalds: