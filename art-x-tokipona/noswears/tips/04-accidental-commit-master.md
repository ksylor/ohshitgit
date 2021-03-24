---
tags: tip
title: pakala! mi pana awen tawa nasin pali nanpa wan, taso ona li wile tawa nasin sin!
id: accidental-commit-master
order: 4
---

```git
# o pali e nasin pali sin tan ijo pi nasin pali nanpa wan
git branch nimi-pi-nasin-pali-sin
# o weka e lipu awen pini wan tan nasin pali nanpa wan
git reset HEAD~ --hard
git checkout nimi-pi-nasin-pali-sin
# lipu awen li kama lon nasin sin :)
```

o sona e ni: ale li ken lukin e lipu awen la nasin ni li ken ala. sina kepeken nasin ante li pona ala e pakala la, ken la sina wile kepeken `git reset HEAD@{nanpa-pi-lipu-awen-pini}` li kepeken ala `HEAD~`. ike a. ante la, jan mute mute mute li toki e nasin ni tawa mi: sina ken lili e nasin ni. ni li sin tawa sona mi. ona ale li pona!
