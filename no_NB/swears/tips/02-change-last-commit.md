---
tags: tip
title: Åh skitt, jeg committa og innså umiddelbart at jeg trenger gjøre en liten endring!
id: change-last-commit
order: 2
---

```git
# gjør din enddring
git add . # eller legg til enkeltfiler
git commit --amend --no-edit
# siste commit inneholder nå endringa
# ADVARSEL: bruk aldri amend på offentlige committer
```

Dette skjer meg vanligvis når jeg committer, og deretter kjører tester/lintere... og drit og dra, jeg glemte et mellomrom etter et likhetstegn. Du kan og gjøre endringa som en ny commit og deretter gjøre `rebase -i` for å squashe de sammen, men dette er cirka en million ganger raskere.

*Advarsel: Du bør aldri amende en commit som har blitt pushet til en offentlig/delt branch. Bare bruk amend på committer som kun eksisterer på din lokale kopi, ellers vil du gå kjipe tider i møte.*
