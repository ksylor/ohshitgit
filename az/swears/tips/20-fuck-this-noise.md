---
tags: tip
title: İçini sikim bezdim, başını buraxıram.
id: fuck-this-noise
note: this should always be the last one in the list, so setting order to 20 so I don't have to re-name/re-order it
order: 20
---

```git
cd ..
sudo rm -r osduraq-git
git clone https://some.github.url/osduraq-git.git
cd osduraq-git
```

Bu misala görə Eric V.-ə təşəkkür edirəm. Bu zarafatda `sudo` istifadəsinə dair bütün şikayətlər ona ünvanlana bilər.

Amma həqiqətən, əgər local branch'ın götü dağılıbsa, və bu vəziyyəti remote repo'daki son halına "git-approved" bir şəkildə geri qaytarmaq istiyirsinizsə, bunu eliyin, amma diqqətli olun, bu proses dağıdıcı və geri dönülməyən bir yoldur.


```git
# origin'in son vəziyyəti
git fetch origin
git checkout master
git reset --hard origin/master
# izlənilməyən faylları və qovluqları silin
git clean -d --force
# bütün sikik branch'lar üçün bunu təkrar edin
```