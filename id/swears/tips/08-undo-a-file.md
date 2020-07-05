---
tags: tip
title: Tai, gue perlu undo changes gue di file!
id: undo-sebuah-file
order: 8
---

```git
# cari hash untuk commit-an sebelum file lo ganti
git log
# pake arrow keys untuk scroll ke atas dan bawah di history
# kalau lo udah ketemu commit-an nya, inget hash-nya
git checkout [hash yang lo inget tadi] -- path/ke/file
# versi lama dari file tadi bakalan ada di index lo
git commit -m "Wow, lo gak perlu copy-paste buat undo"
```

Pas gue baru nemuin cara ini, ini KEREN. KEREN. K-E-R-E-N. Tapi seriusan deh, di planet mana `checkout --` make sense buat nge-undo file? :shakes-fist-at-linus-torvalds: