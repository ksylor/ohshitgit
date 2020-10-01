---
tags: tip
title: Yeter bu kadar çektiğim, bırakıyorum.
id: fuck-this-noise
note: this should always be the last one in the list, so setting order to 20 so I don't have to re-name/re-order it
order: 20
---

```git
cd ..
sudo rm -r bozuk-git-repo-klasoru
git clone https://some.github.url/bozuk-git-repo-klasoru.git
cd bozuk-git-repo-klasoru
```

Eric V.'ye bu örnek için teşekkürer. Bu şaka içerisindeki `sudo` kullanımı ile ilgili tüm şikayetleri ona yöneltebilirsiniz.

Ama gerçekten, eğer local branch'iniz gerçekten dağılmışsa, ve durumu remote repo'daki son haline "git-onaylı" bir şekilde geri döndürmek istiyorsanız, bunu kullanın, ama dikkat edin, bu işlem yıkıcı ve geri dönüşü olmayan işlemlerdendir!

```git
# origin'in son halini alın
git fetch origin
git checkout master
git reset --hard origin/master
# değişiklik yaptığınız commit bekleyen tüm dosya/klasörleri geri alın
git clean -d --force
# her dağılmış branch için bunu tekrarlayın
```