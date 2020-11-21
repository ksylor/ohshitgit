---
tags: tip
title: Hyvänen aika, haluan poistaa commitin ennen 5 tuoreinta committia!
id: undo-a-commit
order: 7
---

```git
# etsi commit jonka haluat poistaa
git log
# käytä nuolinäppäimiä mennäksesi eteen- ja taaksepäin historiassa
# kun löydät haluamasi commitin, tallenna sen hash
git revert [tallennettu hash]
# git lisää uuden commitin joka poistaa kyseisen commitin
# seuraa ohjeita muokataksesi commit-viestiä 
# tai vain tallenna ja committaa
```

Kävi ilmi että ei tarvisekaan kopioida ja liittää tiedoston vanhaa sisältöä muokataksesi tehtyjä muutoksia! Jos olet tehnyt bugin, voit peruuttaa commitissa olevat muutokset kerralla käyttämällä `revert`-komentoa.

Voit myös käyttää `revert`-komentoa yhteen tiedostoon yhden commitin sijaan! Mutta tietenkin, git-mäiseen tapaan, sen tekeminen onkin sitten aivan eri komentosarja...