---
tags: tip
title: Oh shit, ich habe auf dem falschen Branch commited!
id: falscher-branch-commit
order: 5
---

```git
# Mach den letzten Commit rückgängig, aber erhalte die 
# Änderungen
git reset HEAD~ --soft
git stash
# Navigiere zum richtigen Branch
git checkout name-des-richtigen-branch
git stash pop
git add . # oder füge einzelne Dateien hinzu
git commit -m "Deine Nachricht hier"
# Jetzt sind die Änderungen auf dem richtigen Branch
```

Viele haben vorgeschlagen `cherry-pick` hierfür zu verwenden. Das ist auch absolut okay, also wähle die Variante, die dir besser gefällt!

```git
git checkout name-des-richtigen-branch
# Wähle den letzten Commit vom master
git cherry-pick master
# Und lösche den Commit vom master
git checkout master
git reset HEAD~ --hard
```