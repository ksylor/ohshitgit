---
tags: tip
title: Argh fuck, ik deed een diff en er gebeurde niks!!
id: dude-wheres-my-diff
order: 6
---

Als je zeker weet dat je bestanden hebt aangepast, maar `diff` geeft geen output, dan heb je je wijzigingen waarschijnlijk toegevoegd (`add`) aan je locale staging. Dat kan je zien met een vlaggetje.


```git
git diff --staged
```

&macr;\\\_(ツ)\_/&macr; (Ja, ik weet dat dit een kut functionaliteit is en geen bug maar het is een partij idiootstom en de eerste keer dat je dit nodig hebt is dit zeker niet helder)
