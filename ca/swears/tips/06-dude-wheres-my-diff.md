---
tags: tip
title: Oh merda, he intentat fer un diff però no ha passat res?!
id: on-es-el-meu-diff
order: 6
---

Si saps que has fet canvis als fitxers però `diff` és buit, probablement has fet `add` dels fitxers a l'staging i necessites fer servir una opció especial.

```git
git diff --staged
```

Arxiva-ho a &macr;\\_(ツ)\_/&macr; (sí, ja sé que és una funcionalitat i no un error, però és fotudament desconcertant i gens evident el primer cop que et passa!)
