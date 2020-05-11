---
tags: tip
title: Waduh, Saya telah melakukan commit dan langsung menyadari bahwa Saya perlu menambahkan sesuatu!
id: change-last-commit
order: 2
---

```git
# Anda buat perubahan
git add . # atau tambahkan secara satu-persatu
git commit --amend --no-edit
# sekarang commit terakhir Anda memiliki perubahan tersebut!
# PERINGATAN: jangan pernah amend commit yang bersifat publik
```

Ini biasanya terjadi saat Saya commit, dan menjalankan tests/linters... dan waduh, Saya tidak meletakkan spasi setelah tanda sama dengan. Anda juga bisa melakukan perubahan sebagai commit yang baru dan lakukan `rebase -i` untuk melakukan keduanya secara bersamaan, tapi cara ini jauh lebih cepat.

*Peringatan: Anda jangan pernah amend commit yang telah di-push ke public/shared branch! Hanya amend commit yang berada di local copy Anda atau Anda akan mengalami periode yang tidak menyenangkan*