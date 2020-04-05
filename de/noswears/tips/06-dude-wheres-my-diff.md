---
tags: tip
title: Ich wollte einen Diff anzeigen lassen, aber er ist leer?!
id: wo-ist-mein-diff
order: 6
---

Wenn du dir sicher bist, dass du Dateien geändert hast, aber `diff` trotzdem nichts anzeigt, dann hast du die Dateien wahrcheinlich schon ge-`add`-et und musst deswegen ein spezielles Flag verwenden.

```git
git diff --staged
```

Das gehört zur Kategorie &macr;\\\_(ツ)\_/&macr; (Ja, ich weiß dass das Verhalten ein Feature ist, aber für Einsteiger ist das super verwirrend!)
