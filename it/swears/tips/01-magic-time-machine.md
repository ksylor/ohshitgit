---
tags: tip
title: Oh shit, ho fatto una gran cazzata, ti prego dimmi che git ha una macchina del tempo‽
id: macchina-del-tempo
order: 1
---

```git
git reflog
# qui apparirà una lista di ogni cosa che
# hai fatto su git, in ogni branch!
# ognuna di queste ha un indice HEAD@{index}
# trova quella subito precedente a quando hai sfracassato tutto
git reset HEAD@{index}
# macchina del tempo
```

Puoi utilizzare questa tecnica per riavere cose che hai cancellato per sbaglio, per rimuovere cose che hai fatto che hanno rotto la repository, per aggiustare dopo un merge andato male, o semplicemente per tornare a un punto in cui le cose funzionavano. Personalmente uso `reflog` MOLTO SPESSO. Un mega chapeau alle tante tante tante tante tante persone che lo hanno suggerito!
