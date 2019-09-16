---
tags: tip
title: Ich muss Änderungen an einer einzigen Datei rückgängig machen!
id: aenderungen-datei-rueckgaengig
order: 8
---

```git
# Finde den Hash eines Commits vor deinen Änderungen
git log
# Verwende die Pfeiltasten um in der History zu scrollen
# und kopiere dir den entsprechenden Hash
git checkout [gewählter hash] -- pfad/zur/datei
# Die alte Version ist jetzt wiederhergestellt
git commit -m "Wow, rückgängig machen ohne Copy & Paste"
```

Als ich das herausgefunden habe, war das für mich ein riesiges Ding! Ernsthaft, auf welchem verdammten Planeten macht es Sinn, den Befehl zum rückgängig machen von Änderungen in einer Datei `checkout --` zu nennen :shakes-fist-at-linus-torvalds: