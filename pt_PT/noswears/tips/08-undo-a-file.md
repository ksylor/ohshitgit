---
tags: tip
title: Bolas, preciso de desfazer as alterações num ficheiro!
id: undo-a-file
order: 8
---

```git
# encontra o hash do commit anterior ao ficheiro ter sido alterado
git log
# usa as arrow keys para navegar no histórico
# encontraste o commit? guarda a hash
git checkout [saved hash] -- caminho/para/o/ficheiro
# a versão anterior do ficheiro vai estar no teu diretório
git commit -m "Wow, não precisas de fazer copy+paste para desfazer!"
```

Quando conheci este comando foi BRUTAL. BRUTAL! B-R-U-T-A-L! Mas, a serio, em que planeta é que faz sentido usar `checkout --` para desfazer as alterações a um ficheiro?:shakes-fist-at-linus-torvalds: