---
tags: tip
title: Oh shit, trate de realizar un diff pero no pasó nada?!
id: donde-esta-mi-diff
order: 6
---

Si sabes que hiciste cambios a tus archivos, pero `diff` está vacío, probablemente hiciste `add` de tus archivos y necesitas un flag especial.

```git
git diff --staged
```

Archivos abajo &macr;\\\_(ツ)\_/&macr; (si, se que esto es una funcionalidad, no un error, pero es desconcertante y poco obvio la primera vez que te sucede!)
