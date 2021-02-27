---
tags: tip
title: Åt fanders med detta, jag ger upp.
id: forget-this-noise
note: den här måste alltid vara sist, så sätter ordningen till 20 så jag inte behöver byta namn / sortera om den
order: 20
---

```git
cd ..
sudo rm -r dumma-git-repo-katalog
git clone https://någon.github.url/dumma-git-repo-katalog.git
cd dumma-git-repo-katalog
```

Tack till Eric V. för denna. Alla klagomål om `sudo` i detta skämtet kan riktas mot honom. 


Men allvarligt talat, om din branch är sååå trasig att du behöver nollställa ditt repos tillstånd till att bli samma som repot som är remote på ett "git-godkänt" sätt, försök med detta, men bemärk att dessa är destruktiva och oåterkalleliga kommandon!

```git
# hämta senaste tillstånd från origin
git fetch origin
git checkout master
git reset --hard origin/master
# radera ospårade filer och kataloger
git clean -d --force
# upprepa checkout/reset/clean till varje förstörd branch
```