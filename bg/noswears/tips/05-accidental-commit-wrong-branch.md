---
tags: tip
title: Малее, комитнах в грешния бранч!
id: случайно-комитване-грешен-бранч
order: 5
---

```git
# върни последния комит, но остави промените налични
git reset HEAD~ --soft
git stash
# отиди на правилния бранч
git checkout име-на-правилния-бранч
git stash pop
git add . # или отделни файлове
git commit -m "твое съобщение тук";
# сега промените ти са на правилния бранч
```

Много хора предлагат да се ползва и `cherry-pick` за такава ситуация, така че ползвай което ти изглежда по-смислено!

```git
git checkout име-на-правилния-бранч
# вземи последния комит към master
git cherry-pick master
# изтрии го от master
git checkout master
git reset HEAD~ --hard
```