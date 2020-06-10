---
tags: tip
title: Godverdomme, vergeet het maar, klotegit.
id: fuck-this-noise
note: this should always be the last one in the list, so setting order to 20 so I don't have to re-name/re-order it
order: 20
---

```git
cd ..
sudo rm -r klote-git-repo-dir
git clone https://some.github.url/klote-git-repo-dir.git
cd klote-git-repo-dir
```

Dank je wel Eric V. hiervoor. Alle gezeik over het gebruik van `sudo` in deze grap mag je aan hem sturen.


Maar goed, als je branch zo verkloot is dat je echt niks meer met je repo kan en je terug wil naar de status van de remote repo, in een "git-goedgekeurde" manier, probeer dit dan. Wees je bewust dat dit definitieve en destructieve acties zijn!

```git
# haal de laatste status op
git fetch origin
git checkout master
git reset --hard origin/master
# delete untracked files and directories
git clean -d --force
# herhaal checkout/reset/clean voor elke kapotte branch
```
