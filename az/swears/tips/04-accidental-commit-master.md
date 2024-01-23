---
tags: tip
title: Ay sikim, Səhvən yeni branch açıb oraya commit'ləməli olduğum şeyi, master branch'a commitlədim!
id: accidental-commit-master
order: 4
---

```git
# master'in indiki halıyla yeni branch açın
git branch some-new-branch-name
# master'dən son commit'i silin
git reset HEAD~ --hard
git checkout some-new-branch-name
# yeni commit artıq bu branch'da yaşıyacaq :)
```

Qeyd: əgər commit'i çoxdan public/shared repo'ya push etmisinizsə, və əvvəlcə başqa şeyləri yoxlamısınızsa, bu işə yaramıyacaq, onun yerinə də `HEAD~` əvəzinə `git reset HEAD@{1-2-commit-əvvəl}` yoxlayın. Sonsuz qəm-kədər. Mənim bildiyimdən çox çox daha qısa yolları mənə məsləhət görən bir çox adam oldu. Hamısına çox təşəkkürlər!