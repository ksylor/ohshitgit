---
tags: tip
title: Voi vittu, nu gick jag och moka, snälla säg att git har en magisk tidsmaskin!?!
id: magic-time-machine
order: 1
---

```git
git reflog
# du får se en lista över allt du har
# gjort i git, i alla brancher!
# var och en har ett index HEAD@{index}
# leta upp det index före allt kusi
git reset HEAD@{index}
# magisk tidsmaskin
```

Du kan använda det här för att få tillbaka nåt som du i misstag lyckades ta bort, eller bara ta bort något som du provade som söndrade repot, eller för att återställa efter en dålig merge, eller bara för att gå tillbaka i tiden till en tidpunkt där saker faktiskt funkade. Jag använder `reflog` EN HEL DEL. Stort tack till alla ni många många många många många människor som föreslagit det!