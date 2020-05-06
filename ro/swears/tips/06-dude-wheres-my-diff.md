---
tags: tip
title: Rahat, am încercat să rulez un diff, dar nu s-a întamplat nimic?!
id: dude-wheres-my-diff
order: 6
---

Dacă știi că ai facut modificări în fișiere, dar `diff`ul este gol, probabil ți-ai `add`augat fișierele tale în staging și trebuie să folosești o opțiune specială.

```git
git diff --staged
```

Fișier în &macr;\\\_(ツ)\_/&macr; (da, știu este un feature, nu un bug, dar este absolut neplăcut și nu este evident prima oară când ți se întamplă!)
