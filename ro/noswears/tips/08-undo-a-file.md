---
tags: tip
title: Pisici, trebuie să îmi anulez modificările dintr-un fișier!
id: undo-a-file
order: 8
---

```git
# găsește un hash pentru un commit dinainte ca fișierul să fi fost schimbat
git log
# folosește săgetile ca să te plimbi în sus și în jos prin istoric
# odată ce ai gasit commitul, salvează hashul
git checkout [hash salvat] -- cale/catre/fisier
# versiunea veche a fișierului va fi în indexul tau
git commit -m "Oau, nu trebuie să faci copy-paste ca să anulezi"
```

Când mi-am dat seama într-un final de asta, a fost BABAN. BABAN. B-A-B-A-N. Dar serios acu', pe ce planeta `checkout --` are sens ca cel mai bun mod de a anula modificările dintr-un fisier? :scuturând-pumnul-către-linus-torvalds:
