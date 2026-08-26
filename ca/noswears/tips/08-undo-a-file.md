---
tags: tip
title: Dangit, necessito desfer els canvis d'un fitxer!
id: desfer-un-fitxer
order: 8
---

```git
# busca el hash d'un commit anterior al canvi del fitxer
git log
# fes servir les tecles de fletxa per desplaçar-te per l'historial
# quan trobis el commit, desa'n el hash
git checkout [hash desat] -- path/to/file
# la versió antiga del fitxer serà al teu índex
git commit -m "Uau, no cal copiar i enganxar per desfer"
```

Quan finalment ho vaig descobrir va ser ENORME. ENORME. E-N-O-R-M-E. Però, parlant seriosament, en quin planeta maleït té sentit que `checkout --` sigui la millor manera de desfer un fitxer? :shakes-fist-at-linus-torvalds:
