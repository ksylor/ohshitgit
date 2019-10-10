---
tags: tip
title: Ich habe aus Versehen etwas auf master commited, das eigentlich auf einen eigenen Branch gehört
id: aus-versehen-commit-master
order: 4
---

```git
# Erstelle einen neuen Branch mit dem Stand des master
git branch neuer-branch-name
# Entferne den letzten Commit vom master
# und wechsel zum neuen Branch
git reset HEAD~ --hard
git checkout some-new-branch-name
# Dein Commit lebt jetzt in dem neuen Branch weiter :)
```

Hinweis: Das funktioniert nicht, wenn du den Commit schon auf einen öffentlichen Branch gepusht hast. Wenn du vorher schon mehr Dinge probiert hast, musst du vielleicht `git reset HEAD@{anzahl-der-commits}` statt `HEAD~` verwenden. Vielen Dank an die vielen vielen Leute, die vorgeschlagen haben, wie man dieses Problem am schnellsten lösen kann – ich kannte diese Lösung bisher noch nicht.