---
tags: tip
title: Rahat, am comis și imediat mi-am dat seama că trebuie să mai fac o modificare mică!
id: change-last-commit
order: 2
---

```git
# fă-ți modificarea
git add . # sau adaugă fișiere individuale
git commit --amend --no-edit
# acum ultimul tău commit conține acea schimbare!
# AI GRIJĂ: nu face niciodată asta în commituri publice
```

Asta mi se intamplă de obicei dacă comit și apoi rulez teste/linters... și PLM, nu am pus un spațiu după un egal. Ai putea și să faci modificarea ca un nou commit și apoi să faci `rebase -i` ca să le pui unu-ntr-altu', dar asta e cam de un milion de ori mai rapid. 

*Ai grijă: Nu ar trebui niciodată să faci amend la commituri care au fost împinse într-un branch public/comun! Doar amend la commituri care există doar in copia ta locală sau te trezești cu mortu-n casă.
