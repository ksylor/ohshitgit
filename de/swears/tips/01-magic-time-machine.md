---
tags: tip
title: Oh shit, ich habe etwas komplett verkackt! Bitte sag mir, dass git eine magische Zeitmaschine eingebaut hat!?!
id: magische-zeitmaschine
order: 1
---

```git
git reflog
# Du siehst eine Liste mit allem, was du in
# git getan hast, in allen Branches.
# Jeder Eintrag hat einen Index: HEAD@{index}
# Finde den Eintrag VOR demjenigen, der alles
# kaputt gemacht hat
git reset HEAD@{index}
# Alles ist jetzt wieder wie es vorher war
```

Damit kannst du Dateien zurückholen, die du gelöscht hast, oder Dinge rückgängig machen, die dein Repo zerstört haben, oder einen nicht geglückten Merge oder einfach zu einem Stand zurückkehren, als bestimmte Funktionen noch funktioniert haben. Ich nutze `reflog` sehr häufig. Vielen Dank an die vielen, vielen, vielen Leute, die vorgeschlagen haben, es hier aufzunehmen.