---
tags: tip
title: O kurwa, coś poszło bardzo nie tak, powiedz że Git ma jakiś magiczny wehikuł czasu‽
id: magic-time-machine
order: 1
---

```git
git reflog
# zobaczysz listę wszystkich rzeczy, które
# zrobiłeś(aś) w gicie, we wszystkich branchach!
# każda z nich ma indeks HEAD@{index}
# znajdź tą sprzed momentu, kiedy wszystko się popsuło
git reset HEAD@{index}
# magiczny wehikuł czasu
```

Możesz tego użyć do odzyskania rzeczy, które przez przypadek usunąłeś(aś), lub do usunięcia czegoś, co próbowałeś(aś) zrobić i zepsuło repozytorium, lub do przywrócenia normalności po nieudanym merge'u, albo po prostu żeby wrócić do momentu, kiedy wszystko było dobrze. Używam komendy `reflog` BARDZO CZĘSTO. Czapki z głów dla wielu, wielu, wielu, wielu, wielu ludzi, którzy zasugerowali dodanie jej!