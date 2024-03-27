---
tags: tip
title: Åh skitt, jeg må angre mine endringer til en fil!
id: undo-a-file
order: 8
---

```git
# finn en hash for en commit fra før fila ble endra
git log
# bruk piltastene for å bla opp og ned i historikken
# når du har funnet committen din, noter deg hashen
git checkout [hash fra forrige steg] -- path/to/file
# den gamle versjonen av fila vil nå være i din index
git commit -m "Wow, du trenger ikke copy-paste for å angre"
```

Da jeg endelig fant ut av denne var det STORT. STORT. S-T-O-R-T. Men seriøst, på hvilken jævla planet gir `checkout --` mening som den beste måten å angre en fil? :hytter-neve-mot-linus-torvalds:
