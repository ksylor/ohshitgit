---
tags: tip
title: Nu får det va nog, jag ger upp.
id: forget-this-noise
note: den här måste alltid vara sist, numrerar den till 20 så jag inte behöver byta namn / sortera om den
order: 20
---

```git
cd ..
sudo rm -r dumma-git-repo
git clone https://någon.github.url/dumma-git-repo.git
cd dumma-git-repo
```

Tack till Eric V. för den här. Alla klagomål om `sudo` i det här skämtet kan riktas mot honom. 


Men allvarligt talat, om din branch är så sönder att du måste nollställa ditt repos tillstånd till samma som remote på ett "git-godkänt" sätt, försök med följande, men observera att de här är destruktiva och oåterkalleliga kommandon!

```git
# hämta senaste tillstånd från origin
git fetch origin
git checkout master
git reset --hard origin/master
# radera ospårade filer och kataloger
git clean -d --force
# upprepa checkout/reset/clean till varje förstörd branch
```