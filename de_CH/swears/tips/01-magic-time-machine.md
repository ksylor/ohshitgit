---
tags: tip
title: Oh shit, ich ha öbbis komplett verkackt! Bitte sag mir, dass git e magischi Zytmaschine iibaut het!?!
id: magischi-zytmaschine
order: 1
---

```git
git reflog
# Du gesehsch e Liste mit allem, was du in
# git gmacht hesch, in allne Branches.
# Jede Iitraag het e Index: HEAD@{index}
# Find dr Iitraag VOR däm, wo alles
# kaputt gemacht het
git reset HEAD@{index}
# Alles isch jetzt wider wie es vorhär gsi isch
```

Drmit chasch du Dateie zrugghole, wo du glöscht hesch, oder Sache rückgängig mache, die di Repo zerstört hän, oder e nid glückte Merge oder eifach zu eme Stand zruggkehre, wo bestimmte Sache no funktioniert hän. Ich nutz `reflog` wirklich sehr hüfig. Viele Dank an die viele, viele, viele Leute, die vorgeschlagen hän, es do aufznäh.