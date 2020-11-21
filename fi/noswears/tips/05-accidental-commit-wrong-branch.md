---
tags: tip
title: Hyvänen aika, commitoin vahingossa väärään haaraan!
id: accidental-commit-wrong-branch
order: 5
---

```git
# perutaan uusin commit, mutta jätetään muutokset saataville
git reset HEAD~ --soft
git stash
# siirrytään oikeaan haaraan
git checkout name-of-the-correct-branch
git stash pop
git add . # tai lisää yksittäisiä tiedostoja
git commit -m "viestisi tähän"
# nyt muutoksesi ovat oikeassa haarassa
```

Monet ihmiset ovat ehdottaneet `cherry-pick`-komennon käyttämistä tässä tilanteessa, joten voit käyttää sitäkin valitaksesi mitkä muutokset haluat!

```git
git checkout oikean-haaran-nimi
# napataan uusin commit päähaaraan
git cherry-pick master
# poistetaan se päähaarasta
git checkout master
git reset HEAD~ --hard
```