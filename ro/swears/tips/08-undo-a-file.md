---
tags: tip
title: Rahat, trebuie să îmi anulez modificările dintr-un fișier!
id: undo-a-file
order: 8
---

```git
# găsește un hash pentru un commit dinainte ca fișierul să fi fost schimbat
git log
# folosește săgețile ca să te plimbi în sus și în jos prin istoric
# odată ce ai găsit commitul, salveaza hashul
git checkout [hash salvat] -- cale/către/fișier
# versiunea veche a fișierului va fi în indexul tău
git commit -m "Oau, nu trebuie să faci copy-paste ca să anulezi"
```

Când mi-am dat seama într-un final de asta, a fost BABAN. BABAN. B-A-B-A-N. Dar serios acum, pe ce rahat de planetă `checkout --` are sens ca cel mai bun mod de a anula modificările dintr-un fișier? :scuturând-pumnul-către-linus-torvalds:
