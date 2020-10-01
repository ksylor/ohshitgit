---
tags: tip
title: Kahretsin, iki saattir diff yapmaya çalışıyorum, ama sonuç vermiyor?!
id: dude-wheres-my-diff
order: 6
---

Dosyaları değiştirdiğinizi biliyorsunuz, ama `diff` komutu size sonuç vermiyorsa, muhtemelen dosyaları `add`'lemişsiniz ve bu yüzden özel bir flag kullanmanız gerekecek.

```git
git diff --staged
```

&macr;\\\_(ツ)\_/&macr; kategorisine ekleyin. (aynen, bu bir özellik, bir bug değil, ama baş ağrıtıyor ve ilk defa karşılaşan birisi açıkça ne yapacağını bilmiyor.)
