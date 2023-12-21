---
tags: tip
title: Oh Nei, ich ha us Versehe öbbis uf master commited, das eigentlich uf e eigene Branch ghört
id: us-versehe-commit-master
order: 4
---

```git
# Erstell e neue Branch mit em Stand vo master
git branch neue-branch-name
# Entfärn dr letzti Commit vo master
# und wächsel zum neue Branch
git reset HEAD~ --hard
git checkout neue-branch-name
# Di Commit läbt jetzt im neue Branch wiiter :)
```

Hinweis: Das funktioniert nid, wenn du de Commit scho uf e öffentliche Branch pusht hesch. Wenn du vorhär scho meh Sache probiert hesch, muesch du vellicht `git reset HEAD@{aahl-vo-commits}` statt `HEAD~` verwänden. Viele Dank an die viele viele Lüt, die vorgeschlage hän wie me das Problem an schnällschte löst – ich ha die Lösig nonig kennt.