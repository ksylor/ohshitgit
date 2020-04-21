---
tags: tip
title: Rahat, trebuie sa anulez un commit din urma cu vreo 5 commituri!
id: undo-a-commit
order: 7
---

```git
# gaseste commitul pe care trebuie sa il anulezi
git log
# foloseste sagetile sa te duci in sus si in jos prin istoric
# odata ce ti-ai gasit commitul, salveaza hashul
git revert [hash salvat]
# git va crea un commit care anuleaza commitul respectiv
# urmareste indicatiile pentru a edita mesajul commitului 
# sau doar salveaza si comite
```

Pare ca nu trebuie sa urmaresti si sa faci copy-paste la vechiul continut al fisierului in fisierul existent pentru a anula schimbarile! Daca ai comis un bug, poti sa anulezi totul dintr-o miscare cu `revert`.

Poti de asemenea sa anulezi un singur fisier in loc de un commit intreg! Dar desigur, intr-un mod foarte "git", e un set complet diferit de rahaturi de comenzi...
