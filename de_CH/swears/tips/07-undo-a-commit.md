---
tags: tip
title: Oh shit, ich muess e Commit rückgängig mache, wo scho 5 Commits zruggliegt!
id: commit-rueckgaengig-mache
order: 7
---

```git
# Find dr beträffendi Commit
git log
# Verwänd d Pfiiltaste um in der History z scrolle
# und kopiere dir de Hash vom beträffende Commit
git revert [betreffände hash]
# git erstellt e neue Commit, wo dr gewählti
# Commit rückgängig macht. Du muesch defür no e
# Commit-Message iigää oder eifach abspeichere
```

Me muess also doch nid alte Code uswähle und in die aktuelle Dateie iifiege, um Änderige rückgängig z mache. Wenn du e Bug commited hesch, chasch du also de ganzi commit mit `revert` wider zrucknäh.

Du chasch au nur d Änderigen in einere einzige Datei rückgängig mache, anstatt e ganze Commit. Aber in typischer Git-Manier sin das natürlich komplett anderi Befähl. Wär suscht jo au z eifach!