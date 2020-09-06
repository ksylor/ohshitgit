---
tags: tip
title: Pa koji je ovo kurac bre, pokušao sam da pokrenem diff ali se ništa nije desilo?!
id: bajo-gdje-je-moj-diff
order: 6
---

Ako znaš da si napravio izmjene u fajlovima, ali `diff` je prazan, vjerovatno si `add`-ed (dodao) svoje fajlove u staging zonu i moraćeš da koristiš poseban flag.

```git
git diff --staged
```

Datoteka pod &macr;\\\_(ツ)\_/&macr; (da, znam da je ovo feature, a ne bag, ali je jebeno zbunjujuće i neočigledno je kada vam se prvi put dogodi!)
