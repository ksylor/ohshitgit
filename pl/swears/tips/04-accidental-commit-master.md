---
tags: tip
title: O kurwa, niechcący zacommitowałem(am) do mastera coś, co powinno być w nowym branchu!
id: accidental-commit-master
order: 4
---

```git
# stwórz nowego brancha z aktualnym stanem z mastera
git branch jakas-nazwa-nowego-brancha
# usuń ostatni commit z brancha master
git reset HEAD~ --hard
git checkout jakas-nazwa-nowego-brancha
# Twój commit jest teraz w tym branchu :)
```

Ważne: to nie zadziała, jeżeli wypushowałeś(aś) już commita do publicznego/współdzielonego brancha, a jeżeli próbowałeś(aś) wcześniej innych sposobów, to prawdopodobnie będziesz musiał(a) wykonać `git reset HEAD@{liczba-commitów-wstecz}` zamiast `HEAD~`. Smutek, żal i zgrzytanie zębów. Aha, wielu, wielu, wielu ludzi zasugerowało nieznany mi wcześniej genialny sposób jak to zapisać krócej. Wszystkim Wam dziękuję!