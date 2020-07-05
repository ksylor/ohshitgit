---
tags: tip
title: Verdomme, ik moet een commit terugdraaien van zeker 5 commits terug!
id: undo-a-commit
order: 7
---

```git
# find the commit you need to undo
git log
# use the arrow keys to scroll up and down in history
# once you've found your commit, save the hash
git revert [saved hash]
# git will create a new commit that undoes that commit
# follow prompts to edit the commit message
# or just save and commit
```

Het is goddome helemaal niet nodig om het originele bestand terug te vinden! Dat zit gewoon nog in die kut git. Als je een bug gecommit hebt, kan je de commit terugdraaien en zo je oude inhoud terugkrijgen met `revert`.

Je kunt ook alleen een specifiek bestand terugdraaien, in plaats van je die hele kut commit die allerlei andere files beslaat. Maar goed, zoals het git betaamt, is dat natuurlijk een totaal andere klerecombo van git commando's ..
