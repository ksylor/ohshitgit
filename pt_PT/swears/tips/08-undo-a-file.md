---
tags: tip
title: Foda-se preciso de desfazer as alterações num ficheiro!
id: undo-a-file
order: 8
---

```git
# procura o hash de um commit antes do ficheiro ser alterado
git log
# usa as setas no teclado para navegar o historico
# quando encontrares, guarda o hash do commit
git checkout [hash guardado] -- caminho/para/o/ficheiro
# a versao original do ficheiro vai estar no index
git commit -m "Uau, nao tens que copiar colar para corrigir"
```

O momento em que finalmente percebi esta merda foi UM ESPETÁCULO. ESPETÁÁÁÁCULO. Como diz o Fernando Mendes. Mas foda-se, que ideia de merda fazer com que `checkout --` seja a melhor maneira de desfazer alterações num ficheiro. :sai-da-frente-linus-torvalds: