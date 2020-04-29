---
tags: tip
title: Pisici, trebuie să anulez un commit din urmă cu vreo 5 commituri!
id: undo-a-commit
order: 7
---

```git
# găsește commitul pe care trebuie să îl anulezi
git log
# folosește săgețile să te duci în sus și în jos prin istoric
# odată ce ți-ai găsit commitul, salvează hashul
git revert [hash salvat]
# git va crea un commit care anulează commitul respectiv
# urmărește indicațiile pentru a edita mesajul commitului
# sau doar salvează și comite
```

Pare că nu trebuie sa urmăresti și să faci copy-paste la vechiul conținut al fișierului în fișierul existent pentru a anula schimbările! Dacă ai comis un bug, poți să anulezi totul dintr-o miscare cu `revert`.

Poți de asemenea să anulezi un singur fișier în loc de un commit întreg! Dar desigur, într-un mod foarte "git", e un set complet diferit de comenzi...
