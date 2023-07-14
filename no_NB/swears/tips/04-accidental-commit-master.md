---
tags: tip
title: Åh skitt, jeg kom i skade for å committe noe til main som skulle ha vært på en helt ny branch!
id: accidental-commit-master
order: 4
---

```git
# skap ny brach fra nåværende tilstand til main
git branch nytt-branch-navn
# fjern siste commit fra main-branchen
git reset HEAD~ --hard
git checkout nytt-branch-navn
# committen din bor på denne branchen nå :)
```

Merk: dette virker ikke om du allerede har pusha committen til en offentlig/delt branch, og om du har prøvd andre ting først, så må du muligens gjøre `git reset HEAD@{antall-committer-tilbake}` istedenfor `HEAD~`. Uendelig tristesse. Til slutt, mange mange mange folk foreslo en knall måte å forkorte dette på som jeg ikke kjente til selv. Tusen takk, alle!
