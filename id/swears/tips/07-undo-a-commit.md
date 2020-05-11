---
tags: tip
title: Tai, gw perlu undo commit-an dari 5 commit-an sebelumnya!
id: undo-a-commit
order: 7
---

```git
# cari commit-an lo yang perlu lo undo
git log
# pake arrow keys untuk scroll ke atas dan bawah di history
# kalau udah ketemu, inget hash-nya
git revert [hash yang tadi lo inget]
# git bakalan bikin commit-an baru yang bakalan nge-undo commit-an tadi
# ikutin instruksinya untuk edit commit message 
# atau save aja dan commit
```

Ternyate lo gak perlu cari atu dan copy-paste isi file lama ke file yang baru untuk undo changes lo! Kalau lo commit bug, lo bisa undo semua commit-an lo dengan `revert`

Lo juga bisa revert satu file doang daripada semua commit-an lo! Tapi karena ini git, itu command-nya lain lah, tai...