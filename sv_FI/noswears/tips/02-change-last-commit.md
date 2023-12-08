---
tags: tip
title: För sjuttsingen, jag committade och insåg omedelbart att jag måste göra en liten ändring!
id: change-last-commit
order: 2
---

```git
# gör din ändring
git add . # eller lägg till individuella filer
git commit --amend --no-edit
# nu innehåller din senaste commit den ändringen!
# VARNING: använd aldrig amend på publika commits
```

Detta händer oftast mig när jag committar, och sen kör tester/linters... och blä, jag hade glömt ett mellanslag efter ett likhetstecken. Du kan också göra ändringen som en ny commit och efteråt göra `rebase -i` för att squasha ihop dem, men detta är typ en miljon gånger snabbare. 

*Varning: Du bör aldrig amend:a commits som har pushats till en publik/gemensam branch! Gör bara amend på commits som bara existerar på din lokala kopia, annars kan du få det jobbigt.*
