---
tags: tip
title: O kurczę, muszę przywrócić commit dokonany jakieś 5 commitów temu!
id: undo-a-commit
order: 7
---

```git
# znajdź commit, który chesz przywrócić
git log
# użyj klawiszy ze strzałkami aby poruszać się w górę i w dół po historii
# gdy znajdziesz swój commit, zanotuj jego hash
git revert [zapisany hash]
# git stworzy nowego commita, który przywraca tamten commit
# postępuj zgodnie z instrukcjami, aby uzupełnić opis commitu
# albo po prostu zapisz i zacommituj
```

Okazuje się, że wcale nie musisz przywracać zmian poprzez ręczne wyszukiwanie i robienie kopiuj-wklej starej zawartości do istniejącego pliku! Jeżeli zacommitowałeś(aś) buga, możesz przywrócić cały commit za jednym zamachem za pomocą `revert`.

Możesz także przywrócić pojedynczy plik zamiast całego commitu! Ale oczywiście jak na gita przystało, to zupełnie inny zestaw komend...