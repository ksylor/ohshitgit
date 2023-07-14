---
tags: tip
title: Åh skitt, jeg gjorde noe helt fryktelig feil, vær så snill å si at git har en magisk tidsmaskin!?!
id: magic-time-machine
order: 1
---

```git
git reflog
# du vil se en liste over alle ting du har
# gjort i git, på tvers av alle brancher!
# hver enkelt har en index HEAD@{index}
# finn den som ligger før du kræsja alt sammen
git reset HEAD@{index}
# magisk tidsmaskin
```

Du kan bruke dette for å hente tilbake ting du sletta ved et uhell, eller bare fjerne ting du teste som endte opp med å kræsje repoet, eller for å hente deg inn etter en dårlig merge, eller bare returnere til et tidspunkt hvor ting faktisk funka. Jeg bruker `reflog` MASSE. Supertusen takk til de mange mange mange mange mange som foreslo å legge det til!
