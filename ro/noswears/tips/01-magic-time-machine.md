---
tags: tip
title: Pisici, am făcut ceva foarte prost, te rog spune-mi că gitul are o mașină magică a timpului!?!
id: magic-time-machine
order: 1
---

```git
git reflog
# vei vedea o listă cu tot ce
# ai facut in git, pe toate branchurile!
# fiecare are un index HEAD@{index}
# găsește-l pe cel de dinainte să se dezlănțuie iadul
git reset HEAD@{index}
# mașina magică a timpului
```

Poți să folosești asta să recuperezi chestiile pe care le-ai șters din greseală, sau pur și simplu să scoți chestii pe care le-ai încercat și care au distrus repoul sau să refaci repoul după un merge prost sau doar să te întorci în timp când lucrurile mergeau. Eu folosesc `reflog` MULT. Jos pălăria celor mulți, mulți, mulți, mulți, mulți care mi-au sugerat să îl adaug
