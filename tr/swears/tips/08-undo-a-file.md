---
tags: tip
title: Sktir, bir dosyadaki değişiklikleri geri almam lazım!
id: undo-a-file
order: 8
---

```git
# dosya değişmeden önceki bir hash'i bulun
git log
# ok tuşlarını kullanarak geçmişte aşağı/yukarı gezinin
# commit'i bulduğunuzda, ilgili hash'i bir yere kaydedin
git checkout [kaydettiğiniz hash] -- dosyanin/yolu/ve/adi
# dosyanin eski versiyonu şimdi index'inizde görünecek
git commit -m "Vay be, geri almak için kopyala yapıştıra gerek yokmuş"
```

Bunu ilk öğrendiğimde bu benim için MUAZZAM'dı. MUAZZAM. MU-AZ-ZAM. Ama cidden, hangi sktiğimin gezegeninde `checkout --` kullanarak bir dosyanın geri alınmasının en iyi yolunun bu olduğu mantıklıdır? :shakes-fist-at-linus-torvalds: