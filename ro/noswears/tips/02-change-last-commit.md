---
tags: tip
title: Pisici, am comis si imediat mi-am dat seama ca trebuie sa mai fac o schimbare mica!
id: change-last-commit
order: 2
---

```git
# fa-ti schimbarea
git add . # sau adauga fisiere individuale
git commit --amend --no-edit
# acum ultimul tau commit contine acea schimbare!
# AI GRIJA: nu face niciodata asta in commituri publice
```

Asta mi se intampla de obicei daca comit si apoi rulez teste/linters... si pana mea, nu am pus un spatiu dupa un egal. Ai putea si sa faci schimbarea ca un nou commit si apoi sa faci `rebase -i` ca sa le pui unu-ntr-altu', dar asta e cam de un milion de ori mai rapid.

*Ai grija: Nu ar trebui niciodata sa faci amend la commituri care au fost impinse intru-un branch public/comun! Doar amend la commituri care exista doar in copia ta locala sau dai de belea.*
