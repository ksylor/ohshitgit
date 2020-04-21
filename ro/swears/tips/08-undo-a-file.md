---
tags: tip
title: Rahat, trebuie sa imi anulez modificarile dintr-un fisier!
id: undo-a-file
order: 8
---

```git
# gaseste un hash pentru un commit dinainte ca fisierul sa fi fost schimbat
git log
# foloseste sagetile ca sa te plimbi in sus si in jos prin istoric
# odata ce ai gasit commitul, salveaza hashul
git checkout [hash salvat] -- cale/catre/fisier
# versiunea veche a fisierului va fi in indexul tau
git commit -m "Oau, nu trebuie sa faci copy-paste ca sa anulezi"
```

Cand mi-am dat seama intr-un final de asta, a fost BABAN. BABAN. B-A-B-A-N. Dar serios acum, pe ce rahat de planeta `checkout --` are sens ca cel mai bun mod de a anula modificarile dintr-un fisier? :scuturand-pumnul-catre-linus-torvalds:
