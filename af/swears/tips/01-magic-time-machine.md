---
tags: tip
title: Oh shit, ek het iets groots verkeerd gedoen, vertel asseblief vir my git het 'n magiese tydmasjien!?!
id: magiese-tydmasjien
order: 1
---

```git
git reflog
# hier sal jy 'n lys sien van alles 
# wat jy in git gedoen het, in alle takke!
# elke een het 'n indeks HEAD@{indeks}
# vind die een net voordat jy alles gebreek het
git reset HEAD@{index}
# magiese tydmasjien
```

Jy kan dit gebruik om dinge terug te kry wat jy per ongeluk geskrap het, of net goed te verwyder wat jy probeer het en die repo daarmee gebreek het, of om te herstel ná 'n slegte merge, of net om terug te gaan na 'n tyd wanneer dinge werklik gewerk het. Ek gebruik BAIE 'reflog'. Massiewe knik van die hoed vir die baie baie baie baie mense wat voorgestel het om dit by te voeg!