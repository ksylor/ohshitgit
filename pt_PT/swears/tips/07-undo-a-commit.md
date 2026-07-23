---
tags: tip
title: Foda-se preciso de desfazer um commit de há 5 commits atrás!
id: undo-a-commit
order: 7
---

```git
# procura o commit que precisas de desfazer
git log
# usa as setas no teclado para navegar o historico
# quando encontrares, guarda o hash do commit
git revert [hash guardado]
# o git vai criar um novo commit que desfaz o tal
# segue as mensagens para alterar a mensagem do commit
# ou basta guardar e commitar
```

Afinal não é preciso procurar o conteúdo de um fichero num commit antigo para copiar e colar quando precisas de reverter alterações! Se submeteste um bug ou uma gralha qualquer, podes desfazer o commit com `revert`.

Também podes reverter apenas um ficheiro específico em vez do commit inteiro! Mas claro que, com o caralho do git, é um conjunto de comandos completamente diferentes...