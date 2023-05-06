---
tags: tip
title: Tai, gw gak sengaja commit ke branch yang salah!
id: tidaksengaja-commit-branch-salah
order: 5
---

```git
# undo commit-an terakhir, tapi biarin changesnya
git reset HEAD~ --soft
git stash
# pindah ke branch yang bener
git checkout nama-branch-yang-bener
git stash pop
git add . # atau tambahin satu-satu filenya
git commit -m "message lo di sini";
# sekarang changes lo ada di branch yang bener
```

Banyak yang ngasih tau gue pake `cherry-pick` kalo lo ngadepin masalah kayak gini, jadi terserah lo mau pake yang mana!

```git
git checkout nama-branch-yang-bener
# ambil commit-an terakhir ke master
git cherry-pick master
# hapus dari master
git checkout master
git reset HEAD~ --hard
```