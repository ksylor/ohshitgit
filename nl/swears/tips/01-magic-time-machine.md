---
tags: tip
title: Kut, alles is kapot, alsjeblieft, zeg me dat git een teletijdmachine heeft!?!
id: magic-time-machine
order: 1
---

```git
git reflog
# je krijgt een lijst te zien van alles wat
# je hebt gedaan in git, over alle branches heen.
# ze hebben allemaal een index HEAD@{index}
# vind degene van net voor je het allemaal
# stuk maakte
git reset HEAD@{index}
# teletijdmachine!
```

Je kan hiermee terug naar dingen die je per ongeluk verwijderd hebt, of om terug te draaien wat je hebt gedaan waardoor de repo kapot is gegaan, of om te herstellen van een foute merge, of gewoon om terug te gaan naar het moment dat git nog wel werkte.

 Ik gebruik `reflog` VAAK. Ontzettend bedankt aan de vele vele vele vele vele betweters die `reflog` aan me hebben aangedragen.
