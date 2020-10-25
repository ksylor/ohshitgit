---
tags: tip
title: Kahretsin, Kodları commit'ledim ve hemen peşinden küçük bir değişiklik yapmam gerektiğini unuttum!
id: change-last-commit
order: 2
---

```git
# değişikliği yap
git add . # veya dosyaları tek tek ekle
git commit --amend --no-edit
# ve şimdi son yaptığın commit bu değişikliği de içerecek!
# UYARI: hiç bir zaman push ettiğin commit'leri amend etme!
```
Bu genelde benim başıma kodu commit ettikten sonra testleri/linter'ları vs. çalıştırdıktan sonra gelir, mesela bir eşittir işaretinden sonra boşluk koymayı unutmuşumdur. Bu değişikliği yapmanın başka bir yolu da, gerekli düzeltmeyle yeni bir commit oluşturup, `rebase -i` komutuyla ikisini birleştirmektir, ama bu yöntem nerdeyse bir milyon kat daha hızlıdır.

*Uyarı: Kesinlikle public/shared branch'lara push ettiğiniz bir commit'i amend etmemelisiniz! Sadece lokalinizde bulunan bir commit'i amend etmelisiniz, aksi takdirde kötü zamanlar geçirmeye hazır olun.*
