---
tags: tip
title: Voi vittu, tein commitin ja huomasin heti että pitää tehdä vielä yksi muutos!
id: change-last-commit
order: 2
---

```git
# tee tarvitsemasi muutos
git add . # tai lisää yksittäiset tiedostot
git commit --amend --no-edit
# nyt viimeisin committisi sisältää sen muutoksen!
# VAROITUS! älä ikinä käytä --amend komentoa julkisille commiteille
```

Tämä tapahtuu usein kun ajan testejä ja linttereitä... ja jumalauta, silloin kun unohdan laittaa välimerkin yhtäsuuruusmerkin perään. Saman muutoksen voisi tehdä omana committinaan ja sitten ajaa komennon `rebase -i` jotta puristat commitit yhteen, mutta tämä on miljoona kertaa nopeampaa.

*Varoitus: Älä ikinä käytä amend-komentoa commiteille jotka on jo puskettu julkiseen/jaettuun haaraan! Käytä amend-komentoa vain muutoksiin jotka ovat lokaalissa ympäristössäsi tai muuten tulee ongelmia.*
