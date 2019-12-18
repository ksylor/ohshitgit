---
tags: tip
title: O kurwa, muszę wycofać moje zmiany z pliku!
id: undo-a-file
order: 8
---

```git
# znajdź hash commitu sprzed momentu, w którym plik został zmieniony
git log
# użyj klawiszy ze strzałkami aby poruszać się w górę i w dół po historii
# gdy znajdziesz swój commit, zanotuj jego hash
git checkout [saved hash] -- path/to/file
# stara wersja pliku będzie teraz w Twoim indexie
git commit -m "Wow, nie musisz wycofywać zmian metodą kopiuj-wklej!"
```

Kiedy wreszcie to ogarnęłam, to było MEGA. MEGA. M-E-G-A. A tak serio, na której planecie do kurwy nędzy `checkout --` brzmi sensownie jako najlepsza metoda wycofania zmian w pliku? :wygraża-pięściami-w-stronę-linusa-torvaldsa: