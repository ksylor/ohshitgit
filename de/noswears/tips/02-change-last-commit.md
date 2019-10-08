---
tags: tip
title: Ich habe schon commited und dann gemerkt dass ich eine kleine Änderung vergessen habe!
id: letzten-commit-aendern
order: 2
---

```git
# Mach deine Änderung
git add . # oder füge einzelne Dateien hinzu
git commit --amend --no-edit
# Jetzt enthält dein letzter Commit auch die neuen Änderungen!
# WARNUNG: Niemals solltest du "--amend" bei einem 
# Commit verwenden, der schon gepusht wurde (es sei denn
# du bist der einzige Entwickler in dem Repo)
```

Normalerweise passiert mir das, wenn ich commite und dann erst Tests oder Linter laufen lasse. Dann fallen irgendwelche kleinen Formatierungsfehler auf, zum Beispiel ein vergessenes Leerzeichen. Man könnte die Änderung auch als neuen Commit erstellen und dann mit <nobr>`rebase -i`</nobr> beide Commits zusammenführen, aber das hier ist tausend mal schneller.


*Warnung: Du solltest niemals das "--amend"-Flag verwenden, wenn dein Commit schon gepusht wurde. Verwende das nur bei lokalen Commits, ansonsten wird es kompliziert.*