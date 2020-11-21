---
tags: tip
title: Hyvänen aika, yritin ajaa  Dangit, I tried to run a diff but nothing happened?!
id: dude-wheres-my-diff
order: 6
---

TODO 
Jos tiedät että olet tehnyt muutoksia tiedostoihin, muuta `diff`-komennon tuloste näyttää tyhjää, olet luultavasti siirtänyt tiedostot jo `add`-komentolla valmistelualueelle (staging), ja nähdäkseksesi muutokset, joudut lisäämään erityisen option.

```git
git diff --staged
```

Sarjassamme omituista &macr;\\\_(ツ)\_/&macr; (ja kyllä, tiedän että tämä on toiminnallisuus, ei virhetilanne, mutta se on hämmentävää ja epäintuitiivista kun törmäät tähän ensimmäisen kerran!)
