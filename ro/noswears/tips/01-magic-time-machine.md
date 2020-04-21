---
tags: tip
title: Pisici, am facut ceva foarte prost, te rog spune-mi ca gitul are o masina magica a timpului!?!
id: magic-time-machine
order: 1
---

```git
git reflog
# vei vedea o lista cu tot ce
# ai facut in git, pe toate branchurile!
# fiecare are un index HEAD@{index}
# gaseste-l pe cel de dinainte sa se dezlantuie iadul
git reset HEAD@{index}
# masina magica a timpului
```

Poti sa folosesti asta sa recuperezi chestii pe care le-ai sters din greseala, sau pur si simplu sa scoti chestii pe care le-ai incercat si care au distrus repoul sau sa refaci repoul dupa un merge prost sau doar sa te intorci in timp cand lucrurile mergeau. Eu folosesc `reflog` MULT. Jos palaria si ma inclin celor multi, multi, multi, multi, multi care mi-au sugerat sa il adaug!
