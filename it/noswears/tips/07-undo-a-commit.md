---
tags: tip
title: Dangit, devo annullare un commit tipo da 5 commit fa!
id: annulla-un-commit
order: 7
---

```git
# trova il commit che devi annullare
git log
# usa la freccia per andare su e giú nella storia
# quando hai trovato il commit, salva la hash corrispondente
git revert [hash salvata]
# git creerà un nuovo commit che annulla il commit che corrisponde a quella hash
# segui le istruzioni per modificare il messaggio del commit 
# o salva il commit e basta
```

Ho scoperto che non devi trovare e fare copia-incolla del contenuto del vecchio file dentro al file esistente per annullare i cambiamenti! Se hai fatto un commit con un bug, puoi annullarlo tutto insieme usando `revert`.

Puoi anche annullare un file singolo invece di tutto il commit! Ma ovviamente, nello stile di git, è un set di input completamente diverso...

