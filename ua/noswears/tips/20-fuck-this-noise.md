---
tags: tip
title: Пішло воно все, я здаюся
id: пішло-воно-все
note: this should always be the last one in the list, so setting order to 20 so I don't have to re-name/re-order it
order: 20
---

```git
cd ..
sudo rm -rf сраний-репозиторій
git clone https://some.github.url/сраний-репозиторій.git
cd сраний-репозиторій
```

Дякую Eric V. за цю підказку. Будь-які скарги щодо `sudo` в цьому жарті пишіть йому. 


Якщо серйозно і ваша гілка настільки засрана, що вам треба повернути репозиторій до стану в remote по красивому, то спробуйте так, але знайте, що так ви знищуєте ваші дані які вже не можна буде повернути!

```git
# отримати останню версію origin
git fetch origin
git checkout master
git reset --hard origin/master
# видалити все (навіть приховані та неіндексовані файли та директорії)
git clean -d --force
# повторіть checkout/reset/clean для кожної засраної гілки
```