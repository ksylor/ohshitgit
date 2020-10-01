---
tags: tip
title: Sktir, 5-6 commit önce kaydettiğim bir commit'i geri almam lazım!
id: undo-a-commit
order: 7
---

```git
# geri almanız gereken commit'i bulun
git log
# ok tuşlarını kullanarak geçmişte yukarı/aşağı gezinin
# commit'i bulduğunuzda, hash değerini bir yere kaydedin
git revert [kaydettiğiniz hash]
# git sizin için bunu geri alan bir commit oluşturacak
# commit açıklamasını değiştirmek için yönergeleri takip edin
# veya sadece kaydedin ve commitleyin
```

Öyle görünüyor ki, bir değişikliği geri almak için değişen yerleri bulup tek tek dosya içine kopyalayıp vs. uğraşmaya hiç gerek yokmuş! Eğer yanlışlıkla bir bug'a sebep olan bir kod commitlemişseniz, bu yaptığınızı tek bir seferde `revert`ile geri alabilirsiniz.

Ayrıca, tüm bir commit'i geri almak yerine, tek tek dosyaları da geri alabilirsiniz! E tabi, gerçek git metoduna göre, her amk işleminin farklı farklı komutu var..