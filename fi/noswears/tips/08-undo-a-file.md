---
tags: tip
title: Hyvänen aika, haluan poistaa muutokseni yhteen tiedostoon!
id: undo-a-file
order: 8
---

```git
# etsi hash tai commit ajalta ennen kuin teit muutoksia tiedostoon
git log
# käytä nuolinäppäimiä mennäksesi eteen- ja taaksepäin historiassa
# kun löydät haluamasi commitin, tallenna sen hash
git checkout [tallennettu hash] -- polku/tiedostoon
# tiedoston vanha versio on nyt indeksissä
git commit -m "Vau, ei tarvii kopioida-ja-liittää tiedoston muutoksia"
```

Kun viimein löysin tämän, se oli HUIKEAA. HUIKEAA. HUI-KE-AA. Mutta vakavasti ottaen, miten ihmeessä `checkout --` on mukamas järkevin komento peruuttaa tiedoston muutokset? :pui-nyrkkiä-linus-torvaldsille: