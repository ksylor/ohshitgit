---
tags: tip
title: Waduh, Saya tidak sengaja commit sesuatu di master yang seharusnya ada di branch yang baru!
id: accidental-commit-master
order: 4
---

```git
# buat branch baru dari keadaan master yang sekarang
git branch nama-branch-baru
# hilangkan commit terakhir dari branch master
git reset HEAD~ --hard
git checkout nama-branch-baru
# sekarang commit Anda hidup di branch ini :)
```

Catatan: ini tidak akan bekerja jika Anda telah melakukan push commit Anda ke public/shared branch, dan jika Anda telah commit hal-hal lain, Anda mungkin memerlukan `git reset HEAD@{number-of-commits-back}` alih-alih `HEAD~`. Sedih yang tak berujung. Juga, banyak banyak banyak orang menyarankan cara lain untuk melakukan hal ini dengan lebih singkat yang tidak Saya ketahui sebelumnya. Terima kasih semua!
