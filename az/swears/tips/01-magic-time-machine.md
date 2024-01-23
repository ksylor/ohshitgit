---
tags: tip
title: Ay sikim, çox böyük bir səhv etdim, nolar git'in bunu geri alacaq sehirli zaman maşını olduğunu de!?!
id: magic-time-machine
order: 1
---

```git
git reflog
# bütün branch'lar daxil, git'də etdiyiniz  
# hər bir şeyin siyahısını görəcəksiniz!
# Hər birinin HEAD@{index} formatında indeksi var
# sıçıb bulamazdan əvvəlki təmiz vəziyyəti tap,
git reset HEAD@{index}
# bu da sənə zaman maşını.
```

Siz bunu səhvən sildiyiniz bir şeyi geri qaytarmaq və ya sadəcə reponu pozan bəzi şeyləri silmək və ya pox kimi merge'ü geri qaytarmaq ya da hər şeyin işlədiyi vaxta geri qayıtmaq üçün istifadə edə bilərsiz. Mən `reflog`'u çox istifadə edirəm. Bunu buraya əlavə etməyi tövsiyyə edən hər kəsə təşəkkür edirəm.