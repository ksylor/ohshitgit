---
tags: tip
title: Oh shit, ho fatto un commit e mi sono subito reso conto di dover fare un piccolo cambiamento!
id: cambia-ultimo-commit
order: 2
---

```git
# cambia ció che vuoi
git add . # o aggiungi i file individualmente 
git commit --amend --no-edit
# ora il tuo ultimo commit contiene la modifica!
# ATTENZIONE: mai modificare commit pubblici
```

Questo mi succede spesso se faccio un commit e faccio test/uso linter... e ho dimenticato uno spazio dopo un simbolo uguale porca merda. Potresti anche fare la modifica come un nuovo commit e poi `rebase -i` per accorparli insieme, ma questo modo è mille volte piú veloce.

*Attenzione: Non si dovrebbe mai correggere un commit che è stato pushed a una branch pubblica o condivisa! Correggi commits soltanto se esistono nella tua copia locale oppure ti ritroverai nella merda.*
