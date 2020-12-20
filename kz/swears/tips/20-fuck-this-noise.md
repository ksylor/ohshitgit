---
tags: tip
title: Білә впизду, мен берілемін.
id: мен-берілемін
note: this should always be the last one in the list, so setting order to 20 so I don't have to re-name/re-order it
order: 20
---

```git
cd ..
sudo rm -r сайтан-алғыр-git-репозиторий
git clone https://some.github.url/сайтан-алғыр-git-репозиторий.git
cd сайтан-алғыр-git-репозиторий
```

`sudo` командасын ескерткен адам Eric V. Осы қалжыңда `sudo`-ны қолдану бойынша шағымдар Эрикке жіберілсін.

Жалпы, егер сіздің тармағыңыз соооншама бығып кетсе, тіпті қашықтықтағы репозиторийдің күйіне "гит-рассталған әдіспен" оралу керек болса, онда мынаны көріңіз, бірақ бұл әдіс қайтымсыз!

```git
# origin соңғы күйін алу
git fetch origin
git checkout master
git reset --hard origin/master
# индекстелмеген файлдарды жою 
git clean -d --force
# енді checkout/reset/clean командаларын әр бұзылған тармақта қайталау керек
```
