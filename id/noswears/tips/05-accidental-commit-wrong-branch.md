---
tags: tip
title: Waduh, Saya tidak sengaja melakukan commit ke branch yang keliru!
id: accidental-commit-wrong-branch
order: 5
---

```git
# undo commit terakhir, tapi perubahannya tetap tersedia
git reset HEAD~ --soft
git stash
# pindah ke branch yang benar
git checkout nama-branch-yang-benar
git stash pop
git add . # atau tambahkan secara satu-persatu
git commit -m "pesan Anda di sini"
# sekarang perubahan Anda ada di branch yang benar
```

Banyak orang yang menyarankan untuk menggunakan `cherry-pick` untuk kondisi ini, jadi silakan pilih cara yang Anda paling sukai!

```git
git checkout nama-branch-yang-benar
# ambil commit terakhir ke master
git cherry-pick master
# hapus dari  master
git checkout master
git reset HEAD~ --hard
```