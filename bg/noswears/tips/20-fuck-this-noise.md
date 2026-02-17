---
tags: tip
title: Офф, писна ми.
id: заеби-го
note: this should always be the last one in the list, so setting order to 20 so I don't have to re-name/re-order it
order: 20
---

```git
cd ..
sudo rm -r гадна-git-репо-директория
git clone https://some.github.url/гадна-git-репо-директория.git
cd гадна-git-репо-директория
```

Благодарности на Ерик В. за това. Всички оплаквания за употребата на `sudo` в тази шега да са към негов адрес.


Ама на истина, ако бранча ти е толкова счупен, че трябва да ресетнеш състоянието на репото, за да е като отдалеченото в "git-одобрен" начин, пробвай това, но знай че са деструктивни и невъзстановими действия!

```git
# вземи последното състояние на източника
git fetch origin
git checkout master
git reset --hard origin/master
# изтрии непроследени файлове и директории
git clean -d --force
# повтори checkout/reset/clean за всеки счупен бранч
```