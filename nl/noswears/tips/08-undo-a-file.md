---
tags: tip
title: Oeps, ik moet de wijzigingen in een bestand terugdraaien!
id: undo-a-file
order: 8
---

```git
# vind een hash voor een commit voordat het bestand is veranderd.
git log
# scroll op en neer door de history
# als je de commit gevonden heb, copieer de hash
git checkout [saved hash] -- hele/pad/naar/bestand
# de oude versie van het bestand zal in je index staan
git commit -m "Super, je hoeft niet het oude bestand te knipplakken!"
```

Toen ik dit uitgezocht had was ik blij. BLIJ. S-U-P-E-R-B-L-I-J.. Maar op welke planeet is `checkout --` een slimme optie om een bestand terug te draaien?! :toont-vuist-aan-linus-torvalds:
