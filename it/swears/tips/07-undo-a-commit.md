---
tags: tip
title: Oh shit, devo annullare una commit tipo da 5 commit fa!
id: annulla-una-commit
order: 7
---

```git
# trova la commit che devi annullare
git log
# usa la freccia per andare su e giú nella storia
# quando hai trovato la commit, salva la hash corrispondente
git revert [hash salvata]
# git creerà una nuova commit che annulla la commit che corrisponde a quella hash
# segui le istruzioni per modificare il messaggio della commit
# o salva la commit e basta
```

Ho scoperto che non devi trovare e fare copia-incolla del contenuto del vecchio file dentro al file esistente per annullare i cambiamenti! Se hai fatto una commit con un bug, puoi annullarla tutta insieme usando `revert`.

Puoi anche annullare un file singolo invece di tutta la commit! Ma ovviamente, nello stile di git, serve un set di input completamente diverso...
