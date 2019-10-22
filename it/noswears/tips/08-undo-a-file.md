---
tags: tip
title: Dangit, devo annullare le mie modifiche di un file!
id: annullare-modifiche-di-un-file
order: 8
---

```git
# trova la hash del commit prima che il file fosse modificato
git log
# usa le frecce per andare su e giú nella storia
# quando hai trovato il commit, salva la hash
git checkout [hash salvata] -- path/del/file/in/questione
# la versione precedente del file sarà nel tuo index
git commit -m "Wow, non devi fare copia-incolla per annullare modifiche"
```

Quando ho finalmente scoperto questa cosa è stato il MASSIMO. MASSIMO. M-A-S-S-I-M-O. Ma sul serio peró, su che pianeta `checkout --` ha senso come metodo migliore per annullare modifiche su un file? :shakes-fist-at-linus-torvalds: