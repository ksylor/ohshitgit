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

Lo bisa pake ini buat balikin yang udah kehapus, atau ngilangin yang malah ngerusak repo, atau balikin repo abis bad merge, atau cuman buat balik ke waktu semuanya lancar jaya. Gue SERING BANGET make `reflog`. Makasih banyak buat lo lo lo lo lo semua yang udah ngasih tau gue!