---
tags: tip
title: Oh shit, ich ha scho commited und denn gmerkt dass ich e kleini Änderig vergässe ha!
id: letzte-commit-aendere
order: 2
---

```git
# Mach dini Änderung
git add . # oder fieg einzelni Dateie hinzue
git commit --amend --no-edit
# Jetzt enthaltet di letzte Commit au die neue Änderige!
# WARNUNG: Niemols söttisch du "--amend" bi eme 
# Commit verwände, wo scho pusht worde isch (es sei denn
# du bisch dr einzigi Entwickler in däm Repo)
```

Normalerwiis passiert mir das, wenn ich commit und denn erst Tests oder Linter laufe loss. Denn falle irgendwelchi kleine Formatierigsfähler uf, zum Bispiil e vergässenes Leerzeiche. Me chönnti die Änderig au als neue Commit erstelle und denn mit <nobr>`rebase -i`</nobr> beidi Commits zämmefiehre, aber das do isch tuusigmol schnäller.


*Warnig: Du sötsch niemals d "--amend"-Flag verwände, wenn di Commit schon pusht worde isch. Verwände das nur bi lokale Commits, suscht wird s kompliziert.*