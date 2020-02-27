---
tags: tip
title: O kurczę, zrobiłem(am) commit i zaraz potem zauważyłem(am), że muszę dodać jedną małą zmianę!
id: change-last-commit
order: 2
---

```git
# dokonaj zmiany
git add . # lub dodaj pojedyncze pliki
git commit --amend --no-edit
# teraz Twój ostatni commit zawiera tę zmianę!
# UWAGA: nigdy nie poprawiaj publicznych commitów
```

Zazwyczaj zdarza mi się tak, gdy zacommituję, uruchomię testy/lintery i... no tak, zapomniałam postawić spację po znaku równości. Możesz także wykonać zmianę jako nowy commit i użyć `rebase -i` w celu scalenia obu commitów w jeden, ale ta metoda jest milion razy szybsza.

*Uwaga: Nigdy nie poprawiaj commitów, które zostały wypushowane do publicznego/współdzielonego brancha! Poprawiaj tylko te commity, które istnieją jedynie w Twojej kopii lokalnej, no chyba że chcesz popsuć sobie dzień.*
