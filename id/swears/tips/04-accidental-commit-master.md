---
tags: tip
title: Tai, gw gak sengaja commit sesuatu di master yang harusnya di branch baru!
id: accidental-commit-master
order: 4
---

```git
# bikin branch baru dari master yang sekarang
git branch nama-branch-baru
# hapus commitan terakhir lo dari master branch
git reset HEAD~ --hard
git checkout nama-branch-baru
# sekarang commit-an lo ada di branch yang baru :)
```

Catatan: Ini gak guna kalau lo udah push commit-an lo ke public/shared branch, dan kalau lo udah pernah commit yang lain-lain, lo mungkin perlu `git reset HEAD@{jumlah-commitan-lo}` daripada `HEAD~`. Sedih yang tak berujung. Makasih lagi ke lo lo lo semua yang udah ngasih tau cara yang lebih kece yang tadinya gue gak tau. Makasih semua!