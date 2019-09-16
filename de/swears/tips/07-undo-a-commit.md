---
tags: tip
title: Oh shit, ich muss einen Commit rückgängig machen, der schon 5 Commits zurückliegt!
id: commit-rueckgaengig-machen
order: 7
---

```git
# Finde den betreffenden Commit
git log
# Verwende die Pfeiltasten um in der History zu scrollen
# und kopiere dir den Hash des betreffenden Commits
git revert [betreffender hash]
# git erstellt einen neuen Commit, der den gewählten
# Commit rückgängig macht. Du musst dafür noch eine
# Commit-Message eingeben oder einfach abspeichern
```

Man muss also doch nicht alten Code auswählen und in die aktuellen Dateien einfügen, um Änderungen rückgängig zu machen. Wenn du einen Bug commited hast, kannst du also den ganzen commit mit `revert` wieder zurücknehmen.

Du kannst auch nur die Änderungen in einer einzigen Datei rückgängig machen, anstatt eines ganzen Commits. Aber in typischer Git-Manier sind das natürlich komplett andere Befehle. Wäre ja sonst auch zu einfach!