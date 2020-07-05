---
tags: tip
title: Do hajzlu, potřebuju vzít zpět změny na jednom souboru!
id: undo-a-file
order: 8
---

```git
# najdi hash commitu pred zmenou
git log
# pouzij sipky nahoru a dolu k posunovani v historii
# az najdes svuj commit, uloz si jeho hash
git checkout [ulozeny hash] -- cesta/k/souboru.pripona
# puvodni verze souboru bude v tvych zmenach
git commit -m "Jéé, není potřeba překopírovat původní obsah souboru, abych vzal změnu zpět"
```

Přijít na toto byla VELKÁ POMOC. VELKÁ POMOC. V-E-L-K-Á P-O-M-O-C. Kurva drát, na které planetě dává smysl použít `checkout --` jako nejlepší způsob jak vrátit změny v souboru? :hrozit-rukou-na-linuse-torvaldse: