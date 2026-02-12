---
tags: tip
title: Voi vittu, jag råkade committa något till master som borde ha varit på en helt ny branch!
id: accidental-commit-master
order: 4
---

```git
# gör en ny branch från masters nuvarande tillstånd
git branch namn-på-någon-ny-branch
# återställ senaste commit från branchen master
git reset HEAD~ --hard
git checkout namn-på-någon-ny-branch
# din commit bor i den här branchen nu :)
```

OBS: Det här fungerar inte om du redan har pushat committen till en publik/gemensam branch, och om du försökt andra saker först, kan du behöva göra `git reset HEAD@{number-of-commits-back}` istället för `HEAD~`. Jävla jobbigt. Till sist vill jag tacka alla som har föreslagit den här kortare metoden som jag själv inte visste om, sjukt makee!