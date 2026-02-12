---
tags: tip
title: Søren tute, jeg prøvde å kjøre en diff, men ingenting skjedde!?
id: dude-wheres-my-diff
order: 6
---

Om du vet du har gjort endringer på filer, men `diff` er tom, så har du antagelig `add`a filene dine til staging og må bruke et spesielt flagg.

```git
git diff --staged
```

Arkiver under &macr;\\\_(ツ)\_/&macr; (ja, jeg vet dette er en feature og ikke en bug, men det er utrolig forbløffende og unaturlig første gangen dette skjer deg!)
