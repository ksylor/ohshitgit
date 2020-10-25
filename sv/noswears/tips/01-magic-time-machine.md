---
tags: tip
title: För sjuttsingen, jag gjorde något riktigt dåligt, snälla säg att git har en magisk tidsmaskin!?!
id: magic-time-machine
order: 1
---

```git
git reflog
# du får se en lista över allt du har
# gjort i git, tvärs över alla brancher!
# var och en har ett index HEAD@{index}
# leta upp den som är innan du pajade allting
git reset HEAD@{index}
# magisk tidsmaskin
```

Du kan använda detta för att få tillbaka nåt som du råkade ta bort, eller bara ta bort något som du provade som pajade repot, eller för att återställa efter en dålig merge, eller bara för att gå tillbaka i tiden till en tidpunkt där saker faktiskt funkade. Jag använder `reflog` EN HEL DEL. Tack och bock till alla ni många många många många många människor som föreslagit det!