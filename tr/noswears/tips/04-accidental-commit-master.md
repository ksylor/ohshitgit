---
tags: tip
title: Kahretsin, Yanlışlıkla yeni bir branch açıp oraya commitlemem gereken bir şeyi, master branch'ına commitledim!
id: accidental-commit-master
order: 4
---

```git
# master'ın şu anki haliyle bir branch alın
git branch some-new-branch-name
# master'dan son commit'i silin
git reset HEAD~ --hard
git checkout some-new-branch-name
# yeni commit artık bu branch'te yaşayacak :)
```

Not: eğer commit'i çoktan bir public/shared repo'ya push etmişseniz, ve bu çözümü uygulamadan başka şeyleri de denemişseniz, bu çalışmayacaktır, belki de `HEAD~` yerine `git reset HEAD@{birkaç-commit-öncesi}` kullanmanız gerekebilir. Sonsuz mutsuzluk. Benim bildiğimden çok çok daha kısa olan bu yöntemi bana öneren bir çok kişi oldu. Hepsine çok teşekkürler!
