---
tags: tip
title: E jebem mu mater u pičku, slučajno sam komitovao na pogrešan branč!
id: slucajni-komit-pogresan-branc
order: 5
---

```git
# poništi zadnji komit, ali ostavi izmjene
git reset HEAD~ --soft
git stash
# prebaci se na pravi branč
git checkout name-of-the-correct-branch
git stash pop
git add . # ili dodaj fajlove indvidualno
git commit -m "your message here";
# sada su tvoje izmjene na pravom branču
```

Mnogo ljudi je predložilo da koristim `cherry-pick` za ovu situaciju, pa izaberite ono što vam ima najviše smisla!

```git
git checkout name-of-the-correct-branch
# uzmi zadnji komit sa mastera
git cherry-pick master
# izbriši komit sa mastera
git checkout master
git reset HEAD~ --hard
```