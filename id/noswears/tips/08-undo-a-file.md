---
tags: tip
title: Waduh, Saya perlu undo perubahan saya di file!
id: undo-sebuah-file
order: 8
---

```git
# temukan hash untuk sebuah commit sebelum file berubah
git log
# gunakan arrow keys untuk scroll ke atas dan bawah di riwayat
# setelah Anda menemukan commit Anda, simpan hash-nya
git checkout [hash yang telah Anda simpan] -- path/to/file
# versi lama dari file tersebut akan ada di index Anda
git commit -m "Wow, Anda tidak perlu copy-paste untuk melakukan undo"
```

Saat Saya akhirnya mengetahui hal ini, ini adalah hal yang BESAR. BESAR. B-E-S-A-R. Tapi serius, di planet mana `checkout --` masuk akal sebai cara terbaik untuk undo sebuah file? :shakes-fist-at-linus-torvalds: