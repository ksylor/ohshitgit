---
tags: tip
title: Teringettét, véletlenül master-re commit-oltam valamit, amit egy teljesen új ágra kellett volna!
id: veletlen-master-commit
order: 4
---

```git
# készíts egy új ágat a master jelenlegi állapotából
git branch uj-ag-neve
# töröld az utolsó commit-ot master-ről
git reset HEAD~ --hard
git checkout uj-ag-neve
# a commit-od innentől kezdve már az új ágon él tovább :)
```

Megjegyzés: ez nem működik, ha a commit már felkerült egy publikus/megosztott ágra, és ha már mást is kipróbáltál előtte, akkor a `HEAD~` helyett szükséged lehet egy `git reset HEAD@{commitok-száma-visszafelé}`-t is meghívni. Örök boldogtalanság. Illetve, nagyon nagyon nagyon sok ember javasolt egy általam nem ismert, príma megoldást, amivel rövidebbé lehet ezt tenni. Köszönet mindenkinek!