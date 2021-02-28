---
tags: tip
title: Hyvänen aika, committasin päähaaraan jotain jonka olisi pitänyt olla toisessa haarassa!
id: accidental-commit-master
order: 4
---

```git
# luodaan uusi haara päähaaran nykyisestä tilasta
git branch uuden-haaran-nimi
# poistetaan uusin commit päähaarasta
git reset HEAD~ --hard
git checkout uuden-haaran-nimi
# uusin committisi on nyt uudessa haarassa :)
```
Huomio: tämä ei toimi jos olet jo puskenut muutokset julkiseen/jaettuun haaraan, ja jos olet kokeillut jo muita temppuja, voi olla että joudut käyttämään komentoa `git reset HEAD@{näin-monta-committia-taaksepäin}` komennon `HEAD~` sijaan. Voi surku. Myös, kiitos monille monille monille ihmisille, jotka ehdottivat upen tavan tehdä tämän lyhyemmin kuin mitä itse käytin. Kiitos teille!