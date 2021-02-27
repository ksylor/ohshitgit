---
tags: tip
title: Hassktir, çok boktan bişey yaptım, git'in bunu geri alacak bir zaman makinası var de bana, n'olur!?!
id: magic-time-machine
order: 1
---

```git
git reflog
# tüm branch'lar dahil, git'te yaptığın her
# şeyin bir listesini göreceksin. Her birinin
# HEAD@{index} şeklinde bir indeksi olacak.
# sıçmaya başlamadan önce son temiz yeri bul,
git reset HEAD@{index}
# al sana sihirli zaman makinası.
```

Bunu yanlışlıkla sildiğin bir şeyi geri almaya, veya reponun çalışmamasına sebep olan bir denemeni kaldırmaya, veya yanlışlıklarla dolu bir merge işleminin ardından kodları tekrar ayağa kaldırmaya, ya da herşeyin çalıştığına emin olduğun bir noktaya tüm sistemi geri almaya kullanabilirsin. Ben `reflog`'u ÇOK SIK kullanırım. Bunu buraya eklememi bana öneren herkese saygıyla şapka çıkartıyorum!