---
tags: tip
title: Förmårrat, jag försökte köra git diff men ingenting syns?!
id: dude-wheres-my-diff
order: 6
---

Om du vet att du har gjort ändringar i filer, men `diff` inte visar något, då har du antagligen `add`:at dina filer till staging och behöver använda flaggan `--staged` för att se ändringarna.

```git
git diff --staged
```

Spara det här tipset under &macr;\\\_(ツ)\_/&macr; (joo, jag vet att det här är en feature och inte en bugg, men det är jätte förvirrande och inte alls självklart första gången det händer dig!)
