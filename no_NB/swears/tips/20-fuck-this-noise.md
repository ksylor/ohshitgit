---
tags: tip
title: Faen ta det her, jeg gir opp.
id: fuck-this-noise
note: denne skal altid være den siste i lista, å sette order til 20 gjør at jeg ikke trenger omdøpe/omsortere denne
order: 20
---

```git
cd ..
sudo rm -r jævla-dritt-git-repo
git clone https://en.github.url/jævla-dritt-git-repo.git
cd jævla-dritt-git-repo
```

Takk til Eric V. for denne. Alle klager på bruk av `sudo` i denne vitsen kan sendes ham.

Seriøst, om branchen din er sååå ødelagt at du trenger nullstille repo-tilstanden til å være den samme som i remote-repoet på en «git-godkjente»-måte, prøv dette, men vær klar over at dette er destruktive og ugjenkallelige handlinger!


```git
# hent siste tilstand fra origin
git fetch origin
git checkout main
git reset --hard origin/main
# slett usporede filer og kataloger
git clean -d --force
# repeter checkout/reset/clean for hver ødelagt branch
```