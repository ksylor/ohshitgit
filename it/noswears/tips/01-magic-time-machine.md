---
tags: tip
title: Dangit, ho fatto una cosa terribilmente sbagliata, ti prego dimmi che git ha una macchina del tempo!?!
id: macchina-del-tempo
order: 1
---

```git
git reflog
# qui apparirà una lista di ogni cosa hai
# fatto in git, in ogni branch!
# ognuna di questa ha un indice HEAD@{index}
# trova quella subito prima di quando hai rotto tutto
git reset HEAD@{index}
# macchina del tempo
```

Puoi utilizzare questa tecnica per riavere indietro cose che hai cancellato per sbaglio, o soltanto per rimuovere cose che hai fatto che hanno rotto la repository, o per aggiustare le cose dopo un merge andato male, o semplicemente per tornare a un punto in cui le cose funzionavano. Uso `reflog` MOLTO SPESSO. Un mega chapeau alle tante tante tante tante tante persone che lo hanno suggerito!