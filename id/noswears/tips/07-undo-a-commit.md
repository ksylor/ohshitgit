---
tags: tip
title: Waduh, Saya perlu melakukan undo commit dari 5 commit yang sebelumnya!
id: undo-sebuah-commit
order: 7
---

```git
# temukan commit yang perlu Anda undo
git log
# gunakan arrow keys untuk scroll ke atas dan bawah di riwayat
# setelah Anda menemukan commit Anda, simpan hash-nya
git revert [hash yang Anda simpan]
# git akan membuat commit baru yang meng-undo commit tersebut
# ikuti instruksi untuk edit pesan commit 
# atau langsung simpan dan commit
```

Ternyata Anda tidak perlu mencari dan copy-paste isi dari file yang lama ke file yang telah ada untuk undo perubahan! Jika Anda commit sebuah bug, Anda dapat undo semua commit secara langsung dengan `revert`.

Anda juga bisa revert sebuah file alih-alih semua commit! Tapi tentu saja, dalam git, hal tersebut ada di himpunan instruksi yang berbeda...