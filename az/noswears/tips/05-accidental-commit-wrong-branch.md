---
tags: tip
title: İçinə zibil, səhvən kodu başqa branch'a commitlədim!
id: accidental-commit-wrong-branch
order: 5
---

```git
# son commit'i geri al, amma dəyişikliklər qalsın
git reset HEAD~ --soft
git stash
# düzgün branch'a keç
git checkout düzgün-branch-adı
git stash pop
git add . # və ya faylların bir bir adını yazın
git commit -m "mesajın";
# indi dəyişikliklərin düzgün branch'a keçdi
```

Çox adam bu vəziyyət üçün `cherry-pick` komandasını da istifadəsini tövsiyyə edir, ona görə hansı sizə daha rahat gəlirsə onu istifadə edə bilərsiz.

```git
git checkout düzgün-branch-adı
# master'dəki son commit'i al
git cherry-pick master
# master'dən o commit'i sil
git checkout master
git reset HEAD~ --hard
```