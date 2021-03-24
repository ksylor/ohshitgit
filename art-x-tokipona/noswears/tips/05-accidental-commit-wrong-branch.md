---
tags: tip
title: pakala! mi awen tawa nasin pali ike!
id: accidental-commit-wrong-branch
order: 5
---

```git
# o ala e lipu awen pini. taso o awen lon e ante ona.
git reset HEAD~ --soft
git stash
# o tawa nasin pali pona
git checkout nimi-pi-nasin-pali-pona
git stash pop
git add . # anu la o pana e lipu wan mute
git commit -m "mi ante e ijo"
# ante ni li kama lon nasin pali pona
```

jan mute li toki e nasin `cherry-pick` tawa pakala ni. nasin tu li pona. o kepeken nasin ni: ona li pona tawa sina.

```git
git checkout nasin-pali-pi-tenpo-ni
# o kama jo e lipu awen pini pi nasin pali nanpa wan
git cherry-pick master
# o weka e ona tawa nasin pali nanpa wan
git checkout master
git reset HEAD~ --hard
```
