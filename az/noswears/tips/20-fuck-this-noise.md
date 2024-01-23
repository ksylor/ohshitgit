---
tags: tip
title: Bezdim, başını buraxıram.
id: forget-this-noise
note: this should always be the last one in the list, so setting order to 20 so I don't have to re-name/re-order it
order: 20
---

```git
cd ..
sudo rm -r xarab-git
git clone https://some.github.url/xarab-git.git
cd xarab-git
```

Bu misala görə Eric V.-ə təşəkkür edirəm. Bu zarafatda `sudo` istifadəsinə dair bütün şikayətlər ona ünvanlana bilər.

Amma həqiqətən, əgər local branch'ın dağılıbsa, və bu vəziyyəti remote repo'daki son halına "git-approved" bir şəkildə geri qaytarmaq istiyirsinizsə, bunu eliyin, amma diqqətli olun, bu proses dağıdıcı və geri dönülməyən bir yoldur.


```git
# origin'in son vəziyyəti
git fetch origin
git checkout master
git reset --hard origin/master
# izlənilməyən faylları və qovluqları silin
git clean -d --force
# bütün branch'lar üçün bunu təkrar edin
```