---
tags: tip
title: Extreme Unordnung, ich gebe auf!
id: scheiss-unordnung
note: this should always be the last one in the list, so setting order to 20 so I don't have to re-name/re-order it
order: 20
---

```git
cd ..
sudo rm -rf scheiss-git-repo
git clone https://some.github.url/scheiss-git-repo.git
cd scheiss-git-repo
```

Danke an Eric V. für diesen Tipp. Alle Beschwerden über die Verwendung von `sudo` bitte an ihn schicken.

Aber mal ernsthaft: wenn dein Branch soo verhunzt ist, dass du den Stand deines Repos auf den Stand auf dem Git-Server zurücksetzen musst, dann solltest du das hier ausprobieren. Aber aufpassen, denn diese Kommandos lassen sich nicht rückgängig machen!


```git
# Hole den neusten Stand vom Server
git fetch origin
git checkout master
git reset --hard origin/master
# Lösche alle Dateien und Ordner, die noch nicht eingecheckt wurden
git clean -d --force
# Wiederhole checkout/reset/clean für jeden verhunzten Branch
```