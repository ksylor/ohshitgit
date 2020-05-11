---
tags: tip
title: Waduh, Saya telah melakukan hal yang teramat salah, tolong beri tahu Saya kalau git memiliki mesin waktu ajaib!?!
id: magic-time-machine
order: 1
---

```git
git reflog
# Anda akan melihat daftar dari semua hal yang telah Anda 
# lakukan di git, di semua branch yang ada!
# semuanya memiliki sebuah index HEAD@{index}
# temukan satu di mana Anda belum merusak segalanya
git reset HEAD@{index}
# mesin waktu ajaib
```

Anda bisa melakukan hal ini untuk mendapatkan kembali barang-barany yang tidak sengaja Anda hapus, atau hanya untuk menghilangkan barang-barang yang Anda coba tapi malah merusak repo, atau me-recover setelah merge yang buruk, atau hanya untuk kembali ke masa di mana semua berjalan dengan baik. Saya menggunakan `reflog` sering sekali. Terima kasih untuk banyak banyak banyak banyak banyak orang yang telah menyarankan untuk menggunakannya!
