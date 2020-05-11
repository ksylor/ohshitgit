---
tags: tip
title: Tai lah semua, nyerah aja deh gue.
id: fuck-this-noise
note: cara ini harus selalu terakhir di daftar, jadi gue set order ke 20 biar gue gak perlu ngelakuin re-name/re-order
order: 20
---

```git
cd ..
sudo rm -r git-repo-dir-tai
git clone https://some.github.url/git-repo-dir-tai.git
cd git-repo-dir-tai
```

Terima kasih untuk Eric V. buat ini. Kalau lo gak suka karena pake `sudo` lo marahin aja dia. 

Tapi beneran deh, kalau branch lo udah ngacoooo pake banget terus lo pengen reset aja repo lo biar sama dengan remote repo dengan cara yang "git-approved", lo cobain ini, tapi inget cara ini destruktif dan kagak bisa di-recover!

```git
# ambil state terakhir dari origin
git fetch origin
git checkout master
git reset --hard origin/master
# hapus files dan direktori yang untracked
git clean -d --force
# ulangin checkout/reset/clean untuk semua branch yang ngaco
```