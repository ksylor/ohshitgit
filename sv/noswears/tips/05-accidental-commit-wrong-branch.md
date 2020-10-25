---
tags: tip
title: För sjuttsingen, jag råkade committa till fel branch!
id: accidental-commit-wrong-branch
order: 5
---

```git
# ångra senaste commit, men lämna kvar ändringarna
git reset HEAD~ --soft
git stash
# flytta till rätt branch
git checkout namnet-av-rätt-branch
git stash pop
git add . # eller lägg till individuella filer
git commit -m "ditt meddelande här"
# nu finns dina ändringar på rätt branch
```

Massor av människor har föreslagit `cherry-pick` för denna situationen också, så välj den lösning som ger mest mening för dig!

```git
git checkout namnet-av-rätt-branch
# hämta senaste commit från master
git cherry-pick master
# ta bort den från master
git checkout master
git reset HEAD~ --hard
```