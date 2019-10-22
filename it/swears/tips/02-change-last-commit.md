---
tags: tip
title: Oh shit, ho fatto una commit e mi sono subito reso conto di dover fare un piccolo cambiamento!
id: cambia-ultima-commit
order: 2
---

```git
# cambia ció che vuoi
git add . # o aggiungi i file individualmente 
git commit --amend --no-edit
# ora la tua ultima commit contiene la modifica!
# ATTENZIONE: mai modificare una commit pubblica
```

Questo mi succede spesso se faccio una commit e faccio test/uso linter... e ho dimenticato uno spazio dopo un simbolo uguale porca merda. Potresti anche fare la modifica come una nuova commit e poi `rebase -i` per accorparle insieme, ma questo modo è mille volte piú veloce.

*Attenzione: Non si dovrebbe mai correggere una commit che è stata pushed a una branch pubblica o condivisa! Correggi soltanto le commits che esistono nella tua copia locale oppure ti ritroverai nella merda.*
