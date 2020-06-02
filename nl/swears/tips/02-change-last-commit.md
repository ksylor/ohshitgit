---
tags: tip
title: Godverdomme, ik commit en realiseer me dat ik nog een kleine wijziging moet doen!
id: change-last-commit
order: 2
---

```git
# Maak je wijziging
git add . # or add individual files
git commit --amend --no-edit
# Nu heeft je laatste commit de wijziging!
# LET OP: Pas nooit publieke commits aan!!
```

Dit overkomt me meestal als ik iets commit, en dan tests/linters uitvoer. "... vergeet ik weer een spatie na een `=` ...." - Je kan de wijziging ook als nieuwe commit doen, en ze dan met `git rebase -i` samenvoegen, maar dit is vele malen sneller.

* Waarschuwing: pas nooit commits aan die je naar een publieke of gedeelde branch gepusht hebt!! Pas alleen commits aan in je lokale repository tenzij je behoefte aan een klote tijd hebt. *
