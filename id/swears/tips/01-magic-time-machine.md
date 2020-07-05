---
tags: tip
title: Tai, gue udah ngelakuin sesuatu yang salah, plis kasih tau gue kalo git punya mesin waktu ajaib!?!
id: mesin-waktu-ajaib
order: 1
---

```git
git reflog
# lo bakalan liat daftar yang telah lo
# lakuin di git, di semua branch!
# masing-masing punya index HEAD@{index}
# cari satu dimana itu sebelum lo ngerusak segalanya
git reset HEAD@{index}
# mesin waktu ajaib
```

Lo bisa pake ini untuk barang-barang yang lo hapus secara gak sengaja, atau hilangin barang-barang yang lo cobain tapi malah ngerusak repo, atau balikin bad merge, atau cuman buat kembali ke waktu semuanya lancar jaya. Gue pake `reflog` SERING BANGET. Makasih banyak buat lo lo lo lo lo semua yang udah ngasih tau gue!