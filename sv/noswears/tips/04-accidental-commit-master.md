---
tags: tip
title: För sjuttsingen, jag råkade committa något till master som borde ha varit på en helt ny branch!
id: accidental-commit-master
order: 4
---

```git
# skapa en ny branch från masters nuvarande tillstånd
git branch some-new-branch-name
# återställ senaste commit från branchen master
git reset HEAD~ --hard
git checkout some-new-branch-name
# din commit bor i denna branchen nu :)
```

Bemärk: Detta fungerar inte om du redan har pushat committen till en publik/gemensam branch, och om du försökt andra saker först, kan du behöva göra `git reset HEAD@{number-of-commits-back}` istället för `HEAD~`. Oändlig sorg. Slutligen, många många många människor föreslog en grym grej för att göra detta kortare som jag inte själv kände till. Tack alla!