---
tags: tip
title: Oeps, ik maakte het enorm kapot, alsjeblieft, zeg me dat git een teletijdmachine heeft!?!
id: magic-time-machine
order: 1
---

```git
git reflog
# you will see a list of every thing you've
# done in git, across all branches!
# each one has an index HEAD@{index}
# find the one before you broke everything
git reset HEAD@{index}
# magic time machine
```

Je kan hiermee terug naar dingen die je per ongeluk verwijderd hebt, of om terug te draaien wat je hebt gedaan wat de repository kapot maakte, of om te herstellen van een foute merge, of gewoon om terug te gaan naar het moment dat git nog werkte.

Ik gebruik `reflog` VAAK. Ontzettend bedankt aan de vele vele vele vele vele individuen die `reflog` aan me hebben aangedragen.
