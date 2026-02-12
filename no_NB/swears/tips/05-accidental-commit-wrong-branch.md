---
tags: tip
title: Åh skitt, jeg committa til feil branch!
id: accidental-commit-wrong-branch
order: 5
---

```git
# angre forrige commit, men la endringene bli igjen
git reset HEAD~ --soft
git stash
# flytt deg til riktig branch
git checkout navnet-til-riktig-branch
git stash pop
git add . # eller legg til enkeltfiler
git commit -m "din melding her";
# endringene dine er nå på riktig branch
```

Mange folk har foreslått å bruke `cherry-pick` til denne situasjonen óg, så velg den måten som gir mest mening for deg!

```git
git checkout navnet-til-riktig-branch
# hent siste commit til main
git cherry-pick main
# slett den fra main
git checkout main
git reset HEAD~ --hard
```
