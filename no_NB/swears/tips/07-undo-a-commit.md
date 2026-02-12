---
tags: tip
title: Åh skitt, jeg må angre en commit for typ 5 comitter siden!
id: undo-a-commit
order: 7
---

```git
# finn committen du vil angre
git log
# bruk piltastene for å bla opp og ned i historikken
# når du har funnet committen din, noter deg hashen
git revert [hash fra forrige steg]
# git vil opprette en ny commit som angrer denne committen
# følg instuksene for å endre commitmeldinga.
# eller bare lagre og commit
```

Det viser seg at du ikke trenger å spore opp og copy-paste den gamle filas innhold inn i den eksisterende fila for å angre endringer! Om du har committa en bug kan du angre alt på én gang med `revert`.

Du kan óg angre enkeltfiler istedenfor en full commit! Men, selvfølgelig i tro git-ånd, er dette et helt annet sett med jævla kommandoer...
