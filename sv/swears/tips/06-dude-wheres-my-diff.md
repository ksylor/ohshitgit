---
tags: tip
title: Shit pommes frites, jag försökte köra en diff men inget hände?!
id: dude-wheres-my-diff
order: 6
---

Om du vet att du har gjort ändringar i filer, men `diff` är tom, då har du förmodligen `add`:at dina filer till staging och behöver använda en speciell flagga.

```git
git diff --staged
```

Spara detta tips under &macr;\\\_(ツ)\_/&macr; (ja, jag vet att detta är en feature och inte en bugg, men den är jävligt förbluffande och icke-uppenbar första gången det händer dig!)
