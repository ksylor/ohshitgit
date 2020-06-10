---
tags: tip
title: Oeps, ik moet een commit terugdraaien van zeker 5 commits terug!
id: undo-a-commit
order: 7
---

```git
# vindt de commit die je wil terugdraaien
git log
# scroll op en neer door de history
# als je de commit gevonden heb, copieer de hash
git revert [gecopieerde hash]
# git zal een nieuwe commit maken die die oude terugdraait.
# volg de prompts om een commit bericht te schrijven
# of sla gewoon op en commit
```

Het is helemaal niet nodig om je oude bestand terug te vinden. Dat zit gewoon nog in git. Als je een bug gecommit hebt, kan je de commit terugdraaien en zo je oude inhoud terugkrijgen met `revert`.

Je kunt ook alleen een specifiek bestand terugdraaien, in plaats van een hele commit die wellicht vele files omvat. Maar goed, zoals het git betaamt, is dat een totaal andere set van git commando's ..
