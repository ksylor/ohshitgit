---
tags: tip
title: Нахуй всё, я сдаюсь.
id: к-чёрту-всё
note: this should always be the last one in the list, so setting order to 20 so I don't have to re-name/re-order it
order: 20
---

```git
cd ..
sudo rm -rf чёртов-репозиторий-git
git clone https://some.github.url/чёртов-репозиторий-git.git
cd чёртов-репозиторий-git
```

Спасибо Eric V. за эту подсказку. Все жалобы по поводу использованию `sudo` в этой шутке могут быть направлены сразу ему. 

Вообще говоря, если ваша ветка настооолько загажена, что нужно вернуться к удалённому состоянию в "git-корректном стиле" попробуйте это, но это необратимо!

```git
# получить последнее состояние origin
git fetch origin
git checkout master
git reset --hard origin/master
# удалить неиндексированные файлы
git clean -d --force
# повторить checkout/reset/clean для каждой испорченной ветки
```