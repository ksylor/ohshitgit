---
tags: tip
title: Lupakan semua ini, Saya menyerah.
id: lupakan-semua-ini
note: ini harus selalu jadi yang terakhir di daftar, jadi set order ke 20 sehingga Saya tidak perlu melakukan re-name/re-order
order: 20
---

```git
cd ..
sudo rm -r sebuah-git-repo-dir
git clone https://sebuah.github.url/sebuah-git-repo-dir.git
cd sebuah-git-repo-dir
```

Terima kasih untuk Eric V. untuk saran ini. Semua komplain tentang pengunaan `sudo` di lelucon ini dapat diarahkan ke dia.

Tapi serius, jika branch Anda sudah sangat kacau sehingga Anda perlu reset state repo Anda sehingga sama dengan remote repo dalam cara yang "disetujui git", coba ini, tapi hati-hati karena aksi ini destruktif dan tidak dapat direcover!

```git
# ambil state terakhir dari origin
git fetch origin
git checkout master
git reset --hard origin/master
# hapus file dan direktori yang untracked
git clean -d --force
# ulangi checkout/reset/clean untuk setiap branch yang kacau
```