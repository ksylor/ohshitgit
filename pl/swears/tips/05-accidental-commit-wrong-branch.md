---
tags: tip
title: O kurwa, niechcący zacommitowałem(am) do nie tego brancha co trzeba!
id: accidental-commit-wrong-branch
order: 5
---

```git
# wycofaj ostatni commit, ale zachowaj dokonane zmiany
git reset HEAD~ --soft
git stash
# przejdź do prawidłowego brancha
git checkout nazwa-prawidlowego-brancha
git stash pop
git add . # lub dodaj pojedyncze pliki
git commit -m "Twój opis commitu";
# teraz Twoje zmiany są w prawidłowym branchu
```

Wielu ludzi sugerowało również użycie w tej sytuacji komendy `cherry-pick`. Wybierz tę metodę, która wydaje Ci się sensowniejsza!

```git
git checkout nazwa-prawidlowego-brancha
# wybierz ostatni commit do mastera
git cherry-pick master
# usuń go z mastera
git checkout master
git reset HEAD~ --hard
```