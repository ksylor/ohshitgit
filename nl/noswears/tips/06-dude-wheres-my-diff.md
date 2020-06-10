---
tags: tip
title: Oeps, ik deed een diff en er gebeurde niks!
id: dude-wheres-my-diff
order: 6
---

Als je zeker weet dat je bestanden hebt aangepast, maar `diff` geeft geen output, dan heb je je wijzigingen waarschijnlijk toegevoegd (`add`) aan je locale staging omgeving. Dat kan je zien met dit vlaggetje.

```git
git diff --staged
```

Sla op onder: &macr;\\\_(ツ)\_/&macr;

(Ja, ik weet dat dit een functionaliteit is en geen bug maar het is bijzonder en de eerste keer dat je dit nodig hebt is dit zeker niet helder)
