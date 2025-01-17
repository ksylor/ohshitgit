---
tags: tip
title: İçinə zibil, çox böyük bir səhv etdim, nolar git'in bunu geri alacaq sehirli zaman maşını olduğunu de!?!
id: magic-time-machine
order: 1
---

```git
git reflog
# bütün branch'lar daxil, git'də etdiyiniz  
# hər bir şeyin siyahısını görəcəksiniz!
# Hər birinin HEAD@{index} formatında indeksi var
# səhvlərdən əvvəlki təmiz vəziyyəti tap,
git reset HEAD@{index}
# bu da sənə zaman maşını
```

You can use this to get back stuff you accidentally deleted, or just to remove some stuff you tried that broke the repo, or to recover after a bad merge, or just to go back to a time when things actually worked. I use `reflog` A LOT. Mega hat tip to the many many many many many people who suggested adding it!

Siz bunu səhvən sildiyiniz bir şeyi geri qaytarmaq və ya sadəcə reponu pozan bəzi şeyləri silmək və ya bərbad merge'ü geri qaytarmaq ya da hər şeyin işlədiyi vaxta geri qayıtmaq üçün istifadə edə bilərsiz. Mən `reflog`'u çox istifadə edirəm. Bunu buraya əlavə etməyi tövsiyyə edən hər kəsə təşəkkür edirəm.